
// Lógica para a página de cadastro e modal

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    
    // Verifica se o formulário de cadastro existe na página atual.
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const usuario = { nome, email, senha };
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            
            // Abre o modal após o cadastro
            let modal = document.getElementById("myModal");
            if(modal) {
                modal.style.display = "block";
            }
            
            // Limpa o formulário
            form.reset();
        });
    }

    // script.js (versão unificada)

// Lógica para a página de cadastro e modal
// Adiciona um ouvinte de evento que será executado quando o documento for totalmente carregado
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    
    // Verifica se o formulário de cadastro existe na página atual.
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const usuario = { nome, email, senha };
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            
            // Abre o modal após o cadastro
            let modal = document.getElementById("myModal");
            if(modal) {
                modal.style.display = "block";
            }
            
            // Limpa o formulário
            form.reset();
        });
    }

    // Lógica para a página de tabela (agora unificada)
    // Verifique se o elemento 'tabelaDados' existe na página atual.
    const tabelaElement = document.getElementById('tabelaDados');
    
    if (tabelaElement) {
        let dados = JSON.parse(localStorage.getItem('usuarios')) || [];
        let tabela = tabelaElement.getElementsByTagName('tbody')[0];
        
        for (let dado of dados) {
            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaEmail = linha.insertCell(1);
            let celulaSenha = linha.insertCell(2);
            celulaNome.innerHTML = dado.nome;
            celulaEmail.innerHTML = dado.email;
            celulaSenha.innerHTML = dado.senha;
        }
    }
});


// Lógica do modal fora do DOMContentLoaded
let modal = document.getElementById("myModal");
if (modal) {
    // Obtém o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // Quando o usuário clicar no <span> (x), fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
    const tabelaElement = document.getElementById('tabelaDados');
    
    if (tabelaElement) {
        let dados = JSON.parse(localStorage.getItem('usuarios')) || [];
        let tabela = tabelaElement.getElementsByTagName('tbody')[0];
        
        for (let dado of dados) {
            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaEmail = linha.insertCell(1);
            let celulaSenha = linha.insertCell(2);
            celulaNome.innerHTML = dado.nome;
            celulaEmail.innerHTML = dado.email;
            celulaSenha.innerHTML = dado.senha;
        }
    }
});


// Lógica do modal fora do DOMContentLoaded
let modal = document.getElementById("myModal");
if (modal) {
    // Obtém o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // Quando o usuário clicar no <span> (x), fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
