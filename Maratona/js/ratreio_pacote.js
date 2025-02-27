
let DivPergunta = document.getElementById("pergunta");

let DivInput = document.getElementById("input_escolha")

let DivResultado = document.getElementById("resultado");

let btn_jogar = document.getElementById("btn_jogar");

let DivInputResult = document.getElementById("inputteste");
let DivBtnInput = document.getElementById("btn_input");



DivPergunta.innerHTML =`1 - Adicionar Pacote <br>
    2 - Atualizar Status do Pacote <br>
    3 - Rastrear Pacote <br>
    4 - Sair <br>`;


btn_jogar.addEventListener("click", ()=>{
    teste = DivInput.value.trim();
    // DivResultado.innerHTML=teste

    Escolha(teste);


})



let pacotes= {};

function Escolha(escolha){
    // let pacotes= {};
    
    let cont =0; 
    let escolhas = escolha

    switch(escolhas){
        
        case "1":
            numero_ratreio = prompt("Digite o numero de rastreio: ");
            result = pacotes[numero_ratreio] = "Status Padrão";
            DivResultado.innerHTML="Pacote adicionado com sucesso";
            break;
        case "2":
            numero_ratreio = prompt("Digite o numero de rastreio: ");
            if (numero_ratreio in pacotes){
                novostatus = prompt("Digite o novo status: ");
                    pacotes[numero_ratreio] = novostatus;
                    result = "Status atualizado com sucesso.";
                    DivResultado.innerHTML= result;
                    
            }else{
                result = "2 - Pacote não Econtrado.";
                DivResultado.innerHTML= result;

            }
                
            break;
        case "3":
            numero_ratreio = prompt("Digite o numero de rastreio: ");
            if( numero_ratreio in pacotes){
                DivResultado.innerHTML =`Status do pacote: ${pacotes[numero_ratreio]}`;

            }else{
                DivResultado.innerHTML="3 - Pacote não Econtrado ";

            }

            break;
        case "4":
            result = `Saindo do Programa.`;
            DivResultado.innerHTML= result;
            break;



        

    }
    
           
    
}   






// const BtnTeste = document.querySelectorAll(".btn_teste")
// const BtnCodigo = document.querySelectorAll(".btn_codigo")
// const Form = document.getElementById("form")
// const codigo = document.getElementById("codigo")
// const textcodigo = document.getElementById("textcodigo")
  


// BtnTeste.forEach(btnteste => {
//     btnteste.addEventListener("click", (btnteste)=>{
//         Form.classList.toggle('active');

//     })

    
// });



// BtnCodigo.forEach(btncodigo => {
//     btncodigo.addEventListener("click", ()=>{
//         codigo.classList.toggle('active2');

//     })

    
// });



textcodigo.innerHTML=` let DivPergunta = document.getElementById("pergunta");

let DivInput = document.getElementById("input_escolha")

let DivResultado = document.getElementById("resultado");

let btn_jogar = document.getElementById("btn_jogar");

let DivInputResult = document.getElementById("inputteste");
let DivBtnInput = document.getElementById("btn_input");



DivPergunta.innerHTML =1 - Adicionar Pacote <br>
    2 - Atualizar Status do Pacote <br>
    3 - Rastrear Pacote <br>
    4 - Sair <br>;


btn_jogar.addEventListener("click", ()=>{
    teste = DivInput.value.trim();
    // DivResultado.innerHTML=teste

    Escolha(teste);


})



let pacotes= {};

function Escolha(escolha){
    // let pacotes= {};
    
    let cont =0; 
    let escolhas = escolha

    switch(escolhas){
        
        case "1":
            numero_ratreio = prompt("Digite o numero de rastreio: ");
            result = pacotes[numero_ratreio] = "Status Padrão";
            DivResultado.innerHTML="Pacote adicionado com sucesso";
            break;
        case "2":
            numero_ratreio = prompt("Digite o numero de rastreio: ");
            if (numero_ratreio in pacotes){
                novostatus = prompt("Digite o novo status: ");
                    pacotes[numero_ratreio] = novostatus;
                    result = "Status atualizado com sucesso.";
                    DivResultado.innerHTML= result;
                    
            }else{
                result = "2 - Pacote não Econtrado.";
                DivResultado.innerHTML= result;

            }
                
            break;
        case "3":
            numero_ratreio = prompt("Digite o numero de rastreio: ");
            if( numero_ratreio in pacotes){
                DivResultado.innerHTML =Status do pacote: {pacotes[numero_ratreio]};

            }else{
                DivResultado.innerHTML="3 - Pacote não Econtrado ";

            }

            break;
        case "4":
            result = Saindo do Programa.;
            DivResultado.innerHTML= result;
            break;



        

    }
    
           
    
}   




`;