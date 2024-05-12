

let colecaoSalario_Inflacao = [
    { Ano: 2010, 'Salario Mínimo': '510.00', Inflacao: '5.91' },
    { Ano: 2011, 'Salario Mínimo': '545.00', Inflacao: '6.50' },
    { Ano: 2012, 'Salario Mínimo': '622.00', Inflacao: '5.84' },
    { Ano: 2013, 'Salario Mínimo': '678.00', Inflacao: '5.91' },
    { Ano: 2014, 'Salario Mínimo': '724.00', Inflacao: '6.41' },
    { Ano: 2015, 'Salario Mínimo': '788.00', Inflacao: '10.67' },
    { Ano: 2016, 'Salario Mínimo': '880.00', Inflacao: '6.29' },
    { Ano: 2017, 'Salario Mínimo': '937.00', Inflacao: '2.95' },
    { Ano: 2018, 'Salario Mínimo': '954.00', Inflacao: '3.75' },
    { Ano: 2019, 'Salario Mínimo': '998.00', Inflacao: '4.31' },
    { Ano: 2020, 'Salario Mínimo': '1045.00', Inflacao: '4.52' }
];

let label_ano = 'Ano:';
let label_salario = 'Salário Mínimo:'
let label_inflacao = 'Inflação:'
let label_diferenca = 'Crescimento Salarial:'

label_ano = label_ano.padEnd("20", ".")
label_salario = label_salario.padEnd("20", ".")
label_inflacao = label_inflacao.padEnd("20", ".")
label_diferenca = label_diferenca.padEnd("5", ".");




// Função usada para salvar os valores de ano e salario mínimo que estão dentro da colecao de objetos.
function salario(colecao_salario) {

    for (let dados of colecaoSalario_Inflacao) {

        let ano = dados.Ano
        let salario = dados["Salario Mínimo"];

        console.log(`${label_ano} ${ano} `);
        console.log(`${label_salario} R$ ${salario.replace('.', ',')}`);
        console.log('\n');
    }
}
// Função usada para salvar os valores de ano e inflacao que estão dentro da colecao de objetos.
function inflacao(inflacao) {

    for (let dados of colecaoSalario_Inflacao) {
        let ano = dados.Ano;
        let inflacao = dados.Inflacao;

        console.log(`${label_ano} ${ano} `);
        console.log(`${label_inflacao} ${inflacao.replace('.', ',')}%`);
        console.log('\n');
    }
}

// Função usada para calcular a diferença do salario de um ano anterior e do ano seguinte
function diferenca_salarial(salario_1, salario_2) {

    let subtracao = salario_2 - salario_1
    return (subtracao / salario_1) * 100
}



function comparacao_percentual(colecao) {

    // É usado um for para percorrer toda a coleção para salvar os valores de salarios tanto como o do ano anterior como do seguinte
    for (let i in colecao) {
    // Para usar o (+1) no indice do array foi preciso converter o valor para do tipo inteiro.
        i = parseInt(i);
    // A const n é usada para 'pegar' o proximo indice do array, EX: 0 + 1 =  a indice 1.
        const n = i + 1;
    // Foi usada a estrutura de condição para verificar se o indice era menor que o tamanha da colecao, 
    // sem essa condição após 'pegar' o salario do ultimo indice aparecia undefined, isso por termos definido o i +1, o que realizava o for do indice 11 que nao existe.
        if (n < colecao.length) {
            const salario_anterior = colecao[i]["Salario Mínimo"];
            const salario_seguinte = colecao[n]["Salario Mínimo"];
    // Foi acrescentado uma nova chave e valor a colecao
            colecao[n].diferenca = diferenca_salarial(salario_anterior, salario_seguinte).toFixed(2).replace('.', ',')
    //Verifica se o indice da colecao tem a nova chave com valor undefined e altera para 0.
            if (colecao[i].diferenca === undefined) {
                colecao[i].diferenca = '-';
            }
        };
        console.log(`${label_ano} ${colecao[i].Ano}
${label_salario} R$ ${colecao[i]["Salario Mínimo"]}
${label_diferenca} ${colecao[i].diferenca}%
${label_inflacao} ${colecao[i].Inflacao.replace(".", ",")}% `);
        console.log('\n');

    }
}


// Opçoes de escolha para o usuario acessar as informações:


let escolha = prompt(`Escolha uma das alternativas:
    1 - Listar os salários minímos de 2010 à 2020
    2 - Listar o índice IPCA de 2010 à 2020
    3 - Comparação entre o percentual de aumento salarial e o IPCA`)





if (escolha == 1) {

    salario(colecaoSalario_Inflacao);

}
else if (escolha == 2) {

    inflacao(colecaoSalario_Inflacao);
}
else if (escolha == 3) {
    comparacao_percentual(colecaoSalario_Inflacao);

}
else {
    console.log('Escolha Inválida')
}


