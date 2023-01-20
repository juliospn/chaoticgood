function goToRandomArticle() {
  // Crie uma lista de URLs para os seus artigos
  const articles = ['./filosofos/karlmarx.html', './filosofos/aynrand.html', './filosofos/hans-herman-hoppe.html','./filosofos/gustave-de-molinari.html','./filosofos/lysander-spooner.html','./filosofos/friedrich-hayek.html','./filosofos/milton-friedman.html','./artigos/anarquismo-espiritualidade.html','./artigos/anomia-anarquia.html','./artigos/cypher-nao-pise-em-mim.html','./artigos/nakamoto-bitcoin.html','./filosofos/roberto-campos.html','./filosofos/thomas-sowell.html','./filosofos/murray-rothbard.html','./filosofos/samuel-edward-konkin.html','./filosofos/mikhail-bakunin.html','./filosofos/pierre-joseph-proudhon.html','./artigos/especializacao-robotizacao.html','./filosofos/frederic-bastiat.html','./filosofos/jean-baptiste-say.html','./filosofos/adam-smith.html','./filosofos/john-locke.html','./filosofos/david-hume.html','./filosofos/david-ricardo.html','./filosofos/eugen-von-bohm-bawerk.html','./filosofos/carl-menger.html','./filosofos/Friedrich-von-wieser.html','./filosofos/rose-wilder.html','./filosofos/wendy-mcelroy.html','/filosofos/keynes.html','./filosofos/buchanan.html','./artigos/drogas-liberdade-responsabilidade.html','./artigos/jesus-anarquista.html','./artigos/ia-esse-blog.html','./artigos/wakeup-neo.html'];

  // Sorteie um número aleatório entre 0 e o tamanho da lista de artigos
  const randomIndex = Math.floor(Math.random() * articles.length);

  // Redirecione para o artigo selecionado
  window.location.href = articles[randomIndex];
}

