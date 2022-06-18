let precoRefri = parseFloat(prompt("Digite o valor do refrigerante"))
let quantidadeRefri = parseInt(prompt("Quantas Unidades ?"))

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

let precoErvilha = parseFloat(prompt("Digite o valor do ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

let precoArroz = parseFloat(prompt("Digite o valor do arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

let precoFeijao = parseFloat(prompt("Digite o valor do feijao"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

let precoVinho = parseFloat(prompt("Digite o valor do vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

let total = ((precoRefri * quantidadeRefri)+
            (precoMacarrao * quantidadeMacarrao)+
            (precoErvilha * quantidadeErvilha)+
            (precoArroz * quantidadeArroz)+
            (precoFeijao * quantidadeFeijao)+
            (precoVinho * quantidadeVinho));

const vinho = (precoVinho * quantidadeVinho);
let metade = (total / 2)

if(total % 2 == 0){
    let eu = metade - vinho
    let amigo = metade + vinho
    alert(`O valor total é R$ ${total}, eu vou pagar R$ ${eu} e meu amigo vai pagar R$ ${amigo}`)
}else{
    let eu = metade
    let amigo = metade
    alert(`O valor total é R$ ${total}, eu vou pagar R$ ${eu} e meu amigo vai pagar R$ ${amigo}`)
}

