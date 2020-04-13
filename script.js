// console.log("Olá mundo JS!");

// console.log("============================================");

// let somar = function(v1,v2) {
//     let resultado = v1 + v2;
//     console.log(resultado);
// }

// somar(1,2);
// somar(3,7);
// somar(99,1);

// console.log("============================================");

// let valor1 = 10;
// let valor2 = 20;
// let valor3 = "3";

// function somarValores(primeiro, segundo){
//     console.log(primeiro + segundo);
// }

// somarValores(9, valor1);
// somarValores(valor1,valor2);
// somarValores(valor2, valor3);
// somarValores("100", valor3);
// console.log("============================================");

// let vetor = [1,3,5,7,9,11,13];
// let numero = vetor[1] + vetor[3];

// console.log(numero > 9);
// console.log("-------");
// console.log((vetor[6] - numero) == 5 || true);
// console.log("-------");
// console.log(true == "true");
// console.log("-------");
// console.log(true ==="true");

// console.log("============================================");
// let objeto = {
//     objeto2 : {
//         vetor : [1,2,{valor: 55 }]
//     }
// };

// //Qual opção exibirá o valor 55?
// console.log(objeto["objeto2"].vetor.valor);
// console.log(objeto.objeto2.vetor.valor);
// console.log(objeto["objeto2"]["vetor"][2].valor);
// console.log(objeto.objeto2.vetor[3].valor);

// console.log("============================================");
// let simbolo1 = "R$";
// let simbolo2 = "$";
// let simbolo3 = "£";

// //Solução 1 - If/Else
// function moeda(simbolo) {
//     if (simbolo == "R$") {
//         console.log("Real");
    
//     } else if (simbolo == "$") {
//         console.log("Dólar");

//     } else if (simbolo == "£") {
//         console.log("Libra");
    
//     } else {
//         console.log("Não encontrado");
//     }
// }
// //Solução 2 - Switch

// function moeda(simbolo) {
//     switch (simbolo) {
//         case "R$":
//             console.log("Real");
//             break;
//         case "$":
//             console.log("Dólar");
//             break;
//         case "£":
//             console.log("Libra");
//             break;
//         default:
//             console.log("Não Encontrado");
//             break;
//     }

// }
// console.log("============================================");
//Teste de Login

let objetoServidor = {
    acesso: true,
    login: "mundojs",
};

let objetoServidor2 = {
    erro: "Erro ao conectar ao servidor",

};

function conexaoLogin(respostaDoServidor) {
    if(respostaDoServidor.erro == null) {
        if(respostaDoServidor.acesso){
            console.log(`login: ${respostaDoServidor.login}`);
        } else {
            console.log("Acesso Negado");
        }
    } else {
        console.log(respostaDoServidor.erro);
    }
}