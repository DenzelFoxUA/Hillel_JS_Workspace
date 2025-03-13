let company = {
    sales : [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
      web: [{name:'Peter', salary: 2000}, {name: 'Alex',salary:1800}],
      internals:[{name:'Jack', salary:1300}]
    }
}


function calculateSumOfSalary(_object)
{
    let result = 0;

    function recursionTraverse(_obj)
    {
        if(Array.isArray(_obj) &&_obj !== null)
        {
            _obj.forEach(_element => {
                if(_element.salary){
                    result+=_element.salary;
                }
            })
        }
        else if(typeof _obj === 'object' && _obj !== null)
        {
            for(let key in _obj)
            {
                if(_obj.hasOwnProperty(key))
                    recursionTraverse(_obj[key]);
            }
        }
    }

    recursionTraverse(_object);
    return result;
}

let total = calculateSumOfSalary(company);
console.log(total);