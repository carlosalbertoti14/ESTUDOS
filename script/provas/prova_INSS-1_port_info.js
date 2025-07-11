// Garante que o objeto 'questoes' exista.
if (typeof questoes === 'undefined') {
    var questoes = {};
}

// --- SIMULADOS DE LÍNGUA PORTUGUESA ---

questoes['Simulado Português - TESTE 1'] = {
    title: 'Língua Portuguesa - TESTE 1: Ortografia e Acentuação',
    data: [
        {
            questao: 'Assinale a alternativa em que todas as palavras estão corretamente grafadas:',
            opcoes: [
                { texto: 'Exceção, excesso, esceção.', correta: false },
                { texto: 'Exceção, excesso, excessão.', correta: false },
                { texto: 'Exceção, excesso, exceção.', correta: true },
                { texto: 'Eceção, escesso, exceção.', correta: false }
            ],
            resolucao: 'A grafia correta é **exceção**, com "xc", e **excesso**, com "ss".'
        },
        {
            questao: 'Em qual opção a palavra necessita de acento gráfico, de acordo com as regras de acentuação?',
            opcoes: [
                { texto: 'Gratuito.', correta: false },
                { texto: 'Rubrica.', correta: false },
                { texto: 'Avaro.', correta: false },
                { texto: 'Item.', correta: false },
                { texto: 'Saude.', correta: true }
            ],
            resolucao: 'A palavra correta é **saúde**. "Sa-ú-de" é um hiato. As vogais "i" e "u" tônicas, formando hiato com a vogal anterior, são acentuadas, desde que não estejam seguidas de "nh" e não sejam precedidas de ditongo (se a sílaba estiver em paroxítonas).'
        },
        {
            questao: 'Qual palavra é acentuada pela mesma regra de "café"?',
            opcoes: [
                { texto: 'Lâmpada.', correta: false },
                { texto: 'Paciência.', correta: false },
                { texto: 'Jacaré.', correta: true },
                { texto: 'Árvore.', correta: false }
            ],
            resolucao: '"Café" e "jacaré" são **oxítonas terminadas em "e"**, seguidas ou não de "s".'
        },
        {
            questao: 'Assinale a alternativa que apresenta um erro de acentuação:',
            opcoes: [
                { texto: 'Fácil.', correta: false },
                { texto: 'País.', correta: false },
                { texto: 'Vôo.', correta: true },
                { texto: 'Chapéu.', correta: false }
            ],
            resolucao: 'A palavra "voo" perdeu o acento com o Novo Acordo Ortográfico. Ditongos "oo" e "ee" não são mais acentuados.'
        },
        {
            questao: 'A palavra "pássaro" é acentuada por ser:',
            opcoes: [
                { texto: 'Oxítona.', correta: false },
                { texto: 'Paroxítona.', correta: false },
                { texto: 'Proparoxítona.', correta: true },
                { texto: 'Monossílaba tônica.', correta: false }
            ],
            resolucao: 'Todas as **proparoxítonas** são acentuadas. A sílaba tônica de "pássaro" é "pás" (terceira de trás para frente).'
        },
        {
            questao: 'Em qual das alternativas a grafia das palavras está totalmente correta?',
            opcoes: [
                { texto: 'Pessego, exceção, pretencioso.', correta: false },
                { texto: 'Pêssego, execeção, pretensioso.', correta: false },
                { texto: 'Pêssego, exceção, pretensioso.', correta: true },
                { texto: 'Pêssego, excessão, pretencioso.', correta: false }
            ],
            resolucao: 'As grafias corretas são **pêssego**, **exceção** e **pretensioso**.'
        },
        {
            questao: 'A palavra "heroico" perdeu o acento em razão do Novo Acordo Ortográfico. Qual das opções abaixo é um caso semelhante?',
            opcoes: [
                { texto: 'Piauí.', correta: false },
                { texto: 'Céu.', correta: false },
                { texto: 'Idéia.', correta: true },
                { texto: 'Bauru.', correta: false }
            ],
            resolucao: '"Heroico" e "ideia" perderam o acento porque o Novo Acordo Ortográfico eliminou o acento dos **ditongos abertos "ei" e "oi" em palavras paroxítonas**.'
        },
        {
            questao: 'Qual a palavra que está incorretamente acentuada?',
            opcoes: [
                { texto: 'Vovô.', correta: false },
                { texto: 'Mês.', correta: false },
                { texto: 'Têm (eles).', correta: false },
                { texto: 'Pôde (pretérito perfeito).', correta: false },
                { texto: 'Pára (verbo parar).', correta: true }
            ],
            resolucao: 'A palavra "para" (verbo e preposição) perdeu o acento diferencial com o Novo Acordo Ortográfico, a menos que a sua homógrafa "para" (paroxítona) seja usada.'
        },
        {
            questao: 'Assinale a alternativa que preenche corretamente as lacunas: "Ele _____ na mesma ______ que a minha ______. "',
            opcoes: [
                { texto: 'mora / casa / visinha', correta: false },
                { texto: 'morra / casa / vizinha', correta: false },
                { texto: 'mora / cassa / vizinha', correta: false },
                { texto: 'mora / casa / vizinha', correta: true } // Duplicata para evitar erro de correção, ambas estão corretas
            ],
            resolucao: 'A grafia correta para o verbo morar e o substantivo casa é com "s". "Cassa" seria do verbo cassar.'
        },
        {
            questao: 'Em qual das frases o uso da vírgula está correto?',
            opcoes: [
                { texto: 'João, médico, foi trabalhar cedo.', correta: true },
                { texto: 'João médico, foi trabalhar cedo.', correta: false },
                { texto: 'João, médico foi trabalhar, cedo.', correta: false },
                { texto: 'João médico foi, trabalhar cedo.', correta: false }
            ],
            resolucao: 'A vírgula é utilizada para isolar o **apostos explicativo** "médico".'
        }
    ]
};

questoes['Simulado Português - TESTE 2'] = {
    title: 'Língua Portuguesa - TESTE 2: Classes de Palavras e Concordância',
    data: [
        {
            questao: 'Qual a classe gramatical da palavra destacada em "O **velho** homem caminhava devagar."?',
            opcoes: [
                { texto: 'Substantivo.', correta: false },
                { texto: 'Verbo.', correta: false },
                { texto: 'Adjetivo.', correta: true },
                { texto: 'Advérbio.', correta: false }
            ],
            resolucao: 'A palavra "velho" caracteriza o substantivo "homem", portanto, é um adjetivo.'
        },
        {
            questao: 'Na frase "Os alunos estudaram **bastante** para a prova.", a palavra destacada é um(a):',
            opcoes: [
                { texto: 'Adjetivo.', correta: false },
                { texto: 'Advérbio de intensidade.', correta: true },
                { texto: 'Substantivo.', correta: false },
                { texto: 'Verbo.', correta: false }
            ],
            resolucao: '"Bastante" está modificando o verbo "estudaram", indicando intensidade. Advérbios são invariáveis.'
        },
        {
            questao: 'Assinale a alternativa em que há erro de concordância verbal:',
            opcoes: [
                { texto: 'Fazem dois anos que não o vejo.', correta: true },
                { texto: 'Eu e ele faremos a tarefa.', correta: false },
                { texto: 'Compraram-se muitos livros.', correta: false },
                { texto: 'A maioria dos alunos chegou cedo.', correta: false }
            ],
            resolucao: 'O verbo "fazer", quando indica tempo decorrido, é impessoal e deve ficar na 3ª pessoa do singular: "Faz dois anos que não o vejo.".'
        },
        {
            questao: 'Qual a classe gramatical da palavra destacada em "Ela é **a** professora de português."?',
            opcoes: [
                { texto: 'Pronome demonstrativo.', correta: false },
                { texto: 'Artigo definido.', correta: true },
                { texto: 'Preposição.', correta: false },
                { texto: 'Advérbio.', correta: false }
            ],
            resolucao: '"A" está determinando o substantivo "professora", sendo, portanto, um artigo definido.'
        },
        {
            questao: 'A frase "Menos pessoas compareceram ao evento." está correta quanto à concordância?',
            opcoes: [
                { texto: 'Sim, está correta.', correta: true },
                { texto: 'Não, o correto seria "Menas pessoas compareceram".', correta: false }
            ],
            resolucao: '"Menos" é uma palavra invariável, portanto, está correta a concordância.'
        },
        {
            questao: 'Em "Ele tem **muito** talento.", a palavra destacada é um(a):',
            opcoes: [
                { texto: 'Advérbio de modo.', correta: false },
                { texto: 'Pronome indefinido.', correta: false },
                { texto: 'Adjetivo.', correta: false },
                { texto: 'Determinante (acompanha substantivo, é pronome indefinido ou adjetivo).', correta: true } // "Muito" está qualificando "talento", agindo como pronome adjetivo indefinido
            ],
            resolucao: '"Muito" está qualificando o substantivo "talento", indicando quantidade. Neste caso, funciona como um pronome adjetivo indefinido.'
        },
        {
            questao: 'Assinale a alternativa com erro de concordância nominal:',
            opcoes: [
                { texto: 'É necessário a calma.', correta: true },
                { texto: 'É necessária a calma.', correta: false },
                { texto: 'Água e terra são elementos necessários.', correta: false },
                { texto: 'Ela ficou meio preocupada.', correta: false }
            ],
            resolucao: 'A expressão "é necessário" concorda com o substantivo quando este é determinado por artigo ou pronome. O correto seria "É necessária a calma.".'
        },
        {
            questao: 'Em qual das frases a palavra destacada é um substantivo?',
            opcoes: [
                { texto: 'Ele vive em um **grande** dilema.', correta: false },
                { texto: 'O **azul** do céu é lindo.', correta: true },
                { texto: 'Ela fala **bem** alto.', correta: false },
                { texto: 'Os **dois** meninos jogavam.', correta: false }
            ],
            resolucao: 'O artigo "O" substantiva a palavra "azul", que originalmente é um adjetivo.'
        },
        {
            questao: 'Qual a função sintática da palavra destacada em "A verdade é que todos **precisam** de ajuda."?',
            opcoes: [
                { texto: 'Adjetivo.', correta: false },
                { texto: 'Verbo.', correta: true },
                { texto: 'Substantivo.', correta: false },
                { texto: 'Advérbio.', correta: false }
            ],
            resolucao: '"Precisam" é uma forma verbal (verbo precisar), conjugada na 3ª pessoa do plural do presente do indicativo.'
        },
        {
            questao: 'Assinale a opção em que a concordância verbal está incorreta:',
            opcoes: [
                { texto: 'Mais de um candidato se inscreveu.', correta: false },
                { texto: 'Quase cem por cento dos eleitores votou.', correta: false },
                { texto: 'Foi eu que disse isso.', correta: true },
                { texto: 'Cerca de dez pessoas apareceram.', correta: false }
            ],
            resolucao: 'Com o pronome "que", o verbo concorda com o antecedente de "que". O correto seria "Fui eu que disse isso.".'
        }
    ]
};

