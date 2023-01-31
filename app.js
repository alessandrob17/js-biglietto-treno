let chilometri = prompt('Quanti chilometri vuoi percorrere?')

let anni = prompt('Quanti anni hai?')


const answer = chilometri + anni
console.log(answer)

//PREZZO BIGLIETTO

console.log(chilometri * 0.21)

if (anni < 18){
    console.log((chilometri * 0.21)%20 ) 
}  

