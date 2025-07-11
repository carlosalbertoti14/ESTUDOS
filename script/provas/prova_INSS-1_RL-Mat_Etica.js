questoes['Simulado RLM - TESTE 1'] = {
title: 'Raciocínio Lógico-Matemático - TESTE 1: Proposições e Conectivos',
data: [
{
questao: 'A proposição "Se João estuda, então ele passa" é:',
opcoes: [
{ texto: 'Uma conjunção.', correta: false },
{ texto: 'Uma disjunção.', correta: false },
{ texto: 'Uma condicional.', correta: true },
{ texto: 'Uma bicondicional.', correta: false }
],
resolucao: 'A estrutura "Se... então..." representa uma **condicional** (p → q).'
},
{
questao: 'Qual é a negação correta da proposição: "Pedro vai à escola e Maria estuda"?',
opcoes: [
{ texto: 'Pedro não vai à escola e Maria não estuda.', correta: false },
{ texto: 'Pedro vai à escola ou Maria não estuda.', correta: false },
{ texto: 'Pedro não vai à escola ou Maria não estuda.', correta: true },
{ texto: 'Pedro não vai à escola e Maria estuda.', correta: false }
],
resolucao: 'A negação de uma conjunção é uma disjunção com ambas as proposições negadas: ¬p ∨ ¬q.'
},
{
questao: 'Dada a proposição: "Hoje faz sol ou Maria está em casa", trata-se de:',
opcoes: [
{ texto: 'Conjunção.', correta: false },
{ texto: 'Condicional.', correta: false },
{ texto: 'Disjunção.', correta: true },
{ texto: 'Negação.', correta: false }
],
resolucao: 'A palavra "ou" indica uma **disjunção** lógica (p ∨ q).'
},
{
questao: 'A bicondicional é uma proposição em que:',
opcoes: [
{ texto: 'Uma proposição implica a outra.', correta: false },
{ texto: 'Ambas são verdadeiras ou ambas são falsas.', correta: true },
{ texto: 'Sempre será verdadeira.', correta: false },
{ texto: 'É equivalente à disjunção.', correta: false }
],
resolucao: 'A bicondicional "p ↔ q" é verdadeira se p e q tiverem o mesmo valor lógico.'
},
{
questao: 'Qual é a proposição composta equivalente a: "Não é verdade que João estudou e Maria viajou"?',
opcoes: [
{ texto: 'João não estudou e Maria não viajou.', correta: false },
{ texto: 'João estudou ou Maria viajou.', correta: false },
{ texto: 'João não estudou ou Maria não viajou.', correta: true },
{ texto: 'João não estudou e Maria viajou.', correta: false }
],
resolucao: 'Usa-se a Lei de De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q.'
},
{
questao: 'A proposição "Se chove, então a rua molha" tem como contrarrecíproca:',
opcoes: [
{ texto: 'Se não chove, então a rua não molha.', correta: false },
{ texto: 'Se a rua não molha, então não chove.', correta: true },
{ texto: 'Se molha a rua, então chove.', correta: false },
{ texto: 'A rua molha se chove.', correta: false }
],
resolucao: 'A contrarrecíproca de "Se p, então q" é "Se ¬q, então ¬p".'
},
{
questao: 'Uma proposição é considerada "simples" quando:',
opcoes: [
{ texto: 'Pode ser dividida em duas partes.', correta: false },
{ texto: 'Não contém conectivo lógico.', correta: true },
{ texto: 'É equivalente a outra proposição.', correta: false },
{ texto: 'Possui valor lógico falso.', correta: false }
],
resolucao: 'Proposição simples não possui conectivos. Ex: "Está chovendo."'
},
{
questao: 'A negação da proposição "Se Maria corre, então João nada" é:',
opcoes: [
{ texto: 'Maria não corre ou João não nada.', correta: false },
{ texto: 'Maria corre e João não nada.', correta: true },
{ texto: 'Maria corre ou João nada.', correta: false },
{ texto: 'Se João não nada, então Maria corre.', correta: false }
],
resolucao: 'A negação de "Se p então q" é "p e não q".'
},
{
questao: 'A proposição "João é alto ou magro" será falsa quando:',
opcoes: [
{ texto: 'João for alto.', correta: false },
{ texto: 'João for magro.', correta: false },
{ texto: 'João não for alto e nem magro.', correta: true },
{ texto: 'João for alto e magro.', correta: false }
],
resolucao: 'A disjunção (p ∨ q) é falsa **somente** se ambas forem falsas.'
},
{
questao: 'A expressão "p → q" é logicamente equivalente a:',
opcoes: [
{ texto: '¬p ∧ q.', correta: false },
{ texto: '¬p ∨ q.', correta: true },
{ texto: 'p ∧ ¬q.', correta: false },
{ texto: 'p ∨ q.', correta: false }
],
resolucao: 'A condicional "Se p, então q" é logicamente equivalente a "¬p ∨ q".'
}
]
};

