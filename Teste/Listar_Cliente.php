<?php



require './App/Entity/Cliente.php';
require './App/Session/Login.php';

Login::requireLogin();



$dados = new Cliente();

$dadosBanco = $dados->ListarCliente();






include "navbar.php";


?>




    <main class="main2">
        <table>
            <tr>
                <th>Id Cliente</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Editar</th>
                <th>Excluir</th>
            </tr>
            <?php 
                foreach($dadosBanco as $cliente){
                    echo'
                <tr>
                    <td>'.$cliente['id_cliente'].'</td>
                    <td>'.$cliente['nome'].'</td>
                    <td>'.$cliente['email'].'</td>
                    <td>'.$cliente['telefone'].'</td>
                    <td><a href="editar_cliente.php?id_cliente='.$cliente['id_cliente'].'"><i class="fa-solid fa-pencil"></i></a></td>
                    <td><a href="excluir_cliente.php?id_cliente='.$cliente['id_cliente'].'"><i class="fa-solid fa-trash"></i></a></td>
                </tr>';
            }
        ?>
        </table>
     
        
    </main>
    
    
    
</body>
</html>