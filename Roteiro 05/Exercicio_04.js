const colocarTodasLetrasEmMaiusculoEm500ms = sentenca => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof sentenca !== 'string')
                reject('O parâmetro não é uma String')
            else
                resolve(sentenca.toUpperCase())
        }, 500)
    })
}



const inverteTodasLetras = sentenca => {
    return new Promise((resolve, reject) => {
        resolve(sentenca.split('').reverse().join(''))
    })
}

const processarSentenca = async (sentenca) => {
    const frase = await colocarTodasLetrasEmMaiusculoEm500ms(sentenca)
    const fraseInvertida = await inverteTodasLetras(frase)
    return fraseInvertida
}

processarSentenca(`Testar`)
    .then(sentenca => console.log(sentenca))