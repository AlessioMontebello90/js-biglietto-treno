// Acquisizione dei dati dall'utente
let km = parseFloat(
  prompt("Inserisci il numero di chilometri da percorrere: ")
);
let eta = parseInt(prompt("Inserisci la tua età: "));

// Calcolo del prezzo base
let prezzo_base = km * 0.21;

// Applicazione degli sconti in base all'età
if (eta < 18) {
  prezzo_base -= prezzo_base * 0.2; // Sconto del 20% per i minorenni
} else if (eta >= 65) {
  prezzo_base -= prezzo_base * 0.4; // Sconto del 40% per gli over 65
}

// Formattazione del prezzo finale con massimo due decimali
let prezzo_finale = prezzo_base.toFixed(2);

// Output del prezzo finale
console.log("Il prezzo finale del tuo viaggio è: " + prezzo_finale + " €");

// Scrivi il risultato sulla pagina

document.getElementById("distance").innerHTML = km;
document.getElementById("age").innerHTML = eta;
document.getElementById("price").innerHTML = prezzo_finale;
