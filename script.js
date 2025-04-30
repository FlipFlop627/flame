function triggerFlame() {
    const flame = document.getElementById('flame');
    flame.classList.remove('flame-hidden');
  
    setTimeout(() => {
      flame.classList.add('flame-hidden');
    }, 1500);
  }
  