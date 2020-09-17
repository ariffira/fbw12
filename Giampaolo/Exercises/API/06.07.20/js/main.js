let myApiKey = 'ba70b22983cb5e0702b08a63ce6c5178'

let getData = (item) => {
    console.log(item)
    return item.json()
}

let findCityPic = (name, object) => {
    object.name
}

let getHourFromSec = (num) => {
    let date = new Date(num * 1000);
    console.log(date);
    return `${date.getHours()}:${date.getMinutes()}`
}

let check = (input) => {
    let city = input
    let cityResearch = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myApiKey}`

    fetch(cityResearch)
    .then(getData)
    .then((item) => {
        let description = item.weather[0].description;
        let capitalizeDescription = description.charAt(0).toUpperCase() + description.slice(1);
        let temp = Math.round(item.main.temp - 273.15);
        let tempMax = Math.round(item.main.temp_max - 273.15);
        let tempMin = Math.round(item.main.temp_min - 273.15);
        let tempFelt = Math.round(item.main.feels_like - 273.15);

        let tempPic, tempFeltPic;

        if (temp < 15) {
            tempPic = 'cold'
        } else if (temp > 28) {
            tempPic = 'hot'
        } else {
            tempPic = 'temperature'
        }

        if (tempFelt < 15) {
            tempFeltPic = 'cold'
        } else if (tempFelt > 28) {
            tempFeltPic = 'hot'
        } else {
            tempFeltPic = 'temperature'
        }

        let sunrise = getHourFromSec(item.sys.sunrise);
        let sunset = getHourFromSec(item.sys.sunset);

        let rain;
        if (item.rain == undefined) {
            rain = '<div></div>'
        } else {
            rain = `<h4 id="rainId">${item.rain['1h']} mm</h4>`;
        }

        console.log(item),
        deck.innerHTML = `
        <div id="city${item.id}" class="card my-3 bg-transp-black">
            <div class="row no-gutters">
                <div class="col-md-4 d-flex justify-content-center">
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <img class="mw-100" src="images/${item.weather[0].icon}.png" class="card-img" alt="${item.name}_city"><br>
                        <h2>${item.weather[0].main}</h2>
                        ${rain}
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="d-flex flex-column align-items-center my-2">
                            <img class="mw-60 mr-5" src='images/${item.name}.jpg' alt='${item.name}_city'>
                            <h1 class="card-title">${item.name}, ${item.sys.country}</h1>
                        </div>
                        <div class="row">
                            <ul class="list-group col-md-6" id="data${item.weather[0].id}">
                                <li class="list-group-item bg-transp"><img class="listPic" src="images/${tempPic}.png" alt="Termometer_pic">Temp: ${temp} °C</li>
                                <li class="list-group-item bg-transp"><img class="listPic" src="images/temperature.png" alt="Termometer_pic">Max/Min: ${tempMax} °C / ${tempMin} °C</li>
                                <li class="list-group-item bg-transp"><img class="listPic" src="images/${tempFeltPic}.png" alt="Termometer_pic">Felt: ${tempFelt} °C</li>
                                <li class="list-group-item bg-transp"><img class="listPic" src="images/wind.png" alt="Wind_pic"> <b>Wind:</b> ${item.wind.speed} Km/h</li>
                                <li class="list-group-item bg-transp d-flex justify-content-around">
                                    <div class="d-flex flex-column align-items-center justify-content-center">
                                        <b>Sunrise</b>
                                        <img class="listPic" src="images/sunrise.png">
                                        ${sunrise}
                                    </div>
                                    <div class="d-flex flex-column align-items-center justify-content-center">
                                        <b>Sunset</b>
                                        <img class="listPic" src="images/sunset.png">
                                        ${sunset}
                                    </div>
                                </li>
                            </ul>
                            <ul class="list-group col-md-6" id="data${item.weather[0].id}">
                                <li class="list-group-item bg-transp"><img class="listPic" src="images/humidity.png" alt="Barometer_pic"> <b>Humidity:</b> ${item.main.humidity} %</li>
                                <li class="list-group-item bg-transp"><img class="listPic mr-3" src="images/${item.weather[0].icon}.png" alt="${item.weather[0].main}_pic">${capitalizeDescription}<br><b>Clouds:</b> ${item.clouds.all} %</li>
                                <li class="list-group-item bg-transp"><i class="far fa-eye"></i> <b>Visibility:</b> ${item.visibility}</li>
                                <li class="list-group-item bg-transp"><img class="listPic" src="images/pressure.png" alt="Barometer_pic"> <b>Pressure:</b> ${item.main.pressure}</li>
                            </ul>
                        </div>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        `

})
}