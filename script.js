// elementos modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imagemModal');
const fechar = document.getElementById('fecharModal');
const caption = document.getElementById('caption');

// imagens 
const thumbs = document.querySelectorAll('main img');

// Abre modal 
thumbs.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt || '';
    caption.textContent = img.alt || '';
    document.body.style.overflow = 'hidden'; // trava scroll
  });
});

// Fecha modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Fecha no X
fechar.addEventListener('click', closeModal);

// Fecha fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});