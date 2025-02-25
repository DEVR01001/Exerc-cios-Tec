dicLista ={};
lista = [];


let N_fileira = 2;
let N_cadeiras = 30;

i=1;
while (i < (N_fileira+1)){


    cont=0;
    while (cont < (N_cadeiras-(N_cadeiras/2))){

        lista.push("O");

        cont+=1;

    }

    dicLista[i] = lista;

    i+=1;
    
}

console.log(dicLista);

// for( x in dicLista){
//     teste = dicLista[x];
//     // console.log("====================================");
//     // console.log(teste);

//     for( c in teste){
//         // console.log(teste[c]);
//         process.stdout.write(`${teste[c]}`);
//     }

//     console.log("\n")
// }