<?php

require './App/Entity/ADM.php';


$adm = new ADM();
require './App/Session/Login.php';

Login::requireLogin();


$id_adm = $_GET['id_adm'];


$result = $adm->excluirADM($id_adm);



if($result){
    echo '<script> alert("Adm excluido com sucesso!! ")  </script> ';
    echo "<meta http-equiv='refresh' content='0.5;url=Listar_Adm.php'>";
}
else{
    echo '<script> alert("Erro ao excluir !! ")  </script> ';

}