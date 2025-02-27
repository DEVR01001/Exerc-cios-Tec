let InputEscolha = document.getElementById("input_escolha");
let DivPergunta = document.getElementById("pergunta");
let btn_jogar = document.getElementById("btn_jogar");
let DivResultado = document.getElementById("resultado");

DivPergunta.innerHTML = `Controle de Senhas - Clínica Médica  <br> <br>
1. Gerar nova senha <br>

2. Chamar paciente para atendimento <br>

3. Exibir senhas pendentes <br>

4. Sair `;





btn_jogar.addEventListener("click", ()=>{
    let escolha = InputEscolha.value.trim();


    Escolha(escolha);





})

listaSenha = []
contador = 0;

function Escolha(escolha){

    switch(escolha){
        case '1':
            contador+=1;
            DivResultado.innerHTML =`Senha ${contador} gerada com sucesso! <br> `;
            listaSenha.push(contador);
        break;
        case '2':
            console.log(listaSenha)
            DivResultado.innerHTML=`Paciente com a senha ${listaSenha[0]} chamado para atendimento.`;
            listaSenha.shift();
            console.log(listaSenha)
        break;

        case '3':
            DivResultado.innerHTML="";

            for(senha of listaSenha){
                DivResultado.innerHTML+=`Senha ${senha} <br>`;
                console.log(senha);
            }
        break
        case '4':
            DivResultado.innerHTML=`Saindo do Sistema.`;
        break
  
            
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



textcodigo.innerHTML=`
let InputEscolha = document.getElementById("input_escolha");
let DivPergunta = document.getElementById("pergunta");
let btn_jogar = document.getElementById("btn_jogar");
let DivResultado = document.getElementById("resultado");

DivPergunta.innerHTML = Controle de Senhas - Clínica Médica  <br> <br>
1. Gerar nova senha <br>

2. Chamar paciente para atendimento <br>

3. Exibir senhas pendentes <br>

4. Sair ;





btn_jogar.addEventListener("click", ()=>{
    let escolha = InputEscolha.value.trim();


    Escolha(escolha);





})

listaSenha = []
contador = 0;

function Escolha(escolha){

    switch(escolha){
        case '1':
            contador+=1;
            DivResultado.innerHTML = Senha {contador} gerada com sucesso! <br> ;
            listaSenha.push(contador);
        break;
        case '2':
            console.log(listaSenha)
            DivResultado.innerHTML= Paciente com a senha {listaSenha[0]} chamado para atendimento.;
            listaSenha.shift();
            console.log(listaSenha)
        break;

        case '3':
            DivResultado.innerHTML="";

            for(senha of listaSenha){
                DivResultado.innerHTML+= Senha {senha} <br>;
                console.log(senha);
            }
        break
        case '4':
            DivResultado.innerHTML= Saindo do Sistema.;
        break
  
            
    }

}

`;