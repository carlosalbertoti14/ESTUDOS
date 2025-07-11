// script/speechManager.js

// Dependências: questoes, currentProofIndex (do Generador_PROVAS.js)
// E AGORA, os elementos DOM como modoLeituraSelect e quizContainer (também do Generador_PROVAS.js)
// IMPORTANTE: REMOVEMOS AS DECLARAÇÕES 'const modoLeituraSelect = ...' e 'const quizContainer = ...'
// ELAS DEVERÃO SER DECLARADAS APENAS UMA VEZ EM Generador_PROVAS.js E ESTARÃO DISPONÍVEIS GLOBALMENTE.

let speechSynthesizer = null;
let currentUtterance = null; // Para controlar a fala atual

let studyModeReadingIndex = 0;
let isReadingStudyMode = false; // Flag para saber se estamos no modo estudo de leitura
let stopleitura = 1; // Controla a leitura sequencial do botão "Ler Tudo"

// As variáveis abaixo (modoLeituraSelect, quizContainer) NÃO SÃO MAIS DECLARADAS AQUI COM 'const'.
// Elas são assumidas como GLOBAIS, definidas UMA VEZ em Generador_PROVAS.js
// Ex: const modoLeituraSelect = document.getElementById('modoLeitura'); // Esta linha deve estar apenas em Generador_PROVAS.js
// Ex: const quizContainer = document.getElementById('quiz-container');   // Esta linha também


/**
 * Inicializa a API SpeechSynthesis do navegador.
 */
function initSpeechSynthesis() {
    if ('speechSynthesis' in window) {
        speechSynthesizer = window.speechSynthesis;
        console.log('SpeechSynthesis API disponível e inicializada.');
        if (speechSynthesizer.getVoices().length === 0) {
            speechSynthesizer.onvoiceschanged = () => {
                console.log('Vozes do SpeechSynthesis carregadas.');
            };
        }
    } else {
        alert('Seu navegador não suporta a API SpeechSynthesis. A função de leitura não estará disponível.');
        console.error('SpeechSynthesis API não disponível no navegador.');
        // Certifica-se de que modoLeituraSelect existe antes de tentar acessá-lo
        if (modoLeituraSelect) {
            modoLeituraSelect.value = 'mudo';
            modoLeituraSelect.disabled = true;
        }
        // Desabilita os botões de leitura se eles existirem
        const btnLer = document.getElementById('btnLer');
        const btnStop = document.getElementById('btnStop');
        const btnEstudo = document.getElementById('btnEstudo');
        if (btnLer) btnLer.disabled = true;
        if (btnStop) btnStop.disabled = true;
        if (btnEstudo) btnEstudo.disabled = true;
    }
}

/**
 * Lê um texto usando a API SpeechSynthesis.
 * Interrompe qualquer leitura anterior antes de iniciar uma nova.
 * @param {string} text O texto a ser lido.
 */
