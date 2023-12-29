var differenceOfSum = function(nums) {
    let elementSum=0
    for(let i=0;i<nums.length;i++){
        elementSum +=nums[i]
    }
    let digitSum=0
    for(let j=0;j<nums.length;j++){
        let numdigits=nums[j].toString().split("")
        // console.log(numdigits);
        for(let k=0;k<numdigits.length;k++){
            console.log(numdigits.length,"@@@@");
            digitSum+=parseInt(numdigits[k],10)
            // console.log(digitSum);
        }
    }
    return elementSum-digitSum
};
let a=[1,15,6,3]
console.log(differenceOfSum(a));