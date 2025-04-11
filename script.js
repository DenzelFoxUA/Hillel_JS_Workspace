class Calculator {

    add = function(leftValue, rightValue){
        return leftValue + rightValue;
    }
    
    subtract = function(leftValue, rightValue)
    {
        return leftValue - rightValue;
    }

    multiply = function(leftValue, rightValue)
    {
        return leftValue * rightValue;
    }

    divide = function(leftValue, rightValue)
    {
        return leftValue/rightValue;
    }
    
   }
   
   const calc = new Calculator();
   
   console.log(calc.add(5, 3)); // 8
   
   console.log(calc.subtract(10, 4)); // 6
   
   console.log(calc.multiply(3, 6)); // 18
   
   console.log(calc.divide(8, 2)); // 4