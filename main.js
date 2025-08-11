const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce e um jogador de futebol e ta jogando uma final de liberdadores e ainda no primeiro tempo com o jogo 0 a 0 tem a oportunidade de chutar uma bola que veio de um cruzamento o que voce faz",
        alternativa:
        texto: "Pega e chuta de primeira pra tentar surpreender o goleiro",
        afirmacao: "Voce errou o chute e perdeu a oportunidade de abrir o placar"
    },
    {
        texto: "Voce domina e toca pro seu amigo tentar fazer o gol",
        afirmacao: "Seu amigo faz e abre o placar"
    }
]
    },
{
    enunciado: "Final do primeiro tempo e o outro time ta atacando e vc ta sozinho o que vc faz?",
        alternativas: [
            {
                resultado 01"
            }
                texto: "Da o carrinho e para a jogada",
            afirmacao: "vc parou a jogada e levou um cartao amarelo"
            },
{
    texto: "Vc so recua e deixa ele trazer a bola",
        afirmacao: "ele te dribla e faz o gol"
        ]
},
{
    enunciado: "Comeco do segundo tempo e seu time tem um cruzamento na area o que vc faz?",
        alternativas: [
            {
                texto: "Tenta cabecear",
                afirmacao: "Erra o cabeceio e perde a oportunidade"
            },s
            {
                texto: "Cai na area e cava um penalti",
                afirmacao: "Juiz da penalti e seu time amplia o placar"
            }ss
        ]
},
{
    enunciado: "Jogo esta 2 a 1 pra vcs e ta quase acabando e tem uma jogada promissora pro time rival o que voce faz?",
        alternativas: [
            {
                texto: "Bate no jogador rival para a jogada mais e toma o segundo amarelo",
                afirmacao: " Deu certo voce parou a jogada e o juiz te expulsou"
            },
            {
                texto: "Nao para a jogada e deixa o cara passar",
                afirmacao: "Ele faz o gol e empata o jogo levando pros penaltis e vc perde"
            }

        ]

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        perguntaAtual = perguntas[atual]
        caixaPerguntas.textContent = perguntaAtual.enunciado
        mostraAlternativas()
    }

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativa = document.createElement("button");
            botaoAlternativa.textContent = alternativa.texto;
            botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativa);
        }
    }

    function respostaSelecionada(opcaoSelecionada) {
        atual++
        mostraPergunta();
    }

    mostraPergunta();

    console.log(perguntas)