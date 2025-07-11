// script/Generador_PROVAS.js

// 1. Inicializa o objeto global 'questoes'.
// É crucial que isso aconteça antes de qualquer arquivo de prova tentar adicionar a ele.
if (typeof questoes === 'undefined') {
    var questoes = {};
}

// 2. Conteúdo do examManifest.js (agora parte deste arquivo)
const examManifest = {
    'Concursos INSS': [
        { title: 'Simulado INSS - Prova 1', key: 'Simulado INSS - Prova 1' },
        { title: 'Simulado INSS - Prova 2', key: 'TESTE-2' } // Ajuste esta chave conforme seu prova_INSS-2.js
    ],
    'Concursos CORREIOS': [
        { title: 'Simulado Correios - Prova 1', key: 'prova_CORREIO-1' } // Ajuste esta chave conforme seu prova_CORREIO-1.js
    ]
    // Certifique-se de que as 'key's aqui correspondem EXATAMENTE às chaves em seus arquivos de prova (ex: prova_INSS-1.js, prova_INSS-2.js, prova_CORREIO-1.js)
};


// 4. Conteúdo do script/quizGenerator.js
// Variáveis de controle do quiz
let currentProofIndex = 0;
let currentQuestionIndex = 0;
let currentScore = 0;
let totalQuestions = 0;

// Elementos do DOM
const quizContainer = document.getElementById('quiz-container');
const scoreDisplay = document.getElementById('scoreDisplay');
const modoLeituraSelect = document.getElementById('modoLeitura');
const menuProvasDiv = document.getElementById('menu_provas');
const provaListContentDiv = document.getElementById('TESTE--list-content');

/**
 * Atualiza o display do score no HTML.
 */
function updateScoreDisplay() {
    scoreDisplay.textContent = `${currentScore}/${totalQuestions}`;
}

/**
 * Abre uma nova aba do navegador com uma pesquisa no Google (direcionando para o Gemini, se possível)
 * contendo o texto da resolução e uma solicitação para explicar melhor.
 * @param {string} resolucaoTexto O texto da resolução a ser usada na pesquisa.
 */
function abrirGeminiComResolucao(resolucaoTexto) {
    if (typeof pararLeitura === 'function') {
        pararLeitura();
    }
    const encodedResolution = encodeURIComponent(resolucaoTexto + "\n\nExplique melhor.");
    const geminiUrl = `https://www.google.com/search?q=${encodedResolution}&udm=0`;
    window.open(geminiUrl, '_blank');
}

/**
 * Gera e exibe as questões de uma prova específica no container do quiz.
 * @param {string} provaKey A chave da prova a ser carregada.
 */
function gerarQuestoes(provaKey) {
    quizContainer.innerHTML = '';

    if (typeof questoes === 'undefined' || !questoes[provaKey]) {
        quizContainer.innerHTML = '<p>Erro: Dados da prova não carregados ou prova não encontrada. Verifique seus arquivos de prova (e o manifest).</p>';
        console.error('Objeto "questoes" não encontrado ou provaKey inválida:', provaKey);
        return;
    }

    const provaData = questoes[provaKey].data;
    totalQuestions = provaData.length;
    currentScore = 0;
    updateScoreDisplay();

    const provaDiv = document.createElement('div');
    provaDiv.className = 'TESTE-';
    // Substitui espaços por hifens no ID para que seja um ID HTML válido
    provaDiv.id = provaKey.replace(/\s/g, '-'); 

    const tituloProva = document.createElement('h2');
    tituloProva.textContent = questoes[provaKey].title || provaKey.replace(/_/g, ' ').toUpperCase();
    provaDiv.appendChild(tituloProva);

    provaData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        // Para consistência, o data-question-id também pode usar o formato sem espaços
        questionDiv.setAttribute('data-question-id', `${provaKey.replace(/\s/g, '-')}-q${index}`);

        const questionText = document.createElement('p');
        questionText.textContent = `Questão ${index + 1}: ${item.questao}`;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        item.opcoes.forEach((opcao, opIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            // O nome do rádio button também precisa ser consistente com o ID da prova
            input.name = `${provaKey.replace(/\s/g, '-')}-questao-${index}`;
            input.value = opIndex;
            input.setAttribute('data-correct', opcao.correta);

            label.appendChild(input);
            label.appendChild(document.createTextNode(String.fromCharCode(97 + opIndex) + ') ' + opcao.texto));
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);

        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';

        const resolutionContent = document.createElement('p');
        resolutionContent.innerHTML = `<strong>Resolução:</strong> ${item.resolucao}`;
        explanationDiv.appendChild(resolutionContent);

        const saberMaisBtn = document.createElement('button');
        saberMaisBtn.textContent = 'Saber Mais';
        saberMaisBtn.className = 'saber-mais-btn';
        saberMaisBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            const fullResolutionText = resolutionContent.textContent.replace('Resolução: ', '').trim();
            abrirGeminiComResolucao(fullResolutionText);
        });
        explanationDiv.appendChild(saberMaisBtn);

        questionDiv.appendChild(explanationDiv);
        provaDiv.appendChild(questionDiv);
    });

    quizContainer.appendChild(provaDiv);
    currentQuestionIndex = 0;
    quizContainer.style.display = 'block';
    menuProvasDiv.style.display = 'none';
}

