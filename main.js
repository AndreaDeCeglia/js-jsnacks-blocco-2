//*Snack1*
//Inserisci un numero, 
//se è pari stampa il numero, 
//se è dispari stampa il numero successivo 
//( del numero inserito dall'utente: 
//esempio se il numero dell'utente è 2, 
//il numero successivo è 3  ).

// let input = parseInt( prompt('write a number'));

// if ( input % 2 == 0){
//     console.log(input);
// } else {
//     console.log(input + 1);
// }

//***************************************** */

//*Snack2*
//Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, 
//e da queste vogliamo generare una "falsa" lista di invitati, 
//dove ogni invitato nella lista, 
//è l'unione di un "nome" e un "cognome" delle liste 
//precedentemente dette, scelti in modo casuale.

// let names = [ 'Claudiana', 'Giangilberto', 'Gigio'];
// let namesN = names.length;

// let lastnames = [ 'Cognome', 'Lastname', 'Topo'];
// let lastnamesN = lastnames.length;

// console.log( names[ Math.round(Math.random() * (namesN - 1))] + ' ' + lastnames[ Math.round(Math.random() * (lastnamesN - 1))] );

//****************************************** */


//*Snack3*
//Crea un array di numeri interi 
//e fai la somma di tutti gli elementi  
//che sono in posizione (indice) dispari

let number = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

let som = 0;

for ( let i=1; i<number.length; i+=2){
    som += number[i];
}

console.log(number);

console.log(som);