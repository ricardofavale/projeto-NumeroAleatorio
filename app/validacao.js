function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if(numeroForMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido. Favor informar um número entre ${menorValor} e ${maiorValor}.</div>
        `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você Acertou</h2>
        <h3>O número secreto erá ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

//verificando se o valor do chute é um numero ou não
function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

//se eu tiver um click no botao de id jogar novamente, recarregue a pagina
document.body.addEventListener('click',e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})