questoes['Simulado Português - TESTE 3'] = {
    title: 'Língua Portuguesa - TESTE 3: Regência Verbal e Nominal',
    data: [
        {
            questao: 'Assinale a alternativa em que a regência verbal do verbo "assistir" está correta:',
            opcoes: [
                { texto: 'Assisti o filme ontem à noite.', correta: false },
                { texto: 'Assisti ao filme ontem à noite.', correta: true },
                { texto: 'Assistir o paciente é seu dever.', correta: false },
                { texto: 'Assisti para o jogo com entusiasmo.', correta: false }
            ],
            resolucao: 'O verbo "assistir", no sentido de "ver, presenciar", é transitivo indireto e exige a preposição "a". No sentido de "prestar assistência", é transitivo direto.'
        },
        {
            questao: 'Qual a frase em que a regência do verbo "agradar" está de acordo com a norma-padrão?',
            opcoes: [
                { texto: 'Agradou o filho com presentes.', correta: true },
                { texto: 'Agradou ao filho com presentes.', correta: false },
                { texto: 'Agradou-o com presentes.', correta: true }, // Ambas podem ser corretas dependendo do sentido.
                { texto: 'Agradou-lhe com presentes.', correta: false }
            ],
            resolucao: 'O verbo "agradar", no sentido de "fazer agrado", é transitivo direto. No sentido de "ser agradável", é transitivo indireto (agradou ao filho). A questão é ambígua, mas "agradou o filho" está no sentido de "fazer agrados", ou seja, "o filho" é objeto direto.'
        },
        {
            questao: 'Preencha a lacuna com a preposição adequada: "Ela é alheia ______ problemas dos outros."',
            opcoes: [
                { texto: 'aos.', correta: true },
                { texto: 'os.', correta: false },
                { texto: 'para os.', correta: false },
                { texto: 'em os.', correta: false }
            ],
            resolucao: 'O adjetivo "alheia" (e a maioria dos adjetivos que indicam contrariedade, diferença) rege a preposição "a". "Alheia a + os = aos".'
        },
        {
            questao: 'Assinale a alternativa em que o verbo "implicar" está empregado corretamente, no sentido de "acarretar, ter como consequência":',
            opcoes: [
                { texto: 'Este trabalho implica em dedicação total.', correta: false },
                { texto: 'Este trabalho implica dedicação total.', correta: true },
                { texto: 'Implicou com o colega sem motivo.', correta: false },
                { texto: 'Ele se implicou na confusão.', correta: false }
            ],
            resolucao: 'No sentido de "acarretar", o verbo "implicar" é transitivo direto, não exigindo preposição.'
        },
        {
            questao: 'Qual a regência nominal correta de "capaz"?',
            opcoes: [
                { texto: 'Capaz de.', correta: true },
                { texto: 'Capaz em.', correta: false },
                { texto: 'Capaz para.', correta: false },
                { texto: 'Capaz com.', correta: false }
            ],
            resolucao: 'A regência nominal de "capaz" é com a preposição "de": "capaz de fazer algo".'
        },
        {
            questao: 'O verbo "obedecer" é transitivo indireto e exige a preposição "a". Qual a frase correta?',
            opcoes: [
                { texto: 'Obedeça o regulamento.', correta: false },
                { texto: 'Obedeça ao regulamento.', correta: true },
                { texto: 'Obedeça com o regulamento.', correta: false },
                { texto: 'Obedeça no regulamento.', correta: false }
            ],
            resolucao: 'O verbo "obedecer" é transitivo indireto e pede a preposição "a".'
        },
        {
            questao: 'A regência do nome "aversão" é com a preposição:',
            opcoes: [
                { texto: 'Apenas a "a".', correta: false },
                { texto: 'Apenas a "por".', correta: false },
                { texto: 'A "a" ou "por".', correta: true },
                { texto: 'A "para".', correta: false }
            ],
            resolucao: 'O substantivo "aversão" pode reger as preposições "a" ou "por". Ex: "aversão a insetos", "aversão por insetos".'
        },
        {
            questao: 'Assinale a alternativa em que o verbo "esquecer" está empregado corretamente:',
            opcoes: [
                { texto: 'Esqueceu o nome dele.', correta: true },
                { texto: 'Esqueceu-se do nome dele.', correta: true },
                { texto: 'Esqueceu do nome dele.', correta: false },
                { texto: 'Ele esqueceu de tudo.', correta: false }
            ],
            resolucao: 'O verbo "esquecer", quando pronominal (esquecer-se), exige a preposição "de". Quando não pronominal, é transitivo direto.'
        },
        {
            questao: 'Qual a frase com erro de regência verbal?',
            opcoes: [
                { texto: 'Prefiro mais estudar do que trabalhar.', correta: true },
                { texto: 'Prefiro estudar a trabalhar.', correta: false },
                { texto: 'Visa ao cargo de gerente.', correta: false },
                { texto: 'Ele se referiu aos colegas.', correta: false }
            ],
            resolucao: 'O verbo "preferir" é transitivo direto e indireto, e não admite intensificadores nem a preposição "do que". O correto seria "Prefiro estudar a trabalhar.".'
        },
        {
            questao: 'O verbo "custar", no sentido de "ser custoso, difícil", exige o sujeito e o objeto indireto. Qual a frase correta?',
            opcoes: [
                { texto: 'Custei a entender o problema.', correta: true },
                { texto: 'Custou-me a entender o problema.', correta: false },
                { texto: 'Custou para eu entender o problema.', correta: false },
                { texto: 'Eu custei a entender o problema.', correta: false }
            ],
            resolucao: 'O sujeito de "custar" (no sentido de "ser difícil") é a oração que se segue. O "me" funciona como objeto indireto: "Custou-me a entender o problema" (foi custoso para mim).'
        }
    ]
};

questoes['Simulado Português - TESTE 4'] = {
    title: 'Língua Portuguesa - TESTE 4: Crase e Pontuação',
    data: [
        {
            questao: 'Assinale a alternativa em que o uso da crase está **incorreto**:',
            opcoes: [
                { texto: 'Fui à feira.', correta: false },
                { texto: 'Ele se refere à essa regra.', correta: true },
                { texto: 'Chegou à uma hora.', correta: false },
                { texto: 'À noite, tudo fica calmo.', correta: false }
            ],
            resolucao: 'Diante de pronomes demonstrativos iniciados por "a" (esse, essa, este, esta), não ocorre crase. O correto seria "Ele se refere a essa regra.".'
        },
        {
            questao: 'Em qual frase a crase é **obrigatória**?',
            opcoes: [
                { texto: 'Viajou a cidade de São Paulo.', correta: false },
                { texto: 'Entregou o relatório a diretora.', correta: true },
                { texto: 'Chegou a tempo de pegar o ônibus.', correta: false },
                { texto: 'Disse a ela que viria.', correta: false }
            ],
            resolucao: 'O verbo "entregar" rege a preposição "a", e "diretora" é um substantivo feminino que admite o artigo "a". Portanto, "a" + "a" = "à".'
        },
        {
            questao: 'Qual a frase em que o uso da vírgula está **correto**?',
            opcoes: [
                { texto: 'Os alunos, estudaram muito para a prova.', correta: false },
                { texto: 'Amanhã, faremos o teste.', correta: true },
                { texto: 'Comprei lápis, canetas, e borrachas.', correta: false },
                { texto: 'Ela disse, que viria cedo.', correta: false }
            ],
            resolucao: 'A vírgula é usada para separar adjuntos adverbiais deslocados (especialmente os de tempo) de longa extensão ou para enfatizá-los, como em "Amanhã" (adjunto adverbial de tempo).'
        },
        {
            questao: 'Assinale a alternativa que apresenta um erro de pontuação:',
            opcoes: [
                { texto: 'João, o filho do padeiro, passou no concurso.', correta: false },
                { texto: 'Corria, pulava, gritava, mas não alcançava.', correta: false },
                { texto: 'Quando cheguei, ela já havia saído.', correta: false },
                { texto: 'Os alunos, fizeram a prova em silêncio.', correta: true }
            ],
            resolucao: 'Não se separa o sujeito do predicado por vírgula. "Os alunos" é o sujeito do verbo "fizeram".'
        },
        {
            questao: 'Em qual das opções a crase é **facultativa**?',
            opcoes: [
                { texto: 'À beira-mar.', correta: false },
                { texto: 'Às claras.', correta: false },
                { texto: 'À moda de.', correta: false },
                { texto: 'Diante de pronomes possessivos femininos (à minha, à sua, etc.).', correta: true }
            ],
            resolucao: 'O uso da crase é facultativo diante de pronomes possessivos femininos (ex: "Entreguei a ou à sua mãe"), nomes próprios femininos (ex: "Refiro-me a ou à Maria") e após a preposição "até" (ex: "Fui até a ou até à praia").'
        },
        {
            questao: 'Qual a pontuação correta para a frase: "Ele comprou pão carne e queijo"',
            opcoes: [
                { texto: 'Ele comprou: pão carne e queijo.', correta: false },
                { texto: 'Ele comprou pão, carne e queijo.', correta: true },
                { texto: 'Ele comprou pão, carne, e queijo.', correta: false },
                { texto: 'Ele comprou pão carne, e queijo.', correta: false }
            ],
            resolucao: 'A vírgula é usada para separar elementos de uma enumeração, e o último elemento é conectado pela conjunção "e", dispensando a vírgula antes do "e".'
        },
        {
            questao: 'Assinale a alternativa em que a pontuação está correta:',
            opcoes: [
                { texto: 'Não obstante, ele veio.', correta: true },
                { texto: 'Não obstante ele veio.', correta: false },
                { texto: 'Não obstante; ele veio.', correta: false },
                { texto: 'Não obstante: ele veio.', correta: false }
            ],
            resolucao: 'Conjunções adversativas ou concessivas deslocadas (como "não obstante") podem ser isoladas por vírgula.'
        },
        {
            questao: 'Em "Ele estudou muito, **portanto**, passou no exame." O termo entre vírgulas é um(a):',
            opcoes: [
                { texto: 'Adjunto adnominal.', correta: false },
                { texto: 'Conjunção coordenativa conclusiva deslocada.', correta: true },
                { texto: 'Vocativo.', correta: false },
                { texto: 'Aposto.', correta: false }
            ],
            resolucao: 'Conjunções coordenativas deslocadas, como "portanto", devem ser isoladas por vírgulas.'
        },
        {
            questao: 'Qual das opções abaixo apresenta erro de pontuação, considerando a regra geral?',
            opcoes: [
                { texto: 'João, levante-se!', correta: false },
                { texto: 'Correr, nadar e pedalar são meus hobbies.', correta: false },
                { texto: 'Ele, entregou o livro ao professor.', correta: true },
                { texto: 'Comprei tudo o que você pediu: canetas, lápis, borrachas.', correta: false }
            ],
            resolucao: 'Não se separa o sujeito ("Ele") do predicado ("entregou o livro ao professor") por vírgula.'
        },
        {
            questao: 'Qual frase exige crase para estar correta?',
            opcoes: [
                { texto: 'Eles foram a festa.', correta: true },
                { texto: 'Disse a verdade.', correta: false },
                { texto: 'Chegou a tempo.', correta: false },
                { texto: 'Daqui a pouco.', correta: false }
            ],
            resolucao: 'O verbo "ir" rege preposição "a", e "festa" é um substantivo feminino que admite o artigo "a". Portanto, "a" + "a" = "à".'
        }
    ]
};

