<?php

require './App/Entity/ADM.php';
require './App/Session/Login.php';

Login::requireLogin();

$dados = new ADM();

$dadosBanco = $dados->ListarADM();




include "navbar.php";

?>

    <main class="main2">
        <table>
            <tr>
                <th>Id Adm</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Editar</th>
                <th>Excluir</th>
            </tr>
                <?php 
                foreach($dadosBanco as $adm){
                    echo'
                <tr>
                    <td>'.$adm['id_adm'].'</td>
                    <td>'.$adm['nome'].'</td>
                    <td>'.$adm['email'].'</td>
                    <td><a href="editar_adm.php?id_adm='.$adm['id_adm'].'"><i class="fa-solid fa-pencil"></i></a></td>
                    <td><a href="excluir_adm.php?id_adm='.$adm['id_adm'].'"><i class="fa-solid fa-trash"></i></a></td>
                </tr>';
            }
        ?>
        </table>
     
        
    </main>
    
    
    
</body>
</html>