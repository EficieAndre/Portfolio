 const botaoModo = document.querySelector('.modo__noturno');
    const corpo = document.body;

    // Verifica se o usuário já tinha escolhido um modo anteriormente
    if (localStorage.getItem('modo') === 'escuro') {
        corpo.classList.add('modo-escuro');
        botaoModo.textContent = '☀️';
    }

    botaoModo.addEventListener('click', () => {
        corpo.classList.toggle('modo-escuro');
        const modoAtivo = corpo.classList.contains('modo-escuro');
        botaoModo.textContent = modoAtivo ? '☀️' : '🌙';
        localStorage.setItem('modo', modoAtivo ? 'escuro' : 'claro');
    });


