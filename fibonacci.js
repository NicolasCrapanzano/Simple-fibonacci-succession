function fibonacci(num){

    let fin = 0;
    let n = num; //the ammount of cycles the succession has
    let a = 0;
    let sum = 1; //the sum of this and the previous number

    while (fin < n){
        sum += a;
        a = sum - a;
        fin++;
        console.log("fibonacci"+fin+":",sum);
    }
}

fibonacci(41);