function lerTexto(text) {
    // Certifica-se de que modoLeituraSelect existe e não está no modo 'mudo'
    if (speechSynthesizer && modoLeituraSelect && modoLeituraSelect.value !== 'mudo') {
        pararLeitura(); // Para qualquer leitura anterior

        console.log('Tentando ler texto:', text);
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.lang = 'pt-BR';

        currentUtterance.onend = function(event) {
            console.log('Leitura concluída com sucesso!');
        };
        currentUtterance.onerror = function(event) {
            console.error('Erro na leitura:', event.error);
        };

        speechSynthesizer.speak(currentUtterance);
    } else {
        console.log('Leitura desativada: speechSynthesizer não disponível, modo está em mudo, ou modoLeituraSelect não encontrado.');
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
    document.querySelectorAll('.highlighted-text').forEach(el => {
        el.classList.remove('highlighted-text');
    });
}

/**
 * Inicia a leitura sequencial de uma parte específica de uma questão no "Modo Estudo".
 * Lê o enunciado, a resposta correta e a resolução, destacando o elemento lido.
 * @param {Array} provaData O array 'data' da prova atual.
 * @param {number} questionIndex O índice da questão atual.
 * @param {number} partIndex O índice da parte da questão a ser lida (0: enunciado, 1: resposta, 2: resolução).
 */
function readStudyPart(provaData, questionIndex, partIndex) {
    pararLeitura();

    const item = provaData[questionIndex];
    let textToRead = '';
    let elementToHighlight = null;

    document.querySelectorAll('.highlighted-text').forEach(el => {
        el.classList.remove('highlighted-text');
    });

    // Certifica-se de que 'questoes' e 'currentProofIndex' são globais e estão definidos.
    // Essas variáveis são definidas em Generador_PROVAS.js.
    if (typeof questoes === 'undefined' || typeof currentProofIndex === 'undefined') {
        console.error('`questoes` ou `currentProofIndex` indefinido em speechManager.js. Verifique a ordem dos scripts.');
        isReadingStudyMode = false;
        return;
    }

    const allExamKeys = Object.keys(questoes);
    const currentProvaKey = allExamKeys[currentProofIndex]; // Pega a chave da prova atual

    if (!currentProvaKey || !questoes[currentProvaKey]) {
        console.error('Modo Estudo: Chave de prova atual inválida ou prova não encontrada.');
        isReadingStudyMode = false;
        return;
    }

    // CORREÇÃO AQUI: Formata a chave da prova para usar como ID HTML
    const currentProvaKeyFormatted = currentProvaKey.replace(/\s/g, '-'); 
    const currentQuestionDiv = document.querySelector(`#${currentProvaKeyFormatted} [data-question-id="${currentProvaKeyFormatted}-q${questionIndex}"]`);

    if (!currentQuestionDiv) {
        console.error('Div da questão não encontrada para destaque no Modo Estudo.');
        isReadingStudyMode = false;
        return;
    }

    currentQuestionDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    switch (partIndex) {
        case 0: // Enunciado da questão
            textToRead = `Questão ${questionIndex + 1}: ${item.questao}`;
            elementToHighlight = currentQuestionDiv.querySelector('p');
            break;
        case 1: // Resposta correta
            const correctOption = item.opcoes.find(op => op.correta);
            textToRead = correctOption ? `Resposta: ${correctOption.texto}` : 'Resposta correta não encontrada.';
            // CORREÇÃO AQUI: Usa o nome formatado para encontrar o input correto
            elementToHighlight = currentQuestionDiv.querySelector(`input[name="${currentProvaKeyFormatted}-questao-${questionIndex}"][data-correct="true"]`).closest('label');
            break;
        case 2: // Resolução
            textToRead = `Resolução: ${item.resolucao}`;
            elementToHighlight = currentQuestionDiv.querySelector('.explanation');
            if (elementToHighlight) {
                elementToHighlight.classList.add('show'); // Garante que a resolução esteja visível
            }
            break;
        default:
            studyModeReadingIndex++;
            if (isReadingStudyMode && studyModeReadingIndex < provaData.length) {
                readStudyPart(provaData, studyModeReadingIndex, 0);
            } else {
                isReadingStudyMode = false;
                console.log("Modo Estudo: Leitura da prova concluída.");
                alert('Modo Estudo concluído!');
            }
            return;
    }

    if (elementToHighlight) {
        elementToHighlight.classList.add('highlighted-text');
    }

    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.lang = 'pt-BR';

    currentUtterance.onend = function() {
        console.log(`Modo Estudo: Leitura da parte ${partIndex} da questão ${questionIndex + 1} concluída.`);
        if (elementToHighlight) {
            elementToHighlight.classList.remove('highlighted-text');
        }
        if (isReadingStudyMode) {
            readStudyPart(provaData, questionIndex, partIndex + 1);
        }
    };
    currentUtterance.onerror = function(event) {
        console.error(`Modo Estudo: Erro na leitura da parte ${partIndex} da questão ${questionIndex + 1}:`, event.error);
        if (elementToHighlight) {
            elementToHighlight.classList.remove('highlighted-text');
        }
        if (isReadingStudyMode) {
            readStudyPart(provaData, questionIndex, partIndex + 1);
        }
    };

    speechSynthesizer.speak(currentUtterance);
}

// --- Funções dos Botões do Menu (associadas a eventos de clique) ---

document.getElementById('btnLer').addEventListener('click', () => {
    pararLeitura();
    stopleitura = 1;
    isReadingStudyMode = false;

    if (typeof questoes === 'undefined' || typeof currentProofIndex === 'undefined' || !modoLeituraSelect) {
        alert('Erro: Componentes essenciais não carregados. Verifique a ordem dos scripts.');
        console.error('`questoes`, `currentProofIndex` ou `modoLeituraSelect` indefinido em speechManager.js (btnLer)');
        return;
    }

    const allExamKeys = Object.keys(questoes);
    const currentProvaKey = allExamKeys[currentProofIndex];
    // CORREÇÃO AQUI: Formata a chave da prova para usar como ID HTML
    const currentProvaKeyFormatted = currentProvaKey.replace(/\s/g, '-');

    if (!currentProvaKey || !questoes[currentProvaKey]) {
        alert('Nenhuma prova carregada para leitura.');
        return;
    }

    // CORREÇÃO AQUI: Usa o ID formatado para encontrar o elemento da prova
    const currentProvaElement = document.getElementById(currentProvaKeyFormatted);

    if (currentProvaElement && modoLeituraSelect.value !== 'mudo') {
        let textParts = [];
        const titleElement = currentProvaElement.querySelector('h2');
        if (titleElement) {
            textParts.push(titleElement.textContent + '. ');
        }

        currentProvaElement.querySelectorAll('.question').forEach((questionDiv) => {
            const questionTextElement = questionDiv.querySelector('p');
            if (questionTextElement) {
                textParts.push(questionTextElement.textContent + '. ');
            }

            if (modoLeituraSelect.value === 'completa') {
                questionDiv.querySelectorAll('.options label').forEach(label => {
                    const optionText = label.textContent;
                    textParts.push(optionText + '. ');
                });
            }
            const explanationDiv = questionDiv.querySelector('.explanation');
            const explanationParagraph = explanationDiv ? explanationDiv.querySelector('p') : null;

            if (explanationParagraph && explanationDiv.classList.contains('show')) {
                const resolutionText = explanationParagraph.textContent.replace('Resolução:', '').trim();
                textParts.push('Resolução: ' + resolutionText + '. ');
            }
        });

        let currentPartReadIndex = 0;
        function speakNextPart() {
            if (currentPartReadIndex < textParts.length && stopleitura === 1) {
                const partToSpeak = textParts[currentPartReadIndex];
                currentUtterance = new SpeechSynthesisUtterance(partToSpeak);
                currentUtterance.lang = 'pt-BR';
                currentUtterance.onend = () => {
                    currentPartReadIndex++;
                    speakNextPart();
                };
                currentUtterance.onerror = (event) => {
                    console.error('Erro ao ler parte do texto:', event.error);
                    currentPartReadIndex++;
                    speakNextPart();
                };
                speechSynthesizer.speak(currentUtterance);
            } else {
                console.log('Leitura completa da prova concluída ou interrompida.');
                stopleitura = 0;
            }
        }
        speakNextPart();
    } else if (modoLeituraSelect.value === 'mudo') {
        alert('O modo de leitura está em "Mudo". Por favor, selecione outra opção para ativar a leitura.');
    } else {
        alert('Nenhuma prova carregada para leitura.');
    }
});

document.getElementById('btnStop').addEventListener('click', () => {
    pararLeitura();
    isReadingStudyMode = false;
    stopleitura = 0;
});

document.getElementById('btnEstudo').addEventListener('click', () => {
    pararLeitura();
    isReadingStudyMode = true;
    studyModeReadingIndex = 0;

    if (typeof questoes === 'undefined' || typeof currentProofIndex === 'undefined' || !modoLeituraSelect) {
        alert('Erro: Componentes essenciais não carregados. Verifique a ordem dos scripts.');
        console.error('`questoes`, `currentProofIndex` ou `modoLeituraSelect` indefinido em speechManager.js (btnEstudo)');
        isReadingStudyMode = false;
        return;
    }

    const allExamKeys = Object.keys(questoes);
    const currentProvaKey = allExamKeys[currentProofIndex];
    const currentProvaData = questoes[currentProvaKey] ? questoes[currentProvaKey].data : null;

    if (!currentProvaData) {
        alert('Nenhuma prova carregada para o modo estudo.');
        isReadingStudyMode = false;
        return;
    }

    // CORREÇÃO AQUI: Formata a chave da prova para usar como ID HTML
    const currentProvaKeyFormatted = currentProvaKey.replace(/\s/g, '-');
    const questionsElements = document.querySelectorAll(`#${currentProvaKeyFormatted} .question`);

    questionsElements.forEach((qElement, qIndex) => {
        const explanationDiv = qElement.querySelector('.explanation');
        const labels = qElement.querySelectorAll('.options label');

        labels.forEach(label => label.classList.remove('correct-answer', 'incorrect-answer'));

        if (currentProvaData[qIndex]) {
            const correctOption = currentProvaData[qIndex].opcoes.find(op => op.correta);
            if (correctOption) {
                // CORREÇÃO AQUI: Usa o nome formatado para encontrar o input correto
                const correctLabelElement = qElement.querySelector(`input[name="${currentProvaKeyFormatted}-questao-${qIndex}"][data-correct="true"]`).closest('label');
                correctLabelElement.classList.add('correct-answer');
            }
        }
        explanationDiv.classList.add('show');
    });

    if (modoLeituraSelect.value !== 'mudo') {
        readStudyPart(currentProvaData, studyModeReadingIndex, 0);
    } else {
        alert('O modo de leitura está em "Mudo". As respostas e resoluções foram exibidas, mas a leitura automática está desativada.');
        isReadingStudyMode = false;
    }
});

modoLeituraSelect.addEventListener('change', () => {
    pararLeitura();
    isReadingStudyMode = false;

    const selectedMode = modoLeituraSelect.value;
    if (selectedMode === 'mudo') {
        alert('Modo de leitura desativado.');
    } else {
        alert(`Modo de leitura definido para: "${modoLeituraSelect.options[modoLeituraSelect.selectedIndex].text}".`);
    }
});

document.addEventListener('click', (event) => {
    if (isReadingStudyMode) {
        return;
    }

    if (!modoLeituraSelect || modoLeituraSelect.value === 'mudo') { // Adiciona verificação para modoLeituraSelect existir
        pararLeitura();
        return;
    }

    pararLeitura();

    const target = event.target;

    if (target.closest('.question .options label')) {
        const optionText = target.closest('.question .options label').textContent;
        lerTexto(optionText);
    }
    else if (target.closest('.explanation') && !target.closest('.saber-mais-btn')) {
        const explanationParagraph = target.closest('.explanation').querySelector('p');
        if (explanationParagraph) {
            const textToRead = explanationParagraph.textContent.replace(/^Resolução:\s*/, '').trim();
            lerTexto(textToRead);
        }
    }
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

document.addEventListener('DOMContentLoaded', initSpeechSynthesis);

/* fim do script */