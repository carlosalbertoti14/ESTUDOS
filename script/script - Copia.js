// script.js

// 'questoes' será carregado do arquivo script/provas.js

let currentProofIndex = 0; // Controla qual prova está sendo exibida (0 para prova1, 1 para prova2, etc.)
let currentQuestionIndex = 0; // Controla a questão atual dentro da prova
let currentScore = 0; // Variável para o score
let totalQuestions = 0; // Variável para o total de questões na prova atual

// Variável para controle da leitura em voz alta
let speechSynthesizer = null;
let currentUtterance = null; // Para controlar a fala atual

// Variável para controlar a leitura sequencial no Modo Estudo
let studyModeReadingIndex = 0;
let isReadingStudyMode = false; // Flag para saber se estamos no modo estudo de leitura

// Elementos do DOM
const quizContainer = document.getElementById('quiz-container');
const scoreDisplay = document.getElementById('scoreDisplay');
const modoLeituraSelect = document.getElementById('modoLeitura');

// Função para atualizar o display do score
function updateScoreDisplay() {
    scoreDisplay.textContent = `${currentScore}/${totalQuestions}`;
}

// Função para gerar as questões na página HTML
function gerarQuestoes(provaKey) {
    quizContainer.innerHTML = ''; // Limpa o conteúdo anterior

    // Verifica se 'questoes' está definido e se a provaKey existe
    if (typeof questoes === 'undefined' || !questoes[provaKey]) {
        quizContainer.innerHTML = '<p>Erro: Dados das provas não carregados ou prova não encontrada.</p>';
        console.error('Objeto "questoes" não encontrado ou provaKey inválida:', provaKey);
        return;
    }

    const provaData = questoes[provaKey];
    totalQuestions = provaData.length; // Atualiza o total de questões
    currentScore = 0; // Reseta o score para a nova prova
    updateScoreDisplay(); // Atualiza o display do score

    const provaDiv = document.createElement('div');
    provaDiv.className = 'prova';
    provaDiv.id = provaKey;

    const tituloProva = document.createElement('h2');
    tituloProva.textContent = provaKey.replace('prova', 'Prova '); // Ex: "Prova 1"
    provaDiv.appendChild(tituloProva);

    provaData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.setAttribute('data-question-id', `${provaKey}-q${index}`); // ID único para a questão

        const questionText = document.createElement('p');
        questionText.textContent = `Questão ${index + 1}: ${item.questao}`;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        item.opcoes.forEach((opcao, opIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `${provaKey}-questao-${index}`; // Garante que apenas uma opção possa ser selecionada por questão
            input.value = opIndex;
            input.setAttribute('data-correct', opcao.correta);

            label.appendChild(input);
            label.appendChild(document.createTextNode(String.fromCharCode(97 + opIndex) + ') ' + opcao.texto)); // a), b), c), d)
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);

        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';
        explanationDiv.innerHTML = `<strong>Resolução:</strong> ${item.resolucao}`;
        questionDiv.appendChild(explanationDiv);

        provaDiv.appendChild(questionDiv);
    });

    quizContainer.appendChild(provaDiv);
    currentQuestionIndex = 0; // Reinicia o índice da questão para a nova prova
}

// Função para inicializar o SpeechSynthesis
function initSpeechSynthesis() {
    if ('speechSynthesis' in window) {
        speechSynthesizer = window.speechSynthesis;
    } else {
        alert('Seu navegador não suporta a API SpeechSynthesis. A função de leitura não estará disponível.');
        // Desativar opções de leitura se a API não estiver disponível
        modoLeituraSelect.value = 'mudo';
        modoLeituraSelect.disabled = true;
        document.getElementById('btnLer').disabled = true;
        document.getElementById('btnStop').disabled = true;
        document.getElementById('btnEstudo').disabled = true;
    }
}

