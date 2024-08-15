const array = [1, 60, 232, 7, 25, 76, 29,74, 92]

const lista = array.filter(valor => valor > 60 && valor < 300)

let somatorio = 0
lista.forEach(elemento => somatorio += elemento)
console.log(`A lista dos valores maiores que 60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}`)