
const jogos = [

    {
        nome: "Jogo da Memória",
        aluno: "Camila Garcia Patrussi",
        link: "https://camilapatrussi.github.io/jogo-da-memoria/",
        icone: "🧠"
    },

    {
        nome: "Jogo de Insetos",
        aluno: "Raissa Helena",
        link: "https://raissa354.github.io/jogo_de_insetos/",
        icone: "🐞"
    },

    {
        nome: "Minecraft 2D",
        aluno: "Nicolas Gonçalves Feitosa de Jesus",
        link: "https://nicolas-56m.github.io/jogo_minecraft2D/",
        icone: "⛏️"
    },

    {
        nome: "Atividade Jogo",
        aluno: "Arthur Alves, Eyck e Pedro Turolla",
        link: "https://arthuralves15lda-cell.github.io/atividade_jogo/",
        icone: "🕹️"
    },

    {
        nome: "Jogo Mercadinho",
        aluno: "Mayara Lopes Oliveira",
        link: "https://maahlopes.github.io/Jogo_mercadinho/",
        icone: "🛒"
    },

    {
        nome: "Jogo IA",
        aluno: "Samuel Henrique",
        link: "https://samuka9191.github.io/jogoia/",
        icone: "🤖"
    },

    {
        nome: "Jogo Teste",
        aluno: "Vivian Ferreira da Silva",
        link: "https://vivifsilva.github.io/Jogo_teste/Jogo/",
        icone: "🎯"
    },
    {
        nome: "Pixel GP Manager",
        aluno: "Yago Gregio de Oliveira",
        link: "https://yagogregio.github.io/Pixel-GP-Manager/",
        icone: "🧠"
    },
    {
        nome: "Tetris",
        aluno:"Arthur Henrique da Silva Oliveira",
        link: "https://oliveirahenriquedasilca-cmd.github.io/jogo/",
        icone:"⚡"
    },
    {
        nome:"Missão Oceano",
        aluno: "Bianka Vieira Ventura",
        link:"https://bianka2607.github.io/missao_oceano/",
        icone: "🐢"
    }

];

// Elementos HTML
const listaJogos = document.getElementById("lista-jogos");
const pesquisa = document.getElementById("pesquisa");
const totalJogos = document.getElementById("total-jogos");
const mensagemVazia = document.getElementById("mensagem-vazia");

// Função responsável por exibir os jogos
function mostrarJogos(filtro = "") {

    listaJogos.innerHTML = "";

    const jogosFiltrados = jogos.filter(jogo => {

        const nomeJogo = jogo.nome.toLowerCase();
        const nomeAluno = jogo.aluno.toLowerCase();

        return nomeJogo.includes(filtro.toLowerCase()) ||
            nomeAluno.includes(filtro.toLowerCase());

    });

    totalJogos.textContent = jogosFiltrados.length;

    mensagemVazia.hidden = jogosFiltrados.length > 0;

    jogosFiltrados.forEach(jogo => {

        const card = document.createElement("article");

        card.className = "game-card";

        card.innerHTML = `
            <div class="game-icon">${jogo.icone}</div>

            <h3>${jogo.nome}</h3>

            <p class="student">
                Desenvolvido por: ${jogo.aluno}
            </p>

            <a
                href="${jogo.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="game-link"
            >
                Jogar agora ↗
            </a>
        `;
        listaJogos.appendChild(card);
    });
}

pesquisa.addEventListener("input", () => {
    mostrarJogos(pesquisa.value);
});

mostrarJogos();
