/**
 * Created by Wilder Gonzales on 6/6/2015.
 */

var calculateAll = function () {
    //var args = Array.prototype.slice.call(arguments); //alternative for sum1
    console.log('min: ' + min(arguments, 0));
    console.log('max: ' + max(arguments, 0));
    console.log('average: ' + avg(arguments, 0, arguments.length));
    console.log('sum: ' + sum(arguments, 0));
};

var min = function (numbers, pos) {
    if (pos == numbers.length - 1) {
        return numbers[pos];
    }

    var val = min(numbers, pos + 1);

    if (numbers[pos] < val) {
        return numbers[pos];
    } else {
        return val;
    }
};

var max = function (numbers, pos) {
    if (pos == numbers.length - 1) {
        return numbers[pos];
    }

    var val = max(numbers, pos + 1);

    if (numbers[pos] > val) {
        return numbers[pos];
    } else {
        return val;
    }
};

var avg = function (numbers, pos, n) {
    if (pos == numbers.length - 1) {
        return numbers[pos];
    }
    if (pos == 0) {
        return ((numbers[pos] + avg(numbers, pos + 1, n)) / n);
    } else {
        return (numbers[pos] + avg(numbers, pos + 1, n));
    }
};

var sum = function (numbers, pos) {
    if (pos == numbers.length - 1) {
        return numbers[pos];
    }
    return numbers[pos] + sum(numbers, pos + 1);
}

var sum1 = function (array) {
    if (array.length === 0) {
        return 0;
    } else return array.shift() + sum(array);
};

calculateAll(1,2,3,4,5,6,7,8);