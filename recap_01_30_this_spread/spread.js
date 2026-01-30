let first = { a: 10, b: 20, x: 100 };
let second = { b: "ciao", d: 40 };

let copy = { ...first };
console.log("COPY: ", copy, copy === first);

let { a, b } = first;
console.log("A e B: ", a, b);

let { a: aliasA, b: aliasB, c = 100 } = first;
console.log("aliasA e aliasB e c: ", aliasA, aliasB, c);

let conditional = { ...first, ...(true ? { n: 5 } : {}) };
console.log("CONDITIONAL: ", conditional);

function sum(a, b, c) {
  return a + b + c;
}

console.log("SUM: ", sum(...[1, 2, 3]));

let original = {
  counter: 1,
  visits: [1, 2, 3, 4],
  name: "Name",
  details: {
    iban: "a secret iban",
  },
};

let copied = { ...original };

copied.counter = 10;
console.log("ORIGINAL COUNTER: ", original.counter);

copied.name += "10";
console.log("ORIGINAL NAME: ", original.name);

copied.visits.push(10);
console.log("ORIGINAL VISITS: ", original.visits);

copied.visits = [1];
copied.visits.push(5);
console.log("ORIGINAL VISITS pt 2: ", original.visits);

copied.details.amount = 10000000;
console.log("ORIGINAL DETAILS: ", original.details);

console.log(Object.keys(original));
console.log(Object.values(original));
console.log(Object.entries(original));
