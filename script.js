// Espera o DOM carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE NAVEGAÇÃO DAS PÁGINAS ---

    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const backButtons = document.querySelectorAll('.back-btn');
    const homeSection = document.getElementById('home');

    // Função para mostrar uma seção específica e esconder a home
    function showSection(targetId) {
        // Esconde a home
        homeSection.style.display = 'none';

        // Esconde todas as seções
        pageSections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostra a seção alvo
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
            window.scrollTo(0, 0); // Rola para o topo
        }
    }

    // Função para mostrar a home e esconder as seções
    function showHome() {
        // Esconde todas as seções
        pageSections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostra a home
        homeSection.style.display = 'block';
        window.scrollTo(0, 0); // Rola para o topo
    }

    // Adiciona evento de clique para os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o link de navegar
            const targetId = link.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Adiciona evento de clique para os botões "Voltar"
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            showHome();
        });
    });


    // --- LÓGICA DO MODO ESCURO (DARK MODE) ---

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema salvo
    function applyTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Adiciona evento de clique ao botão de tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Salva a preferência no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Aplica o tema ao carregar a página
    applyTheme();

});