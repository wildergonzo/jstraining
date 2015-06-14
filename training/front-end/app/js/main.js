/**
 * Created by Wilder Gonzales on 6/6/2015.
 */

var calculateAll =  function(){
    var args = Array.prototype.slice.call(arguments);
    //console.log('min: ' + min());
    //console.log('max: ' + max());
    //console.log('average: ' + avg());
    console.log('sum: ' + sum(arguments, 0));
    //console.log('sum: ' + sum(args));
};

var min = function(){

};

var sum = function(numbers, pos){
    if(pos==numbers.length -1){
        return numbers[pos];
    }
    return numbers[pos] + sum(numbers, pos+1);
}

var sum1 = function(array){
    if (array.length === 0){
        return 0;
    }
    else return array.shift() + sum(array);
};

calculateAll(1,2,3,4);