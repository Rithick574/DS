class binaryrecursive {
    binarysearch(array, target, s = 0, e = array.length - 1) {
    if (s > e) {
      return -1;
    }
    let middle = Math.floor(s + (e - s) / 2);
    if (array[middle] == target) {
        return middle;
    }else if(array[middle] > target){
        return this.binarysearch(array,target,s,middle-1)
    }else{
       return this.binarysearch(array,target,middle+1,e)
    }
  }
}

const SArray = [1, 2, 3, 5, 8, 9];
const targetValue = 8;
const result = new binaryrecursive();
const ans = result.binarysearch(SArray, targetValue);
console.log(ans);
