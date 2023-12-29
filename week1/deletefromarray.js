
let myArray = [1, 2, 3, 4, 5];
let valueToDelete = 6;

const index=myArray.indexOf(valueToDelete)
// console.log(index);

if(index !== -1){
    myArray.splice(index,1)
    console.log(myArray);
}else{
    console.log("this valuse is not included in this array");
}