questoes['Simulado Português - TESTE 5'] = {
    title: 'Língua Portuguesa - TESTE 5: Análise Sintática e Interpretação de Texto',
    data: [
        {
            questao: 'Na frase "A menina bonita brincava no parque.", qual é o núcleo do sujeito?',
            opcoes: [
                { texto: 'Menina bonita.', correta: false },
                { texto: 'Menina.', correta: true },
                { texto: 'Bonita.', correta: false },
                { texto: 'Parque.', correta: false }
            ],
            resolucao: 'O núcleo do sujeito é o substantivo principal que encabeça o sujeito, neste caso, "menina".'
        },
        {
            questao: 'Na oração "Ele entregou a carta ao destinatário.", qual a função sintática de "a carta"?',
            opcoes: [
                { texto: 'Objeto indireto.', correta: false },
                { texto: 'Objeto direto.', correta: true },
                { texto: 'Adjunto adnominal.', correta: false },
                { texto: 'Complemento nominal.', correta: false }
            ],
            resolucao: 'O verbo "entregar" é transitivo direto e indireto. "A carta" é o que foi entregue, sem preposição, portanto, objeto direto.'
        },
        {
            questao: 'Na frase "Ele mora longe.", qual a função sintática de "longe"?',
            opcoes: [
                { texto: 'Adjunto adnominal.', correta: false },
                { texto: 'Adjunto adverbial de lugar.', correta: true },
                { texto: 'Complemento nominal.', correta: false },
                { texto: 'Objeto direto.', correta: false }
            ],
            resolucao: '"Longe" é um advérbio de lugar que modifica o verbo "morar", funcionando como adjunto adverbial de lugar.'
        },
        {
            questao: 'Qual a função sintática da palavra destacada em "A verdade é que ela é **muito** inteligente."?',
            opcoes: [
                { texto: 'Advérbio de intensidade.', correta: true },
                { texto: 'Adjetivo.', correta: false },
                { texto: 'Pronome.', correta: false },
                { texto: 'Substantivo.', correta: false }
            ],
            resolucao: '"Muito" está intensificando o adjetivo "inteligente", sendo um advérbio de intensidade.'
        },
        {
            questao: 'Na oração "Ele precisa de ajuda.", qual a função sintática de "de ajuda"?',
            opcoes: [
                { texto: 'Objeto direto.', correta: false },
                { texto: 'Objeto indireto.', correta: true },
                { texto: 'Complemento nominal.', correta: false },
                { texto: 'Adjunto adnominal.', correta: false }
            ],
            resolucao: 'O verbo "precisar" é transitivo indireto e exige a preposição "de". "De ajuda" é o complemento verbal preposicionado, ou seja, objeto indireto.'
        },
        {
            questao: 'Leia o trecho: "O céu estava azul e as nuvens, brancas. A paz reinava." Qual a relação semântica entre "azul" e "brancas" com "céu" e "nuvens", respectivamente?',
            opcoes: [
                { texto: 'Advérbios de modo.', correta: false },
                { texto: 'Predicativos do sujeito.', correta: true },
                { texto: 'Adjuntos adnominais.', correta: false },
                { texto: 'Complementos nominais.', correta: false }
            ],
            resolucao: '"Azul" e "brancas" são características atribuídas ao sujeito ("céu" e "nuvens") por meio de um verbo de ligação ("estava"), sendo, portanto, predicativos do sujeito.'
        },
        {
            questao: 'Na frase "Sua voz doce encantava a todos.", a palavra "doce" é um(a):',
            opcoes: [
                { texto: 'Adjunto adverbial.', correta: false },
                { texto: 'Adjunto adnominal.', correta: true },
                { texto: 'Predicativo do sujeito.', correta: false },
                { texto: 'Objeto direto.', correta: false }
            ],
            resolucao: '"Doce" é um adjetivo que qualifica diretamente o substantivo "voz", funcionando como adjunto adnominal.'
        },
        {
            questao: 'Em qual das frases o termo em destaque é um sujeito indeterminado?',
            opcoes: [
                { texto: '**Vende-se** casas.', correta: false },
                { texto: 'Disse-se **muito** sobre o assunto.', correta: true },
                { texto: 'Choveu **muito** hoje.', correta: false },
                { texto: 'Os alunos **estudaram** a lição.', correta: false }
            ],
            resolucao: 'Em "Disse-se muito sobre o assunto", o verbo está na 3ª pessoa do singular, seguido de "se" (índice de indeterminação do sujeito), e não há sujeito explícito ou que se possa determinar pelo contexto.'
        },
        {
            questao: 'Qual a função sintática de "para o trabalho" em "Ele se preparou para o trabalho."?',
            opcoes: [
                { texto: 'Objeto direto.', correta: false },
                { texto: 'Objeto indireto.', correta: false },
                { texto: 'Adjunto adverbial de finalidade.', correta: true },
                { texto: 'Complemento nominal.', correta: false }
            ],
            resolucao: '"Para o trabalho" indica a finalidade de "se preparou", funcionando como adjunto adverbial de finalidade.'
        },
        {
            questao: 'Leia o texto: "A tecnologia avança a passos largos, mas a desigualdade social persiste. É fundamental que se busquem soluções para ambos os problemas." A palavra "mas" expressa uma ideia de:',
            opcoes: [
                { texto: 'Adição.', correta: false },
                { texto: 'Alternância.', correta: false },
                { texto: 'Oposição.', correta: true },
                { texto: 'Conclusão.', correta: false }
            ],
            resolucao: 'A conjunção "mas" introduz uma ideia de oposição ou contraste entre as duas orações.'
        }
    ]
};

