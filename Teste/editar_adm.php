
<?php


require './App/Entity/ADM.php';
require './App/Session/Login.php';

Login::requireLogin();




$id_recebido = $_GET['id_adm'];


$adm = ADM::buscarPorID($id_recebido);


$nome = $adm->nome;
$email = $adm->email;
$senha = $adm->senha;







if (isset($_POST['editar'])){


    $nomeNew = $_POST['nome'];
    $emailNew = $_POST['email'];
    $senhaNew = $_POST['senha'];

    
    $admNew= new ADM();
    

    $admNew->id_adm = $id_recebido;
    $admNew->nome = $nomeNew;
    $admNew->email = $emailNew;
    $admNew->senha = $senhaNew;



    $result = $admNew->atualizarAdm();

    if($result){
        echo '<script> alert("Adm atualizado com sucesso!! ")  </script> ';
        echo "<meta http-equiv='refresh' content='0.5;url=Listar_Adm.php'>";

    }


}

include "navbar.php";

?>
<main>
        <div class="container_form">
            <form action="" method="post">
                <title>Editar Adm</title>
                <div class="itemflex">
                    <label for="">Nome</label>
                    <input name="nome" type="text" value="<?php echo $nome; ?>">
                </div>
                <div class="itemflex">
                    <label for="">Email</label>
                    <input name="email" type="email" value="<?php echo $email; ?>">
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