const primos = (inicio = 0, fim = 100) => {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }

    const tamanho = fim - inicio
    const numeros = Array.from({length: tamanho }, (_, i) => inicio + i + 1)

    const verifica_primo = valor => {
        if (valor < 2) 
            return false

        const numeros = Array.from({length: valor - 2}, (_, i) => i + 2)
        return !numeros.some(elemento => valor % elemento === 0)
    }

    const primos = numeros.filter(verifica_primo)
    console.log(`Números primos: `)
    primos.forEach(valor => console.log(valor))
}

primos(1, 23)