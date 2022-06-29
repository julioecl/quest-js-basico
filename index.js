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
console.log('A soma dos números é:',resultadoSomar)

let resultadoSubtrair = subtrair(a,b)
console.log('A subtração dos números é:',resultadoSubtrair)

let resultadoMultiplicar = multiplicar(a,b)
console.log('A multiplicação dos números é:',resultadoMultiplicar)

let resultadoDividir = dividir(a,b)
console.log('A divisão dos números é:',resultadoDividir)