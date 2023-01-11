function goToRandomArticle() {
  // Crie uma lista de URLs para os seus artigos
  const articles = ['./filosofos/karlmarx.html', './filosofos/aynrand.html', './filosofos/hans-herman-hoppe.html','./filosofos/gustave-de-molinari.html','./filosofos/lysander-spooner.html','./filosofos/friedrich-hayek.html','./artigos/anarquismo-espiritualidade.html','./artigos/anomia-anarquia.html','./artigos/cypher-nao-pise-em-mim.html','./artigos/nakamoto-bitcoin.html'];

  // Sorteie um número aleatório entre 0 e o tamanho da lista de artigos
  const randomIndex = Math.floor(Math.random() * articles.length);

  // Redirecione para o artigo selecionado
  window.location.href = articles[randomIndex];
}

