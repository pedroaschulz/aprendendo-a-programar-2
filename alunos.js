console.log("Olá Mundo")


let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

let calculo = 0

//calculo produta a

calculo = produtoA["valor"]


if(produtoA["internacional"]==true) {
    calculo = calculo * 1.2
}else {
    calculo = calculo * 1.12
 }

 console.log(produtoA["nome"] + ": R$ " + calculo)

 //CALCULO B

 calculo = produtoB["valor"]


if(produtoB["internacional"]==true) {
    calculo = calculo * 1.2
}else {
    calculo = calculo * 1.12
 }

 console.log(produtoB["nome"] + ": R$ " + calculo)
 
//CALCULO C

 calculo = produtoC["valor"]


if(produtoC["internacional"]==true) {
    calculo = calculo * 1.2
}else {
    calculo = calculo * 1.12
 }

 console.log(produtoC["nome"] + ": R$ " + calculo)
 
 