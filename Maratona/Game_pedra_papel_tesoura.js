

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function Jogo(nome,jogada){

    jogadalista =["Papel","Pedra","Tesoura"];


    aleatorio = getRandomIntInclusive(0,2)


    maquina = jogadalista[aleatorio];



    if (maquina === jogada){
        const resultado = `Computador escolheu: ${maquina}  = Empate`
        return resultado;

    }else{
        if (maquina === "Papel" && jogada ==="Pedra"){
            const resultado = `Computador escolheu: ${maquina} = Computador venceu!`
            return resultado;

        }else if(maquina === "Pedra" && jogada ==="Tesoura"){
            const resultado = `Computador escolheu: ${maquina}  = Computador venceu!`
            return resultado;
        

        }else if(maquina === "Tesoura" && jogada ==="Papel"){
            const resultado = `Computador escolheu: ${maquina} = Computador venceu!`
            return resultado;


        }else if(maquina === "Pedra" && jogada ==="Papel"){
            const resultado = `Computador escolheu: ${maquina} = ${nome} venceu!`
            return resultado;


        }else if(maquina === "Tesoura" && jogada ==="Pedra"){
            const resultado = `Computador escolheu: ${maquina} = ${nome} venceu!`
            return resultado;


        }else if(maquina === "Papel" && jogada ==="Tesoura"){
            const resultado = `Computador escolheu: ${maquina} = ${nome} venceu!`
            return resultado;
        


        }

    }


}
    


let Inputnome = document.getElementById("input_nome");
let Inputjogada = document.getElementById("input_jogada");
let btn_jogar = document.getElementById("btn_jogar");
let conteudo_result= document.getElementById("conteudo_result");
let escolha= document.getElementById("escolha");

btn_jogar.addEventListener("click", ()=>{
    nome = Inputnome.value;
    jogada =Inputjogada.value


    result = Jogo(nome,jogada);
    escolha.textContent = `${nome} escolheu: ${jogada}`
    conteudo_result.innerHTML = result

    

})


const BtnTeste = document.querySelectorAll(".btn_teste")
const BtnCodigo = document.querySelectorAll(".btn_codigo")
const Form = document.getElementById("form")
const codigo = document.getElementById("codigo")
const textcodigo = document.getElementById("textcodigo")
  

BtnTeste.forEach(btnteste => {
    btnteste.addEventListener("click", ()=>{
        Form.classList.toggle('active');

    })

    
});


BtnCodigo.forEach(btncodigo => {
    btncodigo.addEventListener("click", ()=>{
        codigo.classList.toggle('active2');

    })

    
});



    textcodigo.innerHTML=`
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
function Jogo(nome,jogada){

    jogadalista =["Papel","Pedra","Tesoura"];


    aleatorio = getRandomIntInclusive(0,2)


    maquina = jogadalista[aleatorio];



    if (maquina === jogada){
        const resultado = Computador escolheu: {maquina}  = Empate
        return resultado;

    }else{
        if (maquina === "Papel" && jogada ==="Pedra"){
            const resultado = Computador escolheu: {maquina} = Computador venceu!
            return resultado;

        }else if(maquina === "Pedra" && jogada ==="Tesoura"){
            const resultado = Computador escolheu: {maquina}  = Computador venceu!
            return resultado;
        

        }else if(maquina === "Tesoura" && jogada ==="Papel"){
            const resultado = Computador escolheu: {maquina} = Computador venceu!
            return resultado;


        }else if(maquina === "Pedra" && jogada ==="Papel"){
            const resultado = Computador escolheu: {maquina} = {nome} venceu
            return resultado;


        }else if(maquina === "Tesoura" && jogada ==="Padra"){
            const resultado = Computador escolheu: {maquina} = {nome} venceu!
            return resultado;


        }else if(maquina === "Papel" && jogada ==="Tesoura"){
            const resultado = Computador escolheu: {maquina} = {nome} venceu!
            return resultado;
        


        }

    }


}

let Inputnome = document.getElementById("input_nome");
let Inputjogada = document.getElementById("input_jogada");
let btn_jogar = document.getElementById("btn_jogar");
let conteudo_result= document.getElementById("conteudo_result");
let escolha= document.getElementById("escolha");

btn_jogar.addEventListener("click", ()=>{
    nome = Inputnome.value;
    jogada =Inputjogada.value


    result = Jogo(nome,jogada);
    escolha.textContent = {nome} escolheu: {jogada}
    conteudo_result.innerHTML = result

    

})


const BtnTeste = document.getElementById("btn_teste")
const BtnCodigo = document.getElementById("btn_codigo")
const Form = document.getElementById("form")
const codigo = document.getElementById("codigo")
const textcodigo = document.getElementById("textcodigo")



BtnTeste.addEventListener("click", () =>{
    Form.classList.toggle('active');

    

})
    
    `



    

