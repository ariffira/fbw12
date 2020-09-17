let apiKey = '63b255f1c71fc57000f933b2def47a10';

showWeather('mönchengladbach');

function showWeather(x) {
    console.log(x)
    var link = `http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${apiKey}`;
    console.log(link)
    fetch(link)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            var countryImgSrc = 'http://openweathermap.org/images/flags/' + data.sys.country.toLowerCase() + '.png';
            //console.log(countryImgSrc)
            var weatherImgSrc = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'

            dCityName.innerHTML = `
            ${data.name} / ${data.sys.country} <img src="${countryImgSrc}" style="height: 24px">
            `;

            dTempWether.innerHTML = `
            <h1><img src="${weatherImgSrc}"> ${toCelsius(data.main.temp)}<h1>
            <h4>${toCelsius(data.main.temp_max)} /${toCelsius(data.main.temp_min)} | Feeling: ${toCelsius(data.main.feels_like)}</h4>
            <h1 title="${data.weather[0].description}">${data.weather[0].main}</h1>
            `;

            dMoreInfo1.innerHTML = `<br>
            <h3>Pressure: ${data.main.pressure} hpa</h3>
            <h3>Wind speed: ${data.wind.speed} m/s</h3>
            <h3>Clouds: ${data.clouds.all} %</h3>
            <h3>Sun rise: ${toTime(data.sys.sunrise).toLocaleTimeString()}</h3>
            `;

            dMoreInfo2.innerHTML = `<br>
            <h3>Humidity: ${data.main.humidity} %</h3>
            <h3>Wind degrees: ${data.wind.deg}\xB0</h3>
            <h3>Rain: ${checkRain()} m/h</h3>
            <h3>Sun set: ${toTime(data.sys.sunset).toLocaleTimeString()}</h3>
            `;

            function checkRain() {
                if (data.rain)
                    return data.rain["1h"];
                else
                    return '0';

            }

            let urlDaily = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely&appid=${apiKey}`;
            showDailyWether(urlDaily);
        });
}

function showDailyWether(x) {
    console.log(x);
    fetch(x)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            dMoreInfo0.innerHTML = `
            <h5>${toTime(data.current.dt).toDateString()}</h5>
            `;
            dDailyID.innerHTML = ``;
            for (let i = 1; i < 7; i++) {
                var weatherImgSrc = 'https://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png'


                dDailyID.innerHTML += `
                <div class="col-2 text-center my-3">
                <h5>${toTime(data.daily[i].dt).toDateString()}</h5>
                <h5><img src="${weatherImgSrc}"><h5>
                <h5>${toCelsius(data.daily[i].temp.max)} /${toCelsius(data.daily[i].temp.min)}</h5>
                <h5 title="${data.daily[i].weather[0].description}">${data.daily[i].weather[0].main}</h5>
                </div>
                `;

            }
        });

}

function toCelsius(x) {
    return Math.round(x - 273.15) + '\xB0C';
}
function toTime(x) {
    return new Date(x * 1000);
}









// var today = new Date();  \xB0C
// var str = today.toGMTString();  
// console.log(str);   