/** THIS */
console.log(this);
function normalFunction() {
  console.log("Normal function: ", this);
}
normalFunction();

const arrowFunction = () => {
  console.log("Arrow function: ", this);
};
arrowFunction();

let originalObject = {
  c: 0,
  incrementWithRef: function () {
    originalObject.c++;
  },
  incrementWithFunction: function () {
    this.c++;
  },
  incrementWithArrow: () => {
    this.c++;
  },
};

originalObject.incrementWithRef(); // funziona
console.log("Increment with ref: ", originalObject.c);

originalObject.incrementWithFunction(); // funziona
console.log("Increment with function: ", originalObject.c);

originalObject.incrementWithArrow(); // NON funziona
console.log("Increment with arrow: ", originalObject.c);

let copiedObject = { ...originalObject };

copiedObject.incrementWithRef(); // NON FUNZIONA
console.log("copiedObject Increment with ref: ", copiedObject.c);

copiedObject.incrementWithFunction(); // funziona
console.log("copiedObject Increment with function: ", copiedObject.c);

copiedObject.incrementWithArrow(); // NON funziona
console.log("copiedObject Increment with arrow: ", copiedObject.c);

const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector(".second-button");
let outerFunction;

firstButton.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(this);
  outerFunction = () => {
    // during recap we used a timeout
    console.log("Outerfunction this: ", this);
  };
  outerFunction();
});

secondButton.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(this);
});
