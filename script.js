const openModal = () => {
    document.getElementById("modal").classList.add("active")

    document.getElementById("title-modal").innerText = "Cadastrar usuário"
    document.getElementById("button-salvar").innerText = "Salvar"
}

const closeModal = () => {
    document.getElementById("modal").classList.remove("active")
    
}

document.getElementById("cadastrarUsuario").addEventListener("click", openModal);


document.getElementById("modalClose").addEventListener("click", closeModal);



// --------------------------------------------------------------

// function CalcularValores(event) {
//     event.preventDefault();

//     let dadosUsuario = CapturarValores();
    
//     let dadosUsuarioCompleto = OrganizarDados(dadosUsuario);

//     CadastrarUsuario(dadosUsuarioCompleto)

    
//     window.location.reload();
    
// }

// FUNÇÂO VALORES - COM OS INPUTS **** -------------------------

function CapturarValores() {
    let listaUsuario = [];


    const nome = document.getElementById("nameId").value;
    const email = document.getElementById("emailId").value;
    const celular = document.getElementById("celularId").value;
    const cidade = document.getElementById("cidadeId").value;
    const id = Math.floor(Math.random() * 100);
    
    // const botaoEditar = document.getElementById("button green").value;
    // const botaoDeletar = document.getElementById("button red").value;

    const dadosUsuario = {
        // nome qualquer = nome da const
        nomeUser: nome,
        emailUser: email,
        celularUser: celular,
        cidadeUser: cidade,
        idUser: id
    }
    

    
    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }
    
    listaUsuario.push(dadosUsuario);

    console.log(listaUsuario);
    
    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuario))

    closeModal();

    window.location.reload()
    

    console.log(dadosUsuario)

}
document.getElementById("button-salvar").addEventListener("click",CapturarValores)
// FUNÇÂO VALORES - COM OS INPUTS **** -------------------------


// FUNÇÂO ORGANIZAR DADOS - COM OS DADOS **** -------------------------

// FUNÇÂO ORGANIZAR DADOS - COM OS DADOS **** -------------------------

// FUNÇÂO CADASTRAR USUARIOS - **** -------------------------


// FUNÇÂO CADASTRAR USUARIOS - **** -------------------------
function CarregarUsuarios() {
    let listaUsuario = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }
    
    if (listaUsuario.length == 0) {
        let tabela = document.getElementById("corpo-tbody");
        
        tabela.innerHTML =`
        <tr > 
            <td colspan="5"> Nenhum usuário cadastrado </td>
        </tr>
        `
    }else {
        montarTabela(listaUsuario)
    }
}

document.addEventListener('DOMContentLoaded', CarregarUsuarios)
// window.addEventListener('DOMContentLoaded', () => CarregarUsuarios())


// FUNÇÂO CARREGAR USUARIOS - **** -------------------------

function montarTabela(listaDeCadastrados) {
    let tabela = document.getElementById('corpo-tabela')

    let template = "";

    listaDeCadastrados.forEach((pessoa) => {
        template += `
            <tr>
                <td data-cell="nome" > ${pessoa.nomeUser} </td>
                <td data-cell="email" > ${pessoa.emailUser} </td>
                <td data-cell="celular" > ${pessoa.celularUser} </td>
                <td data-cell="cidade" > ${pessoa.cidadeUser} </td>
                <td>
                    <button type="button" class="button green" onclick="updateUser(${pessoa.idUser})">Editar</button>
                    <button type="button" class="button red" onclick="deleteUser(${pessoa.idUser})">Excluir</button> 
                </td>
            </tr>
        `
        console.log(listaDeCadastrados);
    });

    tabela.innerHTML = template;
    // colocando o template dentro do tabelea (tbody)
}


function updateUser(id) {
    openModal();

    document.getElementById("title-modal").innerText = "Atualizar usuário"
    document.getElementById("button-salvar").innerText = "Atualizar"

    

    
}
// consertar deleteUser

function deleteUser (id) {
    alert(id)

    let listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
    // caso tenha dados usuariosCadastrados Ou array(vazio)

    const  findIndex = listaUsuario.findIndex((userId) => userId.idUser == id)

    console.log(findIndex);

    if (findIndex !== -1) {
        listaUsuario.splice(findIndex, 1)
        localStorage.setItem("dadosUsuario", JSON.stringify(listaUsuario));
        // setitem define noto item dentro do local storage
        window.location.reload();
    }
}