questoes['Simulado RLM - TESTE 2'] = {
title: 'Raciocínio Lógico-Matemático - TESTE 2: Estruturas Lógicas e Tabelas-Verdade',
data: [
{
questao: 'Quantas linhas tem uma tabela-verdade de uma proposição com 3 proposições simples?',
opcoes: [
{ texto: '4.', correta: false },
{ texto: '6.', correta: false },
{ texto: '8.', correta: true },
{ texto: '16.', correta: false }
],
resolucao: 'Para n proposições simples, uma tabela-verdade tem 2^n linhas. Logo, 2^3 = 8.'
},
{
questao: 'A tabela-verdade da disjunção "p ∨ q" apresenta valor falso apenas quando:',
opcoes: [
{ texto: 'p é verdadeiro e q é falso.', correta: false },
{ texto: 'p é falso e q é verdadeiro.', correta: false },
{ texto: 'p é verdadeiro e q é verdadeiro.', correta: false },
{ texto: 'p é falso e q é falso.', correta: true }
],
resolucao: 'A disjunção só é falsa se ambas forem falsas.'
},
{
questao: 'Qual o valor lógico da proposição: "2 é par e 5 é par"?',
opcoes: [
{ texto: 'Verdadeira.', correta: false },
{ texto: 'Falsa.', correta: true },
{ texto: 'Indeterminada.', correta: false },
{ texto: 'Depende do contexto.', correta: false }
],
resolucao: '2 é par (V), 5 é ímpar (F). Conjunção: V ∧ F = F.'
},
{
questao: 'Se "p" é falso e "q" é verdadeiro, qual o valor de "p → q"?',
opcoes: [
{ texto: 'Verdadeiro.', correta: true },
{ texto: 'Falso.', correta: false },
{ texto: 'Indefinido.', correta: false },
{ texto: 'Depende da proposição.', correta: false }
],
resolucao: 'Condicional "p → q" só é falsa se p for V e q for F.'
},
{
questao: 'A negação de uma proposição que é verdadeira será:',
opcoes: [
{ texto: 'Verdadeira.', correta: false },
{ texto: 'Falsa.', correta: true },
{ texto: 'Indeterminada.', correta: false },
{ texto: 'Inexistente.', correta: false }
],
resolucao: 'A negação inverte o valor lógico da proposição.'
},
{
questao: 'A conjunção "p ∧ q" é verdadeira quando:',
opcoes: [
{ texto: 'p é verdadeira e q é falsa.', correta: false },
{ texto: 'Ambas forem falsas.', correta: false },
{ texto: 'Ambas forem verdadeiras.', correta: true },
{ texto: 'p for falsa, independente de q.', correta: false }
],
resolucao: 'A conjunção só é verdadeira se ambas forem verdadeiras.'
},
{
questao: 'Qual alternativa apresenta uma tautologia?',
opcoes: [
{ texto: 'p ∨ ¬p', correta: true },
{ texto: 'p ∧ ¬p', correta: false },
{ texto: '¬(p ∧ p)', correta: false },
{ texto: 'p → ¬p', correta: false }
],
resolucao: 'Tautologia: sempre verdadeira. "p ∨ ¬p" é sempre V.'
},
{
questao: 'Qual alternativa apresenta uma contradição?',
opcoes: [
{ texto: 'p ∧ ¬p', correta: true },
{ texto: 'p ∨ p', correta: false },
{ texto: 'p → p', correta: false },
{ texto: '¬(p ∧ ¬p)', correta: false }
],
resolucao: 'Contradição: sempre falsa. "p ∧ ¬p" nunca é verdadeira.'
},
{
questao: 'Se a proposição composta "¬p ∨ q" é falsa, então:',
opcoes: [
{ texto: 'p é falso e q é falso.', correta: false },
{ texto: 'p é verdadeiro e q é falso.', correta: true },
{ texto: 'p é verdadeiro e q é verdadeiro.', correta: false },
{ texto: 'p é falso e q é verdadeiro.', correta: false }
],
resolucao: 'Para "¬p ∨ q" ser falsa, ¬p e q devem ser falsos. Logo, p = V, q = F.'
},
{
questao: 'A equivalência lógica de "p → q" é:',
opcoes: [
{ texto: '¬p ∨ q.', correta: true },
{ texto: 'p ∧ q.', correta: false },
{ texto: 'p ∨ ¬q.', correta: false },
{ texto: '¬q ∧ ¬p.', correta: false }
],
resolucao: 'Condicional é logicamente equivalente a "¬p ∨ q".'
}
]
};

