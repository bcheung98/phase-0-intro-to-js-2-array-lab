var cats = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift(name)
}

function appendCat(name) {
  var morecats = [...cats, name];
  return morecats;
}

function prependCat(name) {
  var morecats = [name, ...cats];
  return morecats;
}

function removeLastCat() {
  var lesscats = cats.slice(0, cats.length - 1);
  return lesscats;
}

function removeFirstCat() {
  var lesscats = cats.slice(1);
  return lesscats;
}
