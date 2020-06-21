let country = [
    {
        land: 'germany',
        Name: 'Bundesrepublik Deutschland',
        Hauptstadt: 'Berlin',
        Größe: '357.020 km²',
        Einwohnerzahl: '82.424.609',
        Sprachen: 'Deutsch',
        Kontinent: 'Europa'
    },
    {
        land: 'italy',
        Name: 'Republik - Italiana',
        Hauptstadt: 'Rom',
        Größe: '301.277 km²',
        Einwohnerzahl: 58057477,
        Sprachen: 'Italienisch',
        Kontinent: 'Europa'
    }
    , {
        land: 'china',
        Name: 'Volksrepublik - China',
        Hauptstadt: 'Peking(Beijing)',
        Größe: '959.799.5 km²',
        Einwohnerzahl: 1298847624,
        Sprachen: 'Standard - Hochchinesisch',
        Kontinent: 'Asien'
    }
    , {
        land: 'iraq',
        Name: 'Republik - Irak',
        Hauptstadt: 'Bagdad',
        Größe: '437.393 km²',
        Einwohnerzahl: '253.746.91',
        Sprachen: 'Hauptsprache - Arabisch - Kurdisch',
        Kontinent: 'Asien'
    }
    , {
        land: 'Russia ',
        Name: 'Russland',
        Hauptstadt: 'Moskau',
        Größe: '170.750.00 km²',
        Einwohnerzahl: '143.782.338',
        Sprachen: 'Russisch',
        Kontinent: 'Asien'
    }
    , {
        land: 'india',
        Name: 'Republik_Indien',
        Hauptstadt: 'Neu_Delhi',
        Größe: '3.287.000 km²',
        Einwohnerzahl: '1.065.070.607',
        Sprachen: 'Hindi-Englisch ',
        Kontinent: 'Asien'

    }
    , {
        land: 'greece ',
        Name: 'Hellenische Republik - Elleniki Dimokratia',
        Hauptstadt: 'Athen',
        Größe: '132.000 km²',
        Einwohnerzahl: '10.647.529',
        Sprachen: 'Neugriechisch',
        Kontinent: 'Europa'
    }
    , {
        land: 'eygpt',
        Name: 'Arabische Republik Ägypten',
        Hauptstadt: 'Kairo',
        Größe: '1.000.000 km²',
        Einwohnerzahl: '76.117.421',
        Sprachen: 'Arabisch',
        Kontinent: 'Afrika'
    }
    , {
        land: 'bangladesh ',
        Name: 'Republic of Bangladesh',
        Hauptstadt: 'Dhaka',
        Größe: '147.570 km²',
        Einwohnerzahl: '141.340.476',
        Sprachen: 'Bangla (Bengalisch),Urdu und Hindi,Englisch',
        Kontinent: 'Asien',
    }
    , {
        land: ' france',
        Name: 'Französische Republik',
        Hauptstadt: 'Paris',
        Größe: '547.026 km²',
        Einwohnerzahl: '60.424.213',
        Sprachen: 'Französisch',
        Kontinent: 'Europa'
    }
];
console.log(country.length);
function chooseFunc() {
    let getCuntry = countryName.value;
    getCuntry = getCuntry.toLowerCase();
    console.log(getCuntry);
    switch (true) {
        case getCuntry == 'germany':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-deutschland.gif" alt="flag">' + '<br>' + country[0].land + '<br>' + country[0].Name + '<br>' + country[0].Hauptstadt + '<br>' + country[0].Größe + '<br>' + country[0].Einwohnerzahl + '<br>' + country[0].Sprachen + '<br>' + country[0].Kontinent;
            break;
        case getCuntry == 'italy':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-italien.gif" alt="flag">' + '<br>' + country[1].land + '<br>' + country[1].Name + '<br>' + country[1].Hauptstadt + '<br>' + country[1].Größe + '<br>' + country[1].Einwohnerzahl + '<br>' + country[1].Sprachen + '<br>' + country[1].Kontinent;
            break;
        case getCuntry == 'china':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-china.gif" alt="flag">' + '<br>' + country[2].land + '<br>' + country[2].Name + '<br>' + country[2].Hauptstadt + '<br>' + country[2].Größe + '<br>' + country[2].Einwohnerzahl + '<br>' + country[2].Sprachen + '<br>' + country[2].Kontinent;
            break;
        case getCuntry == 'iraq':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-irak.gif" alt="flag">' + '<br>' + country[3].land + '<br>' + country[3].Name + '<br>' + country[3].Hauptstadt + '<br>' + country[3].Größe + '<br>' + country[3].Einwohnerzahl + '<br>' + country[3].Sprachen + '<br>' + country[3].Kontinent;
            break;
        case getCuntry == 'russia':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-russland.gif" alt="flag">' + '<br>' + country[4].land + '<br>' + country[4].Name + '<br>' + country[4].Hauptstadt + '<br>' + country[4].Größe + '<br>' + country[4].Einwohnerzahl + '<br>' + country[4].Sprachen + '<br>' + country[4].Kontinent;
            break;
        case getCuntry == 'india':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-indien.gif" alt="flag">' + '<br>' + country[5].land + '<br>' + country[5].Name + '<br>' + country[5].Hauptstadt + '<br>' + country[5].Größe + '<br>' + country[5].Einwohnerzahl + '<br>' + country[5].Sprachen + '<br>' + country[5].Kontinent;
            break;
        case getCuntry == 'greece':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-griechenland.gif" alt="flag">' + '<br>' + country[6].land + '<br>' + country[6].Name + '<br>' + country[6].Hauptstadt + '<br>' + country[6].Größe + '<br>' + country[6].Einwohnerzahl + '<br>' + country[6].Sprachen + '<br>' + country[6].Kontinent;
            break;
        case getCuntry == 'egypt':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-aegypten.gif" alt="flag">' + '<br>' + country[7].land + '<br>' + country[7].Name + '<br>' + country[7].Hauptstadt + '<br>' + country[7].Größe + '<br>' + country[7].Einwohnerzahl + '<br>' + country[7].Sprachen + '<br>' + country[7].Kontinent;
            break;
        case getCuntry == 'bangladesh':
            document.getElementById('seeInfo').innerHTML = '<br><br><img src="./images/flagge-bangladesch.gif" alt="flag">' + '<br>' + country[8].land + '<br>' + country[8].Name + '<br>' + country[8].Hauptstadt + '<br>' + country[8].Größe + '<br>' + country[8].Einwohnerzahl + '<br>' + country[8].Sprachen + '<br>' + country[8].Kontinent;
            break;
        case getCuntry == 'france':
            document.getElementById('seeInfo').innerHTML = '<img src="./images/flagge-frankreich.gif" alt="flag">' + '<br>' + country[9].land + '<br>' + country[9].Name + '<br>' + country[9].Hauptstadt + '<br>' + country[9].Größe + '<br>' + country[9].Einwohnerzahl + '<br>' + country[9].Sprachen + '<br>' + country[9].Kontinent;
            break;
        default:  document.getElementById('seeInfo').innerHTML='No data about this country';
    }
    
};
function delInput(){
    countryName.value="";
    
};