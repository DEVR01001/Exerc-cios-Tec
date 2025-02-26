

let btn_jogar =document.getElementById("btn_jogar");
let btn_escolher =document.getElementById("btn_jogar2");
let input_taxi =document.getElementById("input_taxi");
let input_escolha =document.getElementById("input_escolha");
const DivPergunta = document.getElementById("pergunta");
const DivResultado = document.getElementById("resultado");

DivPergunta.innerHTML = `1 - Solicitar Táxi<br>
2 - Mostrar Status dos Táxis <br>
3 - Sair <br>`;


let DicTaxi = {};



btn_jogar.addEventListener("click", ()=>{
    let numtaxi = parseInt(input_taxi.value.trim());


    let N_taxi= numtaxi;


    for (let i = 0; i < N_taxi; i++) {
        let locTaxi = prompt(`Digite a localização inicial do Táxi ${i + 1}:`);
        DicTaxi[i + 1] = locTaxi; 
    }

    alert("Taxis atualizados.");

})


function Taxi(Num){

    let N_taxi= Num;

    for (let i; i < N_taxi; i++){
        locTaxi = prompt(`Digite a localização inicial do Táxi ${i}`);

        DicTaxi[i] = locTaxi;
    }

    alert("Taxis atualizados.");

}



btn_escolher.addEventListener("click", ()=>{
    let escolha = input_escolha.value.trim();

    Escolha(escolha);
})




function Escolha(escolha){


    switch(escolha){
        case "1":
            let localizacao = parseFloat(prompt("Digite sua localização: "));
            
            const [chaveMaisProxima, valorMaisProximo] = Object.entries(DicTaxi)
                .reduce((a, b) => 
                    Math.abs(b[1] - localizacao) < Math.abs(a[1] - localizacao) ? b : a
                ); 
            
        
            DivResultado.innerHTML = `Táxi ${chaveMaisProxima} aceitou sua corrida e está a caminho! <br> Táxi ${chaveMaisProxima} chegou ao destino e sua nova localização é ${localizacao}.`;

        break;
    
        case "2":
      
            DivResultado.innerHTML = "Status dos Táxis:<br>";
            for(let chave in DicTaxi){
                DivResultado.innerHTML += `Táxi ${chave}: Localização ${DicTaxi[chave]}<br>`;
            }
            break;
    
        case "3":
            DivResultado.innerHTML = "Saindo do Sistema";
            break;
    }
    



} 