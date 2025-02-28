<?php

require_once(__DIR__ . '/../DB/Database.php');


class Cliente{

    public int $id_cliente;
    public string $nome;
    public string $email;
    public int $telefone;
    public string $senha;




    public function CadastrarCliente(){

        $db = new Database('cliente');


        $result = $db->insert([

            'nome' => $this->nome,
            'email' => $this->email,
            'telefone' => $this->telefone,
            'senha' => $this->senha,

        ]);


        return true;


    }



    public function ListarCliente($where=null,$order=null,$limit=null){
        return (new Database('cliente'))->select()->fetchAll(PDO::FETCH_ASSOC);

    }

    public function atualizarCliente(){
        return (new Database('cliente'))->update('id_cliente ='. $this->id_cliente,[
                                'nome'=> $this->nome,
                                'email'=> $this->email,
                                'telefone'=> $this->telefone,
                                'senha'=> $this->senha,

        ]);

        
    }



    public static function buscarPorID($id){
        return (new Database('cliente'))->select('id_cliente ='. $id)->fetchObject(self::class);
    }

    public function excluirCliente($id){
        return (new Database('cliente'))->delete('id_cliente = '.$id);

    }

    public static function getPorEmail($where=null, $order =null, $limit = null){

        return (new Database('cliente'))->select('email = "'. $where .'"')->fetchObject(self::class);


    }


















}

