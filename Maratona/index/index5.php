<?php


include "navbar.php";
?>
    <h6>Exercicio 5 -Monitoramento de Temperatura</h6>
    <button id="btn_teste" class="teste btn_teste">Teste</button>
    <form id="form" class="resultado">
        <div id="pergunta" class="pergunta">
        </div>
        <input id="input_temp" type="text" placeholder="Digite o número de registros de temperatura: ">
        <button type="button" id="btn_jogar">Definir</button>
        <!-- <div id="resultado" class="pergunta"> </div> -->
        <ul id="resultado">

        </ul>
        <div id="resultado2" class="pergunta"> </div>

    </form>


    <button id ="btn_codigo" class="teste btn_codigo">Código</button>
    <div id="codigo" class="codigo">
        <textarea name="" id="textcodigo" cols="30" rows="10"></textarea>
    </div>




    <script src="../js/temperatura.js"></script>
</body>
</html>