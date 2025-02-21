function doProcessing() {
    let num = document.getElementById("numValue").value;

    if(num > 999 || num < 100)
    {
        alert("Wrong number!");
        return null;
    }
    
    let digit1 = Math.floor(num / 100);
    let digit2 = Math.floor(num / 10) % 10;
    let digit3 = num % 10;


    if(digit1 === digit2 && digit2 === digit3)
    {
        alert("All digits in your entrie are the same.");
    }
    else if(digit1 === digit2 || digit1 === digit3 || digit2 === digit3)
    {
        alert("There are two same digits in your entrie.");
    }
    else
    {
        alert("There is no same digits in your entrie.")
    }
    
}

