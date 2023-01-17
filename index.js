// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = (name) => cats.push(name);
const destructivelyPrependCat = (name) => cats.unshift(name);
const destructivelyRemoveLastCat = () => cats.pop();
const destructivelyRemoveFirstCat = () => cats.shift();
const appendCat = (name) => [...cats, name];
const prependCat = (name) => [name, ...cats];
const removeLastCat = () => cats.filter((key) => cats.indexOf(key) !== cats.length - 1);
const removeFirstCat = () => cats.filter((key) => cats.indexOf(key) !== 0);
