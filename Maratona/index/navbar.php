<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="../js/OpenBtn.js" defer></script>
    <title>Document</title>
</head>
<body>
    <style>


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        header{
            display: flex;
            width: 100%;
            height: 100px;

            justify-content: center;
            align-items: center;
            padding-bottom: 5rem;
        }
        nav{
            display: flex;
            width: 90%;
            height: 100%;
            justify-content: center;
            align-items: center;
        }

        nav ul{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            list-style: none;
        }

        nav ul li{
            display: flex;
        }
        nav ul li a{
            display: flex;
            text-decoration: none;
            font-size: 15px;
            color: #6d6d6d;
            transition: all 0.3s ease-in-out;

        }

        nav ul li a:hover{
            color: rgb(0, 0, 0);
            font-weight: 500;
            cursor: pointer;
        }

        body{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            padding: 1rem;
        }
        *{
            font-family: "Poppins", serif;
            margin: 0;
            padding: 0rem;
            box-sizing: border-box;
        }

        h6{
            font-size: 18px;
            color: rgb(118, 118, 118);
        }
        .teste{
            justify-content: center;
            align-items: center;
            background-color: rgb(65, 65, 65);
            border: none;
            border-radius: 5px;
            width: 100px;
            color: white;
            height: 40px;
            cursor: pointer;
            margin-top: 1rem;

        }
        .codigo{
        display: flex;
        flex-direction: column;
        opacity: 0;
        height: 0;
        width: 0%;
        padding: 1rem;
        border: 1px solid #6d6d6d;
        border-radius: 5px;
        border-top: 0;
        gap: 1.5rem;
        margin-top: 1rem;

        }

        .resultado{
        display: flex;
        flex-direction: column;
        opacity: 1;
        height: 100%;
        width: 100%;
        padding: 1rem;
        border: 1px solid #6d6d6d;
        border-radius: 5px;
        border-top: 0;
        gap: 1.5rem;
        margin-top: 1rem;
        }

        .active{
        width: 50%;
        height: 50%;
        opacity: 1;

        overflow: hidden;
        }
        .active2{
        width: 100%;
        height: 100%;
        opacity: 1;

        overflow: hidden;
        }

        
        .conteudo_result{
            color: #6d6d6d;
            font-size: 18px;
            display: flex;
        }
        form{
            flex-direction: column;
            display: flex;
            width: 300px;
            gap: 10px;
            padding: 1rem;
        }

        #textcodigo{
            padding: 2rem;
            height: 500px;
        }
    </style>
    <header>
        <nav>
            <ul>
                <li>
                    <a href="../index/index.php">Exercicios 1</a>
                </li>
                <li>
                    <a href="../index/index2.php">Exercicios 2</a>
                </li>
                <li>
                    <a href="../index/index3.php">Exercicios 3</a>
                </li>
                <li>
                    <a href="../index/index4.php">Exercicios 4</a>
                </li>
                <li>
                    <a href="../index/index5.php">Exercicios 5</a>
                </li>
                <li>
                    <a href="../index/index6.php">Exercicios 6</a>
                </li>
                <li>
                    <a href="../index/index7.php">Exercicios 7</a>
                </li>
                <li>
                    <a href="../index/index8.php">Exercicios 8</a>
                </li>
                <li>
                    <a href="../index/index9.php">Exercicios 9</a>
                </li>
                <li>
                    <a href="../index/index10.php">Exercicios 10</a>
                </li>
            </ul>
        </nav>
    </header>
    
