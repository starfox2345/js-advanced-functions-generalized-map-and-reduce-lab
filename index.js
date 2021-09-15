// Add your functions here
function map(a, callback){
    // let arr =  [];
    // i = 0;
    // while (i < a.length) {
    //     let b = a[i];
    //     arr.push(callback(b));
    //     i++;
    // }
    // return arr
    const arr = [];
    for (let i = 0; i < a.length; i++){
        const b = a[i];
        arr.push(callback(b));
    }
    return arr
}

function reduce(a, callback, startPoint){
    let sum = 0;
    if (startPoint) {
        sum = startPoint;
        for (let i = 0; i < a.length; i++){
            sum = callback(a[i], sum);
        }
        return sum;
    } else {
        sum = a[0];
        for (let i = 1; i < a.length; i++){
            sum = callback(a[i], sum);
        }
        return sum
    }
}