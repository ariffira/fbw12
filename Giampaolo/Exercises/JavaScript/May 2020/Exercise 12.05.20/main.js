/*
let world = [
    {
        country: 'Germany',
        city: [
            'Düsseldorf',
            {
                infections: 200,
                deaths: 9,
                recovery: 120
            }
        ]
    },
    {
        country: 'Spain',
        city: [
            'Madrid',
            {
                infections: 500,
                deaths: 54,
                recovery: 280
            }
        ]
    },
    {
        country: 'USA',
        city: [
            'New York',
            {
                infections: 1200,
                deaths: 160,
                recovery: 400
            }
        ]
    },
    {
        country: 'Russia',
        city: [
            'Moscow',
            {
                infections: 358,
                deaths: 67,
                recovery: 97
            }
        ]
    },
    {
        country: 'Italy',
        city: [
            'Rome',
            {
                infections: 694,
                deaths: 20,
                recovery: 502
            }
        ]
    }
]

let prefGermany = 'de';
let prefSpain = 'sp';
let prefUsa = 'us';
let prefRussia = 'ru';
let prefItaly = 'it';

let country = 'Country';
let city = 'City';
let infected = 'Infections';
let death = 'Deaths';
let recover = 'Recovery';

console.log(world);
console.table(world);

// Germany
document.getElementById(prefGermany + country).innerHTML = world[0].country;
document.getElementById(prefGermany + city).innerHTML = world[0].city[0];
document.getElementById(prefGermany + infected).innerHTML = world[0].city[1].infections;
document.getElementById(prefGermany + death).innerHTML = world[0].city[1].deaths;
document.getElementById(prefGermany + recover).innerHTML = world[0].city[1].recovery;

console.log('--------------------------------');
console.log(world[0].country);
console.log('City: ' + world[0].city[0]);
console.log('Infected: ' + world[0].city[1].infections);
console.log('Deaths: ' + world[0].city[1].deaths);
console.log('Recovered: ' + world[0].city[1].recovery);

// Spain
document.getElementById(prefSpain + country).innerHTML = world[1].country;
document.getElementById(prefSpain + city).innerHTML = world[1].city[0];
document.getElementById(prefSpain + infected).innerHTML = world[1].city[1].infections;
document.getElementById(prefSpain + death).innerHTML = world[1].city[1].deaths;
document.getElementById(prefSpain + recover).innerHTML = world[1].city[1].recovery;

console.log('--------------------------------');
console.log(world[1].country);
console.log('City: ' + world[1].city[0]);
console.log('Infected: ' + world[1].city[1].infections);
console.log('Deaths: ' + world[1].city[1].deaths);
console.log('Recovered: ' + world[1].city[1].recovery);

// USA
document.getElementById(prefUsa + country).innerHTML = world[2].country;
document.getElementById(prefUsa + city).innerHTML = world[2].city[0];
document.getElementById(prefUsa + infected).innerHTML = world[2].city[1].infections;
document.getElementById(prefUsa + death).innerHTML = world[2].city[1].deaths;
document.getElementById(prefUsa + recover).innerHTML = world[2].city[1].recovery;

console.log('--------------------------------');
console.log(world[2].country);
console.log('City: ' + world[2].city[0]);
console.log('Infected: ' + world[2].city[1].infections);
console.log('Deaths: ' + world[2].city[1].deaths);
console.log('Recovered: ' + world[2].city[1].recovery);

// Russia
document.getElementById(prefRussia + country).innerHTML = world[3].country;
document.getElementById(prefRussia + city).innerHTML = world[3].city[0];
document.getElementById(prefRussia + infected).innerHTML = world[3].city[1].infections;
document.getElementById(prefRussia + death).innerHTML = world[3].city[1].deaths;
document.getElementById(prefRussia + recover).innerHTML = world[3].city[1].recovery;

console.log('--------------------------------');
console.log(world[3].country);
console.log('City: ' + world[3].city[0]);
console.log('Infected: ' + world[3].city[1].infections);
console.log('Deaths: ' + world[3].city[1].deaths);
console.log('Recovered: ' + world[3].city[1].recovery);

// Italy
document.getElementById(prefItaly + country).innerHTML = world[4].country;
document.getElementById(prefItaly + city).innerHTML = world[4].city[0];
document.getElementById(prefItaly + infected).innerHTML = world[4].city[1].infections;
document.getElementById(prefItaly + death).innerHTML = world[4].city[1].deaths;
document.getElementById(prefItaly + recover).innerHTML = world[4].city[1].recovery;

console.log('--------------------------------');
console.log(world[4].country);
console.log('City: ' + world[4].city[0]);
console.log('Infected: ' + world[4].city[1].infections);
console.log('Deaths: ' + world[4].city[1].deaths);
console.log('Recovered: ' + world[4].city[1].recovery);
*/
let tableArray = [
    'table',
    'table1',
    'table2',
    [
        'part',
        'part1',
        'part2',
        [
            'test',
            'test1',
            'test2'
        ],
        [
            'test',
            'test1',
            'test2'
        ]
    ],
    'table3',
    [
        'part',
        'part1',
        'part2',
        [
            'test',
            'test1',
            'test2'
        ],
        [
            'test',
            'test1',
            'test2'
        ]
    ]
]

