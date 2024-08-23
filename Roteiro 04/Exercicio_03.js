const notas_conceituadas = vetor => vetor.map(nota => {
    if (nota >= 9 && nota <= 10) return 'A'
    if (nota >= 7 && nota <= 8.9) return 'B'
    if (nota >= 5.0 && nota <= 6.9) return 'C'
    if (nota >= 0.0 && nota <= 4.9) return 'D'}
)

const array = [1.5, 7.5, 2.0, 9.5, 4.9, 6.3, 0.0, 10.0]
console.log(notas_conceituadas(array))