questoes['Simulado Português - TESTE 6'] = {
    title: 'Língua Portuguesa - TESTE 6: Coerência, Coesão e Gêneros Textuais',
    data: [
        {
            questao: 'A **coesão textual** refere-se principalmente a(o):',
            opcoes: [
                { texto: 'Ao sentido lógico do texto.', correta: false },
                { texto: 'Às relações gramaticais e lexicais entre as partes do texto.', correta: true },
                { texto: 'À correção ortográfica e gramatical.', correta: false },
                { texto: 'À organização das ideias em parágrafos.', correta: false }
            ],
            resolucao: 'A coesão trata da conexão formal entre as palavras, frases e parágrafos do texto, por meio de conectivos, pronomes, sinônimos, etc.'
        },
        {
            questao: 'A **coerência textual** refere-se principalmente a(o):',
            opcoes: [
                { texto: 'Ao uso correto da pontuação.', correta: false },
                { texto: 'À ausência de contradições e à progressão lógica de ideias no texto.', correta: true },
                { texto: 'À repetição de palavras para enfatizar uma ideia.', correta: false },
                { texto: 'À uniformidade no estilo da escrita.', correta: false }
            ],
            resolucao: 'A coerência diz respeito à lógica interna do texto, à ausência de contradições e à pertinência das ideias apresentadas.'
        },
        {
            questao: 'Em "Estudei muito **porque** queria passar no concurso.", a conjunção "porque" estabelece uma relação de:',
            opcoes: [
                { texto: 'Consequência.', correta: false },
                { texto: 'Oposição.', correta: false },
                { texto: 'Causa.', correta: true },
                { texto: 'Finalidade.', correta: false }
            ],
            resolucao: 'A conjunção "porque" introduz uma oração que indica a causa do estudo (queria passar no concurso).'
        },
        {
            questao: 'Qual das opções abaixo é um exemplo de **anáfora** (coesão referencial)?',
            opcoes: [
                { texto: 'João e Maria são amigos. Eles se divertem juntos.', correta: true },
                { texto: 'A vida é uma jornada; portanto, viva intensamente.', correta: false },
                { texto: 'Vi a árvore. Lá estava um pássaro.', correta: false },
                { texto: 'Comi bolo, pão e café da manhã.', correta: false }
            ],
            resolucao: 'A anáfora ocorre quando um termo (como "Eles") retoma outro termo já mencionado anteriormente no texto ("João e Maria").'
        },
        {
            questao: 'O uso de sinônimos ou expressões equivalentes para evitar a repetição de palavras no texto é um recurso de:',
            opcoes: [
                { texto: 'Coerência semântica.', correta: false },
                { texto: 'Coesão lexical.', correta: true },
                { texto: 'Coesão referencial.', correta: false },
                { texto: 'Coesão sequencial.', correta: false }
            ],
            resolucao: 'A coesão lexical envolve a escolha de vocábulos e expressões que estabelecem relações de sentido entre si (sinônimos, hiperônimos, etc.) para garantir a progressão textual e evitar repetições desnecessárias.'
        },
        {
            questao: 'Qual o gênero textual que tem como característica principal a narração de fatos, com personagens, tempo e espaço definidos?',
            opcoes: [
                { texto: 'Notícia.', correta: false },
                { texto: 'Artigo de opinião.', correta: false },
                { texto: 'Conto.', correta: true },
                { texto: 'Receita culinária.', correta: false }
            ],
            resolucao: 'Contos, romances, fábulas são gêneros textuais narrativos, que contam uma história.'
        },
        {
            questao: 'Em um texto dissertativo-argumentativo, qual a principal função da **tese**?',
            opcoes: [
                { texto: 'Resumir o conteúdo do texto.', correta: false },
                { texto: 'Apresentar a posição do autor sobre o tema a ser defendido.', correta: true },
                { texto: 'Oferecer exemplos para ilustrar as ideias.', correta: false },
                { texto: 'Concluir o raciocínio apresentado.', correta: false }
            ],
            resolucao: 'A tese é a ideia principal, o ponto de vista que o autor pretende defender ao longo do texto dissertativo-argumentativo.'
        },
        {
            questao: 'Qual a tipologia textual que visa a instruir o leitor sobre como realizar uma ação ou procedimento?',
            opcoes: [
                { texto: 'Narrativa.', correta: false },
                { texto: 'Descritiva.', correta: false },
                { texto: 'Injuntiva (ou instrucional).', correta: true },
                { texto: 'Expositiva.', correta: false }
            ],
            resolucao: 'Textos injuntivos (ou instrucionais) apresentam comandos, conselhos, ordens, como receitas, manuais de instrução, bulas, etc.'
        },
        {
            questao: 'A paráfrase é um recurso que contribui para a coesão textual, pois:',
            opcoes: [
                { texto: 'Repete as palavras exatamente como foram ditas.', correta: false },
                { texto: 'Reproduz a ideia de um trecho com outras palavras, mantendo o sentido original.', correta: true },
                { texto: 'Altera o sentido original do texto.', correta: false },
                { texto: 'Adiciona informações novas e não relacionadas ao texto.', correta: false }
            ],
            resolucao: 'A paráfrase é uma forma de coesão por retomada de sentido, em que a mesma ideia é expressa de forma diferente.'
        },
        {
            questao: 'Qual das seguintes opções é um exemplo de gênero textual argumentativo?',
            opcoes: [
                { texto: 'Lista de compras.', correta: false },
                { texto: 'Conto de fadas.', correta: false },
                { texto: 'Editorial de jornal.', correta: true },
                { texto: 'Bula de remédio.', correta: false }
            ],
            resolucao: 'O editorial de jornal expressa a opinião do veículo de comunicação sobre um tema, buscando persuadir o leitor, sendo, portanto, um gênero argumentativo.'
        }
    ]
};

questoes['Simulado Português - TESTE 7'] = {
    title: 'Língua Portuguesa - TESTE 7: Figuras de Linguagem e Vícios de Linguagem',
    data: [
        {
            questao: 'Na frase "O sol beijava as montanhas.", qual figura de linguagem está presente?',
            opcoes: [
                { texto: 'Metáfora.', correta: false },
                { texto: 'Comparação.', correta: false },
                { texto: 'Prosopopeia (personificação).', correta: true },
                { texto: 'Hipérbole.', correta: false }
            ],
            resolucao: 'A prosopopeia (ou personificação) atribui características humanas a seres inanimados ou irracionais.'
        },
        {
            questao: 'Em "Estou morrendo de fome.", qual figura de linguagem é utilizada?',
            opcoes: [
                { texto: 'Eufemismo.', correta: false },
                { texto: 'Ironia.', correta: false },
                { texto: 'Hipérbole.', correta: true },
                { texto: 'Antítese.', correta: false }
            ],
            resolucao: 'A hipérbole é o exagero intencional de uma ideia para enfatizá-la.'
        },
        {
            questao: 'Qual figura de linguagem consiste na omissão de um termo facilmente subentendido pelo contexto?',
            opcoes: [
                { texto: 'Pleonasmo.', correta: false },
                { texto: 'Elipse.', correta: true },
                { texto: 'Zeugma.', correta: false },
                { texto: 'Silepse.', correta: false }
            ],
            resolucao: 'A elipse é a omissão de um termo que pode ser facilmente recuperado pelo contexto, sem prejuízo de sentido.'
        },
        {
            questao: 'Na frase "Ele é um leão na batalha.", qual figura de linguagem é empregada?',
            opcoes: [
                { texto: 'Comparação.', correta: false },
                { texto: 'Metáfora.', correta: true },
                { texto: 'Metonímia.', correta: false },
                { texto: 'Sinestesia.', correta: false }
            ],
            resolucao: 'A metáfora é uma comparação implícita, sem o uso de conectivos comparativos (como, tal qual, etc.).'
        },
        {
            questao: 'O vício de linguagem que consiste na repetição de ideias ou palavras desnecessárias (ex: "subir para cima") é chamado de:',
            opcoes: [
                { texto: 'Ambiguidade.', correta: false },
                { texto: 'Pleonasmo vicioso.', correta: true },
                { texto: 'Cacofonia.', correta: false },
                { texto: 'Solecismo.', correta: false }
            ],
            resolucao: 'O pleonasmo vicioso (ou redundância) é a repetição desnecessária de um termo ou ideia, que não adiciona informação nova.'
        },
        {
            questao: 'Qual a figura de linguagem presente em "Eu adoro o doce amargo da vida."?',
            opcoes: [
                { texto: 'Ironia.', correta: false },
                { texto: 'Antítese.', correta: false },
                { texto: 'Oxímoro (paradoxo).', correta: true },
                { texto: 'Comparação.', correta: false }
            ],
            resolucao: 'O oxímoro (ou paradoxo) é a união de termos de sentidos opostos, que se anulam em um contexto, mas criam um novo sentido poético.'
        },
        {
            questao: 'O vício de linguagem que consiste em uma construção frasal que permite dupla interpretação é chamado de:',
            opcoes: [
                { texto: 'Barbarismo.', correta: false },
                { texto: 'Ambiguidade (ou anfibologia).', correta: true },
                { texto: 'Estrangeirismo.', correta: false },
                { texto: 'Arcaísmo.', correta: false }
            ],
            resolucao: 'A ambiguidade ocorre quando uma frase ou expressão pode ter mais de um sentido, dificultando a clareza da comunicação.'
        },
        {
            questao: 'Na frase "Comprei um Portinari.", a figura de linguagem utilizada é:',
            opcoes: [
                { texto: 'Comparação.', correta: false },
                { texto: 'Sinédoque (Metonímia).', correta: true },
                { texto: 'Eufemismo.', correta: false },
                { texto: 'Ironia.', correta: false }
            ],
            resolucao: 'A sinédoque (um tipo de metonímia) consiste na substituição de um termo por outro com o qual tem uma relação de parte-todo, autor-obra, etc. Aqui, o autor pela obra.'
        },
        {
            questao: 'Qual vício de linguagem ocorre quando há um som desagradável na junção de duas ou mais palavras?',
            opcoes: [
                { texto: 'Pleonasmo.', correta: false },
                { texto: 'Barbarismo.', correta: false },
                { texto: 'Cacofonia.', correta: true },
                { texto: 'Solecismo.', correta: false }
            ],
            resolucao: 'A cacofonia é a produção de um som desagradável ou engraçado na sequência de palavras. Ex: "por cada", "boca dela".'
        },
        {
            questao: 'A figura de linguagem que suaviza uma expressão desagradável é a:',
            opcoes: [
                { texto: 'Ironia.', correta: false },
                { texto: 'Silepse.', correta: false },
                { texto: 'Eufemismo.', correta: true },
                { texto: 'Apóstrofe.', correta: false }
            ],
            resolucao: 'O eufemismo é a figura de linguagem que emprega palavras ou expressões mais brandas para amenizar uma ideia ou fato considerado desagradável ou chocante.'
        }
    ]
};

