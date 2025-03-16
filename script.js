

function User(name, lastName, age, country, city, street)
{

    if(typeof name === 'string' && typeof lastName === 'string'
        && typeof age === 'number' && typeof country === 'string'
        && typeof country === 'string' && typeof city === 'string'
        && typeof street === 'string'
    )
    {
        this._name = name;
        this._lastName = lastName;
    
        this._address =
        [
            this._country = country,
            this._city = city,
            this._street = street
        ];
        this._age = age;
    }

    this.showInfo = function() {
        console.log(`\tName: ${this._name}
        LastName: ${this._lastName}
        Age: ${this._age}
        Address: ${this._address}`);
    }

    this.getInfo = function() {
        return [this._name, this._lastName, this._age, this._country, this._street];
    }
}

let user1 = new User("Bill","Murray",60, "USA", "Los-Angeles", "Stars blvd");

user1.showInfo();

let _data = user1.getInfo();

console.log(_data);