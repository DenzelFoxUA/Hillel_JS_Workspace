
function sum(number)
{
    var result = 0;

    return function(number){
        if(!isNaN(number))
        {
           return result += number;
            
        }
        else
        {
            return result;
        }
    }
}


let myFuncResult = sum(0);

console.log(myFuncResult(2));
console.log(myFuncResult(4));