// Função para ler o texto (usada para ler texto completo ou elementos individuais)
function lerTexto(text) {
    if (speechSynthesizer && modoLeituraSelect.value !== 'mudo') {
        pararLeitura(); // Para qualquer leitura anterior

        console.log('Tentando ler texto:', text);
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.lang = 'pt-BR'; // Define o idioma para português do Brasil

        currentUtterance.onend = function(event) {
            console.log('Leitura concluída com sucesso!');
        };
        currentUtterance.onerror = function(event) {
            console.error('Erro na leitura:', event.error);
        };

        speechSynthesizer.speak(currentUtterance);
    } else {
        console.log('Leitura desativada: speechSynthesizer não disponível ou modo está em mudo.', {
            speechSynthesizer: speechSynthesizer,
            modoLeituraValue: modoLeituraSelect.value
        });
    }
}

// Função para parar a leitura
function pararLeitura() {
    if (speechSynthesizer && speechSynthesizer.speaking) {
        speechSynthesizer.cancel();
    }
    currentUtterance = null;
    // Sempre remove destaques ao parar a leitura
    document.querySelectorAll('.highlighted-text').forEach(el => {
        el.classList.remove('highlighted-text');
    });
}

// Função para iniciar a leitura da próxima parte da questão no Modo Estudo
function readStudyPart(provaData, questionIndex, partIndex) {
    pararLeitura(); // Garante que a leitura atual é interrompida

    const item = provaData[questionIndex];
    let textToRead = '';
    let elementToHighlight = null; // O elemento HTML a ser destacado

    // Limpa destaques anteriores (importante para transições entre partes da mesma questão)
    document.querySelectorAll('.highlighted-text').forEach(el => {
        el.classList.remove('highlighted-text');
    });

    const currentQuestionDiv = document.querySelector(`#prova${currentProofIndex + 1} [data-question-id="prova${currentProofIndex + 1}-q${questionIndex}"]`);
    if (!currentQuestionDiv) {
        console.error('Div da questão não encontrada para destaque.');
        isReadingStudyMode = false;
        return;
    }

    switch (partIndex) {
        case 0: // Enunciado da questão
            textToRead = `Questão ${questionIndex + 1}: ${item.questao}`;
            elementToHighlight = currentQuestionDiv.querySelector('p'); // O parágrafo do enunciado
            break;
        case 1: // Resposta correta
            const correctOption = item.opcoes.find(op => op.correta);
            textToRead = correctOption ? `Resposta correta: ${correctOption.texto}` : 'Resposta correta não encontrada.';
            // Encontra o label da resposta correta para destacar
            elementToHighlight = currentQuestionDiv.querySelector(`input[name="prova${currentProofIndex + 1}-questao-${questionIndex}"][data-correct="true"]`).closest('label');
            break;
        case 2: // Resolução
            textToRead = `Resolução: ${item.resolucao}`;
            elementToHighlight = currentQuestionDiv.querySelector('.explanation'); // A div da resolução
            break;
        default:
            // Todas as partes desta questão foram lidas, passar para a próxima questão
            studyModeReadingIndex++;
            if (isReadingStudyMode && studyModeReadingIndex < provaData.length) {
                readStudyPart(provaData, studyModeReadingIndex, 0); // Inicia a próxima questão do zero
            } else {
                // Todas as questões foram lidas
                isReadingStudyMode = false;
                console.log("Modo Estudo: Leitura da prova concluída.");
                alert('Modo Estudo concluído!');
            }
            return; // Sai da função, não há mais texto para ler nesta parte
    }

    if (elementToHighlight) {
        elementToHighlight.classList.add('highlighted-text');
    }

    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.lang = 'pt-BR';

    currentUtterance.onend = function() {
        console.log(`Modo Estudo: Leitura da parte ${partIndex} da questão ${questionIndex + 1} concluída.`);
        // Remove destaque da parte atual após a leitura
        if (elementToHighlight) {
            elementToHighlight.classList.remove('highlighted-text');
        }
        // Chama a próxima parte da mesma questão ou a primeira parte da próxima questão
        if (isReadingStudyMode) { // Só continua se o modo estudo ainda estiver ativo
            readStudyPart(provaData, questionIndex, partIndex + 1);
        }
    };
    currentUtterance.onerror = function(event) {
        console.error(`Modo Estudo: Erro na leitura da parte ${partIndex} da questão ${questionIndex + 1}:`, event.error);
        // Em caso de erro, remove o destaque e tenta ir para a próxima parte
        if (elementToHighlight) {
            elementToHighlight.classList.remove('highlighted-text');
        }
        if (isReadingStudyMode) { // Só continua se o modo estudo ainda estiver ativo
            readStudyPart(provaData, questionIndex, partIndex + 1);
        }
    };

    speechSynthesizer.speak(currentUtterance);
}


// --- Funções dos Botões do Menu ---

// Botão ZERAR
document.getElementById('btnZerar').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja zerar o progresso atual e recomeçar?')) {
        pararLeitura(); // Para a leitura e remove destaques
        isReadingStudyMode = false; // Desativa o modo estudo de leitura

        const allRadios = document.querySelectorAll('input[type="radio"]');
        allRadios.forEach(radio => {
            radio.checked = false;
            radio.closest('label').classList.remove('correct-answer', 'incorrect-answer');
        });

        const allExplanations = document.querySelectorAll('.explanation');
        allExplanations.forEach(exp => {
            exp.classList.remove('show');
        });

        currentScore = 0; // Reseta o score
        updateScoreDisplay(); // Atualiza o display

        alert('Progresso zerado!');
    }
});

// Botão VALIDAR
document.getElementById('btnValidar').addEventListener('click', () => {
    pararLeitura(); // Para a leitura e remove destaques
    isReadingStudyMode = false; // Desativa o modo estudo de leitura

    const currentProvaKey = `prova${currentProofIndex + 1}`;
    const currentProvaData = questoes[currentProvaKey];
    if (!currentProvaData) return;

    let allAnswered = true;
    let correctAnswersCount = 0; // Contador de acertos

    const questionsElements = document.querySelectorAll(`#${currentProvaKey} .question`);

    questionsElements.forEach((qElement, qIndex) => {
        const selectedOption = qElement.querySelector(`input[name="${currentProvaKey}-questao-${qIndex}"]:checked`);
        const explanationDiv = qElement.querySelector('.explanation');
        const labels = qElement.querySelectorAll('.options label');

        // Remove classes de feedback anteriores
        labels.forEach(label => label.classList.remove('correct-answer', 'incorrect-answer'));

        if (!selectedOption) {
            allAnswered = false;
            // Se não respondida, garante que a explicação esteja oculta (ou não destacada)
            explanationDiv.classList.remove('show');
        } else {
            const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
            const selectedLabel = selectedOption.closest('label');

            if (isCorrect) {
                selectedLabel.classList.add('correct-answer');
                correctAnswersCount++; // Incrementa o score
            } else {
                selectedLabel.classList.add('incorrect-answer');
                // Encontrar e marcar a correta em azul, mesmo que o usuário tenha errado
                const correctLabel = qElement.querySelector(`input[name="${currentProvaKey}-questao-${qIndex}"][data-correct="true"]`).closest('label');
                correctLabel.classList.add('correct-answer');
            }
            explanationDiv.classList.add('show'); // Mostra a resolução
        }
    });

    if (!allAnswered) {
        alert('Por favor, responda a todas as questões antes de validar.');
        currentScore = 0; // Reseta o score se nem todas foram respondidas
    } else {
        currentScore = correctAnswersCount; // Atualiza o score com as acertos
        alert(`Correção concluída! Você acertou ${currentScore} de ${totalQuestions} questões.`);
    }
    updateScoreDisplay(); // Atualiza o display do score após a validação
});

