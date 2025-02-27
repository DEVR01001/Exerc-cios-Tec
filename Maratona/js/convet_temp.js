
let DivPergunta = document.getElementById("pergunta");
let input_tipo = document.getElementById("input_tipo");
let btn_tipo = document.getElementById("btn_tipo");
let DivResultado = document.getElementById("resultado");
let DivResultado2 = document.getElementById("resultado2");



DivPergunta.innerHTML = ` Conversor de Unidades <br> <br>
1. Temperatura (Celsius ↔ Fahrenheit) <br> 

2. Peso (Quilogramas ↔ Libras) <br> 

3. Distância (Metros ↔ Quilômetros) `;



btn_tipo.addEventListener("click", ()=>{

    let escolha = input_tipo.value.trim();

    Escolha(parseInt(escolha));

})


function Escolha(escolha){

    switch(escolha){
        case 1:
            let unidade = prompt("Escolha a unidade de origem (C para Celsius ou F para Fahrenheit): ")
            Temperatura(unidade);
            DivResultado.innerHTML = "Conversão de Temperatura <br>";

        break
        case 2:
            let unidade1= prompt("Escolha a unidade de origem (K para Quilogramas ou L para Libras): ")
            Peso(unidade1);
            DivResultado.innerHTML = "Conversão de Peso <br>";
            
        break
        case 3:
            let unidade2 = prompt("Escolha a unidade de origem (Q para uilômetros ou M para Metros): ")
            Distancia(unidade2);
            DivResultado.innerHTML = "Conversão de Distância <br>";
        break

    }

}


function Temperatura(unidade){

    

    if(unidade === "C"){
        console.log(unidade);
        let temp_a_conveter = prompt("Digite a temperatura em Celsius: ");
        console.log(temp_a_conveter);
        let calc = (parseFloat(temp_a_conveter) * 1.8) + 32
        console.log(`${temp_a_conveter}°C é igual ${calc}°F`);
        DivResultado2.innerHTML = `${temp_a_conveter}°C é igual ${calc}°F`;
    }else if (unidade === "F"){
        let temp_a_conveter = prompt("Digite a temperatura em Fahrenheit: ");
        let calc = (parseFloat(temp_a_conveter) - 32) * (5/9)
        console.log(`${temp_a_conveter}°F é igual ${calc}°C`);
        DivResultado2.innerHTML = `${temp_a_conveter}°F é igual ${calc}°C`;

    }


}
function Peso(unidade){

    if(unidade === "K"){
        let peso_a_conveter = prompt("Digite o peso em Quilogramas: ");
        let calc = parseFloat(peso_a_conveter) * 2.20462
        console.log(`${peso_a_conveter} kg é igual ${calc} lbs`);
        DivResultado2.innerHTML = `${peso_a_conveter} kg é igual ${calc} lbs`;
    }else if (unidade === "L"){
        let peso_a_conveter = prompt("Digite o peso em Libras: ");
        let calc = parseFloat(peso_a_conveter) / 2.20462
        console.log(`${peso_a_conveter} lbs é igual ${calc} kg`);
        DivResultado2.innerHTML = `${peso_a_conveter} lbs é igual ${calc} kg`;

    }

}
function Distancia(unidade){
    
    if(unidade === "Q"){
        let dis_a_conveter = prompt("Digite a distância em Quilogramas: ");
        let calc = parseFloat(dis_a_conveter) * 1000
        console.log(`${dis_a_conveter} km é igual ${calc} m`);
        DivResultado2.innerHTML = `${dis_a_conveter} km é igual ${calc} m`;
    }else if (unidade === "M"){
        let dis_a_conveter = prompt("Digite a distância em Metros: ");
        let calc = parseFloat(dis_a_conveter) / 1000
        DivResultado2.innerHTML = `${dis_a_conveter} m é igual ${calc} km`;
        console.log(`${dis_a_conveter} m é igual ${calc} km`);

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
let DivPergunta = document.getElementById("pergunta");
let input_tipo = document.getElementById("input_tipo");
let btn_tipo = document.getElementById("btn_tipo");
let DivResultado = document.getElementById("resultado");
let DivResultado2 = document.getElementById("resultado2");



DivPergunta.innerHTML = Conversor de Unidades <br> <br>
1. Temperatura (Celsius ↔ Fahrenheit) <br> 

2. Peso (Quilogramas ↔ Libras) <br> 

3. Distância (Metros ↔ Quilômetros) ;



btn_tipo.addEventListener("click", ()=>{

    let escolha = input_tipo.value.trim();

    Escolha(parseInt(escolha));

})


function Escolha(escolha){

    switch(escolha){
        case 1:
            let unidade = prompt("Escolha a unidade de origem (C para Celsius ou F para Fahrenheit): ")
            Temperatura(unidade);
            DivResultado.innerHTML = "Conversão de Temperatura <br>";

        break
        case 2:
            let unidade1= prompt("Escolha a unidade de origem (K para Quilogramas ou L para Libras): ")
            Peso(unidade1);
            DivResultado.innerHTML = "Conversão de Peso <br>";
            
        break
        case 3:
            let unidade2 = prompt("Escolha a unidade de origem (Q para uilômetros ou M para Metros): ")
            Distancia(unidade2);
            DivResultado.innerHTML = "Conversão de Distância <br>";
        break

    }

}


function Temperatura(unidade){

    

    if(unidade === "C"){
        console.log(unidade);
        let temp_a_conveter = prompt("Digite a temperatura em Celsius: ");
        console.log(temp_a_conveter);
        let calc = (parseFloat(temp_a_conveter) * 1.8) + 32
        console.log({temp_a_conveter}°C é igual {calc}°F);
        DivResultado2.innerHTML = {temp_a_conveter}°C é igual {calc}°F;
    }else if (unidade === "F"){
        let temp_a_conveter = prompt("Digite a temperatura em Fahrenheit: ");
        let calc = (parseFloat(temp_a_conveter) - 32) * (5/9)
        console.log({temp_a_conveter}°F é igual {calc}°C);
        DivResultado2.innerHTML = {temp_a_conveter}°F é igual {calc}°C;

    }


}
function Peso(unidade){

    if(unidade === "K"){
        let peso_a_conveter = prompt("Digite o peso em Quilogramas: ");
        let calc = parseFloat(peso_a_conveter) * 2.20462
        console.log({peso_a_conveter} kg é igual {calc} lbs);
        DivResultado2.innerHTML = {peso_a_conveter} kg é igual {calc} lbs;
    }else if (unidade === "L"){
        let peso_a_conveter = prompt("Digite o peso em Libras: ");
        let calc = parseFloat(peso_a_conveter) / 2.20462
        console.log({peso_a_conveter} lbs é igual {calc} kg);
        DivResultado2.innerHTML = {peso_a_conveter} lbs é igual {calc} kg;

    }

}
function Distancia(unidade){
    
    if(unidade === "Q"){
        let dis_a_conveter = prompt("Digite a distância em Quilogramas: ");
        let calc = parseFloat(dis_a_conveter) * 1000
        console.log({dis_a_conveter} km é igual {calc} m);
        DivResultado2.innerHTML = {dis_a_conveter} km é igual {calc} m;
    }else if (unidade === "M"){
        let dis_a_conveter = prompt("Digite a distância em Metros: ");
        let calc = parseFloat(dis_a_conveter) / 1000
        DivResultado2.innerHTML = {dis_a_conveter} m é igual {calc} km;
        console.log({dis_a_conveter} m é igual {calc} km);

    }

}

 `;