const array = [1, 60, 232, 7, 25, 76, 29,74, 92]

const lista = array.filter(value => value > 60 && value < 300)
let somatorio = 0
lista.forEach(element => somatorio += element)
console.log(`A lista dos valores maiores que 60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}`)