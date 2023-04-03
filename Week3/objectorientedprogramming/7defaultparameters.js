//1

// function noDefaultParameters() {
//     console.log('Result:', number * number);
// }

// noDefaultParameters();// ReferenceError: number is not defined

// 2

/* function withDefaultParameters(number = 10) {
    console.log('Result:', number * number);
}

withDefaultParameters();// Result: 100 */

// 3

/*class noDefaultParameters {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1, this.num2, this.num3);
            return;
        }
        return 'The value of bool1 is incorrect';
    }
}

var fail = new noDefaultParameters(1, 2, 3, false);
console.log(fail.calculate()); // The value of bool1 is incorrect

 */

 /* class withDefaultParameters {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = 'Result:', bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return 'The value of bool1 is incorrect'
    }
}

var better = new withDefaultParameters();
better.calculate(); // Result: 6  */


class noDefaultParameters {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1+this.num2+this.num3);
            return;
        }
        console.log('The value of bool1 is incorrect');
    }
}

var fail = new noDefaultParameters( 1, 2, 3, 'Result:', false);
fail.calculate(); // The value of bool1 is incorrect

