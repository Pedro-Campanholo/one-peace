/* usa-se barra e asterisco para comentar
em varias linhas e se fecha com os mesmos itens.
*/
// usa-se para comentar em linha, não precisa fechar.
/*
O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente.

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado.
        passo 1 - pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles.
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou.
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem.
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele.
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou.
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
*/

// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado.
// passo 1 - pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles.
const botoes = document.querySelectorAll('.botao');

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem.
//passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele.
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //OB1 passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.
        desselecionarBotao(); //Refatorar - transforma o codigo em uma function automaticamente
        
        //OB2 passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
        desselecionarPersonagem();//Refatorar - transforma o codigo em uma function automaticamente

        //OB1 passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou.
        botao.classList.add("selecionado");

        //OB2 passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou.
        personagens[indice].classList.add("selecionado");
    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

