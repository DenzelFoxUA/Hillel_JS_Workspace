// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

function gatherInfo() {
    
    let numOrStr = document.getElementById("textOrNum").value;

    switch(numOrStr)
    {
        case null: console.log('ви скасували'); break;
        case '': console.log('Empty String'); break;
        case !isNaN(+numOrStr) || numOrStr: console.log(' number is Ba_NaN'); break;
        default: console.log('OK!'); break;
    }

}

