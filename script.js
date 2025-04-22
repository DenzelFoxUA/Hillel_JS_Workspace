document.addEventListener("DOMContentLoaded", function()
{
    const apiWeatherkey = "a9a7e8314d4f8611edeb0be6dc2941d8";
    const countryUkraineCode = "UA"; 
    const city = "Odessa";
    const weatherData = document.querySelector("#weatherDataContainer");
    const refreshBtn = document.querySelector("#refreshWeather");

    loadData();

    refreshBtn.addEventListener("click",()=>{
        loadData();
    })

    function loadData()
    {
        weatherData.innerHTML = "";

        const currentMachineTimeZone = getMachineTimezoneOffset();

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryUkraineCode}&appid=${apiWeatherkey}`).then((res)=>{
            return res.json();
        }).then((data) => {
            console.log(data);

            let cityName = data.name;
            const utcTime = Date.now();
            const timeZone = data.timezone;
            let date;
            if(timeZone === currentMachineTimeZone)
            {
                date = new Date(utcTime);
            }
            else
            {
                date = new Date(utcTime + timeZone * 1000);
            }
            

            let tempCelsious = (data.main.temp - 273.15).toFixed(2);
            let tempCelsiousFeelsLike = (data.main.feels_like - 273.15).toFixed(2);
            let pressure = data.main.pressure;
            let clowdLvl = data.clouds.all;

            let cityHTML = document.createElement("h1");
            cityHTML.textContent = `${cityName}`;
            let dateHTML = document.createElement("h2");
            dateHTML.textContent = `Date: ${date}`
            let temperatureHTML = document.createElement("h2");
            temperatureHTML.textContent = `Temperature, C*: ${tempCelsious}`;
            let tempFeelsLikeHTML = document.createElement("h2");
            tempFeelsLikeHTML.textContent = `Feels like, C*: ${tempCelsiousFeelsLike}`;
            let pressureHTML = document.createElement("h2");
            pressureHTML.textContent = `Pressure: ${pressure}hPa`;
            let clowdLvlHTML = document.createElement("h2");
            clowdLvlHTML.textContent = `Clouds level: ${clowdLvl}`;
            let humidityHTML = document.createElement("h2");
            humidityHTML.textContent = `Humidity: ${data.main.humidity}%`;

            weatherData.appendChild(cityHTML);
            weatherData.appendChild(dateHTML);
            weatherData.appendChild(temperatureHTML);
            weatherData.appendChild(tempFeelsLikeHTML);
            weatherData.appendChild(pressureHTML);
            weatherData.appendChild(clowdLvlHTML);
            weatherData.appendChild(humidityHTML);

        }).catch((err)=>{
            console.error(`${err} - data read error!`);
        })
    }

    function getMachineTimezoneOffset()
    {
        return -1 * (new Date().getTimezoneOffset() * 60);
    }
})