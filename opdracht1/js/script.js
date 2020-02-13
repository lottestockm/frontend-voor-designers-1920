/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

//  test of de js goed gelinkt is


console.log("test");


// Dit is voor 1917
var klik = document.querySelector("#button1");
var films = document.querySelector(".film1");
var filmsliked = document.querySelector(".films")
var buttonliked = document.querySelector(".films")

console.log(films);

function tekst() {
    films.classList.toggle("yay");
    filmsliked.classList.toggle("liked")
    buttonliked.classList.toggle("achtergrond")
}

klik.addEventListener("click", tekst);


// dit is voor de display block en none

var klikdiv = document.querySelector("#button1");
var filmsdiv = document.querySelector("#div1");

console.log(films);

function tekstdiv() {
    filmsdiv.classList.toggle("cool");
}

klikdiv.addEventListener("click", tekstdiv);



// Dit is voor parasite
var klik2 = document.querySelector("#button2");
var films2 = document.querySelector(".film2");

console.log(films2);

function tekst2() {
    films2.classList.toggle("yey");
}

klik2.addEventListener("click", tekst2);