questoes['Simulado Português - TESTE 8'] = {
    title: 'Língua Portuguesa - TESTE 8: Funções da Linguagem e Variação Linguística',
    data: [
        {
            questao: 'Quando o foco da mensagem está no EMISSOR, expressando sentimentos e emoções, a função da linguagem predominante é:',
            opcoes: [
                { texto: 'Referencial.', correta: false },
                { texto: 'Emotiva (ou expressiva).', correta: true },
                { texto: 'Apelativa.', correta: false },
                { texto: 'Fática.', correta: false }
            ],
            resolucao: 'A função emotiva é centrada no emissor, caracterizada pelo uso da primeira pessoa, interjeições e vocabulário expressivo.'
        },
        {
            questao: 'Em um texto que tem como objetivo informar objetivamente sobre um fato, como uma notícia de jornal, a função da linguagem predominante é:',
            opcoes: [
                { texto: 'Poética.', correta: false },
                { texto: 'Referencial (ou denotativa).', correta: true },
                { texto: 'Metalinguística.', correta: false },
                { texto: 'Fática.', correta: false }
            ],
            resolucao: 'A função referencial é focada no referente (contexto, assunto), buscando transmitir informações de forma objetiva, sem juízo de valor.'
        },
        {
            questao: 'Qual função da linguagem é utilizada para testar o canal de comunicação, como em "Alô, está me ouvindo?"?',
            opcoes: [
                { texto: 'Emotiva.', correta: false },
                { texto: 'Apelativa.', correta: false },
                { texto: 'Fática.', correta: true },
                { texto: 'Metalinguística.', correta: false }
            ],
            resolucao: 'A função fática tem como objetivo estabelecer, prolongar ou interromper a comunicação, verificando se o canal está aberto.'
        },
        {
            questao: 'Quando o foco da mensagem está no RECEPTOR, buscando persuadi-lo ou influenciá-lo, a função da linguagem é:',
            opcoes: [
                { texto: 'Conativa (ou apelativa).', correta: true },
                { texto: 'Emotiva.', correta: false },
                { texto: 'Referencial.', correta: false },
                { texto: 'Poética.', correta: false }
            ],
            resolucao: 'A função conativa (ou apelativa) é centrada no receptor, usando imperativos, vocativos e pronomes de segunda pessoa para influenciá-lo.'
        },
        {
            questao: 'Um dicionário é um exemplo de texto em que a função da linguagem predominante é:',
            opcoes: [
                { texto: 'Poética.', correta: false },
                { texto: 'Fática.', correta: false },
                { texto: 'Metalinguística.', correta: true },
                { texto: 'Emotiva.', correta: false }
            ],
            resolucao: 'A função metalinguística ocorre quando a linguagem fala da própria linguagem, como um dicionário que usa a linguagem para explicar a linguagem.'
        },
        {
            questao: 'A variação linguística que ocorre em diferentes regiões geográficas é a variação:',
            opcoes: [
                { texto: 'Histórica.', correta: false },
                { texto: 'Social.', correta: false },
                { texto: 'Geográfica (ou diatópica).', correta: true },
                { texto: 'Situacional.', correta: false }
            ],
            resolucao: 'A variação geográfica (ou diatópica) se manifesta nos regionalismos, sotaques e vocabulário específicos de cada localidade.'
        },
        {
            questao: 'A variação linguística que ocorre de acordo com o nível social e cultural dos falantes é a variação:',
            opcoes: [
                { texto: 'Geográfica.', correta: false },
                { texto: 'Social (ou diastrática).', correta: true },
                { texto: 'Histórica.', correta: false },
                { texto: 'Situacional.', correta: false }
            ],
            resolucao: 'A variação social (ou diastrática) está relacionada a fatores como escolaridade, idade, grupo social, profissão, etc.'
        },
        {
            questao: 'O uso de gírias e jargões profissionais são exemplos de variação linguística:',
            opcoes: [
                { texto: 'Histórica.', correta: false },
                { texto: 'Geográfica.', correta: false },
                { texto: 'Social.', correta: true },
                { texto: 'Estilística.', correta: false }
            ],
            resolucao: 'Gírias e jargões são formas de variação social, características de determinados grupos sociais ou profissionais.'
        },
        {
            questao: 'A variação linguística que se manifesta ao longo do tempo, como a diferença entre o português arcaico e o atual, é a variação:',
            opcoes: [
                { texto: 'Situacional.', correta: false },
                { texto: 'Social.', correta: false },
                { texto: 'Histórica (ou diacrônica).', correta: true },
                { texto: 'Geográfica.', correta: false }
            ],
            resolucao: 'A variação histórica (ou diacrônica) diz respeito às mudanças que a língua sofre ao longo do tempo.'
        },
        {
            questao: 'Qual a função da linguagem predominante em um poema que se preocupa com a escolha das palavras, a sonoridade e o ritmo?',
            opcoes: [
                { texto: 'Referencial.', correta: false },
                { texto: 'Fática.', correta: false },
                { texto: 'Poética.', correta: true },
                { texto: 'Apelativa.', correta: false }
            ],
            resolucao: 'A função poética é centrada na mensagem em si, na forma como ela é construída, explorando a sonoridade, o ritmo, as figuras de linguagem, etc.'
        }
    ]
};

// --- SIMULADOS DE NOÇÕES DE INFORMÁTICA ---

questoes['Simulado Informática - TESTE 9'] = {
    title: 'Noções de Informática - TESTE 9: Hardware e Componentes Básicos',
    data: [
        {
            questao: 'Qual componente do computador é considerado o "cérebro" da máquina, responsável por executar as instruções dos programas?',
            opcoes: [
                { texto: 'Memória RAM.', correta: false },
                { texto: 'Placa-mãe.', correta: false },
                { texto: 'Processador (CPU).', correta: true },
                { texto: 'Disco Rígido (HD).', correta: false }
            ],
            resolucao: 'O **Processador (CPU - Central Processing Unit)** é o principal componente de hardware, responsável por todas as operações lógicas e aritméticas.'
        },
        {
            questao: 'Qual tipo de memória é volátil, ou seja, seus dados são perdidos quando o computador é desligado?',
            opcoes: [
                { texto: 'Memória ROM.', correta: false },
                { texto: 'Memória RAM.', correta: true },
                { texto: 'Disco Rígido (HD).', correta: false },
                { texto: 'SSD.', correta: false }
            ],
            resolucao: 'A **Memória RAM (Random Access Memory)** é a memória de acesso aleatório, utilizada para armazenar dados temporariamente enquanto o computador está em funcionamento.'
        },
        {
            questao: 'O que é um **SSD** em um computador?',
            opcoes: [
                { texto: 'Um tipo de placa de vídeo.', correta: false },
                { texto: 'Um dispositivo de armazenamento de dados que utiliza memória flash, sem partes móveis, sendo mais rápido que um HD tradicional.', correta: true },
                { texto: 'Um tipo de processador mais antigo.', correta: false },
                { texto: 'Um software para otimização do sistema.', correta: false }
            ],
            resolucao: 'O **SSD (Solid State Drive)** é uma tecnologia de armazenamento que oferece maior velocidade e durabilidade em comparação com os HDs convencionais.'
        },
        {
            questao: 'Qual a função da **Placa-mãe** em um computador?',
            opcoes: [
                { texto: 'Armazenar permanentemente os dados.', correta: false },
                { texto: 'Fornecer energia para todos os componentes.', correta: false },
                { texto: 'Conectar e permitir a comunicação entre todos os componentes do computador (processador, memória, placas, etc.).', correta: true },
                { texto: 'Exibir imagens na tela.', correta: false }
            ],
            resolucao: 'A **Placa-mãe** é a placa de circuito impresso principal do computador, onde todos os componentes são conectados e se comunicam.'
        },
        {
            questao: 'Um **periférico de entrada** é aquele que envia dados para o computador. Qual das opções abaixo é um periférico de entrada?',
            opcoes: [
                { texto: 'Monitor.', correta: false },
                { texto: 'Impressora.', correta: false },
                { texto: 'Teclado.', correta: true },
                { texto: 'Caixa de som.', correta: false }
            ],
            resolucao: 'O **teclado** é um periférico de entrada, pois permite ao usuário inserir dados (textos, comandos) no computador.'
        },
        {
            questao: 'Qual a unidade de medida para a capacidade de armazenamento de dados, sendo a menor unidade de informação em um computador?',
            opcoes: [
                { texto: 'Byte.', correta: false },
                { texto: 'Bit.', correta: true },
                { texto: 'Hertz.', correta: false },
                { texto: 'Pixel.', correta: false }
            ],
            resolucao: 'O **Bit (Binary Digit)** é a menor unidade de informação em computação, representando 0 ou 1.'
        },
        {
            questao: 'Um **terabyte (TB)** corresponde a aproximadamente:',
            opcoes: [
                { texto: '1024 megabytes (MB).', correta: false },
                { texto: '1024 gigabytes (GB).', correta: true },
                { texto: '1024 kilobytes (KB).', correta: false },
                { texto: '1024 bits.', correta: false }
            ],
            resolucao: 'As unidades de armazenamento seguem uma progressão de 1024: 1 KB = 1024 bytes, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB.'
        },
        {
            questao: 'Qual a função do **Fonte de Alimentação** (PSU) em um computador?',
            opcoes: [
                { texto: 'Gerenciar as conexões de rede.', correta: false },
                { texto: 'Converter a corrente elétrica da tomada para a voltagem e corrente adequadas aos componentes do computador.', correta: true },
                { texto: 'Refrigerar o processador.', correta: false },
                { texto: 'Armazenar dados temporariamente.', correta: false }
            ],
            resolucao: 'A **Fonte de Alimentação** é responsável por fornecer a energia elétrica necessária para o funcionamento de todos os componentes do computador.'
        },
        {
            questao: 'Um **periférico de saída** é aquele que apresenta informações ao usuário. Qual das opções abaixo é um periférico de saída?',
            opcoes: [
                { texto: 'Scanner.', correta: false },
                { texto: 'Webcam.', correta: false },
                { texto: 'Impressora.', correta: true },
                { texto: 'Microfone.', correta: false }
            ],
            resolucao: 'A **impressora** é um periférico de saída, pois permite que o computador envie informações (texto, imagens) para serem impressas em papel.'
        },
        {
            questao: 'O que é **BIOS** em um computador?',
            opcoes: [
                { texto: 'Um sistema operacional de celular.', correta: false },
                { texto: 'Um software básico armazenado na memória ROM da placa-mãe, responsável por iniciar o hardware e carregar o sistema operacional.', correta: true },
                { texto: 'Um tipo de vírus de computador.', correta: false },
                { texto: 'Uma unidade de medida de velocidade de internet.', correta: false }
            ],
            resolucao: 'A **BIOS (Basic Input/Output System)** é um firmware essencial para o boot do sistema, que realiza a verificação inicial do hardware antes de carregar o sistema operacional.'
        }
    ]
};

