function Person(name, lastName, age)
{
    if(name !== null && lastName !== null 
        && typeof name === 'string' 
        && typeof lastName === 'string'
        && typeof age === 'number')
    {
            this._name = name;
            this._lastName = lastName;
            this._age = age;
    }
    else
    {
        this._name = null;
        this._lastName = null;
        this._age = null;
    }

    this.showInfo = () => {
        console.log(`name: ${this._name} \nlast name: ${this._lastName} \nage: ${this._age}`);
        return this;
    
    }
}


let first = new Person("Bill", "Murray", 63);

const firstCopy = {...first};

first.showInfo();
firstCopy.showInfo();

first._lastName = "Mitchell";

first.showInfo();
firstCopy.showInfo();