// Array
let city = ["Berlin", "DCI", "Hüttenstrasse 100", 45130];
//    let city_name = city[0];
//    let company_name = city[1];
//destructuring array
let [city_name, company_name, address, zip] = city;
console.log(city_name);

console.log('**********************************');
let [name, age, country, salary] = ["Arif", 32, "BD", 65000]
console.log(name, age, country, salary);


console.log('**********************************');

// rest parameter: receive inside function
// rest parameter takes rest of the arguments as an array
function restFunc(...restParameter) { // receive data
  console.log(restParameter);
  let multi = 1;
  for (let i = 0; i < restParameter.length; i++) {
    multi = multi * restParameter[i]
  }
  console.log(multi);
}

restFunc(5, 3, 2);//30
restFunc(1, 4, 6, 8, 10, 14, 14, 15, 19)

console.log('**********************************');

// spread operator: send into function
function spreadFunc(a, b) {
  console.log(a * b);
}

let array1 = [10, 5]
spreadFunc(...array1);// array1[0], array[1]

console.log('**********************************');

//with object 
const pieIngredients = { pumpkin: '1 can', pieCrust: '1 crust', spice: '2 tsp'};
const { pumpkin, pieCrust, spice} = pieIngredients;
console.log(pumpkin); 
console.log(pieCrust);
console.log(spice);

console.log('**********************************');

/// another way 
const car = {speed: 110, color: 'red'};
const { speed: fast, color: cherry } = car;
console.log(fast);
console.log(cherry);

console.log('**********************************');

///
const girl = {
  name: 'Paige',
  age: 30,
  eyeColor: 'blue',
  hair: {
    type: 'curly',
    color: 'red',
    length: 'shoulder-length'
  }
}
const getUserName = ({name}) => {
  return {name};
}
console.log(getUserName(girl));
const getUserHair = ({hair: {type, color}}) => {
  return `Her hair is ${color} and ${type}`;
}
console.log(getUserHair(girl));

console.log('**********************************');

///object with rest 
let myObjectOfNums = {
  ex: 'ten',
  why: 'twnety',
  zed: 'thirty',
  dee: 'forty',
  ee: 'fifty'
}
let { ex: a, why: b, zed, ...allOthers } = myObjectOfNums;
console.log(a);
console.log(b); 
console.log(zed); 
console.log(allOthers); 

console.log('**********************************');

//
var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, third, fourth, ...rest] = ["Mercury", "Earth", ...planets];
console.log(first); 
console.log(second); 
console.log(third); 
console.log(fourth); 
console.log(rest); 

console.log('**********************************');

// multi 
var places = ["first", "second", "third", "fourth"];
var [aa, bb, , dd] = [ff, ...rrest] = places;
console.log(aa);
console.log(dd);
console.log(ff);
console.log(rrest);


console.log('**********************************');

//
let [a1, b2, c3] = "abc"; // ["a", "b", "c"]
console.log(a1, b2, c3)


console.log('**********************************');

//
let user = {
  name: "John",
  age: 30
};


for (let [key, value] of Object.entries(user)) {// loop over keys-and-values
  console.log(`${key}:${value}`);
}


console.log('**********************************');

console.log('**********************************');

//
//

function showWeather(x) {
  console.log(x)
  var link = `http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=63b255f1c71fc57000f933b2def47a10`;
  console.log(link)
  fetch(link)
      .then(response => response.json())
      .then(data => {
          console.log(data)


          var {
            weather: [
              {main}
            ], 
            wind : {
              speed, 
              deg
            },
            clouds: {all},
            name: cityName,
            ...rest
          } = data;


          document.getElementById('weatherData').innerHTML = `
          <h1>City name: ${cityName}</h1>
          <h1>Weather: ${main}</h1>
          <h1>Wind speeed: ${speed}</h1>
          <h1>Wind deg: ${deg}</h1>
          <h1>Clouds: ${all}</h1>
          <h1>Other data: in console log</h1>`
          console.log(rest)
      });
}