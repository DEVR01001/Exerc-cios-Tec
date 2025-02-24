
const BtnTeste = document.getElementById("btn_teste")


let DivPergunta = document.getElementById("pergunta")



BtnTeste.addEventListener("click", () =>{
    Form.classList.toggle('active');

    

})


    
let pacotes= {}
let i =0

while (True){
    DivPergunta.innerHTML =`1 - Adicionar Pacote <br>
    2 - Atualizar Status do Pacote <br>
    3 - Rastrear Pacote <br>
    4 - Sair <br>`
    // console.log(`1 - Adicionar Pacote
    //              2 - Atualizar Status do Pacote
    //              3 - Rastrear Pacote
    //              4 - Sair`)
    escolha = "<input type='number' placeholder ='Escolha uma opção: '>"

    switch(escolha){
        case "1":
            numero_ratreio = 234
            pacotes[`${numero_ratreio}`] = ""
            console.log("Pacote adicionado ")

        case "2":
            numero_ratreio = 234
            for(let [key] of Object.keys(pacotes)){
                if (numero_ratreio === key){
                    novoStatus ="Enviado"
                    pacotes[`${numero_ratreio}`] = novoStatus
                    console.log("Status atualizado com sucesso.")

                }else{
                    console.log("Pacote não exite.")

                }
            }

        case "3":
            numero_ratreio = 234
            statusPacote = pacotes[`${numero_ratreio}`]
            console.log(`Status dos pacote: ${statusPacote}`)

        case "4":
            console.log(`Saindo do Programa.`)
            break

    i+=1





    } 
}