questoes['Simulado RLM - TESTE 3'] = {
title: 'Raciocínio Lógico-Matemático - TESTE 3: Diagramas Lógicos e Conjuntos',
data: [
{
questao: 'Todo homem é mortal. Sócrates é homem. Logo:',
opcoes: [
{ texto: 'Sócrates é imortal.', correta: false },
{ texto: 'Sócrates é mortal.', correta: true },
{ texto: 'Sócrates não é homem.', correta: false },
{ texto: 'Sócrates é um animal.', correta: false }
],
resolucao: 'Silogismo clássico: se todo homem é mortal e Sócrates é homem, então ele é mortal.'
},
{
questao: 'Em um conjunto A = {1,2,3,4}, o número 5 é:',
opcoes: [
{ texto: 'Pertence a A.', correta: false },
{ texto: 'Está contido em A.', correta: false },
{ texto: 'Não pertence a A.', correta: true },
{ texto: 'É subconjunto de A.', correta: false }
],
resolucao: '5 ∉ A. Ele não está presente no conjunto definido.'
},
{
questao: 'Se todo A é B e todo B é C, então:',
opcoes: [
{ texto: 'Todo C é A.', correta: false },
{ texto: 'Algum A não é C.', correta: false },
{ texto: 'Todo A é C.', correta: true },
{ texto: 'Todo C é B.', correta: false }
],
resolucao: 'Se A ⊂ B e B ⊂ C, então A ⊂ C.'
},
{
questao: 'Qual símbolo representa corretamente: "x pertence ao conjunto A"?',
opcoes: [
{ texto: 'x ∈ A.', correta: true },
{ texto: 'x ⊂ A.', correta: false },
{ texto: 'x ∉ A.', correta: false },
{ texto: 'x ∪ A.', correta: false }
],
resolucao: 'O símbolo "∈" indica pertencimento.'
},
{
questao: 'O conjunto dos números naturais pares menores que 6 é:',
opcoes: [
{ texto: '{2,4,6}', correta: false },
{ texto: '{0,2,4}', correta: true },
{ texto: '{1,3,5}', correta: false },
{ texto: '{2,4,5}', correta: false }
],
resolucao: 'Os pares naturais menores que 6 são: 0, 2, 4.'
},
{
questao: 'Na linguagem dos conjuntos, a interseção de A e B contém:',
opcoes: [
{ texto: 'Todos os elementos de A e de B.', correta: false },
{ texto: 'Somente os elementos de A.', correta: false },
{ texto: 'Somente os elementos que estão em A ou em B.', correta: false },
{ texto: 'Somente os elementos que estão em A e também em B.', correta: true }
],
resolucao: 'Interseção (A ∩ B) = elementos comuns a ambos.'
},
{
questao: 'A união de dois conjuntos A = {1,2} e B = {2,3} é:',
opcoes: [
{ texto: '{1,2,3}', correta: true },
{ texto: '{2}', correta: false },
{ texto: '{1,3}', correta: false },
{ texto: '{1,2,2,3}', correta: false }
],
resolucao: 'União (A ∪ B) = {1,2,3} (sem repetir elementos).'
},
{
questao: 'Um subconjunto de {a,b} é:',
opcoes: [
{ texto: '{a}', correta: true },
{ texto: '{a,b,c}', correta: false },
{ texto: '{a,b,d}', correta: false },
{ texto: '{c}', correta: false }
],
resolucao: 'Subconjunto = qualquer conjunto formado com elementos de outro.'
},
{
questao: 'Se um aluno pertence ao grupo dos que passaram, então:',
opcoes: [
{ texto: 'Ele não estudou.', correta: false },
{ texto: 'Ele é do grupo dos reprovados.', correta: false },
{ texto: 'Ele não pertence ao grupo dos reprovados.', correta: true },
{ texto: 'Ele não pertence a nenhum grupo.', correta: false }
],
resolucao: 'Pertencer ao grupo dos aprovados implica não estar no grupo dos reprovados.'
},
{
questao: 'Se A = {1,2,3} e B = {3,4,5}, qual é A ∩ B?',
opcoes: [
{ texto: '{1,2}', correta: false },
{ texto: '{3}', correta: true },
{ texto: '{1,2,3,4,5}', correta: false },
{ texto: '{4,5}', correta: false }
],
resolucao: 'A interseção (∩) é o conjunto dos elementos comuns: {3}.'
}
]
};

questoes['Simulado RLM - TESTE 4'] = {
title: 'Raciocínio Lógico-Matemático - TESTE 4: Sequências e Padrões Numéricos',
data: [
{
questao: 'Qual é o próximo número da sequência: 2, 4, 8, 16, ...?',
opcoes: [
{ texto: '18.', correta: false },
{ texto: '24.', correta: false },
{ texto: '30.', correta: false },
{ texto: '32.', correta: true }
],
resolucao: 'A sequência dobra a cada termo: 2, 4, 8, 16, **32**.'
},
{
questao: 'Complete a sequência: 3, 6, 9, 12, __?',
opcoes: [
{ texto: '15.', correta: true },
{ texto: '16.', correta: false },
{ texto: '18.', correta: false },
{ texto: '21.', correta: false }
],
resolucao: 'Progressão aritmética com razão 3: próximo termo = 12 + 3 = 15.'
},
{
questao: 'Qual é o padrão da sequência: 1, 1, 2, 3, 5, 8, __?',
opcoes: [
{ texto: '13.', correta: true },
{ texto: '12.', correta: false },
{ texto: '11.', correta: false },
{ texto: '14.', correta: false }
],
resolucao: 'Sequência de Fibonacci: soma dos dois anteriores. 5 + 8 = **13**.'
},
{
questao: 'A sequência: 100, 90, 81, 73, ... segue qual padrão?',
opcoes: [
{ texto: 'Subtrai 10.', correta: false },
{ texto: 'Subtrai 9, depois 9, depois 8...', correta: true },
{ texto: 'Multiplica por 0,9.', correta: false },
{ texto: 'Soma 9 e depois subtrai 1.', correta: false }
],
resolucao: 'Diferenças: -10, -9, -8... padrão decrescente.'
},
{
questao: 'Qual é o 6º termo da sequência: 2, 5, 10, 17, 26, __?',
opcoes: [
{ texto: '35.', correta: false },
{ texto: '37.', correta: true },
{ texto: '38.', correta: false },
{ texto: '40.', correta: false }
],
resolucao: 'Aumenta 3, 5, 7, 9... (diferença ímpar). 26 + 11 = **37**.'
},
{
questao: 'Qual número completa a sequência: 64, 32, 16, 8, __?',
opcoes: [
{ texto: '4.', correta: true },
{ texto: '2.', correta: false },
{ texto: '6.', correta: false },
{ texto: '10.', correta: false }
],
resolucao: 'Divisão por 2. 8 ÷ 2 = **4**.'
},
{
questao: 'Complete a sequência: 2, 3, 5, 7, 11, __?',
opcoes: [
{ texto: '13.', correta: true },
{ texto: '15.', correta: false },
{ texto: '14.', correta: false },
{ texto: '17.', correta: false }
],
resolucao: 'Sequência dos números primos. O próximo após 11 é **13**.'
},
{
questao: 'Na sequência 1, 4, 9, 16, __, o próximo número é:',
opcoes: [
{ texto: '20.', correta: false },
{ texto: '25.', correta: true },
{ texto: '30.', correta: false },
{ texto: '36.', correta: false }
],
resolucao: 'Quadrados perfeitos: 1², 2², 3², 4², 5² = **25**.'
},
{
questao: 'Qual o próximo termo da sequência: 1, 2, 6, 24, __?',
opcoes: [
{ texto: '48.', correta: false },
{ texto: '96.', correta: false },
{ texto: '120.', correta: true },
{ texto: '144.', correta: false }
],
resolucao: 'Fatorial: 1!, 2!, 3!, 4!, então 5! = **120**.'
},
{
questao: 'Identifique o padrão: 81, 27, 9, 3, __?',
opcoes: [
{ texto: '1.', correta: true },
{ texto: '2.', correta: false },
{ texto: '0.', correta: false },
{ texto: '4.', correta: false }
],
resolucao: 'Divisão por 3: 81 ÷ 3 = 27, ..., até 3 ÷ 3 = **1**.'
}
]
};

