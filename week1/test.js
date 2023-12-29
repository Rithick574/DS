function result(array, target) {
    const nums = new Set();
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        const match = target - num;
        if (nums.has(match)) {
            return [num, match];
        } else {
            nums.add(num);
        }
    }
    return [];
}
function a() {
    const array = [7,4, 6, 5, 9, 0, 3];
    const target = 10;
    const call = result(array, target);
    if (call.length === 0) {
        console.log("No pair found.");
    } else {
        for (let i = 0; i < call.length; i++) {
            console.log(call[i]);
        }
    }
}
a();
