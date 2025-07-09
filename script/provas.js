// media/provas.js

const questoes = {
    'prova1': [
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
    'prova2': [
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
    'prova3': [
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
    ]
};