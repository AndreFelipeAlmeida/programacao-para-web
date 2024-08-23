const crypto = require('crypto');

// Criptografia de dados
const criptografarMensagem = (texto, chaveSecreta) => {
const algorithm = 'aes-256-cbc';
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
let encrypted = cipher.update(texto, 'utf8', 'hex');
encrypted += cipher.final('hex');
// Retorna o IV junto com o texto criptografado
return `${iv.toString('hex')}:${encrypted}`;
}

// Função para descriptografar dados
const decritografar = (textoCriptografado, chaveSecreta) => {
const algorithm = 'aes-256-cbc';
const [ivHex, encrypted] = textoCriptografado.split(':');
const iv = Buffer.from(ivHex, 'hex');
const decipher = crypto.createDecipheriv(algorithm, Buffer.from(chaveSecreta), iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
return decrypted;
}

const chaveSecreta = '12345678901234567890123456789012'
const processarNumeros = numeros => {
    pares = numeros.filter(value => value % 2 == 0)
    pares_criptografados = pares.map(value => criptografarMensagem(value.toString(), chaveSecreta))
    return pares_criptografados
}

const resultado = processarNumeros([2, 2, 3, 4, 5, 6, 7, 8])
console.log(resultado)
console.log(resultado.map(value => decritografar(value, chaveSecreta)))