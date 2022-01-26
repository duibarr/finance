alert(`Olá, bem vindo ao chatbot Finance!

Daremos início ao seu cadastro em nosso banco de uma forma simples, fácil e rápida, sem toda a burocracia dos bancos tradicionais.

Precisaremos de algumas informações, então separe seus documentos como RG, CPF e comprovante de renda para começarmos. 

Pronto? Então clique em Ok e divirta-se!`)

class Cliente {
    constructor () {
        this.nome = CADASTRO.cadastrarNome(),
        this.sobrenome = CADASTRO.cadastrarSobrenome(),
        this.cpf = CADASTRO.cadastrarCPF(),
        this.rg = CADASTRO.cadastrarRG(),
        this.celular = CADASTRO.cadastrarCelular()
        this.renda = CADASTRO.cadastrarRenda(),
        this.email = CADASTRO.cadastrarEmail(),
        this.senha =  CADASTRO.cadastrarSenha(),
        this.saldo = 0
    }

    depositar() {
        const VALOR = Number(prompt(`Muito bem, digite quanto* você quer depositar em sua conta. Lembrando que esse valor não poderá exceder a sua renda mensal.
        *substitua as vírgulas por pontos nas casas decimais`))

        if (VALOR > this.renda) {
            if (confirm(`Não foi possível completar a operação pois o valor inserido excede o valor total de sua renda. Deseja tentar novamente?`)) {
                this.depositar()
            } else {
                alert(`Ok, voltando ao menu de opções.`)
                opcoes()
            }
        } else {
        this.saldo += VALOR
        if (confirm(`Depósito concluído com sucesso! 

Data e hora: ${new Date}
Valor: R$ ${Number(VALOR).toFixed(2).replace(".", ",")}
Saldo atual: R$ ${Number(this.saldo).toFixed(2).replace(".", ",")}

Deseja retornar ao menu de opções?`)) {
        opcoes()
        } else {
        }}
    }

    verSaldo() {
        if (confirm(`O seu saldo hoje é de:

R$ ${Number(this.saldo).toFixed(2).replace(".", ",")}

Deseja voltar ao menu de opções?`)) {
    opcoes()
}}
    
}

const CADASTRO = {
    cadastrarNome: function() {
        const erro = new Error(`Digite um nome válido.`)
        const nome = prompt("Digite seu nome:")
    
        if (nome === "" || nome === Number(nome)) {
            alert(erro)
            this.cadastrarNome()
        }
    },
    cadastrarSobrenome: function() {
        const erro = new Error(`Digite um sobrenome válido.`)
        const sobrenome = prompt("Digite seu sobrenome:")
    
        if (sobrenome === "" || Number(sobrenome) === Number) {
            alert(erro)
            this.cadastrarSobrenome()
        }
    },
    cadastrarCPF: function() {
        const erro = new Error(`Digite um CPF válido.`)
        const cpf = prompt("Digite seu CPF, com pontos e traço:")
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    
        if (!cpf.match(regexCPF)) {
            alert(erro)
            this.cadastrarCPF()
        }
    },
    cadastrarRG: function() {
        const erro = new Error(`Digite um RG válido.`)
        const rg = prompt("Digite seu RG:")
        const regexRG = /(\d{1,2}\.?)(\d{3}\.?)(\d{3})(\-?[0-9Xx]{1})/g
    
        if (!rg.match(regexRG)) {
            alert(erro)
            this.cadastrarRG()
        }
    },
    cadastrarCelular: function() {
        const erro = new Error(`Digite um número de celular válido.`)
        const celular = prompt("Digite seu número de celular com DDD:")
        const regexCelular = /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/
    
        if (!celular.match(regexCelular)) {
            alert(erro)
            this.cadastrarCelular()
        }
    },
    cadastrarRenda: function() {
        const erro = new Error(`Digite uma renda válida.`)
        const renda = Number(prompt("Digite o valor da sua renda mensal:")).toFixed(2)
    
        if (renda === "" || renda === String) {
            alert(erro)
            this.cadastrarRenda()
        }
    },
    cadastrarEmail: function() {
        const erro = new Error(`Digite um email válido.`)
        const email = prompt("Digite o seu email")
        const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

        if (!email.match(regexEmail)) {
            alert(erro)
            this.cadastrarEmail()
        }
    },
    cadastrarSenha: function() {
        const erro = new Error(`Digite uma senha válida`)
        const senha = prompt("Digite uma senha:")
    
        if (senha === "") {
            alert(erro)
            this.cadastrarSenha()
        }
    },
    
}

function auth() {
    const authEmail = prompt(`PÁGINA DE LOGIN
    Email:`)
    const authSenha = prompt(`PÁGINA DE LOGIN
    Senha:`)

    if (authEmail === EDUARDO.email && authSenha === EDUARDO.senha) {
        alert(`Você foi logado com sucesso.`)
        opcoes()
    } else {
        const erro = new Error(`Credenciais inválidas.`)
        alert(erro)
        this.auth()
    }
} 

const EDUARDO = new Cliente()
auth()

function opcoes() {
    const INDEX = prompt(`Digite o número da opção deseja:
    1 - Depositar na sua conta
    2 - Ver o saldo
    3 - Realizar uma transferência
    X - Encerrar`)
    switch (INDEX) {
        case "1":
            EDUARDO.depositar()
            break;
        case "2": 
            EDUARDO.verSaldo()
        default:
            break;
    }
}

