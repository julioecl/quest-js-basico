const a = 9
const b = 3

function somar (num1,num2){
    return num1 + num2
}

function subtrair (num1,num2){
    return num1 - num2
}

function multiplicar (num1, num2){
    return num1 * num2
}

function dividir (num1, num2){
    return num1 / num2
}

let resultadoSomar = somar(a,b)
console.log('A soma dos números',a,'e', b,'é:',resultadoSomar)

let resultadoSubtrair = subtrair(a,b)
console.log('A subtração dos números',a,'e', b,'é:',resultadoSubtrair)

let resultadoMultiplicar = multiplicar(a,b)
console.log('A multiplicação entre os números',a,'e', b,'é:',resultadoMultiplicar)

let resultadoDividir = dividir(a,b)
console.log('A divisão entre os números',a,'e', b,'é:',resultadoDividir)