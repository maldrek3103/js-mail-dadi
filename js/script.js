// Tira due dadi, uno per il player 1 e l'altro per il player 2 (computer) e stabilisci il vincitore 

// Tirare 2 numeri random compresi tra 1 e 6
var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;
var docResult = document.getElementById('result');

console.log('Tiro giocatore 1: ', player1);
console.log('Tiro giocatore 2: ', player2);

// Stabilisci il vincitore
if (player1 > player2) {
    docResult.innerHTML = 'Giocatore 1 ha vinto!';
} else if (player2 > player1) {
    docResult.innerHTML = 'Giocatore 2 ha vinto!';
} else {
    docResult.innerHTML = 'Pareggio!';
}

//=========================================================================================================

// Ask user the e-mail address and make variables
var userMail = prompt('What is your e-mail?', 'pippo@gmail.com');
var allowedMails = ['pluto@gmail.com', 'pippo@gmail.com', 'paperino@hotmail.com', 'topolino@libero.com'];
var mail = document.getElementById('mail');
var isAllowed = false;

console.table(allowedMails);


// Controllo della mail inserita con le mail già registrate
for (var i = 0; i < allowedMails.length; i++) {
    if (userMail === allowedMails[i]) {
        isAllowed = true;
    }

}
if (isAllowed) {
    mail.innerHTML = 'Benvenuto: ' + userMail;
} else {
    mail.innerHTML = 'Utente non registrato'
}

console.log(isAllowed);