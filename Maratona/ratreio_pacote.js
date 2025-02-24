


// ================================================================================================

let DivPergunta = document.getElementById("pergunta")

let DivInput = document.getElementById("input_escolha")

let DivResultado = document.getElementById("resultado")

let btn_jogar = document.getElementById("btn_jogar");

let DivInputResult = document.getElementById("inputteste");
let DivBtnInput = document.getElementById("btn_input");



DivPergunta.innerHTML =`1 - Adicionar Pacote <br>
    2 - Atualizar Status do Pacote <br>
    3 - Rastrear Pacote <br>
    4 - Sair <br>`





btn_jogar.addEventListener("click", ()=>{
    teste = DivInput.value
    // DivResultado.innerHTML=teste

    Escolha(teste)
 

})



function Escolha(escolha){

    let pacotes= {}

    // DivResultado.innerHTML= escolha

    if(escolha === '1'){
        DivInputResult.innerHTML="<input id='input_teste' type='number' placeholder='Digite o número de rastreiamento:  '> "
        DivBtnInput.innerHTML = "<button type='button'> Adicionar </button>"

        DivBtnInput.addEventListener("click", ()=>{
            let DiviEscolha = document.getElementById("input_teste").value;
            numero_ratreio =  DiviEscolha;
            result = pacotes[`${numero_ratreio}`] = "";
            DivResultado.innerHTML="Pacote adicionado com sucesso"


        })
       


    }else if(escolha === '2'){
        DivInputResult.innerHTML="<input id='input_teste' type='number' placeholder='Digite o número de rastreiamento:  '> "
        DivBtnInput.innerHTML = "<button type='button'> Adicionar </button>"
        DivBtnInput.addEventListener("click", ()=>{
            numero_ratreio = document.getElementById("input_teste").value;
            for(let [key] of Object.keys(pacotes)){
                if (numero_ratreio === key){
                    novoStatus = DivInput.innerHTML = "<input id='input_teste' type='text' placeholder='Digite o novo Status:  '> "
                    DivBtnInput.innerHTML = "<button type='button'> Adicionar </button>"
                    .DivBtnInput.addEventListener("click", ()=>{
                        
                    })

                    pacotes[`${numero_ratreio}`] = novoStatus
                    result = "Status atualizado com sucesso."
                    DivResultado.innerHTML= result
    
                }else{
                    result = "Pacote não exite."
                   DivResultado.innerHTML= result
    
                }
            }

        })
        
    }else if (escolha === '3'){
        numero_ratreio = DivInput.innerHTML = ` <input id="input_escolha" type="text" placeholder="Digite o número de rastreiamento:  "> `
        statusPacote = pacotes[`${numero_ratreio}`]
        result = `Status do Pacote: ${statusPacote}`
       DivResultado.innerHTML= result

    }else if (escolha === '4'){
        result = `Saindo do Programa.`
        DivResultado.innerHTML= result

    }
    
    

}







DivResultado.innerHTML = pacotes