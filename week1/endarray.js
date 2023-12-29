// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.pop());

// console.log(myArray);

//add a value at beginning
let myArray = [2, 3, 4, 5];
let position=2;
let value=9

// let newValue = 12;
// let newArray=[newValue,...myArray]
// console.log(newArray);
// myArray.push(19)


if(position >=0 && position<myArray.length){
myArray.splice(position,0,value)
}


console.log(myArray);