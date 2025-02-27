

const BtnTeste = document.querySelectorAll("#btn_teste")
const BtnCodigo = document.querySelectorAll("#btn_codigo")
const Form = document.getElementById("form")
const codigo = document.getElementById("codigo")
const textcodigo = document.getElementById("textcodigo")
  


BtnTeste.forEach(btnteste => {
    btnteste.addEventListener("click", ()=>{
        Form.classList.toggle('active');

    })

    
});



BtnCodigo.forEach(btncodigo => {
    btncodigo.addEventListener("click", ()=>{
        codigo.classList.toggle('active2');

    })

    
});
