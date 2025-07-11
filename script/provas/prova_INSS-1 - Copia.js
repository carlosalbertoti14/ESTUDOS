// media/provas.js

const questoes = {
    'Simulado INSS - Prova 1': {
        title: 'TESTE-1',
        data: [ // 'data' vai conter o array de questões
            {
            questao: 'De acordo com a Constituição Federal de 1988, a seguridade social brasileira compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, visando assegurar os direitos relativos à:',
            opcoes: [
                { texto: 'A seguridade social compreende a saúde, a previdência social e a assistência social.', correta: true },
                { texto: 'A seguridade social compreende apenas a previdência social e a assistência social.', correta: false },
                { texto: 'A seguridade social compreende a saúde e a previdência social, excluindo a assistência social.', correta: false },
                { texto: 'A seguridade social é exclusivamente responsabilidade do Ministério da Previdência Social.', correta: false }
            ],
            resolucao: 'A Constituição Federal de 1988, em seu Art. 194, define a seguridade social como um conjunto integrado de ações que englobam a saúde, a previdência social e a assistência social.'
        },
        {
            questao: 'Sobre a Previdência Social no Brasil, é correto afirmar que:',
            opcoes: [
                { texto: 'Apenas os trabalhadores com carteira assinada têm direito à Previdência Social.', correta: false },
                { texto: 'A Previdência Social é um sistema contributivo e de filiação obrigatória, respeitando os princípios da universalidade de cobertura e do cálculo dos benefícios.', correta: true },
                { texto: 'A Previdência Social oferece benefícios para todos os cidadãos, independentemente de contribuição prévia.', correta: false },
                { texto: 'Os benefícios da Previdência Social são custeados exclusivamente pelos empregadores.', correta: false }
            ],
            resolucao: 'A Previdência Social é um sistema de caráter contributivo e de filiação obrigatória, o que significa que o acesso aos benefícios depende de contribuições prévias. Ela busca a universalidade de cobertura e do cálculo dos benefícios, mas com a contrapartida das contribuições.'
        },
        {
            questao: 'Em relação ao auxílio-doença, assinale a alternativa correta:',
            opcoes: [
                { texto: 'Auxílio-doença é devido ao segurado que, após cumprir a carência exigida, fica incapacitado para o seu trabalho ou para a sua atividade habitual por mais de 15 dias consecutivos.', correta: true },
                { texto: 'Auxílio-doença é um benefício concedido apenas a trabalhadores rurais.', correta: false },
                { texto: 'Não há necessidade de carência para a concessão de auxílio-doença.', correta: false },
                { texto: 'O auxílio-doença é um benefício vitalício, uma vez concedido.', correta: false }
            ],
            resolucao: 'O auxílio-doença (atualmente auxílio por incapacidade temporária) é um benefício para o segurado que fica incapacitado para o trabalho por mais de 15 dias, após cumprir a carência mínima (geralmente 12 contribuições mensais), salvo exceções.'
        },
        {
            questao: 'Sobre os tipos de aposentadoria e as recentes alterações legislativas, assinale a opção correta:',
            opcoes: [
                { texto: 'A idade mínima para aposentadoria por idade é a mesma para homens e mulheres em todas as situações.', correta: false },
                { texto: 'A aposentadoria por tempo de contribuição foi extinta pela Reforma da Previdência de 2019, sendo substituída pela aposentadoria por idade ou por pontos.', correta: true },
                { texto: 'A aposentadoria especial é concedida a qualquer trabalhador, independentemente da atividade exercida.', correta: false },
                { texto: 'O valor da aposentadoria por invalidez é sempre de 100% da média das contribuições.', correta: false }
            ],
            resolucao: 'A Emenda Constitucional nº 103/2019 (Reforma da Previdência) extinguiu a aposentadoria por tempo de contribuição como regra geral, introduzindo novas regras de transição baseadas em idade e/ou pontos, além da aposentadoria por idade.'
        },
        {
            questao: 'Em relação ao benefício de salário-maternidade, assinale a alternativa correta:',
            opcoes: [
                { texto: 'O salário-maternidade é devido à segurada empregada, trabalhadora avulsa e empregada doméstica, durante 120 dias, com início até 28 dias antes do parto ou na data do parto.', correta: true },
                { texto: 'O salário-maternidade é um benefício exclusivo para mulheres que trabalham com carteira assinada.', correta: false },
                { texto: 'O pai pode requerer o salário-maternidade em caso de falecimento da mãe, mas por um período reduzido.', correta: false },
                { texto: 'Não há exigência de carência para a concessão do salário-maternidade.', correta: false }
            ],
            resolucao: 'O salário-maternidade é um benefício previdenciário devido às seguradas (e em algumas situações ao segurado) por 120 dias, abrangendo diversas categorias, com início que pode variar de até 28 dias antes do parto ou na data do parto.'
        },
        {
            questao: 'Sobre a pensão por morte, é correto afirmar:',
            opcoes: [
                { texto: 'A pensão por morte é devida aos dependentes do segurado falecido, independentemente de este estar contribuindo para o INSS na data do óbito.', correta: false },
                { texto: 'O cônjuge e os filhos menores de 21 anos não emancipados são considerados dependentes preferenciais para fins de pensão por morte.', correta: true },
                { texto: 'A pensão por morte é vitalícia para todos os dependentes, independentemente da idade ou condição.', correta: false },
                { texto: 'Os pais e irmãos nunca podem ser considerados dependentes para fins de pensão por morte.', correta: false }
            ],
            resolucao: 'A pensão por morte é um benefício pago aos dependentes do segurado que faleceu ou teve sua morte presumida. A lei estabelece classes de dependentes, sendo o cônjuge/companheiro(a) e os filhos menores de 21 anos (ou inválidos/deficientes) os de primeira classe, com dependência econômica presumida.'
        },
        {
            questao: 'O auxílio-acidente é um benefício previdenciário devido pelo INSS a quem:',
            opcoes: [
                { texto: 'É devido ao segurado que sofrer acidente de qualquer natureza, resultando em sequelas que impliquem redução da capacidade para o trabalho que habitualmente exercia.', correta: true },
                { texto: 'O auxílio-acidente é um benefício temporário, concedido enquanto durar a redução da capacidade.', correta: false },
                { texto: 'O auxílio-acidente substitui o salário de contribuição do segurado.', correta: false },
                { texto: 'A concessão do auxílio-acidente exige período de carência de 12 meses.', correta: false }
            ],
            resolucao: 'O auxílio-acidente é um benefício de caráter indenizatório, pago após a consolidação das lesões decorrentes de acidente de qualquer natureza, que resultem em sequelas que impliquem redução da capacidade para o trabalho habitual do segurado. Ele não impede o segurado de continuar trabalhando.'
        },
        {
            questao: 'Sobre o Benefício de Prestação Continuada (BPC), assinale a alternativa correta:',
            opcoes: [
                { texto: 'É um benefício de prestação continuada da assistência social, que garante um salário mínimo mensal à pessoa com deficiência ou idoso com 65 anos ou mais que comprovem não possuir meios de prover a própria manutenção, nem de tê-la provida por sua família.', correta: true },
                { texto: 'O BPC é um benefício previdenciário que exige contribuição prévia ao INSS.', correta: false },
                { texto: 'A idade mínima para o idoso ter direito ao BPC é de 60 anos.', correta: false },
                { texto: 'Pessoas com deficiência têm direito ao BPC independentemente de sua renda familiar.', correta: false }
            ],
            resolucao: 'O BPC é um benefício assistencial (Lei Orgânica da Assistência Social - LOAS), ou seja, não exige contribuição prévia. É destinado a idosos (65 anos ou mais) e pessoas com deficiência que comprovem não ter meios de prover a própria subsistência ou de tê-la provida pela família.'
        },
        {
            questao: 'O que se entende por "período de graça" na Previdência Social brasileira?',
            opcoes: [
                { texto: 'O período de graça é o tempo que o segurado mantém a qualidade de segurado, independentemente de contribuições, após cessar as contribuições para o INSS, variando de 3 a 36 meses, dependendo da situação.', correta: true },
                { texto: 'O período de graça é o tempo máximo de atraso nas contribuições sem perder a qualidade de segurado.', correta: false },
                { texto: 'Todos os segurados mantêm a qualidade de segurado por 12 meses após a última contribuição, sem exceção.', correta: false },
                { texto: 'Durante o período de graça, o segurado não tem direito a nenhum benefício previdenciário.', correta: false }
            ],
            resolucao: 'O período de graça é um intervalo de tempo em que o segurado, mesmo sem contribuir para o INSS, mantém a sua qualidade de segurado e, consequentemente, o direito a alguns benefícios. Sua duração varia de acordo com o tipo de segurado e sua situação contributiva anterior.'
        },
        {
            questao: 'Quais são as principais fontes de custeio da Seguridade Social, conforme a legislação brasileira?',
            opcoes: [
                { texto: 'São fontes de custeio da Seguridade Social as contribuições sociais dos empregadores, dos trabalhadores e sobre a receita de concursos de prognósticos, entre outras.', correta: true },
                { texto: 'O custeio da Seguridade Social é feito exclusivamente por impostos gerais da União.', correta: false },
                { texto: 'Apenas os trabalhadores formais contribuem para o custeio da Seguridade Social.', correta: false },
                { texto: 'As contribuições para a Seguridade Social são facultativas para todos os segurados.', correta: false }
            ],
            resolucao: 'A Seguridade Social no Brasil é financiada por diversas fontes, conforme o Art. 195 da Constituição Federal, incluindo as contribuições sociais de empregadores (sobre a folha de salários, receita ou faturamento, lucro), trabalhadores e sobre a receita de concursos de prognósticos, entre outras fontes de receita da União.'
        }
    ],
    'TESTE-2': [
        // Suas questões da prova2 aqui
        {
            questao: 'Sobre a previdência complementar, assinale a alternativa correta:',
            opcoes: [
                { texto: 'A previdência complementar possui caráter facultativo e é organizada de forma autônoma em relação ao Regime Geral de Previdência Social.', correta: true },
                { texto: 'A previdência complementar é de filiação obrigatória para todos os trabalhadores brasileiros.', correta: false },
                { texto: 'Os benefícios da previdência complementar são garantidos pelo INSS.', correta: false },
                { texto: 'A previdência complementar substitui integralmente a aposentadoria do Regime Geral.', correta: false }
            ],
            resolucao: 'A previdência complementar é um sistema de caráter facultativo, autônomo em relação ao Regime Geral de Previdência Social (RGPS), oferecendo planos de benefícios adicionais aos oferecidos pelo INSS. Não é de filiação obrigatória e seus benefícios são geridos por entidades próprias.'
        },
        {
            questao: 'Em relação ao segurado especial, assinale a alternativa correta:',
            opcoes: [
                { texto: 'A inscrição do segurado especial é automática, não necessitando de qualquer comprovação.', correta: false },
                { texto: 'O segurado especial, para ter direito aos benefícios, deve comprovar o exercício de atividade rural, individualmente ou em regime de economia familiar.', correta: true },
                { texto: 'Segurado especial é aquele que possui vínculo de emprego formal com uma empresa rural.', correta: false },
                { texto: 'A carência para aposentadoria por idade do segurado especial é de 180 contribuições mensais.', correta: false }
            ],
            resolucao: 'O segurado especial é o produtor rural, pescador artesanal, entre outros, que exerce suas atividades individualmente ou em regime de economia familiar, sem empregados permanentes, e comprova essa atividade para ter direito aos benefícios previdenciários.'
        },
        {
            questao: 'Assinale a alternativa correta sobre o auxílio-reclusão:',
            opcoes: [
                { texto: 'O auxílio-reclusão é um benefício pago aos dependentes do segurado de baixa renda que for recolhido à prisão em regime fechado ou semiaberto.', correta: true },
                { texto: 'O auxílio-reclusão é devido ao próprio segurado que está preso.', correta: false },
                { texto: 'Não há exigência de carência para a concessão do auxílio-reclusão.', correta: false },
                { texto: 'O valor do auxílio-reclusão é sempre um salário mínimo, independentemente da média das contribuições do segurado.', correta: false }
            ],
            resolucao: 'O auxílio-reclusão é um benefício devido aos dependentes do segurado do INSS que for recolhido à prisão (regime fechado ou semiaberto) e que possua baixa renda no momento da reclusão, após cumprir a carência de 24 contribuições mensais.'
        },
        {
            questao: 'Sobre o benefício de salário-família, é correto afirmar que:',
            opcoes: [
                { texto: 'O salário-família é um benefício pago mensalmente aos segurados de baixa renda que possuam filhos com idade de até 14 anos ou filhos inválidos de qualquer idade.', correta: true },
                { texto: 'O salário-família é devido a todos os segurados, independentemente da renda familiar.', correta: false },
                { texto: 'A idade limite para recebimento do salário-família por filho é de 18 anos.', correta: false },
                { texto: 'O salário-família é um benefício pago diretamente pelo INSS a todos os trabalhadores com filhos.', correta: false }
            ],
            resolucao: 'O salário-família é pago mensalmente aos segurados empregados e trabalhadores avulsos que recebem até um determinado limite de salário de contribuição e que tenham filhos menores de 14 anos ou inválidos de qualquer idade. O valor varia por faixa de renda.'
        },
        {
            questao: 'Qual é a principal lei que regulamenta os Planos de Benefícios da Previdência Social no Brasil?',
            opcoes: [
                { texto: 'A Lei nº 8.213/91 dispõe sobre os Planos de Benefícios da Previdência Social, estabelecendo as regras para a concessão e manutenção dos benefícios previdenciários.', correta: true },
                { texto: 'A Lei nº 8.213/91 trata exclusivamente do custeio da Seguridade Social.', correta: false },
                { texto: 'A Lei nº 8.213/91 foi revogada integralmente pela Reforma da Previdência de 2019.', correta: false },
                { texto: 'A Lei nº 8.213/91 disciplina apenas os benefícios de aposentadoria.', correta: false }
            ],
            resolucao: 'A Lei nº 8.213, de 24 de julho de 1991, é a principal legislação que detalha os Planos de Benefícios da Previdência Social, abordando todos os tipos de benefícios (aposentadorias, pensões, auxílios, etc.), seus requisitos e regras de concessão.'
        },
        {
            questao: 'No contexto da Previdência Social, o que significa "carência"?',
            opcoes: [
                { texto: 'A carência é o número mínimo de contribuições mensais indispensáveis para que o segurado faça jus ao benefício, consideradas a partir da data de filiação.', correta: true },
                { texto: 'Carência é o período em que o segurado não pode solicitar nenhum benefício.', correta: false },
                { texto: 'Todos os benefícios previdenciários exigem o cumprimento de carência.', correta: false },
                { texto: 'A carência é sempre de 12 meses para todos os tipos de benefícios.', correta: false }
            ],
            resolucao: 'Carência é o período mínimo de contribuições mensais (ou meses de atividade, no caso do segurado especial) que o segurado deve ter para poder requerer determinados benefícios previdenciários. Esse período varia de acordo com o benefício, não sendo exigido para todos (ex: pensão por morte, auxílio-acidente).'
        },
        {
            questao: 'O que é o "salário de contribuição" para fins de Previdência Social?',
            opcoes: [
                { texto: 'É o valor sobre o qual incidem as contribuições previdenciárias do segurado e da empresa.', correta: true },
                { texto: 'Salário de contribuição é o valor total de todos os rendimentos do segurado em um mês.', correta: false },
                { texto: 'É o valor do benefício que o segurado irá receber do INSS.', correta: false },
                { texto: 'Não há limite máximo para o salário de contribuição.', correta: false }
            ],
            resolucao: 'O salário de contribuição é a base de cálculo sobre a qual são aplicadas as alíquotas de contribuição para a Previdência Social. Ele tem um limite mínimo (salário mínimo) e um limite máximo (teto do INSS), e é fundamental para o cálculo dos benefícios futuros.'
        },
        {
            questao: 'O que é o serviço de Reabilitação Profissional oferecido pela Previdência Social?',
            opcoes: [
                { texto: 'É um serviço que visa reabilitar profissionalmente os segurados para o retorno ao mercado de trabalho, quando há redução ou perda da capacidade laboral.', correta: true },
                { texto: 'A reabilitação profissional é um benefício em dinheiro pago mensalmente aos segurados.', correta: false },
                { texto: 'Somente segurados que sofreram acidente de trabalho têm direito à reabilitação profissional.', correta: false },
                { texto: 'A reabilitação profissional é facultativa para o segurado que for encaminhado pelo INSS.', correta: false }
            ],
            resolucao: 'A Reabilitação Profissional é um serviço oferecido pela Previdência Social para segurados (por doença ou acidente) que, devido a incapacidade, precisam de readaptação ou qualificação profissional para retornar ao mercado de trabalho em nova função ou na mesma, mas com adaptações.'
        },
        {
            questao: 'Em relação à Assistência Social, integrante da Seguridade Social, assinale a alternativa correta:',
            opcoes: [
                { texto: 'A Assistência Social é um direito do cidadão e dever do Estado, não exigindo contribuição para sua concessão.', correta: true },
                { texto: 'A Assistência Social é o mesmo que Previdência Social.', correta: false },
                { texto: 'O Benefício de Prestação Continuada (BPC) é um benefício da Previdência Social.', correta: false },
                { texto: 'A Assistência Social é financiada exclusivamente por contribuições dos trabalhadores.', correta: false }
            ],
            resolucao: 'A Assistência Social, diferentemente da Previdência Social, possui caráter não contributivo. Ela é um dever do Estado e um direito do cidadão que dela necessitar, independentemente de contribuições prévias, sendo financiada por recursos do orçamento da seguridade social.'
        },
        {
            questao: 'O que significa "qualidade de segurado" na Previdência Social?',
            opcoes: [
                { texto: 'A perda da qualidade de segurado implica a perda de todos os direitos aos benefícios previdenciários, independentemente das contribuições anteriores.', correta: false },
                { texto: 'A qualidade de segurado é mantida indefinidamente, desde que o segurado já tenha feito alguma contribuição ao INSS.', correta: false },
                { texto: 'A qualidade de segurado é a condição de filiado ao Regime Geral de Previdência Social, que garante o direito aos benefícios previdenciários.', correta: true },
                { texto: 'A qualidade de segurado é exigida apenas para o auxílio-doença e aposentadoria por invalidez.', correta: false }
            ],
            resolucao: 'A qualidade de segurado é a condição legal que vincula o indivíduo ao Regime Geral de Previdência Social. É essencial para ter direito aos benefícios previdenciários, pois comprova que o segurado está protegido pelo sistema, seja por estar contribuindo ou por estar no período de graça.'
        }
    ],
    'TESTE-2': [
        // Suas questões da prova3 aqui
        {
            questao: 'O Princípio da Universalidade da Cobertura e do Atendimento na Seguridade Social significa que:',
            opcoes: [
                { texto: 'Todos os cidadãos brasileiros, independentemente de contribuição, têm direito a todos os benefícios da seguridade social.', correta: false },
                { texto: 'A seguridade social deve abranger o maior número possível de pessoas e de riscos sociais.', correta: true },
                { texto: 'Apenas os trabalhadores formais têm cobertura pela seguridade social.', correta: false },
                { texto: 'Os benefícios da seguridade social são pagos universalmente em todo o mundo.', correta: false }
            ],
            resolucao: 'O princípio da Universalidade da Cobertura e do Atendimento preconiza que a Seguridade Social deve proteger o maior número possível de pessoas e abranger o maior número de riscos e eventos sociais (doença, idade, morte, etc.), independentemente de contribuição para todos os seus pilares (Saúde, Previdência e Assistência).'
        },
        {
            questao: 'Qual das seguintes opções representa uma característica do princípio da seletividade e distributividade na prestação dos benefícios e serviços da seguridade social?',
            opcoes: [
                { texto: 'A concessão de benefícios é ilimitada, sem critérios de necessidade.', correta: false },
                { texto: 'A priorização de benefícios para aqueles que mais contribuíram financeiramente.', correta: false },
                { texto: 'A distribuição dos recursos e benefícios conforme as prioridades e necessidades sociais, selecionando riscos e atendimentos.', correta: true },
                { texto: 'A garantia de que todos os benefícios terão o mesmo valor para todos os segurados.', correta: false }
            ],
            resolucao: 'O princípio da Seletividade e Distributividade significa que os benefícios e serviços da seguridade social devem ser distribuídos e priorizados de acordo com as necessidades e prioridades da população, buscando atender os riscos sociais de forma eficiente e justa, não necessariamente igualitária.'
        },
        {
            questao: 'A inscrição do segurado empregado na Previdência Social ocorre:',
            opcoes: [
                { texto: 'No momento em que ele comparece a uma agência do INSS para se cadastrar.', correta: false },
                { texto: 'Automaticamente, com o início da atividade remunerada e a primeira filiação ao Regime Geral de Previdência Social.', correta: true },
                { texto: 'Somente após o período de experiência no emprego.', correta: false },
                { texto: 'Apenas quando o empregador realiza o primeiro recolhimento da contribuição.', correta: false }
            ],
            resolucao: 'Para o segurado empregado, a filiação ao Regime Geral de Previdência Social (RGPS) é automática e obrigatória a partir do momento em que começa a exercer a atividade remunerada, ou seja, com o vínculo empregatício. O registro em carteira de trabalho já o filia ao sistema.'
        },
        {
            questao: 'O que é o Censo Previdenciário?',
            opcoes: [
                { texto: 'Um levantamento anual de todos os beneficiários do INSS para fins de reajuste de valores.', correta: false },
                { texto: 'Um serviço de atendimento telefônico para dúvidas sobre benefícios previdenciários.', correta: false },
                { texto: 'Uma ferramenta de pesquisa para verificar a situação contributiva de todos os cidadãos brasileiros.', correta: false },
                { texto: 'Um procedimento realizado pelo INSS para a atualização de dados cadastrais dos segurados e beneficiários, visando evitar fraudes e irregularidades.', correta: true }
            ],
            resolucao: 'O Censo Previdenciário é uma ferramenta importante utilizada pelo INSS para atualizar e validar as informações dos segurados e beneficiários, garantindo a integridade do sistema, a correta concessão de benefícios e o combate a fraudes e irregularidades.'
        },
        {
            questao: 'Em caso de perda da qualidade de segurado, é correto afirmar que:',
            opcoes: [
                { texto: 'Todos os períodos de contribuição anteriores são imediatamente perdidos e não podem ser utilizados para nenhum benefício futuro.', correta: false },
                { texto: 'O segurado perde o direito a requerer qualquer benefício, mesmo que tenha cumprido a carência para ele no passado.', correta: false },
                { texto: 'O segurado pode, em algumas situações, reaver a qualidade de segurado e ter seus períodos de contribuição considerados para fins de carência.', correta: true },
                { texto: 'Apenas aposentadorias por invalidez não são afetadas pela perda da qualidade de segurado.', correta: false }
            ],
            resolucao: 'A perda da qualidade de segurado pode impactar o direito a novos benefícios ou a manutenção de alguns, mas os períodos de contribuição não são totalmente perdidos. A lei prevê mecanismos de reaquisição da qualidade de segurado, onde as contribuições anteriores podem ser somadas novamente para fins de carência.'
        },
        {
            questao: 'Qual é a função primordial do Cadastro Nacional de Informações Sociais (CNIS)?',
            opcoes: [
                { texto: 'Apenas registrar os dados de filiação dos trabalhadores avulsos.', correta: false },
                { texto: 'Centralizar e armazenar informações de vínculos empregatícios e remunerações dos segurados do INSS.', correta: true },
                { texto: 'Emitir guias de recolhimento para contribuintes individuais.', correta: false },
                { texto: 'Realizar o cálculo automático do valor das aposentadorias.', correta: false }
            ],
            resolucao: 'O CNIS (popularmente conhecido como "extrato do INSS") é um banco de dados fundamental que reúne informações sobre os vínculos empregatícios, remunerações, contribuições, períodos de trabalho e outras informações relevantes dos segurados, sendo essencial para a concessão de benefícios previdenciários.'
        },
        {
            questao: 'O que se entende por "desaposentação"?',
            opcoes: [
                { texto: 'A revisão do valor de um benefício de aposentadoria já concedido, buscando aumentá-lo.', correta: false },
                { texto: 'O ato de renunciar à aposentadoria já concedida para requerer um novo benefício mais vantajoso, aproveitando as contribuições feitas após a primeira aposentadoria.', correta: true },
                { texto: 'O cancelamento de uma aposentadoria por fraude.', correta: false },
                { texto: 'A suspensão temporária do pagamento de um benefício de aposentadoria.', correta: false }
            ],
            resolucao: 'A desaposentação é um tema que gerou muita discussão jurídica. Refere-se à possibilidade de um aposentado renunciar à sua aposentadoria para, com base em novas contribuições (feitas após a aposentadoria), solicitar um novo benefício com valor mais vantajoso. Embora tenha sido objeto de controvérsia e decisão desfavorável no STF, é importante conhecer o conceito.'
        },
        {
            questao: 'O princípio da equidade na forma de participação no custeio da seguridade social implica que:',
            opcoes: [
                { texto: 'Todos os contribuintes devem pagar o mesmo valor de contribuição, independentemente de sua renda.', correta: false },
                { texto: 'Aqueles que têm maior capacidade contributiva devem contribuir mais para o sistema.', correta: true },
                { texto: 'O governo é o único responsável pelo custeio da seguridade social.', correta: false },
                { texto: 'As contribuições devem ser aplicadas de forma igualitária em todos os setores da seguridade social.', correta: false }
            ],
            resolucao: 'O princípio da equidade na forma de participação no custeio estabelece que o financiamento da seguridade social deve ser justo e proporcional à capacidade contributiva de cada um. Aqueles com maior capacidade econômica devem contribuir com uma parcela maior dos recursos para o sistema.'
        },
        {
            questao: 'Sobre o Conselho Nacional de Previdência Social (CNPS), é correto afirmar:',
            opcoes: [
                { texto: 'É um órgão exclusivamente consultivo, sem poder de decisão.', correta: false },
                { texto: 'Possui caráter quadripartite, com representantes dos trabalhadores, empregadores, governo e aposentados.', correta: true },
                { texto: 'É responsável por julgar os recursos administrativos contra as decisões do INSS.', correta: false },
                { texto: 'Sua principal função é apenas fiscalizar o pagamento dos benefícios.', correta: false }
            ],
            resolucao: 'O CNPS é um órgão colegiado, com composição quadripartite (representantes dos trabalhadores, empregadores, aposentados e do governo), que tem a função de discutir, propor e acompanhar as políticas de Previdência Social, possuindo caráter deliberativo e consultivo.'
        },
        {
            questao: 'A regra de transição do pedágio de 50%, trazida pela Reforma da Previdência de 2019, é aplicada a segurados que:',
            opcoes: [
                { texto: 'Já haviam cumprido todos os requisitos para se aposentar antes da reforma.', correta: false },
                { texto: 'Estavam a no máximo dois anos de cumprir o tempo de contribuição exigido para a aposentadoria antes da reforma.', correta: true },
                { texto: 'Optarem por aposentar-se exclusivamente por idade.', correta: false },
                { texto: 'Não possuíam tempo de contribuição antes da entrada em vigor da reforma.', correta: false }
            ],
            resolucao: 'A regra de transição do pedágio de 50% foi criada para aqueles segurados que, na data da entrada em vigor da Reforma da Previdência (13/11/2019), estavam a dois anos ou menos de atingir o tempo de contribuição necessário para aposentadoria. Eles precisavam cumprir o tempo restante mais um "pedágio" de 50% sobre esse tempo faltante.'
        }
    ],
    // --- NOVAS PROVAS A PARTIR DAQUI ---
    'TESTE-4': [
        {
            questao: 'Qual o principal objetivo da Lei Orgânica da Saúde (Lei nº 8.080/90)?',
            opcoes: [
                { texto: 'Regulamentar a previdência social no Brasil.', correta: false },
                { texto: 'Dispor sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes.', correta: true },
                { texto: 'Estabelecer as regras para a aposentadoria especial.', correta: false },
                { texto: 'Definir os crimes contra a administração pública.', correta: false }
            ],
            resolucao: 'A Lei nº 8.080/90, conhecida como Lei Orgânica da Saúde, regulamenta o Sistema Único de Saúde (SUS) e estabelece as condições para a promoção, proteção e recuperação da saúde, bem como a organização e funcionamento dos serviços de saúde no Brasil.'
        },
        {
            questao: 'A universalidade do acesso aos serviços de saúde no SUS significa que:',
            opcoes: [
                { texto: 'Apenas quem contribui para o INSS tem acesso aos serviços de saúde.', correta: false },
                { texto: 'Todas as pessoas têm direito ao acesso aos serviços de saúde, sem preconceitos ou privilégios.', correta: true },
                { texto: 'Os serviços de saúde são oferecidos apenas em hospitais universitários.', correta: false },
                { texto: 'O acesso aos serviços de saúde depende da renda do indivíduo.', correta: false }
            ],
            resolucao: 'Um dos princípios fundamentais do SUS é a universalidade, garantindo que a saúde é um direito de todos e dever do Estado, e que o acesso aos serviços de saúde deve ser universal, igualitário e sem discriminação.'
        },
        {
            questao: 'Sobre o financiamento do Sistema Único de Saúde (SUS), é correto afirmar que:',
            opcoes: [
                { texto: 'É custeado exclusivamente por impostos federais.', correta: false },
                { texto: 'É financiado com recursos das três esferas de governo (União, Estados e Municípios), além de outras fontes.', correta: true },
                { texto: 'Apenas os usuários que utilizam o SUS contribuem para seu financiamento.', correta: false },
                { texto: 'O financiamento é baseado em doações internacionais apenas.', correta: false }
            ],
            resolucao: 'O financiamento do SUS é tripartite, ou seja, responsabilidade da União, Estados, Distrito Federal e Municípios, com recursos provenientes dos orçamentos fiscais e da seguridade social, além de outras fontes complementares.'
        },
        {
            questao: 'A hierarquização e regionalização da rede de serviços de saúde no SUS visam:',
            opcoes: [
                { texto: 'Centralizar todos os atendimentos em grandes hospitais.', correta: false },
                { texto: 'Garantir que todos os serviços sejam oferecidos em qualquer localidade, sem distinção.', correta: false },
                { texto: 'Organizar a rede de serviços em níveis de complexidade, facilitando o acesso e a referência dos usuários.', correta: true },
                { texto: 'Permitir que apenas a iniciativa privada ofereça serviços de saúde complementares.', correta: false }
            ],
            resolucao: 'A hierarquização e regionalização buscam organizar os serviços de saúde de forma a garantir a integralidade do cuidado, com a porta de entrada preferencial sendo a atenção primária, e referências para serviços de maior complexidade quando necessário, dentro de uma determinada região de saúde.'
        },
        {
            questao: 'Qual o papel do Conselho Nacional de Saúde (CNS) no âmbito do SUS?',
            opcoes: [
                { texto: 'Executar as políticas de saúde em nível federal.', correta: false },
                { texto: 'Fiscalizar as despesas dos hospitais privados.', correta: false },
                { texto: 'Atuar na formulação de estratégias e no controle da execução da política de saúde, em caráter permanente e deliberativo.', correta: true },
                { texto: 'Apenas realizar pesquisas sobre doenças.', correta: false }
            ],
            resolucao: 'O CNS é a instância máxima de deliberação do SUS, composto por representantes do governo, prestadores de serviços, profissionais de saúde e usuários, com o papel de formular e controlar a execução das políticas de saúde.'
        },
        {
            questao: 'A participação da comunidade no SUS ocorre principalmente através de:',
            opcoes: [
                { texto: 'Apenas consultas populares esporádicas.', correta: false },
                { texto: 'Conselhos de Saúde e Conferências de Saúde.', correta: true },
                { texto: 'Petições online e redes sociais.', correta: false },
                { texto: 'Ações individuais de cada cidadão.', correta: false }
            ],
            resolucao: 'A Lei nº 8.142/90 regulamenta a participação social no SUS, estabelecendo os Conselhos de Saúde (permanentes e deliberativos) e as Conferências de Saúde (realizadas a cada quatro anos) como as principais instâncias de participação da comunidade.'
        },
        {
            questao: 'O princípio da integralidade da atenção no SUS significa que:',
            opcoes: [
                { texto: 'O usuário deve ter acesso a todos os tipos de medicamentos gratuitamente.', correta: false },
                { texto: 'A atenção à saúde deve considerar o indivíduo como um todo, oferecendo ações de promoção, prevenção, tratamento e reabilitação.', correta: true },
                { texto: 'Apenas os serviços de alta complexidade devem ser oferecidos.', correta: false },
                { texto: 'O SUS é responsável apenas por doenças contagiosas.', correta: false }
            ],
            resolucao: 'A integralidade busca oferecer um conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos, para todas as necessidades de saúde do indivíduo, desde a prevenção até a reabilitação.'
        },
        {
            questao: 'Assinale a alternativa que apresenta um dos objetivos do Sistema Único de Saúde (SUS):',
            opcoes: [
                { texto: 'Promover a saúde dos indivíduos e da coletividade, através de ações de vigilância sanitária e epidemiológica.', correta: true },
                { texto: 'Exclusivamente gerenciar hospitais e clínicas privadas.', correta: false },
                { texto: 'Garantir o lucro das empresas farmacêuticas.', correta: false },
                { texto: 'Reduzir o número de hospitais públicos no país.', correta: false }
            ],
            resolucao: 'Entre os objetivos do SUS, está a formulação e execução de políticas de saúde, o controle e fiscalização de procedimentos, produtos e substâncias de interesse para a saúde, e a vigilância sanitária e epidemiológica.'
        },
        {
            questao: 'Os princípios doutrinários do SUS são:',
            opcoes: [
                { texto: 'Eficiência, economicidade e legalidade.', correta: false },
                { texto: 'Universalidade, Equidade e Integralidade.', correta: true },
                { texto: 'Centralização, privatização e seletividade.', correta: false },
                { texto: 'Contributividade, obrigatoriedade e restrição.', correta: false }
            ],
            resolucao: 'Os princípios doutrinários ou ideológicos do SUS são a Universalidade (saúde como direito de todos), Equidade (tratar desigualmente os desiguais, para reduzir injustiças) e Integralidade (atendimento completo, do preventivo ao curativo, considerando o ser humano em sua totalidade).'
        },
        {
            questao: 'Qual o papel da Agência Nacional de Vigilância Sanitária (ANVISA) no contexto do SUS?',
            opcoes: [
                { texto: 'Gerenciar os planos de saúde privados.', correta: false },
                { texto: 'Regular e fiscalizar produtos e serviços que envolvam risco à saúde, como alimentos, medicamentos e cosméticos.', correta: true },
                { texto: 'Realizar cirurgias de alta complexidade.', correta: false },
                { texto: 'Definir as taxas de contribuição para a previdência social.', correta: false }
            ],
            resolucao: 'A ANVISA é uma autarquia federal vinculada ao Ministério da Saúde, responsável por promover a proteção da saúde da população através do controle sanitário de produtos e serviços, incluindo o registro, inspeção e fiscalização.'
        }
    ],
    'TESTE-5': [
        {
            questao: 'Segundo a Lei de Improbidade Administrativa (Lei nº 8.429/92), o enriquecimento ilícito ocorre quando:',
            opcoes: [
                { texto: 'O agente público recebe propina, comissão ou vantagem indevida em razão do cargo, mandato, função, emprego ou atividade.', correta: true },
                { texto: 'O agente público causa lesão ao erário por conduta culposa.', correta: false },
                { texto: 'O agente público deixa de praticar ato de ofício sem justificativa.', correta: false },
                { texto: 'O agente público atenta contra os princípios da administração pública.', correta: false }
            ],
            resolucao: 'O Art. 9º da Lei de Improbidade Administrativa define o enriquecimento ilícito como o ato de auferir qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, mandato, função, emprego ou atividade nas entidades mencionadas na lei.'
        },
        {
            questao: 'Qual a principal diferença entre improbidade administrativa que causa lesão ao erário e enriquecimento ilícito?',
            opcoes: [
                { texto: 'Enriquecimento ilícito é doloso, lesão ao erário pode ser culposa.', correta: true },
                { texto: 'Enriquecimento ilícito não gera ressarcimento, lesão ao erário sim.', correta: false },
                { texto: 'Lesão ao erário só se aplica a bens públicos, enriquecimento ilícito a privados.', correta: false },
                { texto: 'Não há diferença, são sinônimos.', correta: false }
            ],
            resolucao: 'A principal diferença reside no elemento subjetivo: o enriquecimento ilícito (Art. 9º) e os atos que atentam contra os princípios (Art. 11) exigem DOLO. Já a lesão ao erário (Art. 10) pode ser configurada por conduta DOLOSA ou CULPOSA. A reforma da LIA de 2021 alterou isso, exigindo dolo para todos os atos, mas a questão pode se referir à interpretação anterior ou à essência da distinção original, onde a lesão ao erário podia ser culposa.'
        },
        {
            questao: 'A Lei de Improbidade Administrativa se aplica a:',
            opcoes: [
                { texto: 'Apenas servidores públicos estatutários.', correta: false },
                { texto: 'Agentes públicos de qualquer nível ou esfera, bem como a particulares que induzam ou concorram para a prática do ato de improbidade.', correta: true },
                { texto: 'Somente políticos eleitos.', correta: false },
                { texto: 'Exclusivamente a membros do poder judiciário.', correta: false }
            ],
            resolucao: 'A LIA é bastante abrangente, aplicando-se não apenas a servidores públicos, mas a qualquer agente que, por ação ou omissão, induza ou concorra para a prática de ato de improbidade, incluindo particulares que se beneficiem do ato.'
        },
        {
            questao: 'Um dos princípios da Administração Pública que os atos de improbidade administrativa atentam é o da:',
            opcoes: [
                { texto: 'Legalidade e Impessoalidade.', correta: true },
                { texto: 'Livre iniciativa e concorrência.', correta: false },
                { texto: 'Livre associação e expressão.', correta: false },
                { texto: 'Propriedade privada e herança.', correta: false }
            ],
            resolucao: 'Os atos de improbidade administrativa que atentam contra os princípios da Administração Pública (Art. 11 da LIA) incluem aqueles que violam a honestidade, imparcialidade, legalidade, e lealdade às instituições, entre outros.'
        },
        {
            questao: 'Assinale a alternativa que NÃO é uma sanção aplicável aos atos de improbidade administrativa:',
            opcoes: [
                { texto: 'Demissão do cargo público.', correta: false },
                { texto: 'Perda dos bens ou valores acrescidos ilicitamente ao patrimônio.', correta: false },
                { texto: 'Cadeia perpétua.', correta: true },
                { texto: 'Suspensão dos direitos políticos.', correta: false }
            ],
            resolucao: 'As sanções previstas na LIA são de natureza civil e política, como perda da função pública, suspensão dos direitos políticos, ressarcimento ao erário, multa civil e proibição de contratar com o Poder Público. A LIA não prevê penas privativas de liberdade (prisão).'
        },
        {
            questao: 'O prazo prescricional para ajuizar a ação de improbidade administrativa, em regra, é de:',
            opcoes: [
                { texto: '1 ano, contado da data do fato.', correta: false },
                { texto: '5 anos, contado do término do exercício do mandato, cargo, função ou emprego do agente público.', correta: true },
                { texto: '10 anos, contado da data da descoberta do fato.', correta: false },
                { texto: 'Não há prazo prescricional.', correta: false }
            ],
            resolucao: 'A Lei de Improbidade Administrativa (Lei nº 8.429/92) estabelece um prazo prescricional de 5 anos para ajuizamento da ação, contado do término do exercício do mandato, cargo em comissão ou função de confiança, ou da data em que o fato se tornou conhecido.'
        },
        {
            questao: 'Quais atos configuram "lesão ao erário" de acordo com a LIA?',
            opcoes: [
                { texto: 'Aqueles que importam em qualquer ação ou omissão, dolosa ou culposa, que gere perda patrimonial, desvio, apropriação, malbaratamento ou dilapidação dos bens ou haveres das entidades.', correta: true },
                { texto: 'Apenas atos de corrupção que envolvam desvio de dinheiro público.', correta: false },
                { texto: 'Somente atos que beneficiem o agente público diretamente.', correta: false },
                { texto: 'Atos que não causam prejuízo financeiro direto, mas afetam a imagem da administração.', correta: false }
            ],
            resolucao: 'O Art. 10 da LIA (com a redação antes da Lei 14.230/2021) previa que a lesão ao erário poderia ser por dolo ou culpa, abrangendo qualquer ação ou omissão que resultasse em perda patrimonial, desvio, apropriação, malbaratamento ou dilapidação dos bens. A lei de 2021 passou a exigir dolo para todos os tipos de improbidade.'
        },
        {
            questao: 'A sanção de proibição de contratar com o Poder Público e de receber benefícios ou incentivos fiscais ou creditícios, direta ou indiretamente, ainda que por intermédio de pessoa jurídica da qual seja sócio majoritário, é aplicada por qual prazo?',
            opcoes: [
                { texto: 'Por prazo indeterminado.', correta: false },
                { texto: 'Por um prazo que varia de 3 a 10 anos, dependendo da gravidade do ato.', correta: true },
                { texto: 'Por no máximo 2 anos.', correta: false },
                { texto: 'Apenas em casos de enriquecimento ilícito.', correta: false }
            ],
            resolucao: 'Os prazos para a sanção de proibição de contratar com o Poder Público variam conforme a natureza do ato de improbidade: 14 anos para enriquecimento ilícito, 12 anos para lesão ao erário e 5 anos para atos que atentem contra os princípios, conforme a LIA atualizada.'
        },
        {
            questao: 'O Ministério Público, ao propor a ação de improbidade administrativa, pode requerer cautelarmente:',
            opcoes: [
                { texto: 'A prisão preventiva do agente público.', correta: false },
                { texto: 'O afastamento do agente do cargo, emprego ou função e/ou a indisponibilidade dos bens.', correta: true },
                { texto: 'A demissão imediata do agente sem processo.', correta: false },
                { texto: 'A aplicação de todas as sanções de forma antecipada.', correta: false }
            ],
            resolucao: 'A LIA permite que o Ministério Público ou o ente público requeira medidas cautelares, como o afastamento do agente do cargo (se houver risco à instrução processual) e a indisponibilidade dos bens do réu para garantir o ressarcimento ao erário.'
        },
        {
            questao: 'A Lei nº 14.230/2021 promoveu importantes alterações na Lei de Improbidade Administrativa. Uma das principais mudanças foi:',
            opcoes: [
                { texto: 'A extinção de todos os tipos de improbidade administrativa.', correta: false },
                { texto: 'A exigência de dolo (intenção) para a configuração de todos os atos de improbidade, inclusive os que causam lesão ao erário.', correta: true },
                { texto: 'A ampliação dos prazos prescricionais para todas as condutas.', correta: false },
                { texto: 'A proibição do acordo de não persecução cível em qualquer hipótese.', correta: false }
            ],
            resolucao: 'A Lei 14.230/2021, que alterou a LIA, exigiu o dolo (intenção específica de praticar a ilegalidade) para a configuração de todos os atos de improbidade, ou seja, a conduta culposa não mais configura improbidade administrativa. Também introduziu a figura do acordo de não persecução cível.'
        }
    ],
    'TESTE-6': [
        {
            questao: 'Segundo o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto nº 1.171/94), a finalidade última do servidor público é:',
            opcoes: [
                { texto: 'Garantir seu próprio bem-estar e progresso na carreira.', correta: false },
                { texto: 'Defender os interesses do governo vigente.', correta: false },
                { texto: 'O bem comum, servindo à sociedade e ao Estado com lealdade e honestidade.', correta: true },
                { texto: 'Atingir suas metas individuais de produtividade.', correta: false }
            ],
            resolucao: 'O Decreto nº 1.171/94 enfatiza que a dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são preceitos que devem permear a conduta do servidor público, visando sempre o bem comum e a moralidade administrativa.'
        },
        {
            questao: 'Qual a principal instância responsável por aplicar o Código de Ética no âmbito da Administração Pública Federal?',
            opcoes: [
                { texto: 'O Tribunal de Contas da União (TCU).', correta: false },
                { texto: 'As Comissões de Ética em cada órgão ou entidade.', correta: true },
                { texto: 'A Polícia Federal.', correta: false },
                { texto: 'O Supremo Tribunal Federal (STF).', correta: false }
            ],
            resolucao: 'As Comissões de Ética são as instâncias primárias encarregadas de orientar e aconselhar sobre a ética profissional do servidor, apurar condutas em desacordo com o código e aplicar as sanções cabíveis, além de educar para a ética.'
        },
        {
            questao: 'Um servidor público que utiliza seu cargo para obter vantagem pessoal indevida está violando o princípio da:',
            opcoes: [
                { texto: 'Publicidade.', correta: false },
                { texto: 'Impessoalidade e Moralidade.', correta: true },
                { texto: 'Eficiência.', correta: false },
                { texto: 'Legalidade estrita.', correta: false }
            ],
            resolucao: 'A impessoalidade e a moralidade são princípios fundamentais. O uso do cargo para fins pessoais fere diretamente a impessoalidade (tratamento igualitário) e a moralidade (conduta ética e honesta).'
        },
        {
            questao: 'Qual das seguintes atitudes é considerada um "dever fundamental" do servidor público, segundo o Código de Ética?',
            opcoes: [
                { texto: 'Retardar a prestação de contas.', correta: false },
                { texto: 'Respeitar a hierarquia e as normas, buscando aprimorar seus conhecimentos.', correta: true },
                { texto: 'Atender ao público apenas em horários de conveniência pessoal.', correta: false },
                { texto: 'Privilegiar amigos e parentes no atendimento ao público.', correta: false }
            ],
            resolucao: 'O Código de Ética estabelece como deveres do servidor público, entre outros, o constante aprimoramento profissional, a diligência, a assiduidade e o respeito à legislação.'
        },
        {
            questao: 'A expressão "dignidade da função pública" no Código de Ética significa que o servidor deve:',
            opcoes: [
                { texto: 'Exigir salários mais altos.', correta: false },
                { texto: 'Manter conduta ilibada, tanto na vida profissional quanto na privada, de forma a não comprometer a imagem da instituição.', correta: true },
                { texto: 'Apenas cumprir suas tarefas sem se preocupar com o ambiente de trabalho.', correta: false },
                { texto: 'Ignorar as críticas dos cidadãos.', correta: false }
            ],
            resolucao: 'A dignidade da função pública implica que o servidor deve ter uma conduta exemplar dentro e fora do ambiente de trabalho, pois sua imagem está intrinsecamente ligada à imagem da Administração Pública e dos serviços que presta à sociedade.'
        },
        {
            questao: 'As sanções disciplinares aplicáveis por violação ao Código de Ética são:',
            opcoes: [
                { texto: 'Advertência, suspensão e demissão.', correta: false },
                { texto: 'Apenas a censura, com registro nos assentamentos funcionais.', correta: true },
                { texto: 'Multa e prisão.', correta: false },
                { texto: 'Perda do cargo público e inelegibilidade.', correta: false }
            ],
            resolucao: 'O Código de Ética (Decreto nº 1.171/94) prevê como única sanção de natureza ética a censura, que deve ser registrada nos assentamentos funcionais do servidor. Outras sanções (advertência, suspensão, demissão) são de natureza disciplinar e estão previstas no Regime Jurídico Único (Lei nº 8.112/90).'
        },
        {
            questao: 'A conduta do servidor público, segundo o Código de Ética, deve estar sempre em conformidade com:',
            opcoes: [
                { texto: 'Seus interesses pessoais e familiares.', correta: false },
                { texto: 'Os princípios morais e legais que regem a Administração Pública.', correta: true },
                { texto: 'As opiniões dos seus colegas de trabalho.', correta: false },
                { texto: 'As diretrizes do partido político no poder.', correta: false }
            ],
            resolucao: 'O servidor deve agir pautado pela legalidade e, acima de tudo, pela moralidade e ética, sempre buscando a transparência e a correção em suas ações.'
        },
        {
            questao: 'O servidor público deve ser cortês e prestativo no atendimento ao público, sem, contudo:',
            opcoes: [
                { texto: 'Exceder o limite de seu horário de trabalho.', correta: false },
                { texto: 'Prejudicar a execução do serviço ou favorecer indevidamente alguém.', correta: true },
                { texto: 'Utilizar linguagem formal.', correta: false },
                { texto: 'Recusar-se a dar informações sobre o andamento de processos.', correta: false }
            ],
            resolucao: 'A cortesia e presteza são essenciais, mas não devem comprometer a imparcialidade, a eficiência e a finalidade pública do serviço. Favorecimentos indevidos configuram quebra da ética e da impessoalidade.'
        },
        {
            questao: 'Quando um servidor público se depara com um conflito de interesses, o que o Código de Ética recomenda?',
            opcoes: [
                { texto: 'Favorecer o interesse pessoal, desde que não seja descoberto.', correta: false },
                { texto: 'Ignorar o conflito e prosseguir com a decisão.', correta: false },
                { texto: 'Comunicar a situação à sua chefia imediata ou à Comissão de Ética para que medidas adequadas sejam tomadas.', correta: true },
                { texto: 'Transferir a responsabilidade para outro colega sem avisar.', correta: false }
            ],
            resolucao: 'O servidor deve sempre pautar sua conduta pelo interesse público. Ao se deparar com um conflito de interesses, o correto é comunicar e buscar orientação para evitar qualquer comprometimento da moralidade e imparcialidade.'
        },
        {
            questao: 'A utilização de equipamentos e materiais da repartição para fins particulares é uma conduta:',
            opcoes: [
                { texto: 'Aceitável, desde que não prejudique o serviço.', correta: false },
                { texto: 'Considerada antiética e passível de sanção.', correta: true },
                { texto: 'Permitida apenas com autorização verbal da chefia.', correta: false },
                { texto: 'Incentivada para otimizar o uso dos recursos públicos.', correta: false }
            ],
            resolucao: 'O uso de bens públicos para fins particulares configura uma apropriação indevida e viola princípios éticos como a moralidade e a lealdade à instituição, além de poder configurar ilícito administrativo.'
        }
    ],
    'TESTE-7': [
        {
            questao: 'De acordo com a Lei nº 8.112/90 (Regime Jurídico Único), a nomeação para cargo de provimento efetivo depende de:',
            opcoes: [
                { texto: 'Indicação política.', correta: false },
                { texto: 'Aprovação prévia em concurso público de provas ou de provas e títulos, de acordo com a natureza e a complexidade do cargo.', correta: true },
                { texto: 'Ser maior de 18 anos e ter ensino médio completo.', correta: false },
                { texto: 'Ter experiência mínima de 5 anos em cargo público.', correta: false }
            ],
            resolucao: 'O Art. 37, II, da Constituição Federal, e o Art. 10 da Lei nº 8.112/90, estabelecem que a investidura em cargo ou emprego público depende de aprovação prévia em concurso público, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração.'
        },
        {
            questao: 'O servidor público em estágio probatório pode ser exonerado por:',
            opcoes: [
                { texto: 'Qualquer motivo, a critério da administração.', correta: false },
                { texto: 'Não ser aprovado na avaliação de desempenho, após processo de avaliação que comprove sua inaptidão.', correta: true },
                { texto: 'Ter uma opinião política diferente do governo.', correta: false },
                { texto: 'Apresentar atestado médico por mais de 30 dias.', correta: false }
            ],
            resolucao: 'Durante o estágio probatório (período de 3 anos), o servidor é avaliado quanto à sua aptidão e capacidade para o cargo. A inaptidão, comprovada em processo de avaliação com direito à ampla defesa, pode levar à exoneração.'
        },
        {
            questao: 'Assinale a alternativa correta sobre a licença para tratamento de saúde do servidor público:',
            opcoes: [
                { texto: 'É concedida apenas para doenças graves e crônicas.', correta: false },
                { texto: 'É concedida com remuneração integral, independentemente do tempo de afastamento.', correta: true },
                { texto: 'Exige período de carência de 6 meses de serviço público.', correta: false },
                { texto: 'Apenas pode ser solicitada uma vez a cada dois anos.', correta: false }
            ],
            resolucao: 'A Lei nº 8.112/90 prevê a licença para tratamento da própria saúde do servidor, com remuneração integral, mediante laudo médico oficial. Não há limite de tempo inicial para sua concessão, mas períodos longos podem requerer perícias mais rigorosas.'
        },
        {
            questao: 'A acumulação remunerada de cargos públicos é, em regra, proibida. No entanto, a Constituição Federal permite a acumulação de:',
            opcoes: [
                { texto: 'Dois cargos de professor.', correta: true },
                { texto: 'Um cargo de professor e um cargo de policial.', correta: false },
                { texto: 'Dois cargos de assistente administrativo.', correta: false },
                { texto: 'Qualquer cargo, desde que haja compatibilidade de horários.', correta: false }
            ],
            resolucao: 'O Art. 37, XVI, da Constituição Federal, permite a acumulação remunerada de: a) dois cargos de professor; b) um cargo de professor com outro técnico ou científico; c) dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas, desde que haja compatibilidade de horários.'
        },
        {
            questao: 'Qual a principal diferença entre demissão e exoneração para o servidor público?',
            opcoes: [
                { texto: 'Demissão é penalidade por infração disciplinar; exoneração é a saída do serviço público sem caráter punitivo.', correta: true },
                { texto: 'Exoneração é sempre por justa causa, demissão não.', correta: false },
                { texto: 'Demissão se aplica a servidores estáveis, exoneração a não estáveis.', correta: false },
                { texto: 'Não há diferença, são sinônimos.', correta: false }
            ],
            resolucao: 'A **demissão** é uma penalidade disciplinar aplicada em decorrência de falta grave cometida pelo servidor, após processo administrativo disciplinar (PAD). A **exoneração** é uma forma de vacância do cargo sem caráter punitivo, podendo ocorrer a pedido do servidor, ou de ofício pela administração (como em caso de reprovação no estágio probatório).'
        },
        {
            questao: 'O direito de petição do servidor público, nos termos da Lei nº 8.112/90, significa que:',
            opcoes: [
                { texto: 'O servidor pode exigir aumento de salário a qualquer momento.', correta: false },
                { texto: 'É assegurado ao servidor o direito de requerer e representar, bem como pedir reconsideração e recurso, respeitadas as formalidades legais.', correta: true },
                { texto: 'Apenas os sindicatos podem apresentar reivindicações em nome dos servidores.', correta: false },
                { texto: 'O servidor pode recorrer de qualquer decisão administrativa sem apresentar justificativa.', correta: false }
            ],
            resolucao: 'A Lei nº 8.112/90 garante ao servidor o direito de petição aos Poderes Públicos em defesa de direitos ou contra ilegalidade ou abuso de poder, incluindo o direito de requerer, representar, pedir reconsideração e recorrer, com os prazos e procedimentos definidos em lei.'
        },
        {
            questao: 'A penalidade de suspensão aplicada ao servidor público não pode exceder:',
            opcoes: [
                { texto: '30 dias.', correta: false },
                { texto: '60 dias.', correta: false },
                { texto: '90 dias.', correta: true },
                { texto: '120 dias.', correta: false }
            ],
            resolucao: 'A suspensão, como penalidade disciplinar, não poderá exceder a 90 dias, conforme o Art. 130 da Lei nº 8.112/90. Durante o período de suspensão, o servidor perde a remuneração.'
        },
        {
            questao: 'O que é a "reversão" no Regime Jurídico Único?',
            opcoes: [
                { texto: 'É o retorno do servidor estável ao cargo anteriormente ocupado, quando inválido o ato de sua aposentadoria.', correta: true },
                { texto: 'É a volta do servidor cedido a outro órgão.', correta: false },
                { texto: 'É a nomeação de servidor para cargo em comissão.', correta: false },
                { texto: 'É o afastamento do servidor para tratamento de saúde.', correta: false }
            ],
            resolucao: 'Reversão é o retorno à atividade de servidor aposentado por invalidez, quando junta médica oficial declarar insubsistentes os motivos da aposentadoria, ou o retorno do aposentado que não está apto ao serviço, para cargo de atribuições compatíveis. A mais comum é a primeira situação, invalidando a aposentadoria.'
        },
        {
            questao: 'O que se entende por "vacância" de cargo público?',
            opcoes: [
                { texto: 'A nomeação de um novo servidor para o cargo.', correta: false },
                { texto: 'O cargo público estar ocupado por um servidor em licença.', correta: false },
                { texto: 'A desocupação de cargo público, em decorrência de exoneração, demissão, aposentadoria, posse em outro cargo inacumulável, falecimento, promoção ou ascensão.', correta: true },
                { texto: 'O cargo público ser criado, mas ainda não ter sido provido.', correta: false }
            ],
            resolucao: 'Vacância é o ato de tornar um cargo público vago. As formas de vacância estão previstas no Art. 33 da Lei nº 8.112/90, incluindo exoneração, demissão, aposentadoria, posse em outro cargo inacumulável, falecimento, promoção, readaptação, entre outras.'
        },
        {
            questao: 'O servidor público tem direito a licença por motivo de doença em pessoa da família, com remuneração integral, por qual período máximo em 12 meses?',
            opcoes: [
                { texto: '30 dias.', correta: false },
                { texto: '60 dias.', correta: false },
                { texto: '90 dias.', correta: true },
                { texto: '120 dias.', correta: false }
            ],
            resolucao: 'O Art. 83 da Lei nº 8.112/90 permite a licença por motivo de doença em pessoa da família por até 90 dias com remuneração integral em cada período de 12 meses, desde que comprovada a necessidade de assistência direta do servidor e que a assistência não possa ser prestada concomitantemente com o exercício do cargo.'
        }
    ],
    'TESTE-8': [
        {
            questao: 'Conforme a Lei nº 9.784/99 (Processo Administrativo Federal), a Administração Pública deve obedecer, entre outros, aos princípios da:',
            opcoes: [
                { texto: 'Livre iniciativa e concorrência.', correta: false },
                { texto: 'Legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.', correta: true },
                { texto: 'Autonomia, descentralização e delegação.', correta: false },
                { texto: 'Retroatividade e irredutibilidade.', correta: false }
            ],
            resolucao: 'A Lei nº 9.784/99, que regula o processo administrativo no âmbito da Administração Pública Federal, elenca uma série de princípios que devem ser observados, como os citados na alternativa correta, visando a legalidade e a justiça nos atos administrativos.'
        },
        {
            questao: 'A obrigatoriedade de motivar os atos administrativos, nos termos da Lei nº 9.784/99, significa que:',
            opcoes: [
                { texto: 'Todo ato deve ser justificado por um ato normativo superior.', correta: false },
                { texto: 'A Administração deve indicar os fatos e fundamentos jurídicos que justificaram a decisão.', correta: true },
                { texto: 'A motivação só é exigida em atos que gerem prejuízo ao administrado.', correta: false },
                { texto: 'A motivação pode ser dispensada em casos de urgência.', correta: false }
            ],
            resolucao: 'A Lei do Processo Administrativo Federal exige que os atos administrativos que afetam direitos ou deveres dos administrados sejam motivados, indicando os fundamentos de fato e de direito que levaram à decisão, garantindo a transparência e o controle da legalidade.'
        },
        {
            questao: 'Qual o prazo para a Administração Pública decidir sobre um processo administrativo, salvo prorrogação, conforme a Lei nº 9.784/99?',
            opcoes: [
                { texto: '15 dias.', correta: false },
                { texto: '30 dias.', correta: true },
                { texto: '60 dias.', correta: false },
                { texto: '90 dias.', correta: false }
            ],
            resolucao: 'O Art. 49 da Lei nº 9.784/99 estabelece o prazo de até 30 dias para a Administração Pública decidir sobre o processo administrativo, contado da conclusão da instrução, salvo motivo de força maior que justifique a prorrogação por igual período.'
        },
        {
            questao: 'A comunicação dos atos processuais aos interessados, na forma da Lei nº 9.784/99, deve ser feita por:',
            opcoes: [
                { texto: 'Apenas por telefone.', correta: false },
                { texto: 'Meio que assegure a certeza da ciência do interessado, podendo ser por ciência no processo, via postal com aviso de recebimento, telegrama, ou outro meio idôneo.', correta: true },
                { texto: 'Publicação em Diário Oficial, sem necessidade de aviso individual.', correta: false },
                { texto: 'E-mail, sem confirmação de leitura.', correta: false }
            ],
            resolucao: 'As intimações na Lei nº 9.784/99 devem ser feitas de forma a garantir a ciência do interessado, podendo ser por diversos meios, como ciência pessoal, carta com aviso de recebimento, telegrama, e-mail com confirmação, entre outros, que comprovem que a pessoa foi informada.'
        },
        {
            questao: 'O princípio da proporcionalidade no processo administrativo significa que:',
            opcoes: [
                { texto: 'As sanções devem ser sempre as mais leves possíveis.', correta: false },
                { texto: 'A atuação administrativa deve ser adequada, necessária e proporcional ao fim a ser atingido.', correta: true },
                { texto: 'A Administração deve tratar todos os casos de forma idêntica.', correta: false },
                { texto: 'As despesas do processo devem ser proporcionais à sua importância.', correta: false }
            ],
            resolucao: 'A proporcionalidade exige que os atos administrativos, especialmente os restritivos de direitos, sejam adequados (aptos a atingir o objetivo), necessários (não haver meio menos gravoso) e proporcionais em sentido estrito (o benefício do ato supera o sacrifício imposto).'
        },
        {
            questao: 'Qual a consequência da ausência de motivação em um ato administrativo que exija tal formalidade?',
            opcoes: [
                { texto: 'O ato é considerado perfeito, mas pode ser revogado a qualquer tempo.', correta: false },
                { texto: 'O ato é considerado nulo ou inválido.', correta: true },
                { texto: 'O ato é válido, mas o servidor responsável pode ser punido.', correta: false },
                { texto: 'A ausência de motivação não acarreta nulidade.', correta: false }
            ],
            resolucao: 'A motivação é um requisito de validade para diversos atos administrativos. Sua ausência, quando obrigatória, torna o ato viciado, passível de anulação por invalidade formal.'
        },
        {
            questao: 'O princípio da segurança jurídica no processo administrativo busca:',
            opcoes: [
                { texto: 'Garantir que a Administração possa mudar suas decisões a qualquer momento.', correta: false },
                { texto: 'Proteger a confiança do cidadão nos atos da Administração e a estabilidade das relações jurídicas.', correta: true },
                { texto: 'Assegurar que os processos sejam sigilosos para proteger os envolvidos.', correta: false },
                { texto: 'Reduzir a burocracia, mesmo que isso comprometa a legalidade.', correta: false }
            ],
            resolucao: 'A segurança jurídica visa conferir estabilidade e previsibilidade aos atos da Administração, protegendo a confiança dos administrados. Isso inclui a irretroatividade de atos desfavoráveis e a estabilidade de decisões definitivas.'
        },
        {
            questao: 'Qual a finalidade da "consulta pública" no processo administrativo federal?',
            opcoes: [
                { texto: 'Permitir que apenas os órgãos de controle externo fiscalizem a administração.', correta: false },
                { texto: 'Promover a participação da sociedade na tomada de decisões administrativas, especialmente em atos normativos.', correta: true },
                { texto: 'Divulgar os resultados finais de processos administrativos já concluídos.', correta: false },
                { texto: 'Substituir a necessidade de licitação em compras públicas.', correta: false }
            ],
            resolucao: 'A consulta pública é um instrumento que visa dar transparência e possibilitar a participação popular na elaboração de atos normativos ou na tomada de decisões importantes da Administração Pública, coletando opiniões e subsídios.'
        },
        {
            questao: 'O princípio da oficialidade no processo administrativo significa que:',
            opcoes: [
                { texto: 'Apenas os servidores públicos podem iniciar um processo administrativo.', correta: false },
                { texto: 'A Administração Pública tem o dever de impulsionar o processo de ofício, independentemente de provocação dos interessados.', correta: true },
                { texto: 'Os documentos devem ser sempre oficiais e timbrados.', correta: false },
                { texto: 'As decisões devem ser tomadas apenas por autoridades oficiais.', correta: false }
            ],
            resolucao: 'O princípio da oficialidade (ou do impulso oficial) dispõe que a Administração deve dar andamento aos processos administrativos por sua própria iniciativa, sem depender de provocação constante dos interessados, garantindo a celeridade e a efetividade.'
        },
        {
            questao: 'A Lei nº 9.784/99 é aplicada subsidiariamente aos processos administrativos específicos?',
            opcoes: [
                { texto: 'Não, ela é sempre a única lei aplicável.', correta: false },
                { texto: 'Sim, naquilo que lhes for compatível e não houver previsão em lei específica.', correta: true },
                { texto: 'Apenas se os processos específicos não possuírem nenhuma regulamentação.', correta: false },
                { texto: 'Apenas para processos judiciais, não administrativos.', correta: false }
            ],
            resolucao: 'A Lei nº 9.784/99 é a lei geral de processo administrativo no âmbito federal. Isso significa que, se houver uma lei específica para um determinado tipo de processo administrativo (ex: processos disciplinares), esta prevalece. No entanto, a Lei nº 9.784/99 será aplicada subsidiariamente para preencher lacunas ou complementar o que a lei específica não abordar.'
        }
    ],
    'TESTE-9': [
        {
            questao: 'A respeito da responsabilidade civil do Estado, a Constituição Federal de 1988 adota a teoria da:',
            opcoes: [
                { texto: 'Culpa subjetiva, exigindo dolo ou culpa do agente.', correta: false },
                { texto: 'Responsabilidade objetiva, com base no risco administrativo, independentemente de dolo ou culpa, para danos causados por seus agentes a terceiros.', correta: true },
                { texto: 'Teoria da culpa anônima, sem identificar o agente responsável.', correta: false },
                { texto: 'Inexistência de responsabilidade, exceto em casos de má-fé comprovada.', correta: false }
            ],
            resolucao: 'O Art. 37, § 6º, da Constituição Federal, estabelece a responsabilidade objetiva do Estado: as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.'
        },
        {
            questao: 'Para que a responsabilidade civil objetiva do Estado seja configurada, é necessário que haja:',
            opcoes: [
                { texto: 'Dolo do agente público e dano comprovado.', correta: false },
                { texto: 'Conduta (ação ou omissão) do Estado, dano e nexo de causalidade entre a conduta e o dano.', correta: true },
                { texto: 'Culpa exclusiva da vítima.', correta: false },
                { texto: 'Decisão judicial transitada em julgado reconhecendo a ilegalidade do ato.', correta: false }
            ],
            resolucao: 'Os elementos essenciais para a responsabilidade civil objetiva do Estado são: a) conduta estatal (ação ou omissão), b) dano (prejuízo à vítima), e c) nexo de causalidade (relação direta entre a conduta e o dano). O elemento dolo ou culpa do agente é relevante apenas para a ação de regresso contra o agente.'
        },
        {
            questao: 'Assinale a alternativa que apresenta uma causa excludente da responsabilidade civil do Estado:',
            opcoes: [
                { texto: 'Ato de má-fé do agente público.', correta: false },
                { texto: 'Caso fortuito ou força maior.', correta: true },
                { texto: 'Erro de direito da Administração Pública.', correta: false },
                { texto: 'Atraso na prestação de serviço público.', correta: false }
            ],
            resolucao: 'O caso fortuito e a força maior são eventos imprevisíveis e inevitáveis que rompem o nexo de causalidade entre a conduta estatal e o dano, excluindo a responsabilidade do Estado. A culpa exclusiva da vítima também é uma excludente.'
        },
        {
            questao: 'A responsabilidade do Estado por atos omissivos, em regra, é:',
            opcoes: [
                { texto: 'Sempre objetiva.', correta: false },
                { texto: 'Sempre subjetiva, exigindo a comprovação de culpa (falta do serviço).', correta: true },
                { texto: 'Inexistente, pois o Estado não age.', correta: false },
                { texto: 'Baseada na teoria do risco integral.', correta: false }
            ],
            resolucao: 'Embora a responsabilidade por ações seja objetiva, a jurisprudência e a doutrina majoritárias entendem que a responsabilidade por omissões (falta do serviço, quando o Estado tinha o dever de agir e não o fez ou agiu deficientemente) é, em regra, subjetiva, exigindo a comprovação de culpa.'
        },
        {
            questao: 'O direito de regresso da Administração Pública contra o agente que causou o dano é assegurado em quais casos?',
            opcoes: [
                { texto: 'Apenas quando o agente agiu com culpa exclusiva.', correta: false },
                { texto: 'Nos casos de dolo ou culpa do agente.', correta: true },
                { texto: 'Independentemente de dolo ou culpa do agente.', correta: false },
                { texto: 'Somente se o dano for superior a 10 salários mínimos.', correta: false }
            ],
            resolucao: 'O Art. 37, § 6º, da Constituição Federal, expressamente assegura o direito de regresso da pessoa jurídica contra o agente público nos casos de dolo ou culpa. Ou seja, o Estado primeiro indeniza a vítima e depois busca o ressarcimento do agente responsável.'
        },
        {
            questao: 'Assinale a alternativa correta sobre a responsabilidade do Estado por danos nucleares:',
            opcoes: [
                { texto: 'É sempre subjetiva, exigindo comprovação de dolo.', correta: false },
                { texto: 'É objetiva, independentemente da existência de culpa, nos termos da Constituição Federal.', correta: true },
                { texto: 'É inexistente se não houver falha de segurança.', correta: false },
                { texto: 'É aplicável apenas em acidentes nucleares com vítimas fatais.', correta: false }
            ],
            resolucao: 'O Art. 21, XXIII, alínea "d", da Constituição Federal, estabelece que a responsabilidade civil por danos nucleares é objetiva, independentemente da existência de culpa. Esta é uma exceção à regra geral da responsabilidade por omissão (que seria subjetiva).'
        },
        {
            questao: 'A teoria do "risco administrativo" aplicada à responsabilidade civil do Estado implica que:',
            opcoes: [
                { texto: 'O Estado só responde se houver prova de sua culpa.', correta: false },
                { texto: 'O Estado assume os riscos inerentes à sua atuação, respondendo pelos danos causados independentemente de culpa, salvo excludentes.', correta: true },
                { texto: 'A responsabilidade é sempre do particular que causa o dano.', correta: false },
                { texto: 'Apenas os danos decorrentes de atos ilícitos geram responsabilidade.', correta: false }
            ],
            resolucao: 'A teoria do risco administrativo é a base da responsabilidade objetiva do Estado no Brasil. Ela entende que, pelo fato de o Estado ter a prerrogativa de agir, ele também assume os riscos decorrentes de sua atuação, devendo indenizar os danos causados, exceto se houver excludentes (culpa exclusiva da vítima, caso fortuito, força maior).'
        },
        {
            questao: 'Um particular que sofre um dano decorrente de obra pública em construção pode pleitear indenização com base em qual tipo de responsabilidade do Estado?',
            opcoes: [
                { texto: 'Responsabilidade contratual.', correta: false },
                { texto: 'Responsabilidade objetiva do Estado, pela conduta comissiva (ação) da Administração.', correta: true },
                { texto: 'Responsabilidade subjetiva, se provar que a obra foi mal planejada.', correta: false },
                { texto: 'Responsabilidade penal do agente público responsável pela obra.', correta: false }
            ],
            resolucao: 'Danos decorrentes de obras públicas (ações do Estado) configuram responsabilidade objetiva. A vítima só precisa provar a conduta (a obra), o dano e o nexo causal. A culpa ou dolo na execução da obra só seria relevante em uma ação de regresso contra o responsável.'
        },
        {
            questao: 'O que se entende por "faute du service" (falta do serviço) na responsabilidade civil do Estado?',
            opcoes: [
                { texto: 'A ausência total de serviço público.', correta: false },
                { texto: 'A prestação do serviço público de forma deficiente, tardia ou inexistente, configurando a culpa subjetiva do Estado em casos de omissão.', correta: true },
                { texto: 'A responsabilidade por atos praticados por particulares.', correta: false },
                { texto: 'A falha no pagamento de salários dos servidores públicos.', correta: false }
            ],
            resolucao: 'A teoria da "faute du service" é utilizada para fundamentar a responsabilidade subjetiva do Estado em casos de omissão. Ela se configura quando o serviço público não funcionou, funcionou mal ou funcionou com atraso, causando dano ao particular.'
        },
        {
            questao: 'A responsabilidade civil do Estado por atos legislativos, em regra, é:',
            opcoes: [
                { texto: 'Objetiva, sempre que houver dano.', correta: false },
                { texto: 'Inexistente, pois a lei é geral e abstrata.', correta: true },
                { texto: 'Subjetiva, se provado o dolo do legislador.', correta: false },
                { texto: 'Aplicável apenas em caso de leis inconstitucionais declaradas pelo STF.', correta: false }
            ],
            resolucao: 'A regra geral é a irresponsabilidade do Estado por atos legislativos, uma vez que a lei é ato geral e abstrato. Excepcionalmente, pode haver responsabilidade se a lei for inconstitucional e for declarada como tal pelo STF, ou se houver revogação de lei que gerou direitos adquiridos e a lei revogadora não previu indenização, ou ainda em leis de efeitos concretos (equiparadas a atos administrativos).'
        }
    ],
    'TESTE-10': [
        {
            questao: 'Em relação aos atos administrativos, assinale a alternativa correta sobre seus atributos:',
            opcoes: [
                { texto: 'São sempre autoexecutórios, independentemente de previsão legal.', correta: false },
                { texto: 'Os atributos dos atos administrativos são presunção de legitimidade, autoexecutoriedade, tipicidade e imperatividade.', correta: true },
                { texto: 'A presunção de legitimidade é absoluta e não admite prova em contrário.', correta: false },
                { texto: 'A autoexecutoriedade permite que a Administração anule seus próprios atos sem judicialização.', correta: false }
            ],
            resolucao: 'Os atributos do ato administrativo são: a) Presunção de Legitimidade (ou veracidade): presume-se que o ato foi praticado em conformidade com a lei e a verdade, admitindo prova em contrário; b) Autoexecutoriedade: possibilidade de o ato ser executado pela própria Administração, sem necessidade de intervenção judicial (exceção à regra); c) Tipicidade: o ato deve corresponder a uma figura legal predefinida; d) Imperatividade: o ato se impõe a terceiros, independentemente de sua concordância.'
        },
        {
            questao: 'A "presunção de legitimidade" do ato administrativo significa que:',
            opcoes: [
                { texto: 'O ato é perfeito e válido em todos os seus aspectos.', correta: false },
                { texto: 'O ato foi expedido em conformidade com a lei e possui validade até que se prove o contrário.', correta: true },
                { texto: 'Ninguém pode questionar a validade do ato administrativo.', correta: false },
                { texto: 'A administração não precisa motivar seus atos.', correta: false }
            ],
            resolucao: 'A presunção de legitimidade é um atributo que confere ao ato administrativo a presunção de que ele foi editado em conformidade com a lei e os fatos, gerando efeitos imediatos. No entanto, essa presunção é relativa (juris tantum), podendo ser afastada por prova em contrário.'
        },
        {
            questao: 'A "autoexecutoriedade" do ato administrativo permite à Administração Pública:',
            opcoes: [
                { texto: 'Revogar seus próprios atos, mesmo que discricionários.', correta: false },
                { texto: 'Executar o ato imediatamente, independentemente de autorização judicial prévia, nos casos previstos em lei.', correta: true },
                { texto: 'Alterar a finalidade do ato após sua publicação.', correta: false },
                { texto: 'Aplicar sanções penais a particulares sem processo legal.', correta: false }
            ],
            resolucao: 'A autoexecutoriedade é a capacidade de o ato administrativo ser posto em prática pela própria Administração, sem a necessidade de recorrer ao Poder Judiciário para sua execução. Este atributo não é inerente a todos os atos, dependendo de previsão legal expressa ou de situação de urgência.'
        },
        {
            questao: 'Assinale a alternativa correta sobre a "revogação" do ato administrativo:',
            opcoes: [
                { texto: 'A revogação ocorre quando um ato administrativo é ilegal.', correta: false },
                { texto: 'A revogação é a supressão de um ato válido e eficaz por motivos de oportunidade e conveniência, visando o interesse público.', correta: true },
                { texto: 'A revogação tem efeitos retroativos (ex tunc).', correta: false },
                { texto: 'A revogação é aplicada apenas a atos vinculados.', correta: false }
            ],
            resolucao: 'A revogação é um ato discricionário da Administração Pública, que extingue um ato administrativo válido e eficaz por considerar que ele não é mais oportuno ou conveniente ao interesse público. Seus efeitos são geralmente prospectivos (ex nunc).'
        },
        {
            questao: 'O princípio da "tipicidade" do ato administrativo significa que:',
            opcoes: [
                { texto: 'Todo ato administrativo deve ser padronizado e igual para todos.', correta: false },
                { texto: 'O ato administrativo deve corresponder a um tipo legal previamente definido em lei, vedando a criação de atos inominados pela Administração.', correta: true },
                { texto: 'O ato administrativo deve ser digitado em máquina de escrever.', correta: false },
                { texto: 'Apenas atos discricionários possuem esse atributo.', correta: false }
            ],
            resolucao: 'A tipicidade é o atributo que impõe que o ato administrativo esteja sempre previsto em lei, ou seja, a Administração só pode praticar atos que estejam previamente definidos e regulamentados pela legislação, garantindo a legalidade e evitando arbitrariedades.'
        },
        {
            questao: 'Qual a principal diferença entre "anulação" e "revogação" de um ato administrativo?',
            opcoes: [
                { texto: 'Anulação é por ilegalidade, com efeitos retroativos; revogação é por oportunidade e conveniência, com efeitos prospectivos.', correta: true },
                { texto: 'Anulação é feita pelo Poder Judiciário, revogação pela própria Administração.', correta: false },
                { texto: 'Ambas geram os mesmos efeitos jurídicos.', correta: false },
                { texto: 'Anulação só se aplica a atos discricionários, revogação a atos vinculados.', correta: false }
            ],
            resolucao: 'A **anulação** é o desfazimento de um ato administrativo ILEGAL, com efeitos retroativos (ex tunc), podendo ser feita pela própria Administração (autotutela) ou pelo Poder Judiciário. A **revogação** é o desfazimento de um ato VÁLIDO, mas inoportuno ou inconveniente, com efeitos prospectivos (ex nunc), feita apenas pela Administração.'
        },
        {
            questao: 'A "discricionariedade" administrativa se manifesta quando a lei:',
            opcoes: [
                { texto: 'Define exatamente como o administrador deve agir em todas as situações.', correta: false },
                { texto: 'Concede ao administrador a liberdade para escolher, dentro dos limites legais, a solução mais oportuna e conveniente para o interesse público.', correta: true },
                { texto: 'Obriga o administrador a seguir apenas suas preferências pessoais.', correta: false },
                { texto: 'Permite que o administrador crie leis sem prévia autorização.', correta: false }
            ],
            resolucao: 'A discricionariedade é uma margem de liberdade que a lei confere à Administração para, diante do caso concreto, escolher a melhor solução para o interesse público, considerando critérios de oportunidade e conveniência, sempre dentro dos limites estabelecidos pela lei.'
        },
        {
            questao: 'O que se entende por "convalidação" de um ato administrativo?',
            opcoes: [
                { texto: 'A anulação de um ato administrativo ilegal.', correta: false },
                { texto: 'A correção de um vício em um ato administrativo ilegal, para que ele se torne válido e produza seus efeitos retroativamente.', correta: true },
                { texto: 'A revogação de um ato por interesse público.', correta: false },
                { texto: 'A criação de um novo ato para substituir um anterior.', correta: false }
            ],
            resolucao: 'A convalidação (ou saneamento) é o ato pelo qual a Administração Pública corrige um vício sanável em um ato administrativo ilegal, tornando-o válido e eficaz desde a sua origem (efeitos ex tunc), desde que não haja lesão ao interesse público nem a terceiros.'
        },
        {
            questao: 'A "imperatividade" do ato administrativo significa que:',
            opcoes: [
                { texto: 'O ato só produz efeitos se o particular concordar com ele.', correta: false },
                { texto: 'O ato se impõe a todos, independentemente da vontade dos destinatários, criando obrigações ou limitando direitos.', correta: true },
                { texto: 'O ato deve ser publicado em jornal de grande circulação.', correta: false },
                { texto: 'O ato não pode ser contestado judicialmente.', correta: false }
            ],
            resolucao: 'A imperatividade é o atributo que confere ao ato administrativo o poder de criar unilateralmente obrigações ou impor limitações a terceiros, sem que haja necessidade de sua concordância prévia. É uma manifestação do poder de império da Administração Pública.'
        },
        {
            questao: 'Qual dos seguintes elementos do ato administrativo NÃO pode ter seu mérito revogado pela Administração Pública?',
            opcoes: [
                { texto: 'A oportunidade.', correta: false },
                { texto: 'A conveniência.', correta: false },
                { texto: 'A legalidade (ou seja, um ato nulo).', correta: true },
                { texto: 'O objeto (se discricionário).', correta: false }
            ],
            resolucao: 'A Administração pode revogar atos válidos por critérios de oportunidade e conveniência (mérito). No entanto, não pode "revogar" um ato ilegal (nulo); ela deve anulá-lo, pois o ato ilegal já nasceu sem validade. A legalidade é um critério de validade, não de mérito.'
        }
    ]
  }
};