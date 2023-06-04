// instead of var we use let const

// let a = 5;
// const car = {
//     color: "Red",
//     model: "2007",
//     isAutomatic: true
// };

// const {model, color, isAutomatic} = car;
// console.log(color, model, isAutomatic)

// const array = [1,2,3,4];

//MAPPING

// const mapArray = [];
// array.forEach((num) => {
//     mapArray.push(num*2);
// })

// const mapArray = array.map((num) => {
//     return num *2;
// })

// console.log(mapArray);

// FILTER

// const filterredArray = array.filter((num) => {
//     return num >2;
// })
// console.log(filterredArray);

// // REDUCE

// const reducedArray = array.reduce((accumulator, num) => {
//     return accumulator+num;
// }, 0)

// console.log(reducedArray);

// const myDisplayer = (sum) => {
//     document.getElementById("demo").innerHTML = sum;
//     console.log(sum);
// }

// const myCalculator = (num1, num2, myCallback) => {
//     let sum = num1 + num2;
//     // console.log(sum);

//     myCallback(sum);

// }

// myCalculator(5,12,myDisplayer);


// function addition(x, y, callb){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callb();     
// }, 5000); 
     
//     } 
     
// // display() function is called just after the ending of addition() function    
// function display(){ 
//     document.write('Numbers added!'); 
// } 
 
// // Calling addition() function
//     addition(5,5, display);


// PROMISES

const myProm = new Promise((resolve, reject) => {
    if (true) {
        resolve("It worked");
    }
    else {
        reject("it got rejected");
    }
})


myProm.then((result) => result + "?")
.then((result2) => result2 + result2)
.then((result3) => {
    console.log(result3);
})