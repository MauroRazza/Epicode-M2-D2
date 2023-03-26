/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// I data types in Javascript ci aiutano a definire un preciso tipo di data, questo è una base fondamentale per poter 
// utilizzare Javascript correttamente, assegnare il tipo di data ci permettera di definire i corretti valori e svolgimento, 
// in caso contrario il nostro codice avrà problemi, ora vediamo quali sono i principali data types che javascript ci da a 
// disposizione e il loro funzionamento:

// - String
// es: let color = "Yellow";
// Questo tipo di dato è una sequenza di caratteri aperta e chiusa da singole o doppie apici, oppure da backticks.

// - Number
// es: let length = 5;
// Un tipo di dato numerico, i dati numerici possono anche essere espressi con decimali ad esempio 5.85.
// Inotre i dati numerici hanno a disposizione tre dati simbolici:
// 1 Infinity
// un valore numerico che rappresenta un numero positivo che si avvicina all'infinito.
// 2 -Infinity
// un valore numerico che rappresenta un numero negativo che si avvicina all'infinito.
// 3 Nan
// un valore numerico che rappresenta un non-numero, che sta per "not a number".

// - Booleans
// es: let x = true;
// I data types booleans possono definire solo due valori true e false, ci aiutano per constatare il valore di verità.

// - Object
// es: let person = {
//       name: "Mauro",
//       surname: "Razza"
// };
// Datatypes utilizzato per archiviare informazioni, aperto e chiusa da parentesi graffe.

// - Null
// es: let x = null;
// Questo data type lo rilevo nelle variabili che ho dichiarato con null, volendo definire un valore nullo.

// - Undefined
// es: let name;
// Quando in Javascript non assegnamo un valore il linguaggio ci avvertira con Undefined.

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Gli oggetti in javascript ci possono tornare utili perchè ci aiutano a definire un contenitore di dati, 
// come ad esempio può essere i dati di recapito di una persona, un acquisto o una prenotazione, 
// aperta e chiusa da parentesi graffe quello che possiamo trovare in un oggetto, sono stringe di codice definite "chiavi" 
// che una a una stanno ai valori che noi preferiamo.
// es:  let indirizzo = {
// 		via: "Via Colombo",
// 		numero: 15,
// 		CAP: "20874",
// 		citta: "Busnago"
// 	}

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let X = 12;
console.log(X);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Name = "mauro";
console.log(Name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(X - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);

console.log(name1.toLowerCase() === name2.toLowerCase());



