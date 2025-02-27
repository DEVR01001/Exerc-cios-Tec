
let DivPergunta = document.getElementById("pergunta");
let DivResultado= document.getElementById("resultado");
let btn_jogar = document.getElementById("btn_jogar");
let input_escolha = document.getElementById("input_escolha");

DivPergunta.innerHTML = `Simulador de Roleta do Tigrinho <br><br>

Escolha uma das áreas para apostar: <br><br>

1. Área 1 - Prêmio: R$ 100 <br>

2. Área 2 - Prêmio: R$ 500 <br>

3. Área 3 - Prêmio: R$ 1000 <br>

4. Área 4 - Prêmio: R$ 10 <br>

5. Área 5 - Prêmio: R$ 100000 <br>

6. Área 6 - Prêmio: R$ 50000 `;


let premio = {1: 100, 2: 500,3: 1000,4: 10, 5:100000, 6:50000};


btn_jogar.addEventListener("click", ()=>{

    let escolha = input_escolha.value.trim();

  

    Tigrinho(escolha);


})



function Tigrinho(escolha){

    let Numsort = getRandomIntInclusive(1,6);
    // console.log(Numsort);

    i=1

    console.log(escolha);
    console.log(Numsort);

    if(Numsort === parseInt(escolha)){
        DivResultado.innerHTML =`A roleta girou... e caiu na Área ${Numsort} - Prêmio: R$ ${premio[Numsort]} <br>
        Parabéns! Você ganhou o prêmio! `;
        console.log("Ganhou");
        // console.log(premio[Numsort]);
    }else{
        DivResultado.innerHTML =`A roleta girou... e caiu na Área ${Numsort} - Prêmio: R$ ${premio[Numsort]} <br>
        Que pena, você não ganhou dessa vez. `;
        console.log("Perdeu");
        // console.log(premio[Numsort]);
        
        
        if(jogarNovamento === "n"){
            DivResultado.innerHTML ="Obrigado por jogar! Até a próxima."
            
        }else if("s"){
            DivResultado.innerHTML=" ";
        }

    }

    


}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }









  
// const BtnTeste = document.querySelectorAll(".btn_teste")
// const BtnCodigo = document.querySelectorAll(".btn_codigo")
// const Form = document.getElementById("form")
// const codigo = document.getElementById("codigo")
// const textcodigo = document.getElementById("textcodigo")
  

// BtnTeste.forEach(btnteste => {
//     btnteste.addEventListener("click", ()=>{
//         Form.classList.toggle('active');

//     })

    
// });


// BtnCodigo.forEach(btncodigo => {
//     btncodigo.addEventListener("click", ()=>{
//         codigo.classList.toggle('active2');

//     })

    
// });



textcodigo.innerHTML=`
let DivPergunta = document.getElementById("pergunta");
let DivResultado= document.getElementById("resultado");
let btn_jogar = document.getElementById("btn_jogar");
let input_escolha = document.getElementById("input_escolha");

DivPergunta.innerHTML = Simulador de Roleta do Tigrinho <br><br>

Escolha uma das áreas para apostar: <br><br>

1. Área 1 - Prêmio: R$ 100 <br>

2. Área 2 - Prêmio: R$ 500 <br>

3. Área 3 - Prêmio: R$ 1000 <br>

4. Área 4 - Prêmio: R$ 10 <br>

5. Área 5 - Prêmio: R$ 100000 <br>

6. Área 6 - Prêmio: R$ 50000 ;


let premio = {1: 100, 2: 500,3: 1000,4: 10, 5:100000, 6:50000};


btn_jogar.addEventListener("click", ()=>{

    let escolha = input_escolha.value.trim();

  

    Tigrinho(escolha);


})



function Tigrinho(escolha){

    let Numsort = getRandomIntInclusive(1,6);
    // console.log(Numsort);

    i=1

    console.log(escolha);
    console.log(Numsort);

    if(Numsort === parseInt(escolha)){
        DivResultado.innerHTML =A roleta girou... e caiu na Área {Numsort} - Prêmio: R$ {premio[Numsort]} <br>
        Parabéns! Você ganhou o prêmio! ;
        console.log("Ganhou");
        // console.log(premio[Numsort]);
    }else{
        DivResultado.innerHTML =A roleta girou... e caiu na Área {Numsort} - Prêmio: R$ {premio[Numsort]} <br>
        Que pena, você não ganhou dessa vez. ;
        console.log("Perdeu");
        // console.log(premio[Numsort]);
        
        
        if(jogarNovamento === "n"){
            DivResultado.innerHTML ="Obrigado por jogar! Até a próxima."
            
        }else if("s"){
            DivResultado.innerHTML=" ";
        }

    }

    


}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }






`;