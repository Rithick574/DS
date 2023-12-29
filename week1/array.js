
function twosumNumbers(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<=arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [arr[i],arr[j]];
            }
        }
    }
    return []
}
function a(){
const arr=[6,5,7,9,4,0,2]
const target=10;
let result=twosumNumbers(arr,target)
if(result.length === 0){
    console.log('no pairs found');
}else{
   for(let i=0;i<result.length;i++){
    console.log(result[i]);
   }
}
}
a()

