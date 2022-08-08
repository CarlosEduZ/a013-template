// let idadeDependente = 13;
// if(idadeDependente >= 13){
//     if(idadeDependente >=18){
//         console.log("Seu Dependente já pode ter um cartão próprio")
//     }else{
//         console.log("seu dependente pode ter um cartão vinculado ao seu")
//     }
// }else{
//     console.log("Consulte outras possibilidades do labank")
// }


// if(idadeDependente >= 13 && idadeDependente <= 17){
//     console.log("seu dependente pode ter um cartão vinculado ao seu")
// }else{
//     console.log("consulte outras possibilidades do labank")
// }

// // Ternário
// idadeDependente === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão") : console.log("Consulte outras possibilidades do labank")

// Switch-case

// let cartao = Number(prompt("Solicitação de cartão de crédito. Escolha uma opção:\n 1- Fácil \n 2- black \n 3- Platinum \n 4- Master Gold"))

// switch(cartao){
//     case 1:
//         console.log("Cartão Fácil adquirido.")
//         break;
//     case 2:
//         console.log("Cartão Black adquirido.")
//         break;
//     case 3:
//         console.log("Cartão Platinum adquirido.")
//         break;
//     case 4:
//         console.log("Cartão Master Gold adquirido.")
//         break;
//     default:
//         console.log("Escolha uma das opções disponiveis")               
// }

//exercicio de fixação

//1 a
let numero = Number(prompt("Digite um número"))
if(numero %2 === 0){
    if(numero %3 === 0){
        console.log("O número é divisivel por 2 e 3")
    }else{
        console.log("O número não é divisivel por 3")
    }
}else{
    console.log("o número não é divisivel por 2")
}

// 1 b
if(numero%2 === 0 && numero%3 ===0){
    console.log("O número é dividido por 2 e 3")
}else{
    console.log("O número não é divisivel por 2 e 3")
}numero === 30 ? console.log("UFA ACERTEI!") : console.log("não foi dessa vez")
switch(numero){
    case 6:
        console.log("O número é 6")
        break;
    case 12: 
        console.log("O número é 12")
        break;
    case 18:
        console.log("O número é 18")
        break;
    case 24:
        console.log("O número é 24")
        break;
    case 30:
        console.log("O número é 30")
        break;   
    default:
        console.log("o número é menor que 6 ou maior que 30")              
}