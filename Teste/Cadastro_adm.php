<?php


require './App/Entity/ADM.php';
require './App/Session/Login.php';

Login::requireLogin();



if (isset($_POST['cadastrar'])){


    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $adm = new ADM();


    $adm->nome =$nome;
    $adm->email =$email;
    $adm->senha =$senha;

    $lastIdadm = $adm->CadastrarADM();


}

include "navbar.php";

?>

    <main>
        <div class="container_form">
            <form action="" method="post">
                <title>Cadastro Adm</title>
                <div class="itemflex">
                    <label for="">Nome</label>
                    <input name="nome" type="text">
                </div>
                <div class="itemflex">
                    <label for="">Email</label>
                    <input name="email" type="email">
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