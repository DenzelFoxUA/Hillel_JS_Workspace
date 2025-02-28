function gatherAndOperateData()
{
    let _sentence = document.getElementById("sentence").value;
    let _charsToDelete = document.getElementById("charsToDelete").value;

    let _charArray = [];

    for(let i = 0; i < _charsToDelete.length; i++)
    {
        _charArray.push(_charsToDelete[i]);
    }

    let result = trimSentence(_sentence, _charArray);
    return result;
}


function trimSentence(_sentence, _characters = [])
{
    let _result = "";

    if(_sentence != null && _sentence != "")
    {
        _result = _sentence;

        for(let i = 0; i < _characters.length; i++)
        {
            _result = _result.split(_characters[i]).join("");
        }
        
        console.log(_result);
        alert(_result);
        return _result;
    }
    else
    {
        alert("Empty sentense field is not allowed");
        return null;
    }
}