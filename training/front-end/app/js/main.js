"use strict";
var Calculator = function () {
    var memory = 0;
    this.min = function (numbers, pos) {
        if (pos === numbers.length - 1) {
            return numbers[pos];
        }
        var val = this.min(numbers, pos + 1);
        if (numbers[pos] < val) {
            return numbers[pos];
        } else {
            return val;
        }
    };
    
    this.max = function (numbers, pos) {
        if (pos === numbers.length - 1) {
            return numbers[pos];
        }
        var val = this.max(numbers, pos + 1);
        if (numbers[pos] > val) {
            return numbers[pos];
        } else {
            return val;
        }
    };
        
    this.avg = function (numbers, pos, n) {
        if (pos === numbers.length - 1) {
            return numbers[pos];
        }
        if (pos === 0) {
            return ((numbers[pos] + this.avg(numbers, pos + 1, n)) / n);
        } else {
            return (numbers[pos] + this.avg(numbers, pos + 1, n));
        }
    };
        
    this.sum = function (numbers, pos) {
        if (pos === numbers.length - 1) {
            return numbers[pos];
        }
        return numbers[pos] + this.sum(numbers, pos + 1);
    };
        
    this.calculateAll = function () {
        console.log('min: ' + this.min(arguments, 0));
        console.log('max: ' + this.max(arguments, 0));
        console.log('average: ' + this.avg(arguments, 0, arguments.length));
        console.log('sum: ' + this.sum(arguments, 0));
    };
        
    this.addNumbers = function (numbers) {
        if (numbers.length > 1) {
            if (memory > 0) {
                memory = numbers[0] + numbers[1];
            } else {
                memory = memory + numbers[0] + numbers[1];
            }
        } else {
            memory = memory + numbers[0];
        }
        return memory;
    };
    
    this.add = function () {
        console.log(this.addNumbers(arguments));
    };
};
    
var calc = new Calculator();
calc.calculateAll(3,4,5,6,7,8);