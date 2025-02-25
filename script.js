
let _currencyUS = 26.00;

let _lowestValue_USD = 10;
let _highestValue_USD = 100;

let _interval_USD = 10;

while(_lowestValue_USD <= _highestValue_USD)
{
    console.log(`${_lowestValue_USD} * ${_currencyUS} = ${_lowestValue_USD * _currencyUS}`);
    _lowestValue_USD += _interval_USD;
}
