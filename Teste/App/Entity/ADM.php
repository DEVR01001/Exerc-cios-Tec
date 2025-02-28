<?php



require_once(__DIR__ . '/../DB/Database.php');



class ADM{

    public int $id_adm;
    public string $nome;
    public string $email;
    public string $senhaAdm;




    public function CadastrarADM(){

        $db = new Database('adm');


        $result = $db->insert([

            'nome' => $this->nome,
            'email' => $this->email,
            'senhaAdm' => $this->senhaAdm,

        ]);


        return true;


    }



    public function ListarADM($where=null,$order=null,$limit=null){
        return (new Database('adm'))->select()->fetchAll(PDO::FETCH_ASSOC);

    }

     
    public function atualizarAdm(){
        return (new Database('adm'))->update('id_adm ='. $this->id_adm,[
                                'nome'=> $this->nome,
                                'email'=> $this->email,
                                'senhaAdm'=> $this->senhaAdm,

        ]);

        
    }

    public static function buscarPorID($id){
        return (new Database('adm'))->select('id_adm ='. $id)->fetchObject(self::class);
    }

    public function excluirADM($id){
        return (new Database('adm'))->delete('id_adm = '.$id);

    }

    public static function getPorEmail($where=null, $order =null, $limit = null){

        return (new Database('adm'))->select('email = "'. $where .'"')->fetchObject(self::class);


    }














}

