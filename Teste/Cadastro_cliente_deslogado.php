<?php


require './App/Entity/Cliente.php';
require './App/Session/Login.php';

Login::requireLogout();



if (isset($_POST['cadastrar'])){


    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $senha = $_POST['senha'];

    $cliente = new Cliente();


    $cliente->nome =$nome;
    $cliente->email =$email;
    $cliente->telefone =$telefone;
    $cliente->senha =$senha;

    $lastIdcliente = $cliente->CadastrarCliente();



}

include "navbar_deslogado.php";

?>

    <main>
        <div class="container_form">
            <form action="" method="post">
                <title>Cadastro Cliente</title>
                <div class="itemflex">
                    <label for="">Nome</label>
                    <input name="nome" type="text">
                </div>
                <div class="itemflex">
                    <label for="">Email</label>
                    <input name="email" type="email">
                </div>
                <div class="itemflex">
                    <label for="">Telefone</label>
                    <input name="telefone" type="number">
                </div>
                <div class="itemflex">
                    <label for="">senha</label>
                    <input name="senha" type="password">
                </div>

                <div class="container_btn">
                    <button name="cadastrar">Cadastrar</button>
                </div>
            </form>
        </div>
        
        
    </main>
    
    
    
</body>
</html>