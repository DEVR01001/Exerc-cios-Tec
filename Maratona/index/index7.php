<?php


include "navbar.php";
?>
    <h6>Exercicio 7 - Restaurante</h6>
    <button id="btn_teste" class="teste btn_teste">Teste</button>
    <form id="form" class="resultado">
        <div id="pergunta" class="pergunta">
        </div>
        <input id="input_pedido" type="text" placeholder="Digite o nome do prato que deseja (ou aperte para finalizar): ">
        <button type="button" id="btn_jogar">Pedir</button>
        <button type="button" id="btn_sair">Finalizar Pedido</button>
        <div id="resultado2" class="pergunta"> </div>
        <div id="resultado" class="pergunta"> </div>
        <div id="resultado3" class="pergunta"> </div>
        
    </form>


    <button id ="btn_codigo" class="teste btn_codigo">Código</button>
    <div id="codigo" class="codigo">
        <textarea name="" id="textcodigo" cols="30" rows="10"></textarea>
    </div>




    <script src="../js/restaurante.js"></script>
</body>
</html>