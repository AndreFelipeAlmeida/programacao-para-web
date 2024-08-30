//Etapa 1: Modificar o conteúdo de parágrafos. Se algum dos inputs não estiver preenchido, não modifique o seu respectivo texto.
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Dica02: Utilize a propriedade "value" para recuperar a informação preenchida nos campos de input.
const alterarTextos = () => {
    const text1 = document.getElementById("input1").value
    const text2 = document.getElementById("input2").value
    const text3 = document.getElementById("input3").value

    if (text1.length !== 0)
        document.getElementById("texto1").textContent = text1
    if (text2.length !== 0)
        document.getElementById("texto2").textContent = text2
    if (text3.length !== 0)
        document.getElementById("texto3").textContent = text3
}

//Etapa 2: Adicionar e remover elementos no final da lista de itens
//Dica01: Utilize o método createElement para criar li
//Dica02: Utilize a propriedade "textContent" do li para modificar o seu conteúdo
//Dica03: Utilize a propriedade "ul.children.length" para saber a quantidade de itens na lista
//Dica04: Utilize a propriedade "ul.appendChild" para adicionar o li na lista
function adicionarItem() {
    const ul = document.getElementById("listaItens")
    const newLi = document.createElement("li")
    newLi.textContent = `Item ${ul.children.length + 1}`
    ul.appendChild(newLi)
}

//Dica05: Utilize as propriedades "ul.removeChild" e "ul.lastChild" para fazer remoções de li na lista
//Dica06: Lembre-se de só deixar remover se a lista tiver pelo menos um elemento
function removerItem() {
    const ul = document.getElementById("listaItens")
    if (ul.children.length > 1)
        ul.removeChild(ul.lastChild)
}

//Etapa 3: Modificar estilos de inputs do tipo text
//Obrigatório: Uso de callback function para alterar a cor de fundo de todos os inputs
//Dica01: Utilize a propriedade "style.backgroundColor" para modificar a cor de fundo dos inputs
function mudarCorFundo() {
    const inputs = document.querySelectorAll('input[type="text"]');
    const newColor = document.getElementById("inputCor").value
    inputs.forEach(input => input.style.backgroundColor = newColor)
}

//Etapa 4: Ocultar e Exibir Elementos
//Dica01: Utilize a propriedade "style.display" e o valor da variável estilo para ocultar ou exibir a imagem
function ocultarImagem() {
    estilo = 'none'
    const image = document.getElementById("imagem")
    image.style.display = estilo
}

function exibirImagem() {
    estilo = 'block'
    const image = document.getElementById("imagem")
    image.style.display = estilo
}

//Etapa 4: Mover elementos na página
//Dica01: Utilize apenas as propriedades "box.style.left" e "box.style.top" para fazer a movimentação do elemento
function mover(direcao) {
    const box = document.getElementById('divDeslizavel');
    let left = parseInt(window.getComputedStyle(box).left) || 0;
    let top = parseInt(window.getComputedStyle(box).top) || 0;

    switch (direcao) {
        case 'esquerda':
            box.style.left = `${left - 20}px`
            break;
        case 'direita':
            box.style.left = `${left + 20}px`
            break;
        case 'cima':
            box.style.top = `${top - 20}px`
            break;
        case 'baixo':
            box.style.top = `${top + 20}px`
            break;
    }
}

//Exercício 6: Trocar Classe de Elementos
//Dica01: Utilize a propriedade "p.classList.toggle" para fazer a alternância
function alternarClasse() {
    const p = document.getElementById('classeParagrafo');
    p.classList.toggle('classeAzul');
    p.classList.toggle('classeVermelha');

    if (p.className === 'classeAzul') {
        p.textContent = 'Este parágrafo é da classe azul.'
    } else {
        p.textContent = 'Este parágrafo é da classe vermelha.'
    }
}

//Exercício 7: Galeria de Imagens com Zoom
//Dica01: Utilize a função replace para substitutir o 100 por 300 no valor de src da imagem
function mostrarImagemMaior(img) {
    const imagemMaior = document.getElementById('imagem-maior');
    imagemMaior.src = img.src.replace("100", "300")
}

// Exercício 8: Validação de Formulário
//Obrigatório: É preciso aplicar estratégias de validação dos valores dos quatro campos do formulário.
//Pelo menos: não aceitar nome vazio, o cpf precisa estar mascarado e com 14 dígitos, 
//o email precisa ter pelo menos um @ e um ponto duas posições após o @ e a senha não deve conter menos que 8 caracteres.
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('mensagem-erro');

    if (nome.trim().length === 0) {
        erro.textContent = 'Nome não pode ser vazio.';
        return false;
    }

    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!regexCpf.test(cpf)) {
        erro.textContent = 'CPF precisa estar no formato: XXX.XXX.XXX-XX';
        return false;
    }
    const regexEmail = /[\w-]+@[a-z][a-z][a-z]*\.[a-z]+/;
    if (!regexEmail.test(email)) {
        erro.textContent = `E-mail está com formato inválido`;
        return false;
    }

    if(senha.trim().length < 8) {
        erro.textContent = 'Senha não deve conter menos que 8 caracteres.';
        return false;
    }

    erro.textContent = '';
    return true;
}

// Exercício 9: Contador Incremental
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio01: Implemente a geração da música "Um Elefante Incomodaa Muita Gente"
//quando o número de versos for maior que 9, a função deve colocar reticência (...) para o caso
//do número de "incomodam" ser maior ou igual a 10.
let contador = 0;
function incrementar() {
    const contadorAtual = document.getElementById('contador')
    contadorAtual.textContent = ++contador;
    geraMusicaElefante(contador)
}

function decrementar() {
    const contadorAtual = document.getElementById('contador')
    contadorAtual.textContent = --contador;
    geraMusicaElefante(contador)
}

