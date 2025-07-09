// scritp/script.js

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
let stopleitura = 1;

// Elementos do DOM
const quizContainer = document.getElementById('quiz-container');
const scoreDisplay = document.getElementById('scoreDisplay');
const modoLeituraSelect = document.getElementById('modoLeitura');

// --- Funções de Lógica Principal ---

/**
 * Atualiza o display do score no HTML.
 */
function updateScoreDisplay() {
    scoreDisplay.textContent = `${currentScore}/${totalQuestions}`;
}

/**
 * Gera e exibe as questões de uma prova específica no container do quiz.
 * Limpa o conteúdo anterior, carrega os dados da prova, reseta o score
 * e cria os elementos HTML para cada questão, suas opções e a área de explicação.
 *
 * @param {string} provaKey A chave da prova a ser carregada (ex: 'prova1', 'prova2').
 */
function gerarQuestoes(provaKey) {
    quizContainer.innerHTML = ''; // Limpa o conteúdo anterior

    // Verifica se 'questoes' está definido e se a provaKey existe
    if (typeof questoes === 'undefined' || !questoes[provaKey]) {
        // Mensagem de fallback, se por algum motivo ainda não encontrar
        quizContainer.innerHTML = '<p>Erro: Dados das provas não carregados ou prova não encontrada. Verifique seu arquivo script/provas.js.</p>';
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

        /************* CRIAR EXPLICAÇÃO ***************/

        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation';

        // CONTEÚDO DA RESOLUÇÃO (APENAS O TEXTO)
        const resolutionContent = document.createElement('p');
        resolutionContent.innerHTML = `<strong>Resolução:</strong> ${item.resolucao}`;
        explanationDiv.appendChild(resolutionContent);

        // NOVO: BOTÃO "SABER MAIS"
        const saberMaisBtn = document.createElement('button');
        saberMaisBtn.textContent = 'Saber Mais';
        saberMaisBtn.className = 'saber-mais-btn'; // Use a classe CSS que adicionamos
        saberMaisBtn.addEventListener('click', (event) => { // <-- Adicionado 'event' como parâmetro
            event.stopPropagation(); // <-- CRUCIAL: Impede que o clique no botão "suba" para a div da resolução
            pararLeitura(); // Para qualquer leitura antes de abrir o Gemini

            // Pega apenas o texto da resolução, excluindo a tag <strong>
            const fullResolutionText = resolutionContent.textContent.replace('Resolução: ', '').trim();
            abrirGeminiComResolucao(fullResolutionText);
        });
        explanationDiv.appendChild(saberMaisBtn);

        // NOVO LISTENER: Adicionado especificamente para a explicação
        // Este listener só será ativado se o clique for na explanationDiv, mas não no botão Saber Mais (devido ao stopPropagation)
        explanationDiv.addEventListener('click', (event) => {
            // Se o modo de leitura está em "mudo", não faz a leitura.
            if (modoLeituraSelect.value === 'mudo') {
                pararLeitura();
                return;
            }

            pararLeitura(); // Para qualquer leitura anterior

            // Seleciona especificamente o parágrafo dentro da explanationDiv
            // (que contém o texto da resolução).
            // Usamos event.currentTarget para garantir que estamos buscando dentro da 'explanationDiv' clicada.
            const explanationParagraph = event.currentTarget.querySelector('p');
            if (explanationParagraph) {
                // Pega o texto do parágrafo, removendo o "Resolução: " inicial
                const textToRead = explanationParagraph.textContent.replace('Resolução:', '').trim(); // Corrigido para remover "Resolução:" com dois pontos
                lerTexto(textToRead);
            }
        });

        questionDiv.appendChild(explanationDiv);

        // ADICIONA A QUESTÃO À PROVA DIV
        provaDiv.appendChild(questionDiv);
    });

    // ANEXA A PROVA COMPLETA AO CONTÊINER PRINCIPAL
    quizContainer.appendChild(provaDiv);
    currentQuestionIndex = 0; // Reinicia o índice da questão para a nova prova
}

// --- Funções de Leitura em Voz Alta (Speech Synthesis) ---

/**
 * Inicializa a API SpeechSynthesis do navegador.
 * Verifica a disponibilidade da API e configura o `speechSynthesizer`.
 * Desabilita as opções de leitura se a API não for suportada.
 */
function initSpeechSynthesis() {
    if ('speechSynthesis' in window) {
        speechSynthesizer = window.speechSynthesis;
        console.log('SpeechSynthesis API disponível e inicializada.');
        // Adicione um listener para quando as vozes estiverem carregadas
        if (speechSynthesizer.getVoices().length === 0) {
            speechSynthesizer.onvoiceschanged = () => {
                console.log('Vozes do SpeechSynthesis carregadas.');
            };
        }
    } else {
        alert('Seu navegador não suporta a API SpeechSynthesis. A função de leitura não estará disponível.');
        console.error('SpeechSynthesis API não disponível no navegador.');
        // Desativar opções de leitura se a API não estiver disponível
        modoLeituraSelect.value = 'mudo';
        modoLeituraSelect.disabled = true;
        document.getElementById('btnLer').disabled = true;
        document.getElementById('btnStop').disabled = true;
        document.getElementById('btnEstudo').disabled = true;
    }
}

