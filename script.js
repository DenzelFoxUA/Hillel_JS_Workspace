
function arrayAverageNumCalculator()
{
    let arrayLastIndex = _someArray.length - 1;
    let counter = 0;
    let sum = 0;

    while(arrayLastIndex >= 0)
    {
        if(typeof(_someArray[arrayLastIndex]) === 'number')
        {
            counter++;
            sum += _someArray[arrayLastIndex];
            arrayLastIndex--;
        }
        else
        {
            arrayLastIndex--;
            continue;
        }
    }

    return sum/counter;
    
}


var _someArray = [2, 12, 100, 'Alice', 'brown', true, 'Sam', false, 2002];

console.log(arrayAverageNumCalculator(_someArray));
