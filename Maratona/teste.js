





let DicTaxi = {};


function Taxi(){

    let N_taxi= 3;

    for (let i; i < N_taxi;i++){
        locTaxi = 5 ;
        DicTaxi[i] = locTaxi;
    }

    console.log("Taxis atualizados.");

}


let escolha = '1';

DivPergunta.innerHTML = `1 - Solicitar Táxi<br>
2 - Mostrar Status dos Táxis <br>
3 - Sair <br>`;

function Escolha(escolha){


    switch(escolha){
        case "1":
            let localizacao= 7;

            const [chaveMaisProxima, valorMaisProximo] = Object.entries(dados)
                .map(Number) 
                .reduce((a, b) => (Math.abs(b[1] - localizacao) < Math.abs(a[1] - localizacao) ? b : a));

            console.log(`Taxi ${chaveMaisProxima} aceitou sua corrida e está a caminho! `);
            console.log(`Taxi ${chaveMaisProxima} chegou ao destino e sua nova localização é ${localizacao} `);
        break;

        case "2":

        for(let chave in DicTaxi){
            console.log(`Taxi ${chave}: Localização ${DicTaxi[chave]}`);
        }

        case "3":
            console.log("Saindo do Sistema")






    }




} 