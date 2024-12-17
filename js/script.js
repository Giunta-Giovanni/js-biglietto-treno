// esercizio di oggi: Biglietto del treno

/****** RICHIESTA ******

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

************************/



// Input
// Chiediamo all'utente il numero di chilometri che vuole percorrere
let chilometriuser = parseInt(prompt("Quanti chilometri devi percorrere?"))

// Chiediamo all'utente l'età del passeggero
let etauser = parseInt(prompt("Inserisci l'età del passeggero"))

console.log("il passeggero deve percorrere", chilometriuser, "km");
console.log("Il passeggero ha", etauser, "anni");



// Elaborazione
// Calcoliamo il prezzo del biglietto in base ai km (0.21 € al km)

    // moltiplico i chilometri inseriti dall'utente con il prezzo al km
    let prezzotratta = chilometriuser * 0.21;
    // mostro il prezzo base della tratta
    console.log("Il prezzo base è di", prezzotratta.toFixed(2),"€");
    
// verifico il risultato salvandomi il dato
let risultato

// se l'eta del passeggero è minore di 18 applicare uno sconto del 20%
if (etauser < 18) {

    // sconto del 20%
    risultato = prezzotratta * 0.80 

console.log("Congratulazioni!...hai uno sconto del 20%");
    
    // altrimenti se l'eta del passeggero è maggiore di 65 applicare uno sconto del 40%   
} else if (etauser > 65) {
    
    // sconto del 40%
    risultato = prezzotratta * 0.60

    console.log("Congratulazioni!...hai uno sconto del 40%");

// altrimenti prezzo standard
}else {

    // prezzo base
    risultato = prezzotratta;

    console.log("Mi dispiace, ma non sei nè troppo grande e nè troppo piccolo quindi non ci sono sconti applicabili");


}

// output
// mostriamo all'utente quanto deve pagare considerando i centesimi di euro
console.log("Il passeggero deve pagare:", risultato.toFixed(2),"€");


