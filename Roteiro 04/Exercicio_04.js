const soma_5_pares = valor => {
    valor_par = valor
    if (valor % 2 != 0)
        valor_par += 1

    array = [valor_par, valor_par + 2, valor_par + 4, valor_par + 6, valor_par + 8]

    let somatorio = 0
    array.forEach(elemento => somatorio += elemento)

    console.log(`Entrada: ${valor} => Saída: ${somatorio}`)
}

// soma_5_pares(12)