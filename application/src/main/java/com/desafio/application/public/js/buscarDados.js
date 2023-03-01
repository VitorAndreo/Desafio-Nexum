const url = "http://localhost:8080/cadastro";



/*function deletarDados (){
const element = document.querySelector('#delete-request .status');
fetch(url, { method: 'DELETE' })
    element=document.getElementById=("id")
    .then(() => element.innerHTML = 'Delete successful'); 
}*/



fetch(url).then((data) => {
    return data.json();
}).then((objectData) => {
    console.log(objectData[0].id);
    let tableData = "";
    objectData.map((values) => {
        tableData += ` <tr>
        <td id>${values.id}</td>
        <td>${values.nome}</td>
        <td>${values.email}</td>
        <td>${values.tipoPessoa}</td>
        <td>${values.cpf}</td>
        <td>${values.cnpj}</td>
        <td>${values.cep}</td>
        <td>${values.endereco}</td>
        <td>${values.complemento}</td>
        <td>${values.bairro}</td>
        <td>${values.cidade}</td>
        <td>${values.estado}</td>
        <td id="acoes">
        <span type="button" class="btn btn-primary" id="editar" onClick="deletarDados()">Editar</span>
        <span type="button" class="btn btn-danger" id ="deletar" onClick = "deletarDados() href="public/index.html"">Excluir</span>
        </td>`

    });
    document.getElementById("table-body").innerHTML = tableData;
})

const postList = document.querySelector(".post-list");

function deletarDados(){
    
    postList.addEventListener('click', (e) => {
        e.preventDefault();
        let delBtn = e.target.id == "deletar";
        let editBtn =e.target.id == "editar";

        let id = e.target.parentElement.dataset.id;
    
        //Deletar
        if(delBtn){
            fetch(`${url}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(() => location.reload())
        }

        //Editar
        if(editBtn){
            const pai = e.target.parentElement;
            let conteudo = pai.querySelector(".post-list").textContent;
            let conteudoBody = pai.querySelector(".post-list").textContent;
            console.log(conteudo, conteudoBody);
        }
    });
}
