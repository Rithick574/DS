//

// class strr{
//     static revstr(str){
//         let newChar=str.split('')
//         for(let i=newChar.length-1;i>=0;i--){
//             console.log(newChar[i]);
//         }
//     }
// }
// const str="hello"

// const reverse=strr.revstr(str);

class binary {
  search(arr, target,startInx,endInx) {
  
    let middle=Math.floor(startInx+(endInx-startInx)/2)
    while(startInx <= endInx){
        if(arr[middle] === target){
            return middle
        }else if(arr[middle]>target){
            endInx=middle-1
        }else{
            startInx=middle+1
        }
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6];
const target = 3;
let s;
let e;
const result = new binary();
console.log(result.search(arr, target,s=0,e=arr.length-1));