console.table(tableArray);
console.log(tableArray);

let world = [
    ['Germany', ['Düsseldorf', [200, 9, 120]]],
    ['Spain', ['Madrid', [500, 54, 280]]],
    ['USA', ['New York', [1200, 160, 400]]],
    ['Russia', ['Moscow', [358, 67, 97]]],
    ['Italy', ['Rome', [694, 20, 502]]]
]

let prefGermany = 'de';
let prefSpain = 'sp';
let prefUsa = 'us';
let prefRussia = 'ru';
let prefItaly = 'it';

let country = 'Country';
let city = 'City';
let infected = 'Infections';
let death = 'Deaths';
let recover = 'Recovery';

console.log(world);

// Germany
document.getElementById(prefGermany + country).innerHTML = world[0][0];
document.getElementById(prefGermany + city).innerHTML = world[0][1][0];
document.getElementById(prefGermany + infected).innerHTML = world[0][1][1][0];
document.getElementById(prefGermany + death).innerHTML = world[0][1][1][1];
document.getElementById(prefGermany + recover).innerHTML = world[0][1][1][2];

console.log('--------------------------------');
console.log(world[0][0]);
console.log('City: ' + world[0][1][0]);
console.log('Infected: ' + world[0][1][1][0]);
console.log('Deaths: ' + world[0][1][1][1]);
console.log('Recovered: ' + world[0][1][1][2]);

// Spain
document.getElementById(prefSpain + country).innerHTML = world[1][0];
document.getElementById(prefSpain + city).innerHTML = world[1][1][0];
document.getElementById(prefSpain + infected).innerHTML = world[1][1][1][0];
document.getElementById(prefSpain + death).innerHTML = world[1][1][1][1];
document.getElementById(prefSpain + recover).innerHTML = world[1][1][1][2];

console.log('--------------------------------');
console.log(world[1][0]);
console.log('City: ' + world[1][1][0]);
console.log('Infected: ' + world[1][1][1][0]);
console.log('Deaths: ' + world[1][1][1][1]);
console.log('Recovered: ' + world[1][1][1][2]);

// USA
document.getElementById(prefUsa + country).innerHTML = world[2][0];
document.getElementById(prefUsa + city).innerHTML = world[2][1][0];
document.getElementById(prefUsa + infected).innerHTML = world[2][1][1][0];
document.getElementById(prefUsa + death).innerHTML = world[2][1][1][1];
document.getElementById(prefUsa + recover).innerHTML = world[2][1][1][2];

console.log('--------------------------------');
console.log(world[2][0]);
console.log('City: ' + world[2][1][0]);
console.log('Infected: ' + world[2][1][1][0]);
console.log('Deaths: ' + world[2][1][1][1]);
console.log('Recovered: ' + world[2][1][1][2]);

// Russia
document.getElementById(prefRussia + country).innerHTML = world[3][0];
document.getElementById(prefRussia + city).innerHTML = world[3][1][0];
document.getElementById(prefRussia + infected).innerHTML = world[3][1][1][0];
document.getElementById(prefRussia + death).innerHTML = world[3][1][1][1];
document.getElementById(prefRussia + recover).innerHTML = world[3][1][1][2];

console.log('--------------------------------');
console.log(world[3][0]);
console.log('City: ' + world[3][1][0]);
console.log('Infected: ' + world[3][1][1][0]);
console.log('Deaths: ' + world[3][1][1][1]);
console.log('Recovered: ' + world[3][1][1][2]);

// Italy
document.getElementById(prefItaly + country).innerHTML = world[4][0];
document.getElementById(prefItaly + city).innerHTML = world[4][1][0];
document.getElementById(prefItaly + infected).innerHTML = world[4][1][1][0];
document.getElementById(prefItaly + death).innerHTML = world[4][1][1][1];
document.getElementById(prefItaly + recover).innerHTML = world[4][1][1][2];

console.log('--------------------------------');
console.log(world[4][0]);
console.log('City: ' + world[4][1][0]);
console.log('Infected: ' + world[4][1][1][0]);
console.log('Deaths: ' + world[4][1][1][1]);
console.log('Recovered: ' + world[4][1][1][2]);