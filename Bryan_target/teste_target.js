//exercicio 1
console.log("exercicio 1:");
var indice = 13;
var soma = 0;
var k = 0;

for(k = 0; k < indice; k++){
    soma = soma = k;
}

console.log("O valor total da soma é " + soma + "\n");

// exercicio 2
console.log("exercicio 2:");
var i = 0;
var a = 0;
var b = 1;
var c = 0;
var d = 89;

for(i = 0; c < d; i++){
    c = a + b;
    a = b;
    b = c;
    
    if ( d == c){
        console.log(d + " pertence a sequencia");
    }
    else if (d < c){
        console.log(d + " ñ pertence a sequencia");
    }
}

//exercicio 3
console.log("\nexercicio 3:");
var maior = 0;
var menor = 0;
var media;
var controle;
var dias = 0;
var fatDiario = 0;

var dadosJson = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
];

dadosJson.forEach(e => {
    soma += e.valor;
    
    if (e.valor > 0) {
        dias++;
    }
});

media = soma / dias;

dadosJson.forEach(e => {
    if (e.valor > 0) {
        menor = e.valor;
    }

    if (e.valor > maior && e.valor > 0) {
        maior = e.valor;

        if (maior > media) {
            fatDiario++;
        }
    }

    if (e.valor > 0 && e.valor < menor) {
        menor = e.valor;
    }
});

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);
console.log("Valor da média: " + media.toFixed(2));
console.log("Número de dias em que o faturamento foi superior a média: " + fatDiario);


//exercicio 4
console.log("\nexercicio 4:");

var dadosEstados = [
    {
		"estado": "SP",
		"valor": 67836.43
	},
	{
		"estado": "RJ",
		"valor": 36678.66
	},
	{
		"estado": "MG",
		"valor": 29229.88
	},
	{
		"estado": "ES",
		"valor": 27165.48
	},
	{
		"estado": "OUTROS",
		"valor": 19849.53
	}
];

var valorTotal = 0;
var valorSP = 0;
var valorRJ = 0;
var valorMG = 0;
var valorES = 0;
var valorOutros = 0;

dadosEstados.forEach(e => {
	valorTotal += e.valor;

	if (e.estado == 'SP'){
		valorSP = e.valor;
	}
	if (e.estado == 'RJ'){
		valorRJ = e.valor;
	}
	if (e.estado == 'MG'){
		valorMG = e.valor;
	}
	if (e.estado == 'ES'){
		valorES = e.valor;
	}
	if (e.estado == 'OUTROS'){
		valorOutros = e.valor;
	}

});

var resultado = (valorSP / valorTotal)*100;
console.log("Valor percentual de SP: " + resultado.toFixed(2) + "%");

var resultado = (valorRJ / valorTotal)*100;
console.log("Valor percentual de RJ: " + resultado.toFixed(2) + "%");

var resultado = (valorMG / valorTotal)*100;
console.log("Valor percentual de MG: " + resultado.toFixed(2) + "%");

var resultado = (valorES / valorTotal)*100;
console.log("Valor percentual de ES: " + resultado.toFixed(2) + "%");

var resultado = (valorOutros / valorTotal)*100;
console.log("Valor percentual de Outros: " + resultado.toFixed(2) + "%");


//exercicio 5
console.log("\nexercicio 5:");

function inverter(string){
	var i = 0;
	var saida = '';

	for(i = string.length - 1; i >= 0; i--){
		saida += string[i];
	}

	console.log(saida);
}

inverter('teste_target');