/**
 * Verifica se alguma questão na prova atual foi respondida.
 * @returns {boolean} True se pelo menos uma questão foi respondida, False caso contrário.
 */
function hasAnyQuestionAnswered() {
    const allExamKeys = Object.keys(questoes);
    const currentProvaKey = allExamKeys[currentProofIndex];

    if (!currentProvaKey || !questoes[currentProvaKey]) {
        return false; // Nenhuma prova carregada
    }

    const currentProvaKeyFormatted = currentProvaKey.replace(/\s/g, '-');
    const questionsElements = document.querySelectorAll(`#${currentProvaKeyFormatted} .question`);

    for (const qElement of questionsElements) {
        // Verifica se algum rádio button dentro desta questão está marcado
        const selectedOption = qElement.querySelector(`input[name^="${currentProvaKeyFormatted}-questao-"]:checked`);
        if (selectedOption) {
            return true; // Encontrou pelo menos uma questão marcada
        }
    }
    return false; // Nenhuma questão marcada
}


/**
 * Gera e exibe o menu categorizado de provas.
 */
function generateExamMenu() {
    provaListContentDiv.innerHTML = '';

    if (typeof examManifest === 'undefined' || Object.keys(examManifest).length === 0) {
        provaListContentDiv.innerHTML = '<p>Nenhuma lista de provas disponível. Verifique o arquivo `examManifest.js`.</p>';
        return;
    }

    for (const category in examManifest) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'exam-category';

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        const ul = document.createElement('ul');
        examManifest[category].forEach(exam => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = exam.title;
            button.addEventListener('click', () => {
                const allExamKeys = Object.keys(questoes);
                const prevProvaKey = allExamKeys[currentProofIndex]; // Chave da prova atualmente carregada

                // Verifica se há alguma prova carregada E se alguma questão foi respondida
                if (quizContainer.innerHTML !== '' && hasAnyQuestionAnswered()) {
                    // Se houver progresso, pergunta se quer zerar
                    if (confirm('Tem certeza que deseja zerar o progresso atual e recomeçar?')) {
                        currentProofIndex = allExamKeys.indexOf(exam.key);
                        gerarQuestoes(exam.key);
                        menuProvasDiv.style.display = 'none';
                        // Chamamos as ações de 'zerar' diretamente, sem a confirmação dupla do btnZerar
                        const allRadios = document.querySelectorAll('input[type="radio"]');
                        allRadios.forEach(radio => {
                            radio.checked = false;
                            radio.closest('label').classList.remove('correct-answer', 'incorrect-answer');
                        });
                        const allExplanations = document.querySelectorAll('.explanation');
                        allExplanations.forEach(exp => {
                            exp.classList.remove('show');
                        });
                        currentScore = 0;
                        updateScoreDisplay();
                    } else {
                        // Se o usuário cancelar, não faz nada e mantém a prova atual
                        return; 
                    }
                } else {
                    // Se não houver prova carregada ou nenhuma questão marcada, apenas carrega a nova prova
                    currentProofIndex = allExamKeys.indexOf(exam.key);
                    gerarQuestoes(exam.key);
                    menuProvasDiv.style.display = 'none';
                    // Garante que o score da nova prova comece zerado
                    currentScore = 0;
                    updateScoreDisplay();
                }

                if (typeof pararLeitura === 'function') {
                    pararLeitura();
                    isReadingStudyMode = false;
                }
            });
            li.appendChild(button);
            ul.appendChild(li);
        });
        categoryDiv.appendChild(ul);
        provaListContentDiv.appendChild(categoryDiv);
    }
}


// --- Funções dos Botões do Menu ---

/**
 * Adiciona um listener ao botão "Zerar" para resetar o progresso atual.
 */
document.getElementById('btnZerar').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja zerar o progresso atual e recomeçar?')) {
        if (typeof pararLeitura === 'function') {
            pararLeitura();
            isReadingStudyMode = false;
        }

        const allRadios = document.querySelectorAll('input[type="radio"]');
        allRadios.forEach(radio => {
            radio.checked = false;
            radio.closest('label').classList.remove('correct-answer', 'incorrect-answer');
        });

        const allExplanations = document.querySelectorAll('.explanation');
        allExplanations.forEach(exp => {
            exp.classList.remove('show');
        });

        currentScore = 0;
        updateScoreDisplay();

       /*  alert('Progresso zerado!'); */
    }
});

/**
 * Adiciona um listener ao botão "Validar" para corrigir as respostas da prova atual.
 */
