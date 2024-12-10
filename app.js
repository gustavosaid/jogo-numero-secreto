// let titulo = document.querySelector('h1'); // seleciono qual tag quero editar
// titulo.innerHTML = 'Jogo do número secreto'; // passo a edição que quero, que esta no html

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero de 1 a 10';
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    
    exibirTextoNaTela('h1', 'Jogo do número secreto ');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 50');
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Voce descobriu o numero secreto com  ${tentativas} ${palavraTentativa}.`
        
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero e menor que o chute');
        }else{
            exibirTextoNaTela('p', 'o numero secreto e maior');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumAleatorio(){
    return parseInt(Math.random() * 50 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
