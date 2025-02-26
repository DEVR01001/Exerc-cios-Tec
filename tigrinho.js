
let DivPergunta = document.getElementById("pergunta");
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


let premio = [100,500,1000,10,100000,50000];


btn_jogar.addEventListener("click", ()=>{

    let escolha = input_escolha.value.trim();

    Tigrinho(escolha);


})



function Tigrinho(escolha){

    let Numsort = getRandomIntInclusive(0,5);
    console.log(Numsort);

    i=1

    if(Numsort === escolha){
        console.log("Ganhou");
        console.log(premio[Numsort]);
    }else{
        console.log("Perdeu");
        console.log(premio[Numsort]);

    }

    


}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }