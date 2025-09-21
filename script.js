document.body.classList.remove('not-loaded');
// Espera a que terminen las animaciones de los tulipanes (~2.5s)
setTimeout(function() {
  document.querySelector('.ramo').classList.add('ramo--visible');
}, 2500);