const somatorio_5_pares_consecutivos = numero => {
    transformado_par = numero
    if (numero % 2 != 0)
        transformado_par += 1

    array = [transformado_par, transformado_par + 2, transformado_par + 4,
        transformado_par + 6, transformado_par + 8]

    let somatorio = 0
    array.forEach(valor => somatorio += valor)
    console.log(`Entrada: ${numero} => Saída: ${somatorio}`)
}

somatorio_5_pares_consecutivos(2)