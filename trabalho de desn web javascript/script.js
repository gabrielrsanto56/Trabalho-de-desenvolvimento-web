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



