const conceituar_notas = vetor => vetor.map(nota => {
    if (nota >= 0.0 && nota <= 4.9) return 'D'
    if (nota >= 5.0 && nota <= 6.9) return 'C'
    if (nota >= 7 && nota <= 8.9) return 'B'
    if (nota >= 9 && nota <= 10) return 'A'
})

// const array = [1.0, 2.0, 7.0, 9.0, 4.0, 9.5, 6.3, 4.5, 0.0]

// console.log(conceituar_notas(array))