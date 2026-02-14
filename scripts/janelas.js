function abrirJanela(idApp, titulo) {
    const areaTrabalho = document.getElementById('area-de-trabalho');

    // Cria a estrutura da janela cheia
    const janela = document.createElement('div');
    janela.className = 'janela';
    
    janela.innerHTML = `
        <div class="janela-cabecalho">
            <span class="titulo-janela">${titulo}</span>
            <div class="controles-janela">
                <button class="btn-fechar" onclick="fecharJanela(this)">✕</button>
            </div>
        </div>
        <div class="janela-corpo">
            <iframe src="paginas/${idApp}.html" frameborder="0"></iframe>
        </div>
    `;

    // Adiciona ao DOM
    areaTrabalho.appendChild(janela);
    
    // Fecha o menu iniciar caso ele esteja aberto
    const menu = document.getElementById('menu-container');
    if (menu) {
        menu.classList.remove('menu-visivel');
        menu.classList.add('menu-escondido');
    }
}

function fecharJanela(botao) {
    const janelaParaRemover = botao.closest('.janela');
    if (janelaParaRemover) {
        janelaParaRemover.remove();
    }
}