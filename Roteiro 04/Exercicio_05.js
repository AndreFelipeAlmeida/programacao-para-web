const numeros_primos = (inicio = 0, fim = 100) => {
    if (inicio > fim)
        [inicio, fim] = [fim, inicio]

    let contador = inicio + 1
    const numeros = Array.from({length : fim-inicio-1}).map(valor => valor = contador++)

    const eh_primo = valor => {
        if (valor === 1)
            return false

        let contador = 2
        const valores = Array.from({length : valor-2}).map(valor => valor = contador++)
        let primos = valores.filter(elemento => valor % elemento === 0)
        return primos.length === 0
    }

    let primos = numeros.filter(eh_primo)
    primos.forEach(valor => console.log(valor))
}

// numeros_primos()