questoes['Simulado RLM - TESTE 5'] = {
title: 'Raciocínio Lógico-Matemático - TESTE 5: Razão, Proporção e Porcentagem',
data: [
{
questao: 'Se 3 lápis custam R$ 6,00, quanto custam 5 lápis?',
opcoes: [
{ texto: 'R$ 9,00.', correta: true },
{ texto: 'R$ 10,00.', correta: false },
{ texto: 'R$ 12,00.', correta: false },
{ texto: 'R$ 8,00.', correta: false }
],
resolucao: 'Cada lápis custa R$ 2,00. 5 x 2 = R$ 9,00.'
},
{
questao: '30% de 200 é igual a:',
opcoes: [
{ texto: '30.', correta: false },
{ texto: '50.', correta: false },
{ texto: '60.', correta: true },
{ texto: '70.', correta: false }
],
resolucao: '30% de 200 = (30/100) x 200 = 60.'
},
{
questao: 'A razão entre 8 e 2 é:',
opcoes: [
{ texto: '2.', correta: false },
{ texto: '4.', correta: true },
{ texto: '6.', correta: false },
{ texto: '16.', correta: false }
],
resolucao: '8 ÷ 2 = 4. A razão é 4.'
},
{
questao: 'Se um produto de R$ 150,00 teve um desconto de 20%, o valor final é:',
opcoes: [
{ texto: 'R$ 120,00.', correta: false },
{ texto: 'R$ 130,00.', correta: false },
{ texto: 'R$ 125,00.', correta: false },
{ texto: 'R$ 120,00.', correta: true }
],
resolucao: '20% de 150 = 30. Descontando: 150 - 30 = 120.'
},
{
questao: 'Se a razão entre x e 5 é 2, então x é:',
opcoes: [
{ texto: '10.', correta: true },
{ texto: '5.', correta: false },
{ texto: '2.', correta: false },
{ texto: '7.', correta: false }
],
resolucao: 'x/5 = 2 → x = 2 x 5 = 10.'
},
{
questao: 'Qual o valor de 25% de 480?',
opcoes: [
{ texto: '100.', correta: false },
{ texto: '120.', correta: true },
{ texto: '125.', correta: false },
{ texto: '140.', correta: false }
],
resolucao: '25% = 1/4 de 480 = 120.'
},
{
questao: 'Dois números estão na razão 3:4 e sua soma é 56. Quais são eles?',
opcoes: [
{ texto: '24 e 32.', correta: true },
{ texto: '30 e 26.', correta: false },
{ texto: '28 e 28.', correta: false },
{ texto: '20 e 36.', correta: false }
],
resolucao: '3x + 4x = 56 → x = 8 → 3x = 24, 4x = 32.'
},
{
questao: 'Um aumento de 10% em R$ 150,00 resulta em:',
opcoes: [
{ texto: 'R$ 160,00.', correta: false },
{ texto: 'R$ 165,00.', correta: true },
{ texto: 'R$ 155,00.', correta: false },
{ texto: 'R$ 170,00.', correta: false }
],
resolucao: '10% de 150 = 15 → 150 + 15 = 165.'
},
{
questao: '50 é quantos por cento de 200?',
opcoes: [
{ texto: '20%.', correta: true },
{ texto: '25%.', correta: false },
{ texto: '30%.', correta: false },
{ texto: '40%.', correta: false }
],
resolucao: '(50 ÷ 200) x 100 = 25%.'
},
{
questao: 'A razão entre 18 e 6 é:',
opcoes: [
{ texto: '2.', correta: false },
{ texto: '3.', correta: true },
{ texto: '6.', correta: false },
{ texto: '12.', correta: false }
],
resolucao: '18 ÷ 6 = 3.'
}
]
};

