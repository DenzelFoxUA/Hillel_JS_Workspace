function calculateResult()
{
    let _isSimple = false;
    let _num = document.getElementById("numValue").value;

    for(let i = 2; i <= _num; i++)
    {
        if(_num % i === 0 && i != _num)
        {
            _isSimple = false;
            break;
        }
        else
        {
            _isSimple = true;
        }
    
    }
    console.log(`${_num} is simple? - ${_isSimple}`);

    return _isSimple;
}