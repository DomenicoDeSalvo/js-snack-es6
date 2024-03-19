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
tavoloVip.forEach((element, i) => {
    //Assegnazione dei nomi ad una variabile.
    let currentName = element;// String
    //Assegnazione del posto a sedere.
    let currentSit = i + 1; //Number.
    //Creazione degli oggetti.
    let invitato = {
        Tavolo: 'Tavolo VIP',
        Nome: currentName,
        Posto: currentSit
    };//Object.
    //Gli oggetti vengono inseriti nel nuovo array.
    listaCorretta.push(invitato);

});

console.log(listaCorretta)

//

//ESERCIZIO 2

//Array contenente i profili degli studenti.
const studentsList = [];//Array

//Creazione dei profili degli studenti i quali verranno poi inseriti tramite push nella lista.
const marcoDellaRovere = studentProfile(213, 'Marco della Rovere', 78);//Object.
studentsList.push(marcoDellaRovere);
const paolaCortellessa = studentProfile(110, 'Paola Cortellessa', 96);//Object.
studentsList.push(paolaCortellessa);
const andreaMantegna = studentProfile(250, 'Andrea Mantegna', 48);//Object.
studentsList.push(andreaMantegna);
const gaiaBorromini = studentProfile(145, 'Gaia Borromini', 74);//Object.
studentsList.push(gaiaBorromini);
const luigiGrimaldello = studentProfile(196, 'Luigi Grimaldello', 68);//Object.
studentsList.push(luigiGrimaldello);
const pieroDellaFrancesca = studentProfile(102, 'Piero della Francesca', 50);//Object.
studentsList.push(pieroDellaFrancesca);
const francescaDaPolenta = studentProfile(120, 'Francesca da Polenta', 84);//Object.
studentsList.push(francescaDaPolenta);

//Bisogna creare tre liste: una con i nomi di tutti in maiuscolo, una con gli studenti con un totale dei voti superiore al 70, una con quelli che oltre ad avete un totale dei voti superiore al 70 abbianco anche l`ID superiore a 120.
const upperCaseNames = studentsList.map((element)=>{
    return {
        ID: element.ID,
        Nome: element.Nome.toUpperCase(),
        Voti: element.Voti,
    }
})
const highGradesList = upperCaseNames.filter((element) => element.Voti > 70);
const highGradesAndIdList = upperCaseNames.filter((element) => element.Voti > 70 && element.ID > 120);
console.log(upperCaseNames, highGradesList, highGradesAndIdList);

//Funzione da utilizzare per creare gli oggetti contenenti i dati degli studenti.
function studentProfile(studentId, studentName, studentGrade){
    const student = {
        ID: parseInt(studentId), //Number.
        Nome: studentName,//String.
        Voti: parseInt(studentGrade),//Number.
    };
    return student; //Object.
}