function geraMusicaElefante(numVersos){
    const paragrafoMusica = document.getElementById("paragrafoMusica")
    paragrafoMusica.textContent = ""
    if (numVersos > 0) {
        paragrafoMusica.textContent = `1 elefante incomoda muita gente`

        for (let numElefantes = 2; numElefantes <= numVersos; numElefantes++) {
            if (numElefantes % 2 === 0 && numElefantes <= 9) {
                let numIncomodam = ` incomodam`.repeat(numElefantes)       
                paragrafoMusica.textContent += `\n${numElefantes} elefantes${numIncomodam} muito mais!`
            } else if (numElefantes % 2 === 0 && numElefantes > 9) {
                let numIncomodam = ` incomodam`.repeat(9)       
                paragrafoMusica.textContent += `\n${numElefantes} elefantes${numIncomodam}... muito mais!`
            } else {
                paragrafoMusica.textContent += `\n${numElefantes} elefantes incomodam muita gente`
            }
        }
    }
}

const professores = [
    {
        name: "ANDREY ELISIO MONTEIRO BRITO",
        area: "Sistemas Distribuidos",
        laboratorio: "LSD",
        disciplina: "Teoria da Computação"
    },
    {
        name: "CARLOS EDUARDO SANTOS PIRES",
        area: "Banco de Dados",
        laboratorio: "LACINA",
        disciplina: "Banco de Dados II"
    },
    {
        name: "DALTON DARIO SEREY GUERRERO",
        area: "Engenharia de Software",
        laboratorio: "SPLab",
        disciplina: "Programação I"
    },
    {
        name: "EANES TORRES PEREIRA",
        area: "Inteligência Artificial",
        laboratorio: "LIAD",
        disciplina: "Fundamentos da Matemática para Ciência da Computação II"
    },
    {
        name: "ELIANE CRISTINA DE ARAUJO",
        area: "Ciência de Dados",
        laboratorio: "SPLab",
        disciplina: "Programação II"
    },
    {
        name: "FRANCISCO VILAR BRASILEIRO",
        area: "Sistemas Distribuidos",
        laboratorio: "LSD",
        disciplina: "Sistemas Operacionais"
    },
    {
        name: "FRANKLIN DE SOUZA RAMALHO",
        area: "Análise de Sistemas",
        laboratorio: "SPLab",
        disciplina: "Análise de Sistemas"
    },
    {
        name: "HERMAN MARTINS GOMES",
        area: "Inteligência Artificial",
        laboratorio: "LIAD",
        disciplina: "Inteligência Artificcial"
    },
    {
        name: "HYGGO OLIVEIRA DE ALMEIDA",
        area: "Redes de Sensores",
        laboratorio: "SPLab",
        disciplina: "Redes de Sensores"
    },
    {
        name: "JORGE CESAR ABRANTES DE FIGUEIREDO",
        area: "Engenharia de Software",
        laboratorio: "SPLab",
        disciplina: "Programação I"
    },
    {
        name: "JOSEANA MACEDO FECHINE REGIS DE ARAUJO",
        area: "Microprocessadores",
        laboratorio: "LIADe",
        disciplina: "Organização e Arquitetura de Computadores"
    },
    {
        name: "LEANDRO BALBY MARINHO",
        area: "Linguagem Natual",
        laboratorio: "SPlab",
        disciplina: "Processamento de Linguagem Natural"
    },
    {
        name: "LIVIA MARIA RODRIGUES SAMPAIO CAMPOS",
        area: "Sistemas Distribuidos",
        laboratorio: "LSD",
        disciplina: "Programação II"
    },
    {
        name: "MAXWELL GUIMARAES DE OLIVEIRA",
        area: "Engenharia de Software",
        laboratorio: "SPlab",
        disciplina: "Programação I"
    },
    {
        name: "ROHIT GHEYI",
        area: "Engenharia de Software",
        laboratorio: "SPlab",
        disciplina: "Engenharia de Software"
    },
    {
        name: "THIAGO EMMANUEL PEREIRA DA CUNHA SILVA",
        area: "Sistemas Distribuidos",
        laboratorio: "LSD",
        disciplina: "Sistemas Operacionais"
    },
    {
        name: "TIAGO LIMA MASSONI",
        area: "Verificação Formal",
        laboratorio: "SPlab",
        disciplina: "Lógica para Programação"
    },
    {
        name: "WILKERSON DE LUCENA ANDRADE",
        area: "Engenharia de Software",
        laboratorio: "SPlab",
        disciplina: "Programação I"
    }
];

function renderizarNovaLista() {
    const lista = document.getElementById('lista-professores');
    lista.innerHTML = '';

    professores.forEach(professor => {
        const li = document.createElement('li');
        li.textContent = `${professor.name} - Área: ${professor.area} - Laboratório: ${professor.laboratorio} - Disciplina: ${professor.disciplina}`;
        lista.appendChild(li);
    });
}

renderizarNovaLista();

// Exercício 10: Filtrar Itens de uma Lista com callback e arrow function
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio02: Transforme a lista de itens em objetos (professor: nome, area, laboratorio, disciplina) e utilize o filtro para atuar considerando todos os atributos do projeto.
function filtrarItens() {
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const itens = document.getElementById('lista-professores').getElementsByTagName('li');

    Array.from(itens).forEach(value => {
        let item = value.textContent || value.innerText;
        item = item.replace(" - Área: ", " ")
        item = item.replace(" - Laboratório: ", " ")
        item = item.replace(" - Disciplina: ", " ")
        if (item.toLowerCase().indexOf(filtro) > -1) {
            value.style.display = "";
        } else {
            value.style.display = "none";
        }
    })
}
