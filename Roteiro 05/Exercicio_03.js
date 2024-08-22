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

colocarTodasLetrasEmMaiusculoEm500ms('Teste')
    .then(frase => inverteTodasLetras(frase)
        .then(frase => console.log(frase))
    )
    .catch(e => console.log(e))