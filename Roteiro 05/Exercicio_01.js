
const http = require('https')

const dono = {
    "proprietario": "Silvio Santos",
    "endereco": {
        "cep":'hacked, pay to recover',
        "logradouro": 'hacked, pay to recover',
        "complemento": 'hacked, pay to recover',
        "bairro": 'hacked, pay to recover',
        "localidade": 'hacked, pay to recover',
        "uf": '',
        "geo": {
            "lat": "-23.61919020307765",
            "lng": "-46.70793551534256"
        }
    }
}

const getEndereco = cep => {
    const url = `https://viacep.com.br/ws/${cep}/json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

getEndereco('05650000').then(endereco => {
    const {cep, logradouro, bairro, localidade, uf} = endereco

    dono.endereco.cep = cep
    dono.endereco.logradouro = logradouro
    dono.endereco.bairro = bairro
    dono.endereco.localidade = localidade
    dono.endereco.uf = uf

    const resultado = `${dono.proprietario} - ${cep} - ${bairro}, ${localidade} (${dono.endereco.geo.lat}, ${dono.endereco.geo.lng})`
    console.log(resultado)
})