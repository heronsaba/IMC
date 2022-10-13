const resultado = document.querySelector('.resultado');

const form = document.querySelector('.form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const peso = Number(e.target.querySelector('#peso').value);
    const altura = Number(e.target.querySelector('#altura').value)/100;

    if (!peso){
        setResultado('Peso invalido', false);
        return;
    }
    if (!altura){
        setResultado('Altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const faixaImc = getFaixaImc(imc);

    const msg =`Seu IMC é ${imc} (${faixaImc}.)`;

    setResultado (msg, true);
});
function criaP(){
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML =''; 


    const p = criaP();
    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else{
        p.classList.add('resultado-erro');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
function getImc(peso, altura){
    return (peso/altura**2).toFixed(2);
}
function getFaixaImc(imc){
    const faixa = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return faixa[5];  
    else if(imc >=34.9) return faixa[4];  
    else if(imc >=29.9) return faixa[3]; 
    else if(imc >=24.9) return faixa[2];
    else if(imc >=18.5) return faixa[1];
    else return faixa[0];
}