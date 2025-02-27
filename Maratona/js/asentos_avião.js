let InputFileira = document.getElementById("input_fileiras");


let InputCadeira = document.getElementById("input_cadeiras");
let DivPergunta = document.getElementById("pergunta");


let DivInput = document.getElementById("input_escolha");
let DivResultado = document.getElementById("resultado");


let btn_jogar = document.getElementById("btn_jogar");
let btn_jogar2 = document.getElementById("btn_jogar2");
let textassento = document.getElementById("textassento");



DivPergunta.innerHTML = `1 - Reservar assento <br>
2 - Mostrar mapa de assentos <br>
3 - Sair <br>`;



let dicLista = {};

btn_jogar.addEventListener("click", () => {
    let N_fileira = parseInt(InputFileira.value.trim());

    let N_cadeiras = parseInt(InputCadeira.value.trim());

    dicLista = {}; 

    for (let i = 1; i <= N_fileira; i++) {
        dicLista[i] = new Array(N_cadeiras).fill("O");

    }

    console.log(dicLista);
    alert("Mapa de assentos criado com sucesso!");

});

btn_jogar2.addEventListener("click", () => {
    let escolha = DivInput.value.trim();
    Escolha(escolha);
});

function Escolha(escolha) {
    switch (escolha) {
        case "1":
            let Numfileira = parseInt(prompt("Digite o número da fileira: "));

            let Numassento = parseInt(prompt("Digite o número do assento: "));

            if (dicLista[Numfileira] && dicLista[Numfileira][Numassento - 1] === "O") {
                dicLista[Numfileira][Numassento - 1] = "X";
                
                DivResultado.innerHTML = `Assento ${Numfileira}-${Numassento} reservado com sucesso.`;
            } else {
                alert("Assento inválido ou já reservado!");
            }
            break;

        case "2":
            let mapa = "Mapa de Assentos:\n";

            for (let x in dicLista) {
                mapa += `Fileira ${x}: ${dicLista[x].join(" ")}\n`;

            }
            textassento.value = mapa;
            break;

        case "3":
            textassento.value = "Saindo do Programa.";

            break;

        default:
            alert("Opção inválida. Escolha 1, 2 ou 3.");
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



textcodigo.innerHTML=` let InputFileira = document.getElementById("input_fileiras");


let InputCadeira = document.getElementById("input_cadeiras");
let DivPergunta = document.getElementById("pergunta1");


let DivInput = document.getElementById("input_escolha");
let DivResultado = document.getElementById("resultado");


let btn_jogar = document.getElementById("btn_jogar");
let btn_jogar2 = document.getElementById("btn_jogar2");
let textassento = document.getElementById("textassento");



DivPergunta.innerHTML = 1 - Reservar assento <br>
2 - Mostrar mapa de assentos <br>
3 - Sair <br>;

let dicLista = {};

btn_jogar.addEventListener("click", () => {
    let N_fileira = parseInt(InputFileira.value.trim());

    let N_cadeiras = parseInt(InputCadeira.value.trim());

    dicLista = {}; 

    for (let i = 1; i <= N_fileira; i++) {
        dicLista[i] = new Array(N_cadeiras).fill("O");

    }

    console.log(dicLista);
    alert("Mapa de assentos criado com sucesso!");

});

btn_jogar2.addEventListener("click", () => {
    let escolha = DivInput.value.trim();
    Escolha(escolha);
});

function Escolha(escolha) {
    switch (escolha) {
        case "1":
            let Numfileira = parseInt(prompt("Digite o número da fileira: "));

            let Numassento = parseInt(prompt("Digite o número do assento: "));

            if (dicLista[Numfileira] && dicLista[Numfileira][Numassento - 1] === "O") {
                dicLista[Numfileira][Numassento - 1] = "X";
                
                DivResultado.innerHTML = Assento {Numfileira} - {Numassento} reservado com sucesso.;
            } else {
                alert("Assento inválido ou já reservado!");
            }
            break;

        case "2":
            let mapa = "Mapa de Assentos:\n";

            for (let x in dicLista) {
                mapa += Fileira {x}: {dicLista[x].join(" ")}\n;

            }
            textassento.value = mapa;
            break;

        case "3":
            textassento.value = "Saindo do Programa.";

            break;

        default:
            alert("Opção inválida. Escolha 1, 2 ou 3.");
            break;
    }
}


`;