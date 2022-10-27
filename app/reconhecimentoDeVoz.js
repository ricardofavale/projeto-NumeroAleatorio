//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

//função que recebe um evento, e busca a transcrição do evento falado
function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiValorValido(chute)
}

//função que escreve no html o que foi falado
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class='box'> ${chute}</span>
    `
}

//manter o audio ligado para continuar o jogo, e não parar após um chute
recognition.addEventListener('end', () => recognition.start())

