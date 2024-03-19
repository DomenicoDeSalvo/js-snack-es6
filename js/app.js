//ESERCIZIO 1

//Array contente gli invitati in ordine di posto.
const tavoloVip = [ 
    'Brad Pitt', 
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
]; //Array

//Nuovo Array che conterrà la lista nel formato corretto.
const  listaCorretta = []; //Array.

//Ciclo per assegnare i nomi agli oggetti.
tavoloVip.forEach((element, i, array) => {
    //Assegnazione dei nomi ad una variabile.
    let currentName = element;// String
    //Assegnazione del posto a sedere.
    let currentSit = i + 1; //Number.
    //Creazione degli oggetti.
    let invitato = 
    {
        Tavolo: 'Tavolo VIP',
        Nome: currentName,
        Posto: currentSit
    };//Object.
    //Gli oggetti vengono inseriti nel nuovo array.
    listaCorretta.push(invitato);

});

console.log(listaCorretta)