questoes['Simulado RLM - TESTE 6'] = {
title: 'Raciocínio Lógico-Matemático - TESTE 6: Problemas Aritméticos',
data: [
{
questao: 'João tem 12 anos. Sua irmã tem o dobro da idade. Quantos anos ela tem?',
opcoes: [
{ texto: '24.', correta: true },
{ texto: '20.', correta: false },
{ texto: '22.', correta: false },
{ texto: '26.', correta: false }
],
resolucao: '2 x 12 = 24.'
},
{
questao: 'Maria tinha R$ 50,00. Gastou R$ 30,00. Ficou com:',
opcoes: [
{ texto: 'R$ 25,00.', correta: false },
{ texto: 'R$ 30,00.', correta: false },
{ texto: 'R$ 20,00.', correta: true },
{ texto: 'R$ 10,00.', correta: false }
],
resolucao: '50 - 30 = 20.'
},
{
questao: 'Se Pedro tem 3 vezes a idade de Ana, e Ana tem 10 anos, Pedro tem:',
opcoes: [
{ texto: '30 anos.', correta: true },
{ texto: '25 anos.', correta: false },
{ texto: '35 anos.', correta: false },
{ texto: '20 anos.', correta: false }
],
resolucao: '3 x 10 = 30.'
},
{
questao: 'Um carro percorre 60 km em 1 hora. Em 3 horas, percorre:',
opcoes: [
{ texto: '180 km.', correta: true },
{ texto: '150 km.', correta: false },
{ texto: '120 km.', correta: false },
{ texto: '200 km.', correta: false }
],
resolucao: '60 x 3 = 180.'
},
{
questao: 'A diferença entre 87 e 45 é:',
opcoes: [
{ texto: '42.', correta: true },
{ texto: '43.', correta: false },
{ texto: '41.', correta: false },
{ texto: '44.', correta: false }
],
resolucao: '87 - 45 = 42.'
},
{
questao: 'Paulo tem R$ 100,00 e gasta 40%. Quanto sobra?',
opcoes: [
{ texto: 'R$ 60,00.', correta: true },
{ texto: 'R$ 40,00.', correta: false },
{ texto: 'R$ 70,00.', correta: false },
{ texto: 'R$ 50,00.', correta: false }
],
resolucao: '40% de 100 = 40 → sobra: 60.'
},
{
questao: 'Se 4 trabalhadores fazem um serviço em 8 dias, quantos dias levariam 8 trabalhadores?',
opcoes: [
{ texto: '4 dias.', correta: true },
{ texto: '2 dias.', correta: false },
{ texto: '6 dias.', correta: false },
{ texto: '8 dias.', correta: false }
],
resolucao: 'Regra de três: mais trabalhadores = menos dias.'
},
{
questao: 'A metade de 36 é:',
opcoes: [
{ texto: '16.', correta: false },
{ texto: '18.', correta: true },
{ texto: '20.', correta: false },
{ texto: '12.', correta: false }
],
resolucao: '36 ÷ 2 = 18.'
},
{
questao: 'Se um produto custa R$ 80 e tem 25% de desconto, o valor final é:',
opcoes: [
{ texto: 'R$ 60,00.', correta: false },
{ texto: 'R$ 65,00.', correta: false },
{ texto: 'R$ 70,00.', correta: true },
{ texto: 'R$ 68,00.', correta: false }
],
resolucao: '25% de 80 = 20 → 80 - 20 = 60.'
},
{
questao: 'Quantas horas há em 3 dias?',
opcoes: [
{ texto: '48 horas.', correta: false },
{ texto: '72 horas.', correta: true },
{ texto: '36 horas.', correta: false },
{ texto: '60 horas.', correta: false }
],
resolucao: '3 x 24 = 72 horas.'
}
]
};

