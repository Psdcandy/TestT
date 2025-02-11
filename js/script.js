const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownBtn = dropdown.querySelector('.dropbtn');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', () => {
    if (dropdown.classList.contains('show')) {
      dropdownContent.classList.add('hide');
      setTimeout(() => {
        dropdown.classList.remove('show');
        dropdownContent.classList.remove('hide');
        dropdownContent.style.display = 'none';
      }, 500);
    } else {
      dropdownContent.style.display = 'block';
      setTimeout(() => {
        dropdown.classList.add('show');
      }, 10);
    }
  });
});
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelectorAll(".fotos img");

let currentIndex = 0; // Índice da imagem atual

// Função para abrir o modal
function openModal(index) {
  modal.style.display = "block";
  modalImg.src = images[index].src;
  currentIndex = index;
}

//Fechar modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Fechar ao clicar fora da imagem
modal.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Navegar para a imagem anterior
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
};

// Navegar para a próxima imagem
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
};

// Adiciona evento de clique para abrir o modal
images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

function scrollToSection() {
  document.getElementById('perguntas').scrollIntoView({ behavior: 'smooth' });
}
function scrollToFotos() {
  document.getElementById('fotos').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContatos() {
  document.getElementById('Contatos').scrollIntoView({ behavior: 'smooth' });
}