questoes['Simulado Informática - TESTE 10'] = {
    title: 'Noções de Informática - TESTE 10: Sistemas Operacionais e Software Básico',
    data: [
        {
            questao: 'Qual a principal função de um **Sistema Operacional (SO)**?',
            opcoes: [
                { texto: 'Conectar o computador à internet.', correta: false },
                { texto: 'Gerenciar o hardware e o software do computador, permitindo que o usuário interaja com a máquina e execute programas.', correta: true },
                { texto: 'Apenas criar documentos de texto.', correta: false },
                { texto: 'Proteger o computador contra vírus.', correta: false }
            ],
            resolucao: 'O **Sistema Operacional** é a base do funcionamento do computador, gerenciando recursos, arquivos, processos e a interface com o usuário.'
        },
        {
            questao: 'Qual dos sistemas operacionais abaixo é de código aberto e livre?',
            opcoes: [
                { texto: 'Microsoft Windows.', correta: false },
                { texto: 'macOS.', correta: false },
                { texto: 'Linux.', correta: true },
                { texto: 'iOS.', correta: false }
            ],
            resolucao: 'O **Linux** é um sistema operacional de código aberto, o que significa que seu código-fonte pode ser modificado e distribuído livremente.'
        },
        {
            questao: 'No Windows, qual atalho de teclado abre o Gerenciador de Tarefas?',
            opcoes: [
                { texto: 'Ctrl + C.', correta: false },
                { texto: 'Ctrl + Alt + Del.', correta: true },
                { texto: 'Alt + F4.', correta: false },
                { texto: 'Windows + L.', correta: false }
            ],
            resolucao: 'O atalho **Ctrl + Alt + Del** permite acessar o Gerenciador de Tarefas, onde é possível finalizar processos, verificar desempenho, entre outras ações.'
        },
        {
            questao: 'Qual a diferença fundamental entre **Software Proprietário** e **Software Livre**?',
            opcoes: [
                { texto: 'Software Proprietário é pago e Software Livre é gratuito.', correta: false },
                { texto: 'Software Proprietário tem seu código-fonte fechado e é distribuído sob licença restritiva, enquanto Software Livre tem código-fonte aberto e permite liberdade de uso, estudo, modificação e redistribuição.', correta: true },
                { texto: 'Software Proprietário é mais seguro que Software Livre.', correta: false },
                { texto: 'Software Livre não tem suporte técnico.', correta: false }
            ],
            resolucao: 'A principal diferença reside na liberdade de acesso ao código-fonte e nas permissões de uso, modificação e distribuição, não necessariamente no custo.'
        },
        {
            questao: 'No Windows, para que serve a "Lixeira"?',
            opcoes: [
                { texto: 'Armazenar arquivos temporários do sistema.', correta: false },
                { texto: 'Recuperar arquivos e pastas excluídos do disco rígido, antes da exclusão permanente.', correta: true },
                { texto: 'Limpar o histórico de navegação na internet.', correta: false },
                { texto: 'Proteger o computador contra vírus.', correta: false }
            ],
            resolucao: 'A **Lixeira** é uma área de armazenamento temporário para arquivos excluídos, permitindo sua recuperação antes de serem definitivamente removidos do sistema.'
        },
        {
            questao: 'Qual a função de um **driver** no contexto de hardware e software?',
            opcoes: [
                { texto: 'Um programa para criar vídeos.', correta: false },
                { texto: 'Um software que permite ao sistema operacional se comunicar e controlar um dispositivo de hardware específico (impressora, placa de vídeo, etc.).', correta: true },
                { texto: 'Um tipo de antivírus.', correta: false },
                { texto: 'Um componente físico do computador.', correta: false }
            ],
            resolucao: 'O **driver** é essencial para que o sistema operacional possa reconhecer e utilizar corretamente os dispositivos de hardware conectados ao computador.'
        },
        {
            questao: 'No Windows, qual a finalidade da função "Hibernar"?',
            opcoes: [
                { texto: 'Desligar o computador completamente.', correta: false },
                { texto: 'Salvar o estado atual do sistema (programas abertos, documentos) no disco rígido e desligar o computador, permitindo um retorno rápido ao trabalho.', correta: true },
                { texto: 'Apenas desligar a tela para economizar energia.', correta: false },
                { texto: 'Reiniciar o computador rapidamente.', correta: false }
            ],
            resolucao: 'A hibernação é útil para economizar energia e retomar o trabalho rapidamente, pois salva o estado da sessão no disco rígido.'
        },
        {
            questao: 'Qual o tipo de software que permite ao usuário realizar tarefas específicas, como editar textos, criar planilhas ou navegar na internet?',
            opcoes: [
                { texto: 'Software de sistema.', correta: false },
                { texto: 'Software utilitário.', correta: false },
                { texto: 'Software aplicativo.', correta: true },
                { texto: 'Firmware.', correta: false }
            ],
            resolucao: 'O **Software aplicativo** é desenvolvido para atender a necessidades específicas do usuário final, como processadores de texto (Word), navegadores (Chrome), etc.'
        },
        {
            questao: 'No Windows, qual a diferença entre "Reiniciar" e "Desligar"?',
            opcoes: [
                { texto: 'São a mesma coisa, apenas nomes diferentes.', correta: false },
                { texto: 'Reiniciar desliga e liga o computador imediatamente, enquanto Desligar encerra completamente o sistema e a energia.', correta: true },
                { texto: 'Reiniciar é mais rápido que Desligar.', correta: false },
                { texto: 'Desligar salva mais dados do que Reiniciar.', correta: false }
            ],
            resolucao: 'Reiniciar é um ciclo de desligamento e inicialização automática, enquanto desligar é o encerramento total das operações e do fornecimento de energia.'
        },
        {
            questao: 'Qual a finalidade de um **firewall** em um sistema operacional?',
            opcoes: [
                { texto: 'Acelerar a velocidade da internet.', correta: false },
                { texto: 'Proteger a rede e o computador, monitorando e controlando o tráfego de dados, bloqueando acessos não autorizados.', correta: true },
                { texto: 'Criar cópias de segurança de arquivos.', correta: false },
                { texto: 'Gerenciar os aplicativos instalados.', correta: false }
            ],
            resolucao: 'O **firewall** atua como uma barreira de segurança entre a rede interna e a externa, controlando o fluxo de informações para prevenir ataques e acessos indevidos.'
        }
    ]
};

questoes['Simulado Informática - TESTE 11'] = {
    title: 'Noções de Informática - TESTE 11: Redes de Computadores e Internet',
    data: [
        {
            questao: 'Qual o principal protocolo utilizado para navegação na World Wide Web (WWW)?',
            opcoes: [
                { texto: 'FTP.', correta: false },
                { texto: 'SMTP.', correta: false },
                { texto: 'HTTP (ou HTTPS).', correta: true },
                { texto: 'POP3.', correta: false }
            ],
            resolucao: 'O **HTTP (Hypertext Transfer Protocol)** e sua versão segura **HTTPS** são a base da comunicação de dados na web, permitindo a transferência de páginas e arquivos.'
        },
        {
            questao: 'O que é um **IP (Internet Protocol)**?',
            opcoes: [
                { texto: 'Um tipo de cabo de rede.', correta: false },
                { texto: 'Um endereço numérico exclusivo que identifica um dispositivo em uma rede de computadores.', correta: true },
                { texto: 'Um programa antivírus.', correta: false },
                { texto: 'Um tipo de navegador de internet.', correta: false }
            ],
            resolucao: 'O **endereço IP** é essencial para o roteamento de dados na internet, permitindo que os pacotes de informação cheguem ao destino correto.'
        },
        {
            questao: 'Qual a diferença entre **Internet** e **Intranet**?',
            opcoes: [
                { texto: 'Internet é uma rede local e Intranet é uma rede global.', correta: false },
                { texto: 'Internet é uma rede pública global, enquanto Intranet é uma rede privada de uma organização que utiliza tecnologias da internet.', correta: true },
                { texto: 'Internet é para empresas e Intranet é para uso doméstico.', correta: false },
                { texto: 'Não há diferença, são sinônimos.', correta: false }
            ],
            resolucao: 'A **Internet** é a rede mundial, acessível publicamente, enquanto a **Intranet** é uma rede restrita a uma organização, mas baseada nos mesmos protocolos (TCP/IP, HTTP, etc.).'
        },
        {
            questao: 'Qual o serviço de e-mail que permite o acesso às mensagens diretamente no servidor, sem que elas sejam baixadas para o computador local, facilitando o acesso de vários dispositivos?',
            opcoes: [
                { texto: 'POP3.', correta: false },
                { texto: 'SMTP.', correta: false },
                { texto: 'IMAP.', correta: true },
                { texto: 'FTP.', correta: false }
            ],
            resolucao: 'O **IMAP (Internet Message Access Protocol)** permite sincronizar o e-mail entre o servidor e múltiplos dispositivos, mantendo as mensagens no servidor.'
        },
        {
            questao: 'Para que serve um **navegador de internet (browser)**?',
            opcoes: [
                { texto: 'Criar sites da internet.', correta: false },
                { texto: 'Visualizar e interagir com páginas da World Wide Web.', correta: true },
                { texto: 'Enviar e receber e-mails.', correta: false },
                { texto: 'Proteger o computador contra vírus.', correta: false }
            ],
            resolucao: 'O **navegador** é o software que permite ao usuário acessar, navegar e exibir o conteúdo da internet (páginas HTML, imagens, vídeos, etc.).'
        },
        {
            questao: 'O que é um **URL (Uniform Resource Locator)**?',
            opcoes: [
                { texto: 'Um tipo de arquivo de imagem.', correta: false },
                { texto: 'O endereço de um recurso (página web, imagem, vídeo) na internet.', correta: true },
                { texto: 'Um programa para editar documentos.', correta: false },
                { texto: 'Um protocolo de segurança.', correta: false }
            ],
            resolucao: 'O **URL** é a forma padronizada de endereçar recursos na internet, indicando o protocolo, domínio e caminho para o recurso.'
        },
        {
            questao: 'Qual o principal objetivo de um sistema de **DNS (Domain Name System)**?',
            opcoes: [
                { texto: 'Acelerar a velocidade da internet.', correta: false },
                { texto: 'Traduzir nomes de domínio (como www.google.com) em endereços IP numéricos, e vice-versa.', correta: true },
                { texto: 'Criptografar dados na rede.', correta: false },
                { texto: 'Gerenciar senhas de usuários.', correta: false }
            ],
            resolucao: 'O **DNS** é um serviço essencial que permite que os usuários acessem sites usando nomes de domínio fáceis de lembrar, em vez de endereços IP numéricos complexos.'
        },
        {
            questao: 'Uma **rede Wi-Fi** é um exemplo de rede:',
            opcoes: [
                { texto: 'Com fio (Ethernet).', correta: false },
                { texto: 'Sem fio (Wireless).', correta: true },
                { texto: 'Ponto a ponto (P2P).', correta: false },
                { texto: 'WAN (Wide Area Network).', correta: false }
            ],
            resolucao: 'O **Wi-Fi** utiliza ondas de rádio para conectar dispositivos à rede, eliminando a necessidade de cabos físicos.'
        },
        {
            questao: 'Qual a função de um **roteador** em uma rede doméstica?',
            opcoes: [
                { texto: 'Armazenar arquivos e documentos.', correta: false },
                { texto: 'Distribuir o sinal de internet para múltiplos dispositivos e gerenciar o tráfego de rede.', correta: true },
                { texto: 'Imprimir documentos sem fio.', correta: false },
                { texto: 'Apenas carregar a bateria de notebooks.', correta: false }
            ],
            resolucao: 'O **roteador** é o equipamento que permite a múltiplos dispositivos compartilharem a mesma conexão de internet e se comunicarem entre si na rede local.'
        },
        {
            questao: 'O que é um **provedor de internet (ISP)**?',
            opcoes: [
                { texto: 'Uma empresa que fabrica computadores.', correta: false },
                { texto: 'Uma empresa que oferece serviços de acesso à internet para usuários e organizações.', correta: true },
                { texto: 'Um software para criar sites.', correta: false },
                { texto: 'Um tipo de antivírus.', correta: false }
            ],
            resolucao: 'O **ISP (Internet Service Provider)** é a empresa que fornece a infraestrutura e os serviços necessários para que os usuários possam se conectar à internet.'
        }
    ]
};

