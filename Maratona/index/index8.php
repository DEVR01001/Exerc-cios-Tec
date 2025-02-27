<?php


include "navbar.php";
?>
    <h6>Exercicio 8 - O conversor de unidades</h6>
    <button id="btn_teste" class="teste btn_teste">Teste</button>
    <form id="form" class="resultado">
        <div id="pergunta" class="pergunta">
        </div>
        <input id="input_tipo" type="text" placeholder="Escolha o tipo de conversão que deseja realizar:  ">
        <button type="button" id="btn_tipo">Definir</button>
        <div id="resultado" class="pergunta"> </div>
        <div id="resultado2" class="pergunta"> </div>
        
    </form>


    <button id ="btn_codigo" class="teste btn_codigo">Código</button>
    <div id="codigo" class="codigo">
        <textarea name="" id="textcodigo" cols="30" rows="10"></textarea>
    </div>




    <script src="../js/convet_temp.js"></script>
</body>
</html>