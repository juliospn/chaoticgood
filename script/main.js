function goToRandomArticle() {
  // Crie uma lista de URLs para os seus artigos
  const articles = ['juliospn/caothicgood/filosofos/karlmarx.html', '/aynrand.html', '/article-3'];

  // Sorteie um número aleatório entre 0 e o tamanho da lista de artigos
  const randomIndex = Math.floor(Math.random() * articles.length);

  // Redirecione para o artigo selecionado
  window.location.href = articles[randomIndex];
}

