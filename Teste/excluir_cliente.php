<?php

require './App/Entity/Cliente.php';
require './App/Session/Login.php';

Login::requireLogin();


$cliente = new Cliente();


$id_cliente = $_GET['id_cliente'];


$result = $cliente->excluirCliente($id_cliente);



if($result){
    echo '<script> alert("Cliente excluido com sucesso!! ")  </script> ';
    echo "<meta http-equiv='refresh' content='0.5;url=Listar_Cliente.php'>";
}
else{
    echo '<script> alert("Erro ao excluir !! ")  </script> ';

}