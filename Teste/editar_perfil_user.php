
<?php


require './App/Entity/Cliente.php';
require './App/Session/Login.php';

Login::requireLoginUser();


if (isset($_SESSION['cliente'])){

    $id = $_SESSION['cliente'];

    $id_recebido= $id['id_cliente'];

}


// $id_recebido = $_SESSION['id_cliente'];


// $print($id_recebido);
// exit();


$cliente = Cliente::buscarPorID($id_recebido);


$nome = $cliente->nome;
$email = $cliente->email;
$tefelone = $cliente->telefone;
$senha = $cliente->senha;




if (isset($_POST['editar'])){


    $nomeNew = $_POST['nome'];
    $emailNew = $_POST['email'];
    $telefoneNew = $_POST['telefone'];
    $senhaNew = $_POST['senha'];

    
    $clienteNew= new Cliente();
    

    $clienteNew->id_cliente = $id_recebido;
    $clienteNew->nome = $nomeNew;
    $clienteNew->email = $emailNew;
    $clienteNew->telefone = $telefoneNew;
    $clienteNew->senha = $senhaNew;



    $result = $clienteNew->atualizarCliente();

    if($result){
        echo '<script> alert("Cliente atualizado com sucesso!! ")  </script> ';
        echo "<meta http-equiv='refresh' content='0.5;url=Listar_Cliente.php'>";

    }


}

include "navbar_user.php";


?>
<main>
        <div class="container_form">
            <form action="" method="post">
                <title>Editar Perfil</title>
                <div class="itemflex">
                    <label for="">Nome</label>
                    <input name="nome" type="text" value="<?php echo $nome; ?>">
                </div>
                <div class="itemflex">
                    <label for="">Email</label>
                    <input name="email" type="email" value="<?php echo $email; ?>">
                </div>
                <div class="itemflex">
                    <label for="">Telefone</label>
                    <input name="telefone" type="number" value="<?php echo $tefelone; ?>">
                </div>
                <div class="itemflex">
                    <label for="">senha</label>
                    <input name="senha" type="password" value="<?php echo $senha; ?>">
                </div>

                <div class="container_btn">
                    <button name="editar">Editar</button>
                </div>
            </form>
        </div>
        
        
    </main>
    
    
    
</body>
</html>