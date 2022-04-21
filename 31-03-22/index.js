console.log("Hello world!");

function makeMath() {
    let a = 3;
    let b = 4;

    let sum = a + b;
    let multiply = a * b;

    console.log(sum);
    console.log(multiply);
}

makeMath();

let cars = ["Tesla", "Škoda", "Hyundai", "Subaru", "Nissan", "Ford"]

console.log(cars);

cars.forEach(carItem => {
   console.log("Car from carsList: " + carItem);
});

const multiNumbers = (x, y) => {
  console.log("Multiply numbers = " + x * y);
};

multiNumbers(3, 9);

function define(x) {
    if(x > 3) {
        console.log("Ahoj");
    }
    else {
        console.log("Hello");
    }
}

define(3);