/**
 * Lê um texto usando a API SpeechSynthesis.
 * Interrompe qualquer leitura anterior antes de iniciar uma nova.
 *
 * @param {string} text O texto a ser lido.
 */
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

/**
 * Interrompe qualquer leitura em andamento e remove destaques de texto.
 */
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

/**
 * Inicia a leitura sequencial de uma parte específica de uma questão no "Modo Estudo".
 * Lê o enunciado, a resposta correta e a resolução, destacando o elemento lido.
 *
 * @param {Array} provaData Os dados da prova atual.
 * @param {number} questionIndex O índice da questão atual.
 * @param {number} partIndex O índice da parte da questão a ser lida (0: enunciado, 1: resposta, 2: resolução).
 */
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

    // Rola a tela para a questão atual
    currentQuestionDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });


    switch (partIndex) {
        case 0: // Enunciado da questão
            textToRead = `Questão ${questionIndex + 1}: ${item.questao}`;
            elementToHighlight = currentQuestionDiv.querySelector('p'); // O parágrafo do enunciado
            break;
        case 1: // Resposta correta
            const correctOption = item.opcoes.find(op => op.correta);
            textToRead = correctOption ? `Resposta: ${correctOption.texto}` : 'Resposta correta não encontrada.';
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

/**
 * Abre uma nova aba do navegador com uma pesquisa no Google (direcionando para o Gemini, se possível)
 * contendo o texto da resolução e uma solicitação para explicar melhor.
 *
 * @param {string} resolucaoTexto O texto da resolução a ser usada na pesquisa.
 */
function abrirGeminiComResolucao(resolucaoTexto) {
    // Codifica o texto da resolução para ser seguro em uma URL
    const encodedResolution = encodeURIComponent(resolucaoTexto + "\n\nExplique melhor.");

    // URL base do Google Search. O Gemini é acessado via Google Search para prompts
    // A interface do Gemini pode mudar, mas essa abordagem de busca costuma ser robusta.
    const geminiUrl = `https://www.google.com/search?q=${encodedResolution}&udm=0`; // udm=2 força o modo de conversação/gemini

    window.open(geminiUrl, '_blank'); // Abre em uma nova aba
}

// --- Funções dos Botões do Menu ---

/**
 * Adiciona um listener ao botão "Zerar" para resetar o progresso atual.
 * Limpa as seleções de rádio, remove feedbacks visuais, oculta explicações,
 * zera o score e atualiza o display.
 */
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

/**
 * Adiciona um listener ao botão "Validar" para corrigir as respostas da prova atual.
 * Verifica cada questão, aplica feedback visual (correta/incorreta),
 * mostra as explicações e atualiza o score.
 */
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
    } else {
        currentScore = correctAnswersCount; // Atualiza o score com as acertos
        alert(`Correção concluída! Você acertou ${currentScore} de ${totalQuestions} questões.`);
    }
    updateScoreDisplay(); // Atualiza o display do score após a validação
});

/**
 * Adiciona um listener ao botão "Ler Prova Completa" para ler todo o conteúdo visível da prova atual.
 * Concatena o título da prova, enunciados das questões, opções (se o modo for 'completa')
 * e resoluções (se visíveis) e lê sequencialmente.
 */
document.getElementById('btnLer').addEventListener('click', () => {
    pararLeitura(); // Para a leitura e remove destaques
    stopleitura = 1;
    isReadingStudyMode = false; // Desativa o modo estudo de leitura se ativo

    const currentProvaKey = `prova${currentProofIndex + 1}`;
    const currentProvaElement = document.getElementById(currentProvaKey);

    if (currentProvaElement && modoLeituraSelect.value !== 'mudo') {
        let textParts = [];
        textParts.push(currentProvaElement.querySelector('h2').textContent + '. '); // Título da prova

        currentProvaElement.querySelectorAll('.question').forEach((questionDiv) => {
            const questionText = questionDiv.querySelector('p').textContent;
            textParts.push(questionText + '. ');

            if (modoLeituraSelect.value === 'completa') { // Inclui opções se o modo for 'completa'
                questionDiv.querySelectorAll('.options label').forEach(label => {
                    const optionText = label.textContent;
                    textParts.push(optionText + '. ');
                });
            }
            // Adiciona a resolução também, se houver
            const explanationParagraph = questionDiv.querySelector('.explanation p');
            if (explanationParagraph && explanationParagraph.classList.contains('show')) { // Apenas se a explicação estiver visível
                const resolutionText = explanationParagraph.textContent.replace('Resolução:', '').trim();
                textParts.push('Resolução: ' + resolutionText + '. ');
            }
        });

        // Agora, itera sobre as partes e as fala sequencialmente
        let currentPartIndex = 0;

        function speakNextPart() {
            if (currentPartIndex < textParts.length && stopleitura === 1) {
                const partToSpeak = textParts[currentPartIndex];
                currentUtterance = new SpeechSynthesisUtterance(partToSpeak);
                currentUtterance.lang = 'pt-BR';
                currentUtterance.onend = () => {
                    currentPartIndex++;
                    speakNextPart(); // Chama a próxima parte quando a atual terminar
                };
                currentUtterance.onerror = (event) => {
                    console.error('Erro ao ler parte do texto:', event.error);
                    currentPartIndex++;
                    speakNextPart(); // Tenta a próxima parte mesmo se houver erro
                };
                speechSynthesizer.speak(currentUtterance);
            } else {
                console.log('Leitura completa da prova concluída.');
            }
        }
        speakNextPart(); // Inicia a leitura da primeira parte
    } else if (modoLeituraSelect.value === 'mudo') {
        alert('O modo de leitura está em "Mudo". Por favor, selecione outra opção para ativar a leitura.');
    } else {
        alert('Nenhuma prova carregada para leitura.');
    }
});

