function takeData()
{
    let _numMin = 100;
    let _maxReps = 10;

    for(let i = 1; i <= _maxReps; i++)
    {
        let _num = prompt("Input number higher or equal to 100");

        if(_num >= _numMin)
        {
            console.log(`You have entered ${_num}`);
            break;
        }
        else
        {
            alert(`You entered wrong number. Must be bigger than ${_numMin}`);
        }

        if(_maxReps === i)
        {
            alert(`Maximum limit of reps reached: ${_maxReps}`);
        }
    }

}