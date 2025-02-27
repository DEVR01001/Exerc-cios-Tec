<?php


include "navbar.php";
?>


    <h6>Exercicio 10 - Roleta do Tigrinho</h6>
    <button id="btn_teste" class="teste btn_teste">Teste</button>
    <form id="form" class="resultado">
        <div id="pergunta" class="pergunta">
        </div>
        <input id="input_escolha" type="text" placeholder="Digite o número da área em que deseja apostar (1-6):  ">
        <button type="button" id="btn_jogar">Jogar</button>
        <div id="resultado" class="pergunta"> </div>
        
    </form>


    <button id ="btn_codigo" class="teste btn_codigo">Código</button>
    <div id="codigo" class="codigo">
        <textarea name="" id="textcodigo" cols="30" rows="10"></textarea>
    </div>




   <script src="../js/tigrinho.js"></script>
</body>
</html>