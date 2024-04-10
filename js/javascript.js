function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return rect.top <= windowHeight;
}

function animateFooter() {
  const footer = document.getElementById('categorias');
  
  if (isElementVisible(footer)) {
    footer.classList.add('animate');
  } else {
    footer.classList.remove('animate');
  }
}

window.addEventListener('scroll', animateFooter);
window.addEventListener('resize', animateFooter);
