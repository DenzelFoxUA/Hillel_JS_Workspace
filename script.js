
function calculateNumber()
{

    let _startNumber = 1;
    let _finishNumber = 100;

    let _inputNum = document.getElementById("inputNum").value;

    for(let i = _startNumber; i <= _finishNumber; ++i)
    {
        let result = i * i;

        if(result <= _inputNum)
            console.log(result);
        else
            break;
    }

}
