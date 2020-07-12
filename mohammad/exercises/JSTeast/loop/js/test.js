let world = [
    ['USA', ['WashingtonDC', [1385834, 262225, 81795]]],
    ['Spain', ['Madrid', [268143, 177846, 26744]]],
    ['Russia', ['Moscow', [232243, 43512, 2116]]],
    ['UK', ['London', [223060, 'N/A', 32065]]],
    ['Italy', ['Roma', [219814, 106587, 30739]]]
];
console.table(world);
document.getElementById('corona').innerHTML += '<tr><th>Contry</th><th>City</th><th>infections</th><th>recovery</th><th>deaths</th></tr>';
for (let i = 0; i <= 4; i++)
    document.getElementById('corona').innerHTML += '<tr><td>' + world[i][0] + '</td><td>' + world[i][1][0] + '</td><td>' + world[i][1][1][0] + '</td><td>' + world[i][1][1][1] + '</td><td>' + world[i][1][1][2] + '</td></tr>';

let world1 = {
    Contry: {
        USA: { WashingtonDC: { infections: 1385834, recovery: 262225, deaths: 81795 } },
        Spain: { Madrid: { infections: 268143, recovery: 177846, deaths: 26744 } },
        Russia: { Moscow: { infections: 232243, recovery: 43512, deaths: 2116 } },
        UK: { London: { infections: 223060, recovery: 'N/A', deaths: 32065 } },
        Italy: { Roma: { infections: 219814, recovery: 106587, deaths: 30739 } }
    }
};
console.log(world1)
document.getElementById('corona1').innerHTML += '<tr><th>Contry</th><th>City</th><th>infections</th><th>recovery</th><th>deaths</th></tr>';
document.getElementById('corona1').innerHTML += '<tr><td>' + 'USA' + '</td><td>' + 'WashingtonDC' + '</td><td>' + world1.Contry.USA.WashingtonDC.infections + '</td><td>' + world1.Contry.USA.WashingtonDC.recovery + '</td><td>' + world1.Contry.USA.WashingtonDC.deaths + '</td></tr>';