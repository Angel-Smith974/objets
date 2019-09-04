/*
// Définition de l'objet Person via un constructeur
function Person(nom, age, sex, parent, work, friends) {
    this.nick = nom;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;
}

// On crée des variables qui vont contenir une instance de l'objet Person :
var seb = new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []);
var lau = new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []);

console.log(seb.nick); // Affiche : « Sébastien »
console.log(lau.nick); // Affiche : « Laurence »

console.log(seb instanceof Person); // Affiche true

console.log(lau.parent);

seb.nick = 'Bastien'; // On change le prénom
console.log(seb.nick);

var myArray = [
    new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []),
    new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []),
    new Person('Ludovic', 9, 'm', 'frère', 'Etudiant', []),
    new Person('Pauline', 16, 'f', 'cousine', 'Etudiante', []),
    new Person('Guillaume', 16, 'm', 'cousin', 'Dessinateur', []),
];

console.log(myArray);
*/

/*
function Person(nick, age, sex, parent, work, friends) {
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;

    this.addFriend = function(nick, age, sex, parent, work, friends) {
        this.friends.push(new Person(nick, age, sex, parent, work, friends));
    };
}

console.log(Person);
*/

/*
function Rat(nom, age, couleur){
    this.nom = nom ;
    this.age = age ;
    this.couleur = couleur;
}

let cage01 = new Rat("Roadkill", 16, "gris" );
let cage02 = new Rat("biquette", 3, "blanche");

console.log(cage01);
console.log(cage02);






function Serpent(taille, couleur){
    this.taille = taille ;
    this.couleur = couleur;
}

let vivarium01 = new Serpent ("taille", "couleur");

console.log(vivarium01);
*/

let goodLetter = ["r", "a", "t"];
let badLetter = [];
let choixUser =(prompt("choisie"));

let compare = goodLetter.indexOf(choixUser);
//console.log(compare);
if (compare != -1){
    goodLetter.splice(compare,1);
}
//console.log(goodLetter);
else{
    badLetter.push(choixUser);
}

while(goodLetter.length >0){
    if (compare != -1){
        goodLetter.splice(compare,1);
    }
    //console.log(goodLetter);
    else{
        badLetter.push(choixUser);
    }
}





console.log("Bon :", goodLetter);
console.log("Erreur :", badLetter);