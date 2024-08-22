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

let processarSentenca = async (sentenca) => {
    const frase = await colocarTodasLetrasEmMaiusculoEm500ms(sentenca)
    return inverteTodasLetras(frase)
}

processarSentenca(`Teste`)
    .then(sentenca => console.log(sentenca))