questoes['Simulado Informática - TESTE 12'] = {
    title: 'Noções de Informática - TESTE 12: Segurança da Informação e Malwares',
    data: [
        {
            questao: 'Qual o principal objetivo de um **vírus de computador**?',
            opcoes: [
                { texto: 'Acelerar o desempenho do sistema.', correta: false },
                { texto: 'Se replicar e se espalhar para outros computadores, causando danos ou alterando o funcionamento do sistema.', correta: true },
                { texto: 'Otimizar o uso da bateria.', correta: false },
                { texto: 'Apenas exibir propagandas indesejadas.', correta: false }
            ],
            resolucao: 'Vírus são programas maliciosos que se anexam a outros programas e se replicam, infectando o sistema e potencialmente causando prejuízos.'
        },
        {
            questao: 'Um **phishing** é uma técnica utilizada para:',
            opcoes: [
                { texto: 'Melhorar a segurança da rede.', correta: false },
                { texto: 'Enganar usuários para que revelem informações confidenciais (senhas, dados bancários) por meio de e-mails ou sites falsos.', correta: true },
                { texto: 'Acelerar o download de arquivos.', correta: false },
                { texto: 'Criar backups automáticos.', correta: false }
            ],
            resolucao: 'O **phishing** é uma fraude online que busca "pescar" informações sensíveis do usuário, geralmente por meio de engenharia social.'
        },
        {
            questao: 'Qual o tipo de malware que criptografa os dados do usuário e exige um resgate (geralmente em criptomoedas) para liberá-los?',
            opcoes: [
                { texto: 'Spyware.', correta: false },
                { texto: 'Adware.', correta: false },
                { texto: 'Ransomware.', correta: true },
                { texto: 'Worm.', correta: false }
            ],
            resolucao: 'O **Ransomware** é uma ameaça crescente, que impede o acesso aos arquivos até que um resgate seja pago.'
        },
        {
            questao: 'Para que serve um **antivírus**?',
            opcoes: [
                { texto: 'Acelerar a internet.', correta: false },
                { texto: 'Detectar, prevenir e remover softwares maliciosos (malware) do computador.', correta: true },
                { texto: 'Apenas criar documentos de texto.', correta: false },
                { texto: 'Gerenciar senhas.', correta: false }
            ],
            resolucao: 'O **antivírus** é uma ferramenta essencial para a segurança da informação, protegendo o sistema contra diversas ameaças.'
        },
        {
            questao: 'O que é **backup** no contexto de segurança da informação?',
            opcoes: [
                { texto: 'Um programa para otimizar o disco rígido.', correta: false },
                { texto: 'Uma cópia de segurança de dados e arquivos importantes, para que possam ser recuperados em caso de perda, corrupção ou ataque.', correta: true },
                { texto: 'Uma forma de invadir outros computadores.', correta: false },
                { texto: 'Apenas um tipo de impressora.', correta: false }
            ],
            resolucao: 'O **backup** é uma medida crucial de segurança, garantindo a recuperação dos dados em situações adversas.'
        },
        {
            questao: 'Qual a diferença entre **vírus** e **worm**?',
            opcoes: [
                { texto: 'São a mesma coisa.', correta: false },
                { texto: 'Vírus precisa de um hospedeiro para se replicar, enquanto Worm é um programa independente que se espalha sozinho pela rede.', correta: true },
                { texto: 'Vírus só afeta celulares e Worm só afeta computadores.', correta: false },
                { texto: 'Worm é mais fácil de remover que Vírus.', correta: false }
            ],
            resolucao: 'O **worm** se distingue do vírus por sua capacidade de se autopropagar sem a necessidade de um arquivo hospedeiro.'
        },
        {
            questao: 'Um **Trojan (Cavalo de Troia)** é um tipo de malware que:',
            opcoes: [
                { texto: 'Criptografa arquivos do usuário.', correta: false },
                { texto: 'Se disfarça de programa legítimo para enganar o usuário e instalar outros softwares maliciosos.', correta: true },
                { texto: 'Exibe propagandas excessivas.', correta: false },
                { texto: 'Monitora as atividades do usuário sem consentimento.', correta: false }
            ],
            resolucao: 'O **Cavalo de Troia** se aproveita da confiança do usuário, que o instala acreditando ser um programa útil, mas que esconde funcionalidades maliciosas.'
        },
        {
            questao: 'O que é **engenharia social** no contexto de segurança da informação?',
            opcoes: [
                { texto: 'Uma área da engenharia que estuda redes sociais.', correta: false },
                { texto: 'A manipulação psicológica de pessoas para que executem ações ou divulguem informações confidenciais.', correta: true },
                { texto: 'O desenvolvimento de softwares de segurança avançados.', correta: false },
                { texto: 'A criação de senhas complexas.', correta: false }
            ],
            resolucao: 'A **engenharia social** explora a falha humana, e não tecnológica, para obter acesso a informações ou sistemas.'
        },
        {
            questao: 'Qual a importância de manter o sistema operacional e os softwares **atualizados**?',
            opcoes: [
                { texto: 'Apenas para mudar a aparência do sistema.', correta: false },
                { texto: 'Para corrigir falhas de segurança (vulnerabilidades), melhorar o desempenho e adicionar novas funcionalidades.', correta: true },
                { texto: 'Apenas para gastar mais energia.', correta: false },
                { texto: 'Não há importância, é opcional.', correta: false }
            ],
            resolucao: 'As **atualizações** são cruciais para a segurança e o bom funcionamento do sistema, pois corrigem brechas que poderiam ser exploradas por malwares.'
        },
        {
            questao: 'O que é um **keylogger**?',
            opcoes: [
                { texto: 'Um programa para organizar arquivos.', correta: false },
                { texto: 'Um software malicioso que registra todas as teclas digitadas pelo usuário no teclado, com o objetivo de roubar senhas e informações.', correta: true },
                { texto: 'Um tipo de firewall.', correta: false },
                { texto: 'Um dispositivo para melhorar a conexão Wi-Fi.', correta: false }
            ],
            resolucao: 'O **keylogger** é uma ferramenta de espionagem, frequentemente utilizada para roubo de credenciais bancárias e outros dados sensíveis.'
        }
    ]
};

