const formulario = document.querySelector("form");
const INPUT_NOME = document.querySelector("#inserirNome");
const INPUT_EMAIL = document.querySelector("#inserirEmail");
const INPUT_PESSOA = document.querySelector("#inserirTipoPessoa");
const INPUT_CPF = document.querySelector("#inserirCPF");
const INPUT_CNPJ = document.querySelector("#inserirCNPJ");
const INPUT_CEP = document.querySelector("#inserirCEP");
const INPUT_ENDERECO = document.querySelector("#inserirEndereco");
const INPUT_COMPLEMENTO = document.querySelector("#inserirComplemento");
const INPUT_BAIRRO = document.querySelector("#inserirBairro");
const INPUT_CIDADE = document.querySelector("#inserirCidade");
const INPUT_UF = document.querySelector("#inserirUf");

const url ="http://localhost:8080/cadastro"
function cadastrar () {
    fetch(url, 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: INPUT_NOME.value,
            email: INPUT_EMAIL.value,
            tipoPessoa: INPUT_PESSOA.value,
            cpf: INPUT_CPF.value,
            cnpj: INPUT_CNPJ.value,
            cep: INPUT_CEP.value,
            endereco: INPUT_ENDERECO.value,
            complemento: INPUT_COMPLEMENTO.value,
            bairro: INPUT_BAIRRO.value,
            cidade: INPUT_CIDADE.value,
            estado: INPUT_UF.value})
    })
    .then(function(res) {console.log(res)})
    .catch(function(res){console.log(res)})

};

function limpar(){
    INPUT_NOME.value="";
    INPUT_EMAIL.value="";
    INPUT_PESSOA.value="";
    INPUT_CPF.value="";
    INPUT_CNPJ.value;
    INPUT_CEP.value="";
    INPUT_ENDERECO.value="";
    INPUT_COMPLEMENTO.value="";
    INPUT_BAIRRO.value="";
    INPUT_CIDADE.value="";
    INPUT_UF.value="";
}

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    cadastrar();
    limpar();
})

