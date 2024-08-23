const validar_entrada = entrada => entrada > 0 && entrada < 25 

const vai_apresentar_o_TCC = (entrega, prazo) => {
    if (!validar_entrada(entrega) || !validar_entrada(prazo))
        return `Dados de entrada inválidos.`
    
    if (entrega > prazo)
        return `Eu odeio o prof. Florovsky!`

    if (entrega <= prazo - 3)
        return `Muito bem! O aluno está apto a apresentar até o natal!`
    
    mensagem = `O trabalho está muito ruim!\n`
    tcc_revisado = entrega + 2

    if (tcc_revisado < 24) {
        mensagem += `TCC Apresentado!`
        return mensagem 
    }

    return mensagem + `Não deu! Só no próximo ano agora.`
}

console.log(vai_apresentar_o_TCC(13, 19) + `\n`)
console.log(vai_apresentar_o_TCC(22, 23) + `\n`)
console.log(vai_apresentar_o_TCC(21, 22) + `\n`)
console.log(vai_apresentar_o_TCC(26, 21) + `\n`)
console.log(vai_apresentar_o_TCC(20, -2) + `\n`)