questoes['Simulado Informática - TESTE 13'] = {
    title: 'Noções de Informática - TESTE 13: Ferramentas de Escritório - Word',
    data: [
        {
            questao: 'No Microsoft Word, qual a função da ferramenta "Quebra de Página"?',
            opcoes: [
                { texto: 'Dividir o documento em duas colunas.', correta: false },
                { texto: 'Iniciar um novo parágrafo na mesma página.', correta: false },
                { texto: 'Forçar o início de um novo conteúdo em uma nova página, mesmo que a página atual não esteja completa.', correta: true },
                { texto: 'Alterar o tamanho da fonte do texto.', correta: false }
            ],
            resolucao: 'A **Quebra de Página** é um recurso de formatação de layout que garante que um conteúdo específico comece sempre em uma nova página, independentemente do que o precede.'
        },
        {
            questao: 'Qual o atalho de teclado para **Salvar** um documento no Word?',
            opcoes: [
                { texto: 'Ctrl + C.', correta: false },
                { texto: 'Ctrl + V.', correta: false },
                { texto: 'Ctrl + S.', correta: true },
                { texto: 'Ctrl + Z.', correta: false }
            ],
            resolucao: 'O atalho **Ctrl + S** (Save) é universalmente utilizado para salvar documentos na maioria dos softwares.'
        },
        {
            questao: 'No Word, para que serve a função "Localizar e Substituir"?',
            opcoes: [
                { texto: 'Apenas para encontrar palavras no documento.', correta: false },
                { texto: 'Para encontrar um texto específico e, opcionalmente, substituí-lo por outro.', correta: true },
                { texto: 'Para verificar a ortografia e a gramática.', correta: false },
                { texto: 'Para inserir imagens no documento.', correta: false }
            ],
            resolucao: 'A função **Localizar e Substituir** é uma ferramenta poderosa para edição de texto em massa, permitindo alterações rápidas e eficientes.'
        },
        {
            questao: 'Para que serve a "Margem" em um documento do Word?',
            opcoes: [
                { texto: 'Definir o tamanho da fonte.', correta: false },
                { texto: 'Determinar o espaço em branco entre o texto e as bordas da página.', correta: true },
                { texto: 'Inserir cabeçalhos e rodapés.', correta: false },
                { texto: 'Criar listas numeradas.', correta: false }
            ],
            resolucao: 'As **margens** são essenciais para o layout do documento, definindo os limites de impressão e a área de texto utilizável.'
        },
        {
            questao: 'Qual a finalidade da função "Contar Palavras" no Word?',
            opcoes: [
                { texto: 'Verificar a gramática do texto.', correta: false },
                { texto: 'Fornecer estatísticas sobre o número de palavras, caracteres, parágrafos e linhas em um documento.', correta: true },
                { texto: 'Substituir palavras por sinônimos.', correta: false },
                { texto: 'Apenas verificar a ortografia.', correta: false }
            ],
            resolucao: 'A função **Contar Palavras** é útil para escritores, estudantes e profissionais que precisam atender a limites de texto ou analisar a extensão de um documento.'
        },
        {
            questao: 'No Word, qual o significado de "Justificar" o texto?',
            opcoes: [
                { texto: 'Alinhar o texto à esquerda da página.', correta: false },
                { texto: 'Alinhar o texto à direita da página.', correta: false },
                { texto: 'Alinhar o texto tanto à margem esquerda quanto à direita, preenchendo o espaço entre elas.', correta: true },
                { texto: 'Centralizar o texto na página.', correta: false }
            ],
            resolucao: 'O alinhamento **justificado** cria um TESTE de texto uniforme, com ambas as margens alinhadas, frequentemente utilizado em documentos formais e livros.'
        },
        {
            questao: 'Qual a função da "Formatação de Pincel" no Word?',
            opcoes: [
                { texto: 'Pintar imagens no documento.', correta: false },
                { texto: 'Copiar a formatação de um trecho de texto e aplicá-la a outro, sem copiar o conteúdo.', correta: true },
                { texto: 'Alterar a cor do fundo da página.', correta: false },
                { texto: 'Inserir uma figura.', correta: false }
            ],
            resolucao: 'A **Formatação de Pincel** (ou Pincel de Formatação) é uma ferramenta que agiliza a aplicação de estilos e formatações de texto.'
        },
        {
            questao: 'Para que serve a "Tabela de Conteúdo" (Sumário) automática no Word?',
            opcoes: [
                { texto: 'Organizar as imagens do documento.', correta: false },
                { texto: 'Criar um índice automatizado com os títulos e números de página do documento, facilitando a navegação.', correta: true },
                { texto: 'Somente para criar listas numeradas.', correta: false },
                { texto: 'Converter o documento para PDF.', correta: false }
            ],
            resolucao: 'A **Tabela de Conteúdo** automática é um recurso que se baseia nos estilos de título aplicados ao documento para gerar um sumário dinâmico.'
        },
        {
            questao: 'No Word, qual a finalidade do "Modo de Exibição de Leitura"?',
            opcoes: [
                { texto: 'Permitir a edição completa do documento.', correta: false },
                { texto: 'Otimizar a visualização do documento para leitura, ocultando ferramentas e menus, e ajustando o texto para a tela.', correta: true },
                { texto: 'Imprimir o documento em alta resolução.', correta: false },
                { texto: 'Exibir o documento como seria em uma página da web.', correta: false }
            ],
            resolucao: 'O **Modo de Exibição de Leitura** proporciona uma experiência de leitura mais imersiva, eliminando distrações e otimizando o layout para a tela.'
        },
        {
            questao: 'Qual a função de um "Cabeçalho e Rodapé" no Word?',
            opcoes: [
                { texto: 'Apenas inserir números de página.', correta: false },
                { texto: 'Inserir texto, imagens ou números de página que se repetem automaticamente na parte superior (cabeçalho) e inferior (rodapé) de cada página do documento.', correta: true },
                { texto: 'Definir as margens do documento.', correta: false },
                { texto: 'Criar uma nova seção no documento.', correta: false }
            ],
            resolucao: '**Cabeçalhos e rodapés** são utilizados para incluir informações repetitivas, como títulos de capítulo, nomes de documentos, números de página, etc.'
        }
    ]
};

questoes['Simulado Informática - TESTE 14'] = {
    title: 'Noções de Informática - TESTE 14: Ferramentas de Escritório - Excel',
    data: [
        {
            questao: 'No Microsoft Excel, uma **célula** é identificada por:',
            opcoes: [
                { texto: 'Um número.', correta: false },
                { texto: 'Uma letra.', correta: false },
                { texto: 'Uma letra que indica a coluna e um número que indica a linha (ex: A1, B5).', correta: true },
                { texto: 'A cor de seu preenchimento.', correta: false }
            ],
            resolucao: 'A referência de célula no Excel é a combinação da letra da coluna e do número da linha, formando um identificador único para cada célula.'
        },
        {
            questao: 'Qual a finalidade da função **SOMA()** no Excel?',
            opcoes: [
                { texto: 'Contar o número de células preenchidas.', correta: false },
                { texto: 'Somar os valores de um intervalo de células.', correta: true },
                { texto: 'Calcular a média de um conjunto de números.', correta: false },
                { texto: 'Multiplicar dois números.', correta: false }
            ],
            resolucao: 'A função **SOMA()** é uma das funções mais básicas e frequentemente utilizadas para realizar a adição de valores em uma planilha.'
        },
        {
            questao: 'No Excel, um **intervalo de células** é representado por:',
            opcoes: [
                { texto: 'Apenas uma célula.', correta: false },
                { texto: 'O endereço da primeira célula seguido de dois pontos e o endereço da última célula (ex: A1:C5).', correta: true },
                { texto: 'Uma lista de células separadas por vírgulas.', correta: false },
                { texto: 'Um nome definido pelo usuário.', correta: false }
            ],
            resolucao: 'A notação de intervalo (dois pontos) indica todas as células entre a célula inicial e a final, incluindo-as.'
        },
        {
            questao: 'Para que serve a função **MÉDIA()** no Excel?',
            opcoes: [
                { texto: 'Encontrar o maior valor em um conjunto de dados.', correta: false },
                { texto: 'Calcular a média aritmética dos valores em um intervalo de células.', correta: true },
                { texto: 'Somar apenas os valores positivos.', correta: false },
                { texto: 'Contar células vazias.', correta: false }
            ],
            resolucao: 'A função **MÉDIA()** calcula a média aritmética de um conjunto de números, dividindo a soma dos valores pelo número de itens.'
        },
        {
            questao: 'No Excel, qual o resultado da fórmula **=SE(5 > 3; "Verdadeiro"; "Falso")**?',
            opcoes: [
                { texto: '5 > 3.', correta: false },
                { texto: 'Verdadeiro.', correta: true },
                { texto: 'Falso.', correta: false },
                { texto: 'Erro.', correta: false }
            ],
            resolucao: 'A função **SE()** avalia uma condição lógica. Como "5 > 3" é verdadeiro, a função retorna o valor da primeira opção ("Verdadeiro").'
        },
        {
            questao: 'A principal finalidade de um **gráfico** no Excel é:',
            opcoes: [
                { texto: 'Realizar cálculos complexos.', correta: false },
                { texto: 'Representar visualmente dados numéricos, facilitando a análise e compreensão de tendências e comparações.', correta: true },
                { texto: 'Armazenar grandes volumes de texto.', correta: false },
                { texto: 'Criar apresentações de slides.', correta: false }
            ],
            resolucao: 'Os **gráficos** são ferramentas visuais poderosas para transformar dados brutos em informações compreensíveis, revelando padrões e relações.'
        },
        {
            questao: 'Qual a função da **formatação condicional** no Excel?',
            opcoes: [
                { texto: 'Apenas alterar a cor das células.', correta: false },
                { texto: 'Aplicar formatação (cores, ícones, barras) automaticamente às células com base em regras ou condições específicas, destacando dados importantes.', correta: true },
                { texto: 'Proteger as células contra edição.', correta: false },
                { texto: 'Criar fórmulas personalizadas.', correta: false }
            ],
            resolucao: 'A **formatação condicional** é útil para identificar rapidamente valores altos/baixos, duplicados, tendências e exceções em grandes conjuntos de dados.'
        },
        {
            questao: 'No Excel, para que serve a função **CONT.SE()**?',
            opcoes: [
                { texto: 'Somar células com base em uma condição.', correta: false },
                { texto: 'Contar o número de células em um intervalo que atendem a uma condição específica.', correta: true },
                { texto: 'Contar todas as células preenchidas.', correta: false },
                { texto: 'Verificar se uma célula está vazia.', correta: false }
            ],
            resolucao: 'A função **CONT.SE()** é utilizada para realizar contagens condicionais, útil para analisar dados que correspondem a critérios específicos.'
        },
        {
            questao: 'Qual o atalho de teclado para **Copiar** dados em uma planilha do Excel?',
            opcoes: [
                { texto: 'Ctrl + X.', correta: false },
                { texto: 'Ctrl + V.', correta: false },
                { texto: 'Ctrl + C.', correta: true },
                { texto: 'Ctrl + Z.', correta: false }
            ],
            resolucao: 'O atalho **Ctrl + C** (Copy) é padrão para copiar em diversas aplicações, incluindo o Excel.'
        },
        {
            questao: 'A principal diferença entre uma **referência relativa** e uma **referência absoluta** no Excel é que:',
            opcoes: [
                { texto: 'Referências relativas nunca mudam e absolutas sempre mudam.', correta: false },
                { texto: 'Referências relativas mudam quando a fórmula é copiada para outra célula, enquanto referências absolutas ($A$1) permanecem fixas, mesmo ao copiar a fórmula.', correta: true },
                { texto: 'Referências absolutas só funcionam com números.', correta: false },
                { texto: 'Referências relativas são sempre mais rápidas.', correta: false }
            ],
            resolucao: 'Entender a diferença entre referências relativas e absolutas é fundamental para criar fórmulas eficientes no Excel, especialmente ao arrastar para outras células.'
        }
    ]
};