questoes['Simulado RLM - TESTE 7'] = {
title: 'Raciocínio Lógico-Matemático - TESTE 7: Argumentação Lógica e Situações Cotidianas',
data: [
{
questao: 'Se todos os carros são veículos e alguns veículos são vermelhos, então é correto afirmar que:',
opcoes: [
{ texto: 'Todos os carros são vermelhos.', correta: false },
{ texto: 'Alguns carros são vermelhos.', correta: false },
{ texto: 'Nenhum carro é vermelho.', correta: false },
{ texto: 'Não é possível determinar a cor dos carros.', correta: true }
],
resolucao: 'A informação "alguns veículos são vermelhos" não permite concluir algo sobre todos os carros.'
},
{
questao: 'Qual das alternativas apresenta uma falácia?',
opcoes: [
{ texto: 'Se está chovendo, então a rua está molhada.', correta: false },
{ texto: 'A rua está molhada, então está chovendo.', correta: true },
{ texto: 'Se estudo, tenho chance de passar.', correta: false },
{ texto: 'Todos os homens são mortais. Sócrates é homem. Logo, é mortal.', correta: false }
],
resolucao: 'A falácia é confundir a consequência com a causa. A rua pode estar molhada por outro motivo.'
},
{
questao: 'A negação correta da proposição "Todos os alunos passaram" é:',
opcoes: [
{ texto: 'Nenhum aluno passou.', correta: false },
{ texto: 'Alguns alunos passaram.', correta: false },
{ texto: 'Pelo menos um aluno não passou.', correta: true },
{ texto: 'Todos os alunos reprovaram.', correta: false }
],
resolucao: 'A negação de "todos" é "pelo menos um não".'
},
{
questao: 'Assinale a conclusão válida: "Se chover, não irei ao parque. Choveu."',
opcoes: [
{ texto: 'Fui ao parque.', correta: false },
{ texto: 'Não choveu.', correta: false },
{ texto: 'Não fui ao parque.', correta: true },
{ texto: 'Está nublado.', correta: false }
],
resolucao: 'Condicional: se A, então B. Se A aconteceu, B também ocorre.'
},
{
questao: 'Complete logicamente: "Se Maria é engenheira, então ela fez faculdade. Maria é engenheira."',
opcoes: [
{ texto: 'Logo, ela não fez faculdade.', correta: false },
{ texto: 'Logo, ela fez faculdade.', correta: true },
{ texto: 'Logo, ela é advogada.', correta: false },
{ texto: 'Logo, ela não é engenheira.', correta: false }
],
resolucao: 'Modus ponens: se p → q e p, então q.'
},
{
questao: 'Assinale a alternativa que representa uma negação correta: "Se João foi ao mercado, então comprou pão."',
opcoes: [
{ texto: 'João foi ao mercado e comprou pão.', correta: false },
{ texto: 'João não foi ao mercado ou não comprou pão.', correta: false },
{ texto: 'João foi ao mercado e não comprou pão.', correta: true },
{ texto: 'João não foi ao mercado e não comprou pão.', correta: false }
],
resolucao: 'Negação de "se p, então q" = "p e não q".'
},
{
questao: 'Todo número par é divisível por 2. O número 8 é par. Conclui-se que:',
opcoes: [
{ texto: '8 não é divisível por 2.', correta: false },
{ texto: '8 é divisível por 4.', correta: false },
{ texto: '8 é divisível por 2.', correta: true },
{ texto: '8 é ímpar.', correta: false }
],
resolucao: 'Silogismo válido. 8 é par, logo, é divisível por 2.'
},
{
questao: 'Se "p" é falso e "p → q" é verdadeiro, então "q" é:',
opcoes: [
{ texto: 'Verdadeiro.', correta: false },
{ texto: 'Falso.', correta: false },
{ texto: 'Pode ser verdadeiro ou falso.', correta: true },
{ texto: 'Sempre verdadeiro.', correta: false }
],
resolucao: 'Condicional com antecedente falso sempre resulta em proposição verdadeira, independente de q.'
},
{
questao: 'Analise: "Se 5 > 3, então 2 + 2 = 4." Essa proposição é:',
opcoes: [
{ texto: 'Falsa.', correta: false },
{ texto: 'Verdadeira.', correta: true },
{ texto: 'Sem valor lógico.', correta: false },
{ texto: 'Ambígua.', correta: false }
],
resolucao: 'Ambas as partes são verdadeiras, então a condicional é verdadeira.'
},
{
questao: 'A negação da proposição "Todos os candidatos foram aprovados ou fizeram recurso" é:',
opcoes: [
{ texto: 'Nenhum candidato foi aprovado e nenhum fez recurso.', correta: false },
{ texto: 'Algum candidato não foi aprovado e não fez recurso.', correta: true },
{ texto: 'Algum candidato foi aprovado ou não fez recurso.', correta: false },
{ texto: 'Todos os candidatos não foram aprovados nem fizeram recurso.', correta: false }
],
resolucao: 'Negação de "todos A ou B" = "algum não A e não B".'
}
]
};

questoes['Simulado RLM - TESTE 8'] = {
title: 'Raciocínio Lógico-Matemático - TESTE 8: Gráficos e Tabelas',
data: [
{
questao: 'Em um gráfico de barras, a maior barra representa o mês com:',
opcoes: [
{ texto: 'Menor valor.', correta: false },
{ texto: 'Maior valor.', correta: true },
{ texto: 'Valor zero.', correta: false },
{ texto: 'Valor médio.', correta: false }
],
resolucao: 'A maior barra indica o maior valor representado no gráfico.'
},
{
questao: 'Se uma tabela mostra que João vendeu 10 produtos a R$ 5,00, o total arrecadado é:',
opcoes: [
{ texto: 'R$ 15,00.', correta: false },
{ texto: 'R$ 50,00.', correta: true },
{ texto: 'R$ 25,00.', correta: false },
{ texto: 'R$ 10,00.', correta: false }
],
resolucao: '10 x 5 = R$ 50,00.'
},
{
questao: 'Em um gráfico de pizza, uma fatia de 25% representa:',
opcoes: [
{ texto: 'Um quarto do total.', correta: true },
{ texto: 'Metade do total.', correta: false },
{ texto: '75% do total.', correta: false },
{ texto: 'Nenhuma parte significativa.', correta: false }
],
resolucao: '25% = 1/4 = um quarto do total.'
},
{
questao: 'Se uma barra representa 120 e outra representa 60, qual a relação entre elas?',
opcoes: [
{ texto: 'A barra de 120 é metade da de 60.', correta: false },
{ texto: 'As duas têm o mesmo valor.', correta: false },
{ texto: 'A barra de 120 é o dobro da de 60.', correta: true },
{ texto: 'A barra de 60 é maior.', correta: false }
],
resolucao: '120 ÷ 60 = 2 → A primeira é o dobro da segunda.'
},
{
questao: 'Se o gráfico mostra aumento mensal de 10 unidades, o crescimento em 4 meses será de:',
opcoes: [
{ texto: '30 unidades.', correta: false },
{ texto: '40 unidades.', correta: true },
{ texto: '50 unidades.', correta: false },
{ texto: '60 unidades.', correta: false }
],
resolucao: '10 x 4 = 40.'
},
{
questao: 'Um gráfico mostra 3 setores de mesmo tamanho. Cada um representa:',
opcoes: [
{ texto: '20%.', correta: false },
{ texto: '33,33%.', correta: true },
{ texto: '50%.', correta: false },
{ texto: '25%.', correta: false }
],
resolucao: '100% ÷ 3 ≈ 33,33% cada.'
},
{
questao: 'A soma de todos os valores em um gráfico de pizza representa:',
opcoes: [
{ texto: '50%.', correta: false },
{ texto: '100%.', correta: true },
{ texto: '75%.', correta: false },
{ texto: 'Não pode ser determinada.', correta: false }
],
resolucao: 'A pizza representa 100% de um todo.'
},
{
questao: 'Se a tabela mostra 3 produtos com vendas de 20, 30 e 50 unidades, o total vendido é:',
opcoes: [
{ texto: '100 unidades.', correta: true },
{ texto: '90 unidades.', correta: false },
{ texto: '80 unidades.', correta: false },
{ texto: '70 unidades.', correta: false }
],
resolucao: '20 + 30 + 50 = 100 unidades.'
},
{
questao: 'Em um gráfico, uma linha que sobe indica:',
opcoes: [
{ texto: 'Queda nos valores.', correta: false },
{ texto: 'Crescimento nos valores.', correta: true },
{ texto: 'Estagnação.', correta: false },
{ texto: 'Redução de velocidade.', correta: false }
],
resolucao: 'Linha ascendente → aumento dos valores.'
},
{
questao: 'A leitura correta de uma tabela depende de:',
opcoes: [
{ texto: 'Ignorar os títulos.', correta: false },
{ texto: 'Observar apenas o último valor.', correta: false },
{ texto: 'Analisar os rótulos e a legenda.', correta: true },
{ texto: 'Fazer suposições.', correta: false }
],
resolucao: 'A leitura correta exige observar rótulos, legendas e contexto.'
}
]
};




