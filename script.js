const nome = prompt ("Qual è il tuo nome?")
console.log(nome)

const cognome = prompt ("Qual è il tuo cognome?")
console.log(cognome)

const colore = prompt ("Qual è il tuo colore preferito?")
console.log(colore)

document.getElementById("output").innerHTML = `${nome} ${cognome} ${colore} 21`