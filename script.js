
function removeElementFromArray(_array, _element) //first variant like in c++
{
    let _arraySize = _array.length;
    let _indexOfElement = null;

    for(let i = 0; i < _arraySize; i++)
    {
        if(typeof(_array[i]) === typeof(_element) &&
            _array[i] === _element)
        {
            _indexOfElement = i;
            break;
        }

    }

    if(_indexOfElement !== null)
    {
        let bufferElement = null;

        for(let i = _indexOfElement; i < _arraySize; i++)
        {
            bufferElement = _array[i];
            _array[i] = _array[i+1];
            _array[i+1] = bufferElement;
        }
        
        _array.pop();
        _array.length = _arraySize - 1;
    }
    return _array;
}


function removeElementFromArray2(_array, _element)//second variant with splice
{
    
    let _indexOfElement = null;

    for(let i = 0; i < _array.length; i++)
    {
        if(typeof(_array[i]) === typeof(_element) &&
            _array[i] === _element)
        {
            _indexOfElement = i;
            break;
        }

    }

    _array.splice(_indexOfElement, 1);
}

var someArray = [1,2,4,10,201,16,'word',null, false, 111];

someArray = removeElementFromArray(someArray, null);

console.log(someArray);

removeElementFromArray2(someArray, 10);

console.log(someArray);