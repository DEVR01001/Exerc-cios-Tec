<?php


include "navbar.php";
?>
    <h6>Exercicio 4 - Gerenciador de Chamadas de Táxi</h6>
    <button id="btn_teste" class="teste btn_teste">Teste</button>
    <form id="form" class="resultado">
        <div id="pergunta" class="pergunta">
        </div>
        <input id="input_taxi" type="text" placeholder="Digite o número de táxis disponíveis:">
        <button type="button" id="btn_jogar">Definir</button>
        <input id="input_escolha" type="text" placeholder="Escolha uma opção: ">
        <button type="button" id="btn_jogar2">Escolher</button>
        <div id="resultado" class="pergunta"> </div>

    </form>


    <button id ="btn_codigo" class="teste btn_codigo">Código</button>
    <div id="codigo" class="codigo">
        <textarea name="" id="textcodigo" cols="30" rows="10"></textarea>
    </div>




    <script src="../js/taxi.js"></script>
</body>
</html>