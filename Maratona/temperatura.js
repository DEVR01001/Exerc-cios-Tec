let btn_jogar =document.getElementById("btn_jogar");
let input_temp =document.getElementById("input_temp");
const DivPergunta = document.getElementById("pergunta");
const DivResultado = document.getElementById("resultado");
const DivResultado2 = document.getElementById("resultado2");

let templista = [];
let tempObj = {};
let dadosLista = [];

btn_jogar.addEventListener("click", ()=>{
    let numtemp = parseFloat(input_temp.value.trim());

    let cont2=1;
    for(let i =0; i< (numtemp);i++){
        let temp = prompt(`Digite a temperatura: ${cont2}`);
        tempObj[i + 1] = temp; 
        templista.push(parseFloat(temp));
        cont2+=1;
        
    }

    let limiteTemp = prompt("Digite o limite crítico de temperatura: ");
    alert("Temperaturas estabelecidas");


    let maiorItem = Math.max(...templista)
    maiorItem = `Maior temperatura: ${maiorItem}`; 
    dadosLista.push(maiorItem);

    let menorItem = `Menor temperatura: ${Math.min(...templista)}`; 
    dadosLista.push(menorItem);

    let sum = 0;



    for(item of templista){

        sum+=item;
    }



    let mediaItem = `Média das temperaturas: ${sum/numtemp}`; 
    dadosLista.push(mediaItem);


    for(i in dadosLista){
        DivResultado.innerHTML+= `${dadosLista[i]} <br>`;
    }

    for (let [key, value] of Object.entries(tempObj)) {
        console.log(`Chave = ${key}  Valor = ${value}`);

        if(value > limiteTemp){
            console.log(`Chave = ${key} - Valor ${value}`);
            DivResultado2.innerHTML+= `Alerta! Temperatura ${key} ultrapassou o limite crítico! <br>`;
        }

    
    }

    


    

})