// Botão LER PROVA COMPLETA (Lê todo o conteúdo visível de uma vez!)
document.getElementById('btnLer').addEventListener('click', () => {
    pararLeitura(); // Para a leitura e remove destaques
    isReadingStudyMode = false; // Desativa o modo estudo de leitura se ativo

    const currentProvaKey = `prova${currentProofIndex + 1}`;
    const currentProvaElement = document.getElementById(currentProvaKey);

    if (currentProvaElement && modoLeituraSelect.value !== 'mudo') {
        let fullTextToRead = '';
        fullTextToRead += currentProvaElement.querySelector('h2').textContent + '. '; // Título da prova

        currentProvaElement.querySelectorAll('.question').forEach((questionDiv) => {
            const questionText = questionDiv.querySelector('p').textContent;
            fullTextToRead += questionText + '. ';

            if (modoLeituraSelect.value === 'completa') { // Inclui opções se o modo for 'completa'
                questionDiv.querySelectorAll('.options label').forEach(label => {
                    const optionText = label.textContent;
                    fullTextToRead += optionText + '. ';
                });
            }
        });
        lerTexto(fullTextToRead); // Usa a função lerTexto original para ler a string completa
    } else if (modoLeituraSelect.value === 'mudo') {
        alert('O modo de leitura está em "Mudo". Por favor, selecione outra opção para ativar a leitura.');
    } else {
        alert('Nenhuma prova carregada para leitura.');
    }
});

// Botão STOP LEITURA
document.getElementById('btnStop').addEventListener('click', () => {
    pararLeitura(); // Para a leitura e remove destaques
    isReadingStudyMode = false; // Desativa o modo estudo de leitura
});

// Botão MODO ESTUDO (Inicia a leitura sequencial com destaque)
document.getElementById('btnEstudo').addEventListener('click', () => {
    pararLeitura(); // Para qualquer leitura anterior e remove destaques
    isReadingStudyMode = true; // Ativa o flag do modo estudo
    studyModeReadingIndex = 0; // Reinicia o contador de questões
    
    const currentProvaKey = `prova${currentProofIndex + 1}`;
    const currentProvaData = questoes[currentProvaKey];
    if (!currentProvaData) {
        alert('Nenhuma prova carregada para o modo estudo.');
        return;
    }

    // 1. Exibir todas as respostas corretas e resoluções
    const questionsElements = document.querySelectorAll(`#${currentProvaKey} .question`);
    questionsElements.forEach((qElement, qIndex) => {
        const explanationDiv = qElement.querySelector('.explanation');
        const labels = qElement.querySelectorAll('.options label');

        labels.forEach(label => label.classList.remove('correct-answer', 'incorrect-answer'));

        const correctOption = currentProvaData[qIndex].opcoes.find(op => op.correta);
        if (correctOption) {
            const correctLabelElement = qElement.querySelector(`input[name="${currentProvaKey}-questao-${qIndex}"][data-correct="true"]`).closest('label');
            correctLabelElement.classList.add('correct-answer');
        }
        explanationDiv.classList.add('show');
    });

    // 2. Iniciar leitura automática (pergunta, resposta correta, resolução)
    if (modoLeituraSelect.value !== 'mudo') {
        readStudyPart(currentProvaData, studyModeReadingIndex, 0); // Inicia a leitura da primeira parte da primeira questão
    } else {
        alert('O modo de leitura está em "Mudo". As respostas e resoluções foram exibidas, mas a leitura automática está desativada.');
    }
});


