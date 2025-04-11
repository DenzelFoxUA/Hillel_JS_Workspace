
function Student (name, lastName, birthYear) {
    
    Object.defineProperty(this, "arraySize", {
        value: 25,
        enumerable: false,
        writable: false,
        configurable: false
    })

    const gradesArr = new Array(this.arraySize).fill(0);
    const presenceArr = new Array(this.arraySize).fill(false);

    Object.defineProperty(this, "gradesArr", {
        enumerable: false,
        writable:true
    })

    Object.defineProperty(this, "presenceArr", {
        enumerable: false,
        writable:true
    })

    Object.defineProperty(this, "grades", {
        get: function(){
            return gradesArr;
        },

        set: function(_arr) {
            if(Array.isArray(_arr) && _arr.length <= this.arraySize)
            {
                for(let i = 0; i < gradesArr.length; i++)
                {
                    gradesArr[i] = _arr[i] !== undefined ? _arr[i] : 0;
                }
            }
            else
            {
                console.log("Wrong size of array or this is not an array!");
            }
        }
    })

    Object.defineProperty(this, "presence", {
        get: function(){
            return presenceArr;
        },

        set: function(_arr) {
            if(Array.isArray(_arr) && _arr.length <= this.arraySize)
            {
                for(let i = 0; i < presenceArr.length; i++)
                {
                    presenceArr[i] = _arr[i] !== undefined ? _arr[i] : 0;
                }
            }
            else
            {
                console.log("Wrong size of array or this is not an array!");
            }
        }
    })

    Object.defineProperty(this, "name", {
        value: name,
        enumerable: true,
        writable: false
    })

    Object.defineProperty(this, "lastName", {
        value: lastName,
        enumerable: true,
        writable: false
    })

    Object.defineProperty(this, "birthYear", {
        value: birthYear,
        enumerable: true,
        writable:false
    })

    this.addGrade = function(index, _value){
        if(index >= 0 && index < this.grades?.length && _value > 0 && _value <= 12)
        {
            this.grades[index] = _value;
        }
        else
            console.log("Wrong index!");
    }

    this.removeGrade = function(index)
    {
        if(index >= 0 && index < this.grades?.length)
            grades[index] = 0;
        else
            console.log("Wrong index!");
    }

    this.isPresent = function(index, value)
    {
        if(typeof(value) === 'boolean' && index >= 0 && index < this.presence?.length)
        {
            this.presence[index] = value;
        }
        else
        {
            console.log("Wrong parameters!");
        }
    }

    this.showInfo = function()
    {
        let fullName = `${name} ${lastName}`;
        let age = this.getAge();
        let _grades = "";
        let _presence = "";
        this.grades.forEach(grade => {
            _grades += `${grade} `;  
        });
        this.presence.forEach(lesson => {
            _presence += `${lesson} `;
        })

        console.log(`${fullName}\nAge: ${age}\nPresence: ${_presence}\nGrades: ${_grades}`);
    }

    this.getAge = function(){
        const todayYear = new Date().getFullYear();
        return todayYear - birthYear;
    }

    this.summary = function(){
        let fullName = `${name} ${lastName}`;

        let sum = 0;

        let avgGrade = 0;
        let avgPresence = 0;

        for(let i = 0; i < gradesArr.length; i++)
        {
            sum +=gradesArr[i];
        }
        avgGrade = sum/gradesArr.length;
        sum = 0;

        this.presence.forEach(element => {
            sum += element;
        });
        avgPresence = sum / this.presence.length;

        if(avgGrade > 9 && avgPresence > 0.9)
        {
            console.log(`${fullName} - good student`);
        }
        else if(avgGrade > 9 || avgPresence > 0.9)
        {
            console.log(`${fullName} - you can do better`);
        }
        else
        {
            console.log(`${fullName} - poor effort!`);
        }
    }
}

let student = new Student("Bill", "Murray", 1990);
student.addGrade(0,10);
student.isPresent(0,true);

student.grades = [10,10,10,12,9,7,5,8,9,0,9,10,10,10,12,9,7,5,8,9,0,11,7,5,7];
student.presence = [true, true, true,true, true, true,true, true, true,false,
    true, true, true,true, true, true,true, true, true,false,
    true, true, true,true, true]
student.showInfo();
student.summary();

let student2 = new Student("Sam", "Fisher", 1989);
student2.addGrade(0,11);
student2.isPresent(0,true);

student2.grades = [10,10,10,12,10,11,10,8,9,10,9,10,10,10,12,9,7,10,8,9,10,11,9,10,9];
student2.presence = [true, true, true,true, true, true,true, true, true,true,
    true, true, true,true, true, true,true, true, true,false,
    true, true, true,true, true]
student2.showInfo();
student2.summary();
