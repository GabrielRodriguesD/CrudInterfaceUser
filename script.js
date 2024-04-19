const openModal = () => {
    document.getElementById("modal").classList.add("active")
}

const closeModal = () => {
    document.getElementById("modal").classList.remove("active")
    
}

document.getElementById("cadastrarUsuario").addEventListener("click", openModal);


document.getElementById("modalClose").addEventListener("click", closeModal);

// --------------------------------------------------------------

function CalcularValores(event) {
    event.preventDefault();

    let dadosUsuario = CapturarValores();
    
    let dadosUsuarioCompleto = OrganizarDados(dadosUsuario);

    CadastrarUsuario(dadosUsuarioCompleto)

    
    window.location.reload();
    
}

// FUNÇÂO VALORES - COM OS INPUTS **** -------------------------

function CapturarValores() {
    const nome = document.getElementById("nameId").value;
    const email = document.getElementById("emailId").value;
    const celular = document.getElementById("celularId").value;
    const cidade = document.getElementById("cidadeId").value;
    
    const dadosUsuario = {
        nome: nome,
        email: email,
        celular: celular,
        cidade: cidade
    }
    
    document.getElementById("button-salvar").addEventListener("click",closeModal)

    return dadosUsuario;
}
// FUNÇÂO VALORES - COM OS INPUTS **** -------------------------


// FUNÇÂO ORGANIZAR DADOS - COM OS DADOS **** -------------------------
function OrganizarDados(dadosUsuario) {
    // const dataHoraAtual = Intl.DateTimeFormat("pt-BR", {timeStyle: "long", dataStyle: "short" }).format(date.now());
    
    const dadosUsuarioCompleto = {
        ...dadosUsuario,
        // dataCadastro: dataHoraAtual
    }
    
    return dadosUsuarioCompleto
}
// FUNÇÂO ORGANIZAR DADOS - COM OS DADOS **** -------------------------

// FUNÇÂO CADASTRAR USUARIOS - **** -------------------------

function CadastrarUsuario(usuario) {
    let listaUsuario = [];
    
    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }
    
    
    listaUsuario.push(usuario);
    
    localStorage.getItem("usuariosCadastrados", JSON.stringify(listaUsuario))
}

// FUNÇÂO CADASTRAR USUARIOS - **** -------------------------
function CarregarUsuarios() {
    let listaUsuario = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }
    
    if (listaUsuario.length == 0) {
        let tabela = document.getElementById("corpo-tbody");
        
        tabela.innerHTML =`
        <tr> 
            <td> Nenhum usuário cadastrado </td>
        </tr>
        `
    }else {
        montarTabela(listaUsuario)
    }
}

window.addEventListener('DOMContentLoaded', () => CarregarUsuarios())


// FUNÇÂO CARREGAR USUARIOS - **** -------------------------

function montarTabela(listaDeCadastrados) {
    let tabela = document.getElementById('corpo-tbody')

    let template = "";

    listaDeCadastrados.forEach(pessoa => {
        template += `
            <tr>
                <td data-cell="nome" > ${pessoa.nome} </td>
                <td data-cell="email" > ${pessoa.email} </td>
                <td data-cell="celular" > ${pessoa.celular} </td>
                <td data-cell="cidade"> ${pessoa.cidade} </td>
            </tr>
        `
    });

    tabela.innerHTML = template;
}