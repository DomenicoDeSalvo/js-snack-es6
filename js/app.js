// //ESERCIZIO 1

// //Array contente gli invitati in ordine di posto.
// const tavoloVip = [ 
//     'Brad Pitt', 
//     'Johnny Depp',
//     'Lady Gaga',
//     'Cristiano Ronaldo',
//     'Georgina Rodriguez',
//     'Chiara Ferragni',
//     'Fedez',
//     'George Clooney',
//     'Amal Clooney',
//     'Maneskin'
// ]; //Array

// //Nuovo Array che conterrà la lista nel formato corretto.

// const listaCorretta = tavoloVip.map((element, i)=>{
//     return {
//         Tavolo: 'Tavolo VIP',
//         Nome: element,
//         Posto: i + 1
//     }
// })

// console.log(listaCorretta)

// //

// //ESERCIZIO 2

// //Array contenente i profili degli studenti.
// const studentsList = [];//Array

// //Creazione dei profili degli studenti i quali verranno poi inseriti tramite push nella lista.
// const marcoDellaRovere = studentProfile(213, 'Marco della Rovere', 78);//Object.
// studentsList.push(marcoDellaRovere);
// const paolaCortellessa = studentProfile(110, 'Paola Cortellessa', 96);//Object.
// studentsList.push(paolaCortellessa);
// const andreaMantegna = studentProfile(250, 'Andrea Mantegna', 48);//Object.
// studentsList.push(andreaMantegna);
// const gaiaBorromini = studentProfile(145, 'Gaia Borromini', 74);//Object.
// studentsList.push(gaiaBorromini);
// const luigiGrimaldello = studentProfile(196, 'Luigi Grimaldello', 68);//Object.
// studentsList.push(luigiGrimaldello);
// const pieroDellaFrancesca = studentProfile(102, 'Piero della Francesca', 50);//Object.
// studentsList.push(pieroDellaFrancesca);
// const francescaDaPolenta = studentProfile(120, 'Francesca da Polenta', 84);//Object.
// studentsList.push(francescaDaPolenta);

// //Bisogna creare tre liste: una con i nomi di tutti in maiuscolo, una con gli studenti con un totale dei voti superiore al 70, una con quelli che oltre ad avete un totale dei voti superiore al 70 abbianco anche l`ID superiore a 120.
// const upperCaseNames = studentsList.map((element)=>{
//     return {
//         ID: element.ID,
//         Nome: element.Nome.toUpperCase(),
//         Voti: element.Voti,
//     }
// })
// const highGradesList = upperCaseNames.filter((element) => element.Voti > 70);
// const highGradesAndIdList = upperCaseNames.filter((element) => element.Voti > 70 && element.ID > 120);
// console.log(upperCaseNames, highGradesList, highGradesAndIdList);

// //Funzione da utilizzare per creare gli oggetti contenenti i dati degli studenti.
// function studentProfile(studentId, studentName, studentGrade){
//     const student = {
//         ID: parseInt(studentId), //Number.
//         Nome: studentName,//String.
//         Voti: parseInt(studentGrade),//Number.
//     };
//     return student; //Object.
// }


//ESERCIZIO 3

//Creazione array biciclette.

const bikes = [
    {
        name:'Bianchi',
        weightKg: 10
    },
    {
        name:'Atala',
        weightKg: 7
    },
    {
        name:'Colnago',
        weightKg: 8
    },
    {
        name:'Merida',
        weightKg: 5
    },
    {
        name:'Trek',
        weightKg: 6
    },
];//Array.

//Si consideri la prima bici la più leggera.
let lighterBike = bikes[0];//Object.
//Ciclo per comparare il peso delle biciclette.
for(i = 1; i < bikes.length; i++){
    const currentBike = bikes[i]
    if(currentBike.weightKg < lighterBike.weightKg){
        lighterBike = currentBike
    };
}
//Usare la destrutturazione per acquisire le proprietà dell'oggetto.
const {name, weightKg} = lighterBike;
//Scrivere il messaggio in console.
console.log(`La bici più leggera è la ${name}, la quale pesa ${weightKg} chilogrammi.`)


//ESERCIZIO 4

//Creazione array con squadre di calcio.

const calabroLeague = [
    {
        team: 'US Catanzaro',
        points: 0,
        drawnFouls: 0,
    },
    {
        team: 'Cosenza Calcio',
        points: 0,
        drawnFouls: 0,
    },
    {
        team: 'FC Crotone',
        points: 0,
        drawnFouls: 0,
    },
    {
        team: 'Reggina 1914',
        points: 0,
        drawnFouls: 0,
    },
    {
        team: 'US Vibonese Calcio',
        points: 0,
        drawnFouls: 0,
    }
];//Array.

//Attribuzione di punti e falli alle squadre.
//Ciclare l'array e attribuire il valore della funzione randomNumber a punti e falli dopo le 8 partite del torneo.
calabroLeague.forEach((element, i)=>{
    //  Una squadra che ha perso tutte le partite avrà fatto 0 punti, una che le ha vinte tutte 24 (Il calcolo dei punti, essendo totalmente casuale, darà molto probabilmente risultati irreali).
    element.points = randomNumber(0, 24);//Number
    //Si ipotizza che una squadra subisca in media tra i 10 e i 15 falli a partita.
    element.drawnFouls = randomNumber(80, 120);//Number

});//array.

//Funzione per generare un numero casuale.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }; //Number

