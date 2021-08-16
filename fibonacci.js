function fibonacci(num){
    let n = num; 

    if(n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2) ;            
    
}

console.log(fibonacci(41));
