<?php



require './App/Entity/Cliente.php';
require './App/Entity/ADM.php';
require './App/Session/Login.php';

Login::requireLogout();


$alertaLogin ='';



if (isset($_POST['login'])){
    if(isset($_POST['email'], $_POST['senha'])){
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        // Verificar se exite usuario com esse email no banco
        $cliente = Cliente::getPorEmail($email);
        // $senhaCliente = $cliente->senha;

        // print_r($cliente);

        $adm = ADM::getPorEmail($email);
        // $senhaadm = $adm->senhaAdm;


        // print_r($adm);
        // exit();

       

        if($adm instanceof ADM && ($adm->senhaAdm) === $senha){
            Login::loginADM($adm);
        }else{
            $alertaLogin = 'Nome ou Senha Inválidos';

        }



        if($cliente instanceof Cliente && $senha ===  ($cliente->senha)){
            Login::login($cliente);
        }else{
            $alertaLogin = 'Nome ou Senha Inválidos';
        }


        
        // // Verifica se existe usuário com essa senha no banco
        // if (!$cliente instanceof Cliente && $senha ===  $senhaCliente) {
        //     $alertaLogin = 'Nome ou Senha Inválidos';
        // } else if (){
        //     // Loga usuário
        //     Login::login($cliente);
        // }

    

    }
}



include "navbar_deslogado.php";

?>

    <main>
        <div class="container_form">
            <form action="" method="post">
                <title>Login</title>
                <div class="itemflex">
                    <label for="">Email</label>
                    <input name="email" type="email">
                </div>
                <div class="itemflex">
                    <label for="">senha</label>
                    <input name="senha" type="password">
                </div>
                <a href="./Esqueci_senha.php">Esqueci minha senha: </a>
                <p><?php  echo $alertaLogin; ?></p>

                <div class="container_btn">
                    <button name="login">Logar</button>
                </div>
            </form>
        </div>
        
        
    </main>
    
    
    
</body>
</html>