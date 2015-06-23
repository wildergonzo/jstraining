"use strict";
// Task1: Create Calculator class with Min, Max, Sum and Average methods.
var Calculator = function () {
    var memory = 0;
    this.getMemory = function () {
        return memory;
    };
    this.setMemory = function(newValue) {
        memory = newValue;
        return memory;
    };
    
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
};

// Task2: Add methods to Calculator using Prototype. 
Calculator.prototype.add = function (num1,num2) {
    if(!num2)
        return this.setMemory(this.getMemory() + num1);
    this.setMemory(num1 + num2);
    return this.getMemory();
};

Calculator.prototype.substract = function (num1,num2) {
    if(!num2)
        return this.setMemory(this.getMemory() - num1);
    this.setMemory(num1 - num2);
    return this.getMemory();
};

Calculator.prototype.multiply = function (num1,num2) {
    if(!num2)
        return this.setMemory(this.getMemory() * num1);
    this.setMemory(num1 * num2);
    return this.getMemory();
};

Calculator.prototype.divide = function (num1,num2) {
    if(!num2)
        return this.setMemory(this.getMemory() / num1);
    this.setMemory(num1 / num2);
    return this.getMemory();
};

Calculator.prototype.reset = function () {
    this.setMemory(0);
    return this.getMemory();
};
    
var calc = new Calculator();
calc.calculateAll(3,4,5,6,7,8);