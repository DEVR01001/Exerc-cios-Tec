<?php



require './App/Entity/Cliente.php';
require './App/Entity/ADM.php';
require './App/Session/Login.php';

Login::requireLogout();


$alertaLogin ='';





if (isset($_POST['salvar'])){
    $email = $_POST['email'];
    $novaSenha=$_POST['senhaNova'];
    $senhaReptida = $_POST['senharep'];


    $cliente = Cliente::getPorEmail($email);
    
    $id_cliente =  $cliente->id_cliente;
    $nome = $cliente->nome;
    $emails = $cliente->email;
    $telefone= $cliente->telefone;
    $senha = $cliente->senha;


    
    if($cliente instanceof Cliente && $novaSenha === $senhaReptida){


        $clieSenha = new Cliente();
        $clieSenha->id_cliente = $id_cliente;
        $clieSenha->email = $emails;
        $clieSenha->nome = $nome;
        $clieSenha->telefone = $telefone;
        $clieSenha->senha = $novaSenha;

        $result = $clieSenha->atualizarCliente();

        if($result){
            echo '<script> alert("Senha atualizada com sucesso!! ")  </script> ';
            echo "<meta http-equiv='refresh' content='0.5;url=login.php'>";
        }

    }else{
        $alertaLogin = 'Senhas não são iguais ou não possui cadastro';
    }









}



include "navbar_deslogado.php";

?>

    <main>
        <div class="container_form">
            <form action="" method="post">
                <title>Esqueci Minha Senha</title>
                <div class="itemflex">
                    <label for="">Email</label>
                    <input name="email" type="email">
                </div>
                <div class="itemflex">
                    <label for="">Nova Senha</label>
                    <input name="senhaNova" type="password">
                </div>
                <div class="itemflex">
                    <label for="">Repita a senha</label>
                    <input name="senharep" type="password">
                </div>
                <p><?php  echo $alertaLogin; ?></p>

                <div class="container_btn">
                    <button name="salvar">Salvar</button>
                </div>
            </form>
        </div>
        
        
    </main>
    
    
    
</body>
</html>