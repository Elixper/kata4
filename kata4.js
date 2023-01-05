function alphabetPosition(text) {
  let newText = text.split(" ").join("").replace(/[,'.]/g,"").toLowerCase();
  let tab = [...newText];
  const map1 = new Map();
  map1.set('a', 1);
  map1.set('b', 2);
  map1.set('c', 3);
  map1.set('d', 4);
  map1.set('e', 5);
  map1.set('f', 6);
  map1.set('g', 7);
  map1.set('h', 8);
  map1.set('i', 9);
  map1.set('j', 10);
  map1.set('k', 11);
  map1.set('l', 12);
  map1.set('m', 13);
  map1.set('n', 14);
  map1.set('o', 15);
  map1.set('p', 16);
  map1.set('q', 17);
  map1.set('r', 18);
  map1.set('s', 19);
  map1.set('t', 20);
  map1.set('u', 21);
  map1.set('v', 22);
  map1.set('w', 23);
  map1.set('x', 24);
  map1.set('y', 25);
  map1.set('z', 26);
  let newtab = tab.map((el) => 
    map1.get(el)
  );
  return newtab.toString().replace(/[,]/g," ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("eq)[<0n("))
console.log(alphabetPosition("qfk})>8:"))


function alphabetPosition2(text) {
  let newText = text.toLowerCase();
  let alphaOrder= "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
   for (let i =0;i < newText.length; i++) {
    if (alphabet.includes(newText[i])) {
      alphaOrder += alphabet.indexOf(newText[i]) + 1 + " "
    }
   }
 return alphaOrder.substring(0,alphaOrder.length-1);
}

console.log(alphabetPosition2("ab :$ba"))

console.log(alphabetPosition2("The sun%2r+vf^i"))
