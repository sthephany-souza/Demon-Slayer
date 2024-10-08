/*
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
	- passo 1 - dar um jeito de pegar o elemento HTML dos botões
	- passo 2 - dar um jeito de identificar o clique do usuário no botão
	- passo 3 - desmarcar o botão ativo anterior
	- passo 4 - marcar o botão clicado como se estivesse ativo
	- passo 5 - esconder a imagem anteriormente selecionada
	- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
	- passo 7 - esconder a informação do dragão anteriormente ativo
	- passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // - passo 3 - desmarcar o botão ativo anterior
    desativarBotaoAtivo();

    // 	- passo 4 - marcar o botão clicado como se estivesse ativo
    marcarBotaoAtivo(botao);

    // - passo 5 - esconder a imagem anteriormente selecionada
    esconderImagemAtiva();

    // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    mostrarImagemDeFundo(indice);

    // - passo 7 - esconder a informação do dragão anteriormente ativo
    esconderInformacoesAtivas();

    // - passo 8 - mostrar a informação do dragão referente ao botão clicado
    mostrarInformacoes(indice);
  });
});

function marcarBotaoAtivo(botao) {
    botao.classList.add("ativo");
}

function mostrarInformacoes(indice) {
  informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoAtivo() {
  const botaoativo = document.querySelector(".ativo");
  botaoativo.classList.remove("ativo");
}