/**
 * Adiciona um listener ao botão "STOP LEITURA" para interromper qualquer leitura em andamento.
 * Desativa o modo estudo de leitura e remove destaques.
 */
document.getElementById('btnStop').addEventListener('click', () => {
    pararLeitura(); // Para a leitura e remove destaques
    isReadingStudyMode = false; // Desativa o modo estudo de leitura

    stopleitura = 0;
});

/**
 * Adiciona um listener ao botão "MODO ESTUDO" para ativar o modo de estudo.
 * Exibe todas as respostas corretas e resoluções, e inicia a leitura sequencial
 * (enunciado, resposta correta, resolução) com destaque.
 */
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

/**
 * Adiciona um listener ao botão "Próxima Prova" para carregar a próxima prova disponível.
 * Interrompe leituras, desativa o modo estudo e carrega a próxima prova, se houver.
 */
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

/**
 * Adiciona um listener ao botão "Prova Anterior" para carregar a prova anterior.
 * Interrompe leituras, desativa o modo estudo e carrega a prova anterior, se houver.
 */
document.getElementById('btnPrev').addEventListener('click', () => {
    pararLeitura(); // Para a leitura e remove destaques
    isReadingStudyMode = false; // Desativa o modo estudo de leitura

    if (typeof questoes === 'undefined') {
        alert('Erro: Dados das provas não carregados.');
        return;
    }

    if (currentProofIndex > 0) { // Verifica se não estamos na primeira prova
        currentProofIndex--; // Decrementa o índice para ir para a prova anterior
        const prevProvaKey = `prova${currentProofIndex + 1}`; // Calcula a chave da prova anterior
        gerarQuestoes(prevProvaKey); // Carrega as questões da prova anterior
        // Zera o estado da nova prova ao carregar
        document.getElementById('btnZerar').click(); // Reusa a função zerar para limpar o estado
    } else {
        alert('Você já está na primeira prova disponível.');
    }
});

/**
 * Adiciona um listener ao botão "Lista" para exibir ou ocultar a lista de provas disponíveis.
 * Permite ao usuário selecionar uma prova para carregar.
 */
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

/**
 * Adiciona um listener para o evento de mudança na seleção do "Modo de Leitura".
 * Interrompe leituras e informa o usuário sobre o modo selecionado.
 */
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

/**
 * Adiciona um listener global para cliques em elementos da página.
 * Com base no elemento clicado e no modo de leitura selecionado,
 * lê o texto da opção, resolução ou enunciado da questão.
 */
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

    const target = event.target; // Captura o elemento onde o clique ocorreu

    // PRIORIDADE 1: Clicou em uma opção
    if (target.closest('.question .options label')) {
        const optionText = target.closest('.question .options label').textContent;
        lerTexto(optionText);
    }
    // PRIORIDADE 2: Clicou na div de explicação (resolução), mas NÃO no botão "Saber Mais"
    else if (target.closest('.explanation') && !target.closest('.saber-mais-btn')) {
        const explanationParagraph = target.closest('.explanation').querySelector('p');
        if (explanationParagraph) {
            const textToRead = explanationParagraph.textContent.replace(/^Resolução:\s*/, '').trim();
            lerTexto(textToRead);
        }
    }
    // PRIORIDADE 3: Clicou no texto da questão (enunciado)
    else if (target.closest('.question p')) {
        const questionDiv = target.closest('.question');
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
    }
});

// --- Inicialização ---

/**
 * Event listener que aguarda o carregamento completo do DOM.
 * Inicializa a síntese de fala e carrega a primeira prova.
 */
document.addEventListener('DOMContentLoaded', () => {
    initSpeechSynthesis();
    gerarQuestoes('prova1'); // Carrega a PROVA 1 por padrão ao iniciar
});