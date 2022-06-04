// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    let newArray=[...cats,name]
    return newArray;
}
appendCat("Broom")

function prependCat(name){
    let newArray=[name,...cats];
    return newArray;
}
prependCat("Arnold")

function removeLastCat() {
    let lastCats = cats.slice(0, cats.length - 1);
    return lastCats;
}
function removeFirstCat() {
    let firstCats = cats.slice(1);
    return firstCats;
}