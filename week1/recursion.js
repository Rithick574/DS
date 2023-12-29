function f(n){
if(n<=1){
return 1
}
return n*f(n-1)
}


const a=f(5)
console.log(a);



function f(n) {
    if (n <= 1) {
        return 1;
    }
  
    f(n - 1);
    console.log(n);  
    f(n - 1);
}

const x = f(5);
