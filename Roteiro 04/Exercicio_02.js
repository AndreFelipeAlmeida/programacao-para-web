const progressao_aritmetrica = ({n, a1, r}) => {
    let contador = 1
    const numero_de_termos = Array.from({length : n}).map(valor => valor = contador++)

    let termos = numero_de_termos.map(valor => a1 + (valor - 1) * r)

    let numero_termo = 1
    termos.forEach(valor => console.log(`Termo ${numero_termo++}: ${valor}`))

    let somatorio = 0
    termos.forEach(valor => somatorio += valor)

    console.log(`Soma dos termos para n = ${n}: ${somatorio}`)
}

const progressao_geometrica = ({n, a1, r}) => {
    let contador = 1
    const numero_de_termos = Array.from({length : n}).map(valor => valor = contador++)

    let termos = numero_de_termos.map(valor => a1 * (r ** (valor - 1)))

    let numero_termo = 1
    termos.forEach(valor => console.log(`Termo ${numero_termo++}: ${valor}`))

    let somatorio = 0
    termos.forEach(valor => somatorio += valor)

    console.log(`Soma dos termos para n = ${n}: ${somatorio}`)
}

// const dados_para_progressao = {
//     id: 2,
//     nome: 'progressão aritmétrica',
//     n: 16,
//     a1: 1,
//     r: 2
// }

// progressao_aritmetrica(dados_para_progressao)
// progressao_geometrica(dados_para_progressao)