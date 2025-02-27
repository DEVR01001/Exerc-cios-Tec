let DivPergunta = document.getElementById("pergunta");
let InputEscolha = document.getElementById("input_escolha");
let btn_jogar = document.getElementById("btn_jogar");
let DivResultado = document.getElementById("resultado");
let DivResultado2 = document.getElementById("resultado2");



DivPergunta.innerHTML = `1 - Registrar novo chamado<br>

2 - Listar chamados<br>

3 - Resolver chamado<br>

4 - Sair `;


btn_jogar.addEventListener("click", ()=>{
    let escolha = InputEscolha.value.trim();

    Escolha(escolha);



})

let problemasObj = {};

contador =0;
function Escolha(escolha){


    switch(escolha){
        case "1":
            let problema = prompt("Descreva o problema: ");
            contador+=1;
            // result = problemasObj[problema] = "Aberto";
            problemasObj[contador] = new Array (problema,"Aberto");
            DivResultado.innerHTML=`Chamado registrado com sucesso! ID: ${contador} `;
        break;
        case "2":
            DivResultado.innerHTML= "Chamados registrados: ";
            DivResultado2.innerHTML = " ";
            console.log(problemasObj);
            for([key,value] of Object.entries(problemasObj)){
                console.log(`Kei ${key} e Value ${value}`);
                DivResultado2.innerHTML +=`ID: ${key} | Problema: ${value[0]}| Status: ${value[1]} <br>`
            }

            console.log(problemasObj);

        break;
        case "3":
            let idChamdo = prompt("Digite o ID do chamado que deseja resolver: ");

            for([key,value] of Object.entries(problemasObj)){

                console.log(`Chave = ${key} e Valor = ${value}`);
                if(key === idChamdo){
                    console.log(idChamdo);

                    key[idChamdo] = value[1] ="Resolvido";
                    console.log(`Chave = ${key} e Valor = ${value}`);
                }
            }
            DivResultado2.innerHTML="";
            DivResultado.innerHTML=`Chamado ${idChamdo} foi resolvido! `;
        break;

        case "4":
            DivResultado.innerHTML="Saindo do sistema.";
        break;
            


    }

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



textcodigo.innerHTML=`let DivPergunta = document.getElementById("pergunta");
let InputEscolha = document.getElementById("input_escolha");
let btn_jogar = document.getElementById("btn_jogar");
let DivResultado = document.getElementById("resultado");
let DivResultado2 = document.getElementById("resultado2");



DivPergunta.innerHTML = 1 - Registrar novo chamado<br>

2 - Listar chamados<br>

3 - Resolver chamado<br>

4 - Sair ;


btn_jogar.addEventListener("click", ()=>{
    let escolha = InputEscolha.value.trim();

    Escolha(escolha);



})

let problemasObj = {};

contador =0;
function Escolha(escolha){


    switch(escolha){
        case "1":
            let problema = prompt("Descreva o problema: ");
            contador+=1;
            // result = problemasObj[problema] = "Aberto";
            problemasObj[contador] = new Array (problema,"Aberto");
            DivResultado.innerHTML=Chamado registrado com sucesso! ID: {contador} ;
        break;
        case "2":
            DivResultado.innerHTML= "Chamados registrados: ";
            DivResultado2.innerHTML = " ";
            console.log(problemasObj);
            for([key,value] of Object.entries(problemasObj)){
                console.log(Kei {key} e Value {value});
                DivResultado2.innerHTML +=ID: {key} | Problema: {value[0]}| Status: {value[1]} <br>
            }

            console.log(problemasObj);

        break;
        case "3":
            let idChamdo = prompt("Digite o ID do chamado que deseja resolver: ");

            for([key,value] of Object.entries(problemasObj)){

                console.log(Chave = {key} e Valor = {value});
                if(key === idChamdo){
                    console.log(idChamdo);

                    key[idChamdo] = value[1] ="Resolvido";
                    console.log(Chave = {key} e Valor = {value});
                }
            }
            DivResultado2.innerHTML="";
            DivResultado.innerHTML=Chamado {idChamdo} foi resolvido! ;
        break;

        case "4":
            DivResultado.innerHTML="Saindo do sistema.";
        break;
            


    }

}



`;