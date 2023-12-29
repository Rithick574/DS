class binary{
    IterateBinary(array,target){
        let S=0;
        let E=array.length-1;
        while(S <= E){
            let middle=Math.floor(S+(E-S)/2)
            if(array[middle] === target){
                return middle;
            }else if(array[middle] > target ){
                E=middle-1
            }else{
                S=middle+1
            }
        }
        return -1
    }
}

const binarrysearch=new binary();

const SArray = [ 1, 2, 3, 5, 8, 9 ];
const targetValue = 8;

const binaryIterate=binarrysearch.IterateBinary(SArray,targetValue)
console.log(binaryIterate);