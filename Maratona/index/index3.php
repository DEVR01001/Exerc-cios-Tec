<?php


include "navbar.php";
?>
    <h6>Exercicio 3 - "Uma Jornada nas Nuvens: Comprando Sua Passagem de Avião com Escolha de Assento"</h6>
    <button id="btn_teste" class="teste btn_teste">Teste</button>
    <form id="form" class="resultado">
        <div id="pergunta" class="pergunta">
        </div>
        <input id="input_fileiras" type="text" placeholder="Numeros de Fileiras...">
        <input id="input_cadeiras" type="text" placeholder="Numeros de Cadeiras...">
        <button type="button" id="btn_jogar">Definir</button>
        <input id="input_escolha" type="text" placeholder="Escolha uma opção: ">
        <button type="button" id="btn_jogar2">Escolher</button>
        <div id="resultado" class="pergunta"> </div>
        <textarea name="" id="textassento" cols="30" rows="10"></textarea>
    </form>


    <button id ="btn_codigo" class="teste btn_codigo">Código</button>
    <div id="codigo" class="codigo">
        <textarea name="" id="textcodigo" cols="30" rows="10"></textarea>
    </div>




    <script src="../js/asentos_avião.js"></script>
</body>
</html>