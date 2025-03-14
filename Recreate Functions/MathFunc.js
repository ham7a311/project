/* Recreate Some Built-in Math functions */


Math.myAbs = function (num) {
    if (num < 0) {
        return -num;
    } else if (num > 0) {
        return num;
    } else {
        return NaN;
    }
}




Math.myMin = function (...numbers) {

    if (numbers.length === 0) {
        return Infinity;
    }

    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < min) {
            min = numbers[i];
        };

        if (typeof numbers[i] !== "number") {
            return +numbers[i];
        };

    };


    return min;
}



Math.myRound = function (num) {
    let arr = Array.from(num.toString());
    arr.splice(2, arr.indexOf("."));
    let integer = Number(arr.join(""));
    
    if (num - integer >= 0.5) {
        return integer + 1;
    } else {
        return integer;
    };
}


Math.myCeil = function (num) {
    if (num === (num | 0)) { 
        return num; 
    }
    
    return (num > 0) ? (num | 0) + 1 : (num | 0);
}


Math.myFloor = function (num) {
    if (num === (num | 0)) {
        return num;
    }

    return (num > 0) ? (num | 0) : (num | 0) - 1;
}


/* Create a factorial function, (3! = 3 * 2 * 1 = 6)... */
Math.factorial = function (num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i ;
    }
    
    if (num === 0) {
        return 1;
    } else if (num < 0) {
        return undefined;
    }
    return result;

}
