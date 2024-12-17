# js-biglietto-treno

// esercizio di oggi: Biglietto del treno

/****** RICHIESTA ******

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

************************/


// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. 

// Input
// richiesta all'utente del numero di chilometri che vuole percorrere
// richiesta all'utente dell'età del passeggero

// Elaborazione
// Calcolare il prezzo del biglietto in base ai km (0.21 € al km)
    // moltiplico i chilometri inseriti dall'utente con il prezzo al km
    // mostro il prezzo della tratta

// se l'eta del passeggero è minore di 18 applicare uno sconto del 20%
    // (moltiplico il prezzo della tratta a 0,20 e il risultato) e lo sottraggo al prezzo tratta
    // mostro il risultato del prezzo tratta minori

// altrimenti se l'eta del passeggero è maggiore di 65 applicare uno sconto del 40%
    // (moltiplico il prezzo della tratta a 0,40 ) e lo sottraggo al prezzo tratta
    // mostro il risultato del prezzo tratta senior

// altrimenti prezzo standard
    // mostro il prezzo della tratta


// output
// mostriamo all'utente quuanto deve pagare considerando i centesimi di euro