// Botão PRÓXIMA PROVA
document.getElementById('btnProxima').addEventListener('click', () => {
    pararLeitura(); // Para a leitura e remove destaques
    isReadingStudyMode = false; // Desativa o modo estudo de leitura

    if (typeof questoes === 'undefined') {
        alert('Erro: Dados das provas não carregados.');
        return;
    }

    const totalProvas = Object.keys(questoes).length;
    if (currentProofIndex < totalProvas - 1) {
        currentProofIndex++;
        const nextProvaKey = `prova${currentProofIndex + 1}`;
        gerarQuestoes(nextProvaKey);
        // Zera o estado da nova prova ao carregar
        document.getElementById('btnZerar').click(); // Reusa a função zerar para limpar o estado
    } else {
        alert('Você chegou ao final das provas disponíveis.');
    }
});

// Botão LISTA (para exibir as provas disponíveis e permitir seleção)
document.getElementById('btnLista').addEventListener('click', () => {
    pararLeitura(); // Para a leitura e remove destaques
    isReadingStudyMode = false; // Desativa o modo estudo de leitura

    const listaDiv = document.getElementById('listaExercicios');
    listaDiv.innerHTML = '<h3>Escolha uma Prova:</h3><ul></ul>';
    const ul = listaDiv.querySelector('ul');

    if (typeof questoes === 'undefined') {
        ul.innerHTML = '<li>Erro: Dados das provas não carregados.</li>';
        listaDiv.style.display = 'block';
        return;
    }

    Object.keys(questoes).forEach((key, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = key.replace('prova', 'Prova ');
        button.addEventListener('click', () => {
            currentProofIndex = index;
            gerarQuestoes(key);
            listaDiv.style.display = 'none'; // Esconde a lista após a seleção
            document.getElementById('btnZerar').click(); // Zera o estado da prova carregada
        });
        li.appendChild(button);
        ul.appendChild(li);
    });

    // Alterna a visibilidade da lista
    listaDiv.style.display = listaDiv.style.display === 'block' ? 'none' : 'block';
});

// Event listener para o MODO LEITURA (seleção de caixa de texto)
modoLeituraSelect.addEventListener('change', () => {
    pararLeitura(); // Para a leitura e remove destaques
    isReadingStudyMode = false; // Desativa o modo estudo de leitura

    const selectedMode = modoLeituraSelect.value;
    if (selectedMode === 'mudo') {
        alert('Modo de leitura desativado.');
    } else {
        alert(`Modo de leitura definido para: "${modoLeituraSelect.options[modoLeituraSelect.selectedIndex].text}".`);
    }
});


// Event listener para ler questões/opções ao clicar nelas (depende do MODO LEITURA)
document.addEventListener('click', (event) => {
    // Se o modo estudo de leitura estiver ativo, não interfere com cliques individuais
    if (isReadingStudyMode) {
        return;
    }

    if (modoLeituraSelect.value === 'mudo') {
        pararLeitura(); // Garante que não lerá nada se estiver no mudo
        return;
    }

    pararLeitura(); // Para qualquer leitura anterior de elementos individuais e remove destaques

    if (event.target.closest('.question p')) { // Clicou no texto da questão (enunciado)
        const questionDiv = event.target.closest('.question');
        const questionText = questionDiv.querySelector('p').textContent;

        if (modoLeituraSelect.value === 'completa') {
            let fullQuestionText = questionText + '. ';
            questionDiv.querySelectorAll('.options label').forEach(label => {
                fullQuestionText += label.textContent + '. ';
            });
            lerTexto(fullQuestionText);
        } else if (modoLeituraSelect.value === 'enunciado') {
            lerTexto(questionText);
        }
    } else if (event.target.closest('.question .options label')) { // Clicou em uma opção
        const optionText = event.target.closest('.question .options label').textContent;
        lerTexto(optionText);
    } else if (event.target.closest('.explanation.show')) { // Clicou na explicação (se estiver visível)
        const explanationText = event.target.closest('.explanation.show').textContent;
        lerTexto(explanationText);
    }
});

// Inicialização: carrega a primeira prova quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    initSpeechSynthesis();
    gerarQuestoes('prova1'); // Carrega a PROVA 1 por padrão ao iniciar
});