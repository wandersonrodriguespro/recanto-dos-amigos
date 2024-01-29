// Galeria

document.addEventListener("DOMContentLoaded", () => {
  const galeria = document.querySelector(".img-container-01");
  const mostrarMais = document.getElementById("btn-galeria");
  const esconderImagens = document.getElementById("btn-mostarMenos");
  const fimGaleria = document.querySelector(".fim-galeria");
  const imagens = galeria.querySelectorAll(".image");
  const imagensPorVez = 6;
  let imagensExibidas = 0;

  function mostrarImagens() {
    for (let i = 0; i < imagensPorVez; i++) {
      if (imagensExibidas < imagens.length) {
        imagens[imagensExibidas].style.display = "flex";
        imagensExibidas++;
      } else {
        fimGaleria.style.display = "flex";
        mostrarMais.style.display = "none";
      }
    }
  }

  function resetarExibicao() {
    imagensExibidas = 0;
    for (const img of imagens) {
      img.style.display = "none";
      fimGaleria.style.display = "none";
      mostrarMais.style.display = "flex";
    }
    mostrarImagens();
  }

  mostrarImagens();

  mostrarMais.addEventListener("click", mostrarImagens);
  esconderImagens.addEventListener("click", resetarExibicao);
});

// Popup Galeria

const popup = document.querySelector(".popup-img");
const popupImage = document.querySelector(".popup-img img");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const close = document.querySelector(".popup-img span");

close.addEventListener("click", closePopUp);

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    closePopUp();
  } else if (e.key === "ArrowLeft") {
    mostrarImagemAnterior();
  } else if (e.key === "ArrowRight") {
    mostrarProximaImagem();
  }
});

function closePopUp() {
  document.querySelector(".popup-img").style.display = "none";
}

const imagensArray = Array.from(
  document.querySelectorAll(".img-container-01 .image img")
);

document.querySelectorAll(".section-container-galery img").forEach((image) => {
  image.onclick = () => {
    popup.style.display = "block";
    popupImage.src = image.getAttribute("src");
  };
});

// Função arrow do popup

let indiceAtual = 0;

function mostrarProximaImagem() {
  if (indiceAtual < imagensArray.length - 1) {
    indiceAtual++;
  } else {
    indiceAtual = 0;
  }
  popupImage.src = imagensArray[indiceAtual].src;
}

function mostrarImagemAnterior() {
  if (indiceAtual > 0) {
    indiceAtual--;
  } else {
    indiceAtual = imagensArray.length - 1;
  }
  popupImage.src = imagensArray[indiceAtual].src;
}

leftArrow.addEventListener("click", mostrarImagemAnterior);
rightArrow.addEventListener("click", mostrarProximaImagem);

// Envio de formulário

document.addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    const btnSend = document.getElementById('send')

    console.log('enter')

    btnSend.click()
  }
})

// menu mobile

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')

  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)