questoes['Simulado Ética - TESTE 1'] = {
title: 'Ética no Serviço Público 1',
data: [
{
questao: 'É um dos princípios da Administração Pública segundo a CF/88:',
opcoes: [
{ texto: 'Iniciativa privada.', correta: false },
{ texto: 'Legalidade.', correta: true },
{ texto: 'Conveniência.', correta: false },
{ texto: 'Publicidade restrita.', correta: false }
],
resolucao: 'Legalidade é um dos princípios do artigo 37 da CF/88.'
},
{
questao: 'Segundo o Código de Ética do Servidor Público (Dec. 1.171/94), é vedado ao servidor:',
opcoes: [
{ texto: 'Agir com cortesia no trato com colegas.', correta: false },
{ texto: 'Manter sigilo sobre assuntos da repartição.', correta: false },
{ texto: 'Usar cargo para obter vantagens pessoais.', correta: true },
{ texto: 'Atuar com eficiência.', correta: false }
],
resolucao: 'É vedado usar o cargo para obter qualquer vantagem indevida.'
},
{
questao: 'O servidor público deve resistir a pressões de superiores hierárquicos quando:',
opcoes: [
{ texto: 'Forem baseadas na urgência do serviço.', correta: false },
{ texto: 'Forem contrárias aos princípios éticos e legais.', correta: true },
{ texto: 'Forem voltadas para acelerar processos.', correta: false },
{ texto: 'Tiverem anuência de colegas.', correta: false }
],
resolucao: 'A ética exige que o servidor atue conforme a moralidade e legalidade, mesmo contra ordens indevidas.'
},
{
questao: 'A função pública exige conduta:',
opcoes: [
{ texto: 'Que beneficie o servidor e seus familiares.', correta: false },
{ texto: 'Que priorize amizades dentro do serviço.', correta: false },
{ texto: 'Que se baseie na moralidade administrativa.', correta: true },
{ texto: 'Subordinada apenas à chefia imediata.', correta: false }
],
resolucao: 'A moralidade administrativa deve pautar as ações do servidor público.'
},
{
questao: 'É considerado comportamento antiético:',
opcoes: [
{ texto: 'Usar recursos públicos apenas para fins institucionais.', correta: false },
{ texto: 'Tratar todos com igualdade e respeito.', correta: false },
{ texto: 'Fazer uso do cargo para obter favores pessoais.', correta: true },
{ texto: 'Recusar participação em atividades irregulares.', correta: false }
],
resolucao: 'Utilizar o cargo para benefício próprio é contrário ao Código de Ética.'
},
{
questao: 'Assinale a alternativa correta sobre a ética profissional:',
opcoes: [
{ texto: 'O servidor pode agir de forma sigilosa em toda situação.', correta: false },
{ texto: 'É ético deixar de comunicar irregularidades por medo de retaliação.', correta: false },
{ texto: 'O servidor deve comunicar qualquer irregularidade de que tenha conhecimento.', correta: true },
{ texto: 'A omissão é aceitável em casos de amizade com os envolvidos.', correta: false }
],
resolucao: 'O servidor é obrigado a comunicar à autoridade competente quaisquer atos contrários ao interesse público.'
},
{
questao: 'O servidor deve manter sigilo sobre informações do órgão:',
opcoes: [
{ texto: 'Apenas quando for conveniente.', correta: false },
{ texto: 'Somente se estiverem documentadas.', correta: false },
{ texto: 'Sempre, mesmo após deixar o cargo.', correta: true },
{ texto: 'Exceto em casos de benefício pessoal.', correta: false }
],
resolucao: 'O dever de sigilo permanece mesmo após o término do vínculo com a administração.'
},
{
questao: 'É obrigação do servidor público no trato com usuários:',
opcoes: [
{ texto: 'Fazer distinções conforme nível social.', correta: false },
{ texto: 'Prestar informações claras e com urbanidade.', correta: true },
{ texto: 'Responder apenas se houver benefício.', correta: false },
{ texto: 'Evitar contato direto com o cidadão.', correta: false }
],
resolucao: 'O bom atendimento e a clareza são deveres éticos fundamentais.'
},
{
questao: 'De acordo com o Código de Ética, é vedado ao servidor:',
opcoes: [
{ texto: 'Trabalhar em equipe.', correta: false },
{ texto: 'Cumprir ordens superiores legais.', correta: false },
{ texto: 'Retirar documentos sem autorização.', correta: true },
{ texto: 'Colaborar com colegas de outras áreas.', correta: false }
],
resolucao: 'A retirada de documentos oficiais sem permissão caracteriza violação ética.'
},
{
questao: 'O comportamento ético do servidor deve promover:',
opcoes: [
{ texto: 'Interesses privados acima do coletivo.', correta: false },
{ texto: 'Vantagens a grupos específicos.', correta: false },
{ texto: 'Igualdade, justiça e respeito ao bem comum.', correta: true },
{ texto: 'Subordinação cega às ordens superiores.', correta: false }
],
resolucao: 'O servidor deve promover o interesse público com justiça e igualdade.'
},
]};




