const dots = Array.from(document.querySelectorAll('.dot'));
    const startBtn = document.getElementById('start');

    

    function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

    async function runSequence() {
      startBtn.disabled = true;
      // Garantir que todos comecem apagados
      dots.forEach(d => d.classList.remove('on'));

      // Passos: acende 1, 2, 3, ..., 6 a cada 3s, mantendo os anteriores acesos
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.add('on');
        await sleep(3000); // 3 segundos entre cada acendimento
      }

      // Passo 5: todos acesos por 1 segundo
      await sleep(1000);

      // Apagar todos
      dots.forEach(d => d.classList.remove('on'));
      startBtn.disabled = false;
    }

    startBtn.addEventListener('click', runSequence);

   