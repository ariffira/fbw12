let API_KEY = '970a387015368152accbac64b1bc37fd';
// get the current weather data by city name
let searchByCity = 'http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=' + API_KEY;
// fetch data
fetch(searchByCity)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.main.temp)
    });

function weatherInfo(cityID) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + API_KEY)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}
let url = 'api.openweathermap.org/data/2.5/weather?zip=94040,us'
//let url='api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid=970a387015368152accbac64b1bc37fd';
function weatherInfoZip(zipID) {
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipID + ',de' + '&appid=' + API_KEY)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}

// window.onload = function () {
//     weatherBallon(6167865);
// }
//The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    var description = d.weather[0].description;
    console.log('celcius=' + celcius, 'fahrenheit=' + fahrenheit, 'description=' + description);
    document.getElementById('description').innerHTML = '<img src="https://openweathermap.org/img/wn/' + d.weather[0].icon + '@2x.png">' + description;
    document.getElementById('temp').innerHTML = '<p><h6>C</h6>' + celcius + '&deg;' + '<h6>F</h6> ' + fahrenheit + '&deg;' + '</p>';
    //document.getElementById('temp2').innerHTML ='<h6>F</h6> '+ fahrenheit+ '&deg;';
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('sunrise').innerHTML=`<img src="sunrise2.jpg" style="width:50px;height=50px;background:white">`+'Sunrise '+ getTime(d.sys.sunrise);
    document.getElementById('sunset').innerHTML=`<img src="sunset.png" style="width:50px;height=50px;background:white">`+'Sunset '+ getTime(d.sys.sunset);

    document.getElementById('wind').innerHTML = "Wind's speed is  " + d.wind.speed + '<br>' + "Wind's deg is  " + d.wind.deg;
    let w = d.weather[0].main.toLowerCase();
    console.log(w);
    if (w == 'rain') {
        //document.getElementById('weatherID').setAttribute('class', 'rainy')
        console.log(w);
        document.body.className = 'rainy';
        // document.getElementById('description').innerHTML+=`<img style="width:50px;height:50px;border-radius:40%" src="rainy1.png">`
    } else if (w == 'clouds') {
        //document.getElementById('weatherID').setAttribute('class', 'cloudy')
        document.body.className = 'cloudy';
        console.log(w);
    } else if (w == 'clear') {
        //document.getElementById('weatherID').setAttribute('class', 'sunny')
        console.log(w);
        document.body.className = 'sunny';
    }
}

function getTime(time){
   let newTime= new Date(time*1000).toLocaleTimeString();
    return newTime;
}
