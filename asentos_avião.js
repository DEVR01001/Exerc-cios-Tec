
let InputFileira = document.getElementById("input_fileiras");
let InputCadeira = document.getElementById("input_cadeiras");
let DivPergunta =  document.getElementById("pergunta1");

let DivInput = document.getElementById("input_escolha")
let DivResultado = document.getElementById("resultado");

let btn_jogar = document.getElementById("btn_jogar");
let btn_jogar2 = document.getElementById("btn_jogar2");
let btn_escolha = document.getElementById("btn_escolha");
let textassento = document.getElementById("textassento");

DivPergunta.innerHTML=`1 - Reservar assento <br>
2 - Mostrar mapa de assentos <br>
3 - Sair <br>`;


dicLista ={};
lista = [];

btn_jogar.addEventListener("click", ()=>{
    // let N_fileira = prompt("Numeros de Fileiras...");
    // let N_cadeiras = prompt("Numeros de Fileiras...");
    let N_fileira = InputFileira.value.trim();
    let N_cadeiras = InputCadeira.value.trim();


    i=1;
    while (i < (N_fileira+1)){

        cont=0;
        while (cont < (N_cadeiras-(N_cadeiras/2))){
    
            lista.push("O");
    
            cont+=1;
    
        }
    
        dicLista[i] = lista;
    
        i+=1;
        
    }
    console.log(dicLista[1]);
        



})



btn_jogar2.addEventListener("click", ()=>{
    let escolha = DivInput.value.trim();
    Escolha(escolha);
        



})



function Escolha(escolha){


    switch(escolha){

        case "1":

            let Numfileira = prompt("Digite o número da fileira: ");
            let Numassento= prompt("Digite o número do assento: ");

            for (x in dicLista){
                DivResultado.innerHTML= x;
                if (parseInt(x) === Numfileira){
                    teste = dicLista[Numfileira];
                    for( c in teste){
                        // console.log(c)
                        if(c === Numassento){
                            result = lista[Numassento] = "X";
                            // console.log(result)
                        }
                    }
                
                }
            }

            DivResultado.innerHTML = `Asento ${Numfileira}-${Numassento} reservados com sucesso.`;
            break;





        case "2":


            console.log(dicLista);

            for (x in dicLista){
                teste = dicLista[x];
                textassento.value = teste;

                for(c in teste){
                    textassento.value = teste[c]
                }

                '<br>';
               

            }

        break;
            


        case "3":
            textassento.innerHTML= "Saindo do Programa.";
            break;


    }

}