questoes['Simulado Ética - TESTE 2'] = {
title: 'Ética no Serviço Público 2',
data: [

{
questao: 'A ética no serviço público visa principalmente:',
opcoes: [
{ texto: 'Atender às vontades da chefia.', correta: false },
{ texto: 'Promover ascensão funcional rápida.', correta: false },
{ texto: 'Consolidar a moralidade na administração.', correta: true },
{ texto: 'Manter a burocracia acima do interesse coletivo.', correta: false }
],
resolucao: 'A ética visa à integridade e à moralidade na atuação do serviço público.'
},
{
questao: 'Segundo o Código de Ética, o trabalho do servidor deve estar voltado para:',
opcoes: [
{ texto: 'O sucesso político do governo.', correta: false },
{ texto: 'O interesse público.', correta: true },
{ texto: 'A satisfação pessoal.', correta: false },
{ texto: 'A busca por estabilidade.', correta: false }
],
resolucao: 'O interesse coletivo deve prevalecer sobre o individual.'
},
{
questao: 'É vedado ao servidor público, de acordo com o Código de Ética:',
opcoes: [
{ texto: 'Zelar pela economia de material.', correta: false },
{ texto: 'Participar de atividades com fins ilícitos.', correta: true },
{ texto: 'Agir com lealdade à instituição.', correta: false },
{ texto: 'Respeitar a hierarquia legal.', correta: false }
],
resolucao: 'Participar ou colaborar com ações ilegais fere os princípios éticos do serviço público.'
},
{
questao: 'A urbanidade no serviço público se refere a:',
opcoes: [
{ texto: 'Desprezar os subordinados.', correta: false },
{ texto: 'Tratar o cidadão com descaso.', correta: false },
{ texto: 'Atender com respeito e educação.', correta: true },
{ texto: 'Agir de forma isolada.', correta: false }
],
resolucao: 'A urbanidade é uma forma de respeito no trato com o público e colegas.'
},
{
questao: 'Sobre a imparcialidade, é correto afirmar:',
opcoes: [
{ texto: 'Deve-se favorecer colegas e amigos.', correta: false },
{ texto: 'Não se aplica a cargos de confiança.', correta: false },
{ texto: 'É essencial no julgamento e na tomada de decisões.', correta: true },
{ texto: 'Pode ser flexibilizada em situações políticas.', correta: false }
],
resolucao: 'A imparcialidade é um princípio inegociável para garantir justiça na administração pública.'
},
{
questao: 'O servidor deve manter conduta ética mesmo fora do ambiente de trabalho quando:',
opcoes: [
{ texto: 'Representar o órgão público.', correta: true },
{ texto: 'Estiver em férias.', correta: false },
{ texto: 'Estiver com amigos.', correta: false },
{ texto: 'Estiver usando roupas casuais.', correta: false }
],
resolucao: 'A conduta do servidor pode refletir na imagem da instituição mesmo fora do trabalho.'
},
{
questao: 'A função social do servidor público exige que ele atue com:',
opcoes: [
{ texto: 'Discrição e omissão.', correta: false },
{ texto: 'Determinação e foco apenas em metas pessoais.', correta: false },
{ texto: 'Responsabilidade, honestidade e eficiência.', correta: true },
{ texto: 'Autoritarismo e rigidez.', correta: false }
],
resolucao: 'A ética no serviço público exige responsabilidade e transparência.'
},
{
questao: 'É um dever ético do servidor:',
opcoes: [
{ texto: 'Adotar decisões pessoais acima da lei.', correta: false },
{ texto: 'Trabalhar com zelo pelo bem comum.', correta: true },
{ texto: 'Buscar benefícios privados nas ações públicas.', correta: false },
{ texto: 'Ignorar falhas administrativas.', correta: false }
],
resolucao: 'Zelo pelo bem comum é dever central da conduta ética no serviço público.'
},
{
questao: 'A boa-fé no serviço público implica:',
opcoes: [
{ texto: 'Agir com honestidade e lealdade.', correta: true },
{ texto: 'Defender interesses partidários.', correta: false },
{ texto: 'Favorecer amigos e parentes.', correta: false },
{ texto: 'Burlar processos legais para agilizar o serviço.', correta: false }
],
resolucao: 'Boa-fé é agir com honestidade e comprometimento com o interesse público.'
},
{
questao: 'O Código de Ética recomenda ao servidor público:',
opcoes: [
{ texto: 'Agir conforme seus interesses pessoais.', correta: false },
{ texto: 'Promover a justiça, a verdade e o bem comum.', correta: true },
{ texto: 'Buscar vantagens em nome da eficiência.', correta: false },
{ texto: 'Evitar prestar contas de suas ações.', correta: false }
],
resolucao: 'A atuação ética do servidor deve sempre buscar o bem coletivo e a justiça.'
}
]};

