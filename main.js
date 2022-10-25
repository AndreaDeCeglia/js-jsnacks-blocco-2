//*Snack1*
//Inserisci un numero, 
//se è pari stampa il numero, 
//se è dispari stampa il numero successivo 
//( del numero inserito dall'utente: 
//esempio se il numero dell'utente è 2, 
//il numero successivo è 3  ).

let input = parseInt( prompt('write a number'));

if ( input % 2 === 0){
    console.log(input);
} else {
    console.log(input + 1);
}

//***************************************** */