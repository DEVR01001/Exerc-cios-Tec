<?php


include "navbar.php";
?>
    <h6>Exercicio 1 - Pedra,Papel e Tesoura</h6>
    <button id="btn_teste" class="teste btn_teste">Teste</button>
    <form id="form" class="resultado">
        <input id="input_nome" type="text" placeholder="Digite seu nome: ">
        <input id="input_jogada" type="text" placeholder="Escolha Pedra, Papel ou Tesoura: ">
        <button type="button" id="btn_jogar">Jogar</button>
        <div id="escolha" class="conteudo_result"></div>
        <div id="conteudo_result" class="conteudo_result"></div>
    </form>


    <button id ="btn_codigo" class="teste btn_codigo">Código</button>
    <div id="codigo" class="codigo">
        <textarea name="" id="textcodigo" cols="30" rows="10"></textarea>
    </div>


    <script src="../js/Game_pedra_papel_tesoura.js"></script>
</body>
</html>