function gatherData()
{
    let firstValue = document.getElementById("firstValue").value;
    let secondValue = document.getElementById("secondValue").value;
    let thirdValue = document.getElementById("thirdValue").value;
    
    let result = `${firstValue} ${secondValue} ${thirdValue}`;

    alert(result);
    console.log(result);
    return result;
}
