<?php

class Login{

    // Inicia a sessão
    private static function init(){
        if(session_status() !== PHP_SESSION_ACTIVE){
            session_start();
        }

    }


    // Criar a sessão do usuario
    public static function login($obCliente){
        self::init();

        // Sessão de usuario
        $_SESSION['cliente'] =[
            'id_cliente' => $obCliente->id_cliente,
            'email' => $obCliente->email,
            'senha' => $obCliente->senha,
        ];
        
        header('location: location: ./Area_user.php');
        exit;
    }

    public static function loginADM($obCliente){
        self::init();

        // Sessão de usuario
        $_SESSION['adm'] =[
            'id_adm' => $obCliente->id_adm,
            'email' => $obCliente->email,
            'senhaAdm' => $obCliente->senhaAdm,
        ];
        
        header('location: ./Listar_ADM.php');
        exit;
    }



    // Verificar se o usuario está logado

    public static function isLogged(){
        self::init();
        return isset($_SESSION['cliente']['id_cliente']);
        
        
    }
    public static function isLoggedAdm(){
        self::init();
        return isset($_SESSION['adm']['id_adm']);
        
    }


      // Obriga o usuario a estar logado para acessar
      public static function requireLogin(){
        if (!self::isLoggedAdm()){
            header('location: ./login.php');
            exit;
        }
    }
    

      public static function requireLoginUser(){
        if (!self::isLogged()){
            header('location: ./login.php');
            exit;
        }
    }




    // Obriga o usuario a estar deslogado para acessar
    public static function requireLogout(){
        if (self::isLogged()){
            header('location: ./Area_user.php');
            exit;
        }

        if (self::isLoggedAdm()){
            header('location: ./Listar_Adm.php');
            exit;
        }
    }

    public static function lougout(){
        session_start();
        session_unset();
        session_destroy();
        header('location: ./login.php');
        exit();

    }




}





?>