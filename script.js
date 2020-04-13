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
// Teste de Login

// let objetoServidor = {
//     acesso: true,
//     login: "mundojs",
// };

// let objetoServidor2 = {
//     erro: "Erro ao conectar ao servidor",

// };

// function conexaoLogin(respostaDoServidor) {
//     if(respostaDoServidor.erro == null) {
//         if(respostaDoServidor.acesso){
//             console.log(`login: ${respostaDoServidor.login}`);
//         } else {
//             console.log("Acesso Negado");
//         }
//     } else {
//         console.log(respostaDoServidor.erro);
//     }
// }
// console.log("============================================");
// let alunos = [
//     {
//         nome: "Maria",
//         nota: 8
//     },

//     {
//         nome: "Pedro",
//         nota: 4
//     },

//     {
//         nome: "João",
//         nota: 10
//     },

//     {
//         nome: "Paulo",
//         nota: 9
//     },

//     {
//         nome: "Ana",
//         nota: 7
//     },
//     {
//         nome: "Bianca",
//         nota: 6
//     },
// ]

// console.log("FOR");
// for (let i = 0; i < alunos.length; i++) {
//     if (alunos[i].nota > 7) {
//         console.log(`${alunos[i].nome}: passou`);   
//     }
// }

// console.log("============================================");
// console.log("FOR OF");
// for (let aluno of alunos) {
//     if (aluno.nota > 7) {
//         console.log(`${aluno.nome} : passou`);
//     }
// }
console.log("============================================");
console.log("Fibonacci For");
function fibonacci (n) {
    if (n < 2) {
        return n;
    }

    let anterior = 1;
    let penultimo = 0;

    for (let i = 2; i <=n; i++) {
        if (i == n) {
            return penultimo + anterior;
        }
        
        
        let temp = penultimo;
        penultimo = anterior;
        anterior = temp + penultimo;
    }


    // let posicao = 2;
    // let anterior = 1;
    // let penultimo = 0;

    // while (true) {
    //     if (posicao == n) {
    //         return penultimo + anterior;
    //     }

    //     let temp = penultimo;
    //     penultimo = anterior;
    //     anterior = temp + penultimo;
    //     posicao ++;
    // }

}

