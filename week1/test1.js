function sortArray(arr,key){
    let i=0;
    let j=arr.length-1;
   while(i<j){
    while(i<j && arr[j] == key){
        j--;
        if(arr[i]==key){
            swap(arr,i,j)
        }
        i++
    }
   }
    return arr
}

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j]
    arr[j]=temp;
}


const arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
const key = 6;
const res=sortArray(arr,key)

for(i=0;i<res.length;i++){
    console.log(res[i]);
}



