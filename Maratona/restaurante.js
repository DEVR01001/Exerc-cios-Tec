let DivPergunta = document.getElementById("pergunta");
let btn_pedir = document.getElementById("btn_jogar");
let btn_sair = document.getElementById("btn_sair");
let input_pedido = document.getElementById("input_pedido");
let DivResultado = document.getElementById("resultado");
let DivResultado2 = document.getElementById("resultado2");
let DivResultado3 = document.getElementById("resultado3");

DivPergunta.innerHTML = ` Menu do Restaurante <br><br>
Prato 1: R$15,00 <br>
Prato 2: R$20,00 <br>
Prato 3: R$10,00 <br>
Prato 4: R$25,00 <br>
Prato 5: R$30,00 <br>`;



let pedidoObj = {};

btn_pedir.addEventListener("click", ()=>{
    

    let escolha = input_pedido.value.trim();


    result = Escolha(escolha);

})


btn_sair.addEventListener("click", ()=>{

    DivResultado2.innerHTML = "Seu pedido: <br>";
    DivResultado.innerHTML = "";

        let total = 0;

        for (let [key, value] of Object.entries(pedidoObj)) {
            console.log(`Chave = ${key}  Valor = ${value}`);
            DivResultado.innerHTML += `${key} <br>`;


            total+= value;
        }


        if(total > 50){
            DivResultado3.innerHTML = `Total da Conta: R$ ${total} <br>
            Você recebeu um desconto de 10%. <br>
            Total com desconto: R$${total-(total*(10/100))}
            `;
        }else{
            DivResultado3.innerHTML = `Total da Conta: R$ ${total}`;
        }


})


function Escolha(escolha){
    
    switch(escolha){
        case "sair":
            return false;
        case "Prato 1":
            pedidoObj["Prato 1"] = 15.00;
            DivResultado.innerHTML ="Você adicionou Prato 1 ao seu pedido. ";
        break;
        case "Prato 2":
            pedidoObj["Prato 2"] = 20.00;
            DivResultado.innerHTML ="Você adicionou Prato 2 ao seu pedido. ";
        break;
        case "Prato 3":
            pedidoObj["Prato 3"] = 10.00;
            DivResultado.innerHTML ="Você adicionou Prato 3 ao seu pedido. ";
        break;
        case "Prato 4":
            pedidoObj["Prato 4"] = 25.00;
            DivResultado.innerHTML ="Você adicionou Prato 4 ao seu pedido. ";
        break;
        case "Prato 5":
            pedidoObj["Prato 5"] = 30.00;
            DivResultado.innerHTML ="Você adicionou Prato 5 ao seu pedido. ";
        break;

        
    }

}
