

const array=[1,2,3,4,5,6,7]

const dlt=4;

const indx=array.indexOf(dlt)

if(indx !== -1){
array.splice(indx,1)
console.log(array);
}else{
    console.log("value is not included");
}
