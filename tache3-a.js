// declaration et affectation d'une variable
let prenom = 'khady';
let age = 50;
let enligne = true;
let choix = null;

console.log(prenom);
console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enligne);
console.log(typeof choix);

//la concatenation c'est le fait d'additionner deux variables
console.log(prenom + ' ' + age);

// console.log('je m\'appele ${prenon} , j\'ai ${age} ans);

// array
let tab = ['pomme' , 12 , true , ['bleu' , 'rouge']];
// length nous permet de connaitre la grandeur du tableau
console.log(tab.length);
// recuperation du element du tableau
console.log(tab[1]);

// creation d'object
let personne = {
    prenom: 'khady' ,
    age: 50 ,
    adresse: {
        Ville: 'kaolack',
        cartier: 'sham'

    }
};
console.log(personne.prenom);
console.log(personne.adresse.Ville);

let a = 5;
let b = 2;

// addition
console.log(a + b);

// soustraction
console.log(a - b);

// addition
console.log(a * b);

// addition
console.log(a / b);

// modulo(l'opperation modulo donne le reste de la division euclidien)
console.log(a % b);

// incrementation et la decrementation on remplace les plus par le signe moin
// a = a +1 ; equivaut a++ equivaut a +=1;
a += 1;
console.log(a);