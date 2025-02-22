
const footballers = ["Pele","Totti","Maldini","Benzema"];
const racers = ["Schumacher", "Alonso","Hamilton"];
const tennisists = ["Agassi","Tilden","Sampras"];
const basketballers = ["Shaquill O'Neil","Abdul-Jabar","LeBron James", "Mikel Jordan"];
const boxers = ["Klichko", "Tyson Fury", "Lenox Lewis"];

function doProcessing() {

    let _age = ageCalculate(document.getElementById("yearOfBirthValue").value);
    let _city = document.querySelector('#city').value;
    let _sport = document.querySelector('#sport').value;


    if(_age === null || _age === 0)
    {
        alert("It's a shame you didnt enter year of birth");
        return null;
    }

    if(_city === 'unselected')
    {
        alert("You didnt mention your city");
        return null;
    }

    if(_sport === 'unselected')
    {
        alert("You didnt mention your favorite sport");
        return null;
    }

    let cityString = '';
    let sportsmanString = '';

    switch(_city)
    {
        case "Kyiv": cityString = "Kyiv - capital of Ukraine"; break;
        case "London": cityString = "London - capital of UK"; break;
        case "Prague": cityString = "Prague - capital of Czech Republic"; break;
        case "Brno": cityString = "Brno, Czech Republic"; break;
        case "Rome": cityString = "Rome - capital of Italy"; break;
        case "Dnipro": cityString = "Dnipro, Ukraine"; break;
        case "Kharkiv": cityString = "Kharkiv, Ukraine"; break;
        case "Milan": cityString = "Milan, Italy"; break;
        case "Liverpool": cityString = "Liverpool, UK"; break;
        
    }

    switch(_sport) {

        case "Football": 
        sportsmanString = footballers[Math.floor(Math.random() * footballers.length)]; 
            break;
        case "Basketball": sportsmanString = basketballers[Math.floor(Math.random() * basketballers.length)];
            break;
        case "Racing": sportsmanString = raceers[Math.floor(Math.random() * racers.length)];
            break;
        case "Tennis": sportsmanString = tennisists[Math.floor(Math.random() * tennisists.length)]; 
            break;
        case "Boxing": sportsmanString = boxers[Math.floor(Math.random() * boxers.length)]; 
            break;
    }

    alert(`Your age is ${_age}. You live in ${cityString}. 
        Your favorite sport is ${_sport}. 
        Whant to be like ${sportsmanString}`);

}

function ageCalculate(year) {

    let yearToday = new Date().getFullYear();
    if(year > 0 && year < yearToday)
    {
        return yearToday - year;
    }
    else
    {
        alert("wrong year entrie!");
        return null;
    }
        
}


