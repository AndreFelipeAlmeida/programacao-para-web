const progressao_aritmetrica = ({n, a1, r}) => {
    const termos = [...Array(n).keys()].map(indice => a1 + indice * r)
    termos.forEach((valor, indice) => console.log(`Termo ${indice + 1}: ${valor}`));

    const somatorio = termos.reduce((cont, valor) => cont + valor, 0)
    console.log(`Soma dos termos com o "n" igual a ${n}: ${somatorio} \n`)
}

const progressao_geometrica = ({n, a1, r}) => {
    const termos = [...Array(n).keys()].map(indice => a1 * (r ** indice))
    termos.forEach((valor, indice) => console.log(`Termo ${indice + 1}: ${valor}`))

    const somatorio = termos.reduce((cont, valor) => cont + valor, 0)
    console.log(`Soma dos termos com o "n" igual a ${n}: ${somatorio}`)
}

const entrada = {
     id: 2,
     nome: 'progressão aritmétrica',
     n: 4,
     a1: 1,
     r: 3
 }

 progressao_aritmetrica(entrada)
 progressao_geometrica(entrada)