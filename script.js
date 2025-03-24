function carregarJogo(nomeJogo) {
  fetch('jogos.json')
      .then(response => response.json())
      .then(data => {
          if (data[nomeJogo]) {
              let jogo = data[nomeJogo];

              // Remove todas as classes de jogo do body
              document.body.className = '';

              // Adiciona a classe do jogo selecionado (exemplo: 'far-cry-3')
              let classeJogo = nomeJogo.toLowerCase().replace(/\s/g, '-');
              document.body.classList.add(classeJogo);

              document.getElementById('conteudo').innerHTML = `
                  <h1>${jogo.titulo}</h1>
                  <img src="${jogo.imagem}" alt="${jogo.titulo}">
                  <p><b>Gênero:</b> ${jogo.genero}</p>
                  <p><b>Data de Lançamento:</b> ${jogo.lancamento}</p>
                  <p><b>Plataformas:</b> ${jogo.plataformas}</p>
                  <p><b>Prêmios:</b> ${jogo.premios}</p>
                  <p><b>Espaço necessário:</b> ${jogo.espaco}</p>
                  <p><b>Descrição:</b> ${jogo.descricao}</p>
                  <p><b>Gameplay:</b> ${jogo.gameplay}</p>
                  <p><b>Confira o trailer:</b></p>
                  <iframe width="560" height="315" src="${jogo.trailer}" allowfullscreen></iframe>
              `;

              // Esconde a lista de jogos
              document.getElementById('main_pagina_inicial2').style.display = 'block';
              document.getElementById('main_pagina_inicial2').style.textAlign = 'center';
              document.getElementById('conteudo-dinamico').style.textAlign = 'left';
              document.getElementById('conteudo-dinamico').style.display = 'flex';
              document.getElementById('conteudo-dinamico').style.justifyContent = 'center';
              document.getElementById('conteudo-dinamico').style.margin = 'auto';
              document.getElementById('conteudo-dinamico').style.width = '40vw';
          } else {
              console.error('Jogo não encontrado.');
          }
      })
      .catch(error => console.error('Erro ao carregar os dados:', error));
}

//inicio carrossel

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");
  let currentSlide = 0;
  let interval; 
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });
  let dots = document.querySelectorAll(".dot");
  function showItem(index) {
    clearInterval(interval); 
    items[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = (index + items.length) % items.length;
    items[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
    interval = setInterval(() => {
      showItem((currentSlide + 1) % items.length);
    }, 2500); 
  }
  document.querySelector(".prev").addEventListener("click", () => {
    showItem((currentSlide - 1 + items.length) % items.length);
  });
  document.querySelector(".next").addEventListener("click", () => {
    showItem((currentSlide + 1) % items.length);
  });
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
  interval = setInterval(() => {
    showItem((currentSlide + 1) % items.length);
  }, 2500);
  carousel.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });
  carousel.addEventListener("mouseleave", () => {
    interval = setInterval(() => {
      showItem((currentSlide + 1) % items.length);
    }, 2500);
  });
});

//fim carrossel

//inicio janelas
function openjanela(){
  const janela = document.getElementById('janela-container')
  janela.classList.add('mostrar')
  janela.addEventListener('click', (e) =>{
    if (e.target.id == 'janela-container' || e.target.id == "fechar"){
      janela.classList.remove('mostrar')
      localStorage.fechajanela = 'janela-container'
    }
  })
}

function openjanelasobre(){
  const janela = document.getElementById('janela-container-sobre')
  janela.classList.add('mostrar')
  janela.addEventListener('click', (e) =>{
    if (e.target.id == 'janela-container-sobre' || e.target.id == "fechar"){
      janela.classList.remove('mostrar')
      localStorage.fechajanela = 'janela-container-sobre'
    }
  })
}

//fim janelas

//inicio barra de pesquisas

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const gameLinks = document.querySelectorAll('.jogo a'); 
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  const filteredGames = Array.from(gameLinks).filter(gameLink => {
    const gameTitle = gameLink.textContent.toLowerCase();
    return gameTitle.includes(searchTerm);
  });
  if (filteredGames.length) {
    filteredGames.forEach(gameLink => {
    searchResults.appendChild(gameLink.parentElement.cloneNode(true));
    });
  } else {
    searchResults.innerHTML = '<p style="color: white;">Nenhum jogo encontrado.</p>';
  }
  if (event.key === 'Enter') {
    document.getElementById('search-button').click();
  }
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase(); 
  
  });
});

//fim barra de pesquisas

//inicio barra de pesquisa noticias 
 document.getElementById('search-button').addEventListener('click', function() {
  var searchTerm = document.getElementById('search-input').value.toLowerCase();
  var noticias = document.getElementsByClassName('noticia');

  for (var i = 0; i < noticias.length; i++) {
    var noticia = noticias[i];
    var text = noticia.innerText.toLowerCase();

    if (text.includes(searchTerm)) {
      noticia.style.display = 'block';
    } else {
      noticia.style.display = 'none';
    }
  }
  });

  document.getElementById('search-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('search-button').click();
  }
});

//fim barra de pesquisa noticias



