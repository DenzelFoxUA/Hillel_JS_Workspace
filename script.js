let _numArr = [1,2,3,4,5,6,7,8,9,10,11,12];

let _evenNumbers = _numArr.filter(function (_num) {
    if(_num %2 ===0) return _num;
});

console.log(_evenNumbers);