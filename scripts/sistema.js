// Lógica de inicialização do sistema
console.log("Sistema Web OS carregado com sucesso!");

// Futuramente: Gerenciamento de papel de parede e sons de sistema
document.addEventListener('DOMContentLoaded', () => {
    const dataAtual = new Date();
    console.log("Sessão iniciada em: " + dataAtual.toLocaleDateString());
});

// Verifica se existe um papel de parede salvo e aplica ao carregar o sistema
document.addEventListener('DOMContentLoaded', () => {
    const fundoSalvo = localStorage.getItem('papelParede');
    if (fundoSalvo) {
        document.body.style.backgroundImage = `url('${fundoSalvo}')`;
    }
});

console.log("Sistema Web OS: Verificação de preferências concluída.");

function alternarMenu() {
    const menu = document.getElementById('menu-container');
    
    // Alterna entre as classes de visibilidade
    if (menu.classList.contains('menu-escondido')) {
        menu.classList.remove('menu-escondido');
        menu.classList.add('menu-visivel');
    } else {
        menu.classList.remove('menu-visivel');
        menu.classList.add('menu-escondido');
    }
}

// Fechar o menu se clicar na área de trabalho
document.getElementById('area-de-trabalho').addEventListener('click', () => {
    const menu = document.getElementById('menu-container');
    if (menu.classList.contains('menu-visivel')) {
        menu.classList.remove('menu-visivel');
        menu.classList.add('menu-escondido');
    }
});

// Função para atualizar a data no Widget
function atualizarDataWidget() {
    const agora = new Date();
    const opcoes = { weekday: 'long', day: 'numeric', month: 'long' };
    document.getElementById('data-atual').innerText = agora.toLocaleDateString('pt-PT', opcoes);
}

// Função para obter nível da bateria real
if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        function updateAllBatteryInfo() {
            const nivel = Math.round(battery.level * 100);
            document.getElementById('bateria-status').innerText = `Bateria: ${nivel}%`;
        }
        updateAllBatteryInfo();
        battery.addEventListener('levelchange', updateAllBatteryInfo);
    });
}

// Iniciar
atualizarDataWidget();
setInterval(atualizarDataWidget, 60000); // Atualiza a cada minuto