document.getElementById('btnValidar').addEventListener('click', () => {
    if (typeof pararLeitura === 'function') {
        pararLeitura();
        isReadingStudyMode = false;
    }

    const allExamKeys = Object.keys(questoes);
    const currentProvaKey = allExamKeys[currentProofIndex];
    if (!currentProvaKey || !questoes[currentProvaKey]) return;

    const currentProvaData = questoes[currentProvaKey].data;
    if (!currentProvaData) return;

    let allAnswered = true;
    let correctAnswersCount = 0;

    // Usa o ID formatado para selecionar as questões corretamente
    const currentProvaKeyFormatted = currentProvaKey.replace(/\s/g, '-');
    const questionsElements = document.querySelectorAll(`#${currentProvaKeyFormatted} .question`);

    questionsElements.forEach((qElement, qIndex) => {
        // Usa o nome formatado para encontrar o rádio button
        const selectedOption = qElement.querySelector(`input[name="${currentProvaKeyFormatted}-questao-${qIndex}"]:checked`);
        const explanationDiv = qElement.querySelector('.explanation');
        const labels = qElement.querySelectorAll('.options label');

        labels.forEach(label => label.classList.remove('correct-answer', 'incorrect-answer'));

        if (!selectedOption) {
            allAnswered = false;
            explanationDiv.classList.remove('show');
        } else {
            const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
            const selectedLabel = selectedOption.closest('label');

            if (isCorrect) {
                selectedLabel.classList.add('correct-answer');
                correctAnswersCount++;
            } else {
                selectedLabel.classList.add('incorrect-answer');
                // Usa o nome formatado para encontrar o rádio button correto
                const correctLabel = qElement.querySelector(`input[name="${currentProvaKeyFormatted}-questao-${qIndex}"][data-correct="true"]`).closest('label');
                correctLabel.classList.add('correct-answer');
            }
            explanationDiv.classList.add('show');
        }
    });

    if (!allAnswered) {
        alert('Por favor, responda a todas as questões antes de validar.');
    } else {
        currentScore = correctAnswersCount;
        alert(`Correção concluída! Você acertou ${currentScore} de ${totalQuestions} questões.`);
    }
    updateScoreDisplay();
});

/**
 * Adiciona um listener ao botão "Próxima Prova" para carregar a próxima prova disponível.
 */
document.getElementById('btnProxima').addEventListener('click', () => {
    if (typeof pararLeitura === 'function') {
        pararLeitura();
        isReadingStudyMode = false;
    }

    if (typeof questoes === 'undefined') {
        alert('Erro: Dados das provas não carregados.');
        return;
    }

    const allExamKeys = Object.keys(questoes);
    const totalProvas = allExamKeys.length;

    if (currentProofIndex < totalProvas - 1) {
        currentProofIndex++;
        const nextProvaKey = allExamKeys[currentProofIndex];
        gerarQuestoes(nextProvaKey);
        // Mantém a chamada ao btnZerar aqui, pois é uma ação de navegação sequencial
        document.getElementById('btnZerar').click(); 
    } else {
        alert('Você chegou ao final das provas disponíveis.');
    }
});

/**
 * Adiciona um listener ao botão "Prova Anterior" para carregar a prova anterior.
 */
document.getElementById('btnPrev').addEventListener('click', () => {
    if (typeof pararLeitura === 'function') {
        pararLeitura();
        isReadingStudyMode = false;
    }

    if (typeof questoes === 'undefined') {
        alert('Erro: Dados das provas não carregados.');
        return;
    }

    const allExamKeys = Object.keys(questoes);

    if (currentProofIndex > 0) {
        currentProofIndex--;
        const prevProvaKey = allExamKeys[currentProofIndex];
        gerarQuestoes(prevProvaKey);
        // Mantém a chamada ao btnZerar aqui, pois é uma ação de navegação sequencial
        document.getElementById('btnZerar').click();
    } else {
        alert('Você já está na primeira prova disponível.');
    }
});

/**
 * Adiciona um listener ao botão "LISTA DE PROVAS" para exibir ou ocultar a lista de provas disponíveis.
 */
document.getElementById('btnLista').addEventListener('click', () => {
    if (typeof pararLeitura === 'function') {
        pararLeitura();
        isReadingStudyMode = false;
    }

    // Verifica se há alguma prova carregada e se alguma questão foi respondida antes de mostrar o menu
    if (quizContainer.innerHTML !== '' && hasAnyQuestionAnswered()) {
        if (confirm('Você tem progresso na prova atual. Deseja zerá-lo e voltar para a lista de provas?')) {
            document.getElementById('btnZerar').click(); // Zera e depois mostra o menu
            generateExamMenu();
            menuProvasDiv.style.display = 'block';
            quizContainer.style.display = 'none';
        } else {
            // Se o usuário cancelar, não faz nada e mantém a prova atual visível
            return;
        }
    } else {
        // Se não houver prova carregada ou nenhuma questão marcada, apenas mostra o menu
        generateExamMenu();
        menuProvasDiv.style.display = 'block';
        quizContainer.style.display = 'none';
    }
});

// Inicialização: Exibe o menu de provas ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    quizContainer.style.display = 'none';
    menuProvasDiv.style.display = 'block';
    generateExamMenu();
});

/* fim do script */