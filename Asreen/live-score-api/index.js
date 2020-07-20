
// function getData() {
//   let keyForApi = "WH4Vac06LrItv5u8";
//   let secret = "eZHLNkGFvImlLnVH50CgdDmY55rBbWJp";
//   var url = `https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/leagues/table.json?key=${keyForApi}&secret=${secret}&league=25&season=2`;
//   fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((jsonData) => jsonData.json())
//     .then((result) => console.log(result));
// }
// getData();

// competition_id: "2"
// drawn: "0"
// goal_diff: "13"
// goals_conceded: "5"
// goals_scored: "18"
// league_id: "25"
// lost: "0"
// matches: "7"
// name: "Liverpool"
// points: "21"
// rank: "1"
// season_id: "2"
// team_id: "7"
// won: "7"
let key = '9A1LfoYT3jBXzEGF';
let keyForApi = "9A1LfoYT3jBXzEGF"
let secret = "1pcDEWFHJdVWLseV2gHiEGbI0NGzrnft"
let url = `https://cors-anywhere.herokuapp.com/
http://livescore-api.com/api-client/leagues/table.json?key=${keyForApi}&secret=${secret}&league=25&season=2`

fetch(url)
  .then(dataFunc)
  .then(dataConvert)
function dataFunc(Response) {
  console.log(Response)
  return Response.json()
}
function dataConvert(data1) {
  console.log(data1, data1.data);
  data1.data.table.map(display);
  function display(item) {
    //console.log('Adress', item.address.street, item.address.city)
    console.log(item);
    leagueInfo2.innerHTML += `
          <tr>
          <td>${item.league_id}</td>
          <td>${item.name}</td>
          <td>${item.rank}</td>
          <td>${item.drawn}</td>
          <td>${item.goals_conceded}</td>
          <td>${item.goals_scored}</td>  
          <td>${item.points}</td>
          <td>${item.won}</td> 
        </tr> 
          `
  }
}

let m = `https://cors-anywhere.herokuapp.com/
    http://livescore-api.com/api-client/leagues/table.json?key=9A1LfoYT3jBXzEGF&secret=1pcDEWFHJdVWLseV2gHiEGbI0NGzrnft&league=25&season=2`
let c = `https://livescore-api.com/api-client/leagues/list.json?key=eZXlj05lvWUzDvKT&secret=NbpYiH2Hz2HHxDHLCE7WFcia9cKMHvGv&country=19`;

function leageueID(num) {
  myTable2.innerHTML =' ';
  console.log(num);
  fetch(`https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/list.json?key=${keyForApi}&secret=${secret}&country=${num}`)
    .then(response => response = response.json())
    .then(data1 => {
      console.log(data1, data1.data.league);
      myTable.innerHTML = `<thead>
      <tr>
        <th scope="col">name</th>
        <th scope="col">scores</th>
        <th scope="col">id</th>
        <th scope="col">country_id</th>
      </tr>
    </thead>
      <tbody id="leagueInfo" style='color:white;'></tbody>`;
      //leagueInfo.innerHTML = ' ';
      data1.data.league.map(display);
      function display(item) {
        console.log(item);
        console.log(item.name)
        leagueInfo.innerHTML += `
        <tr> 
        <td>${item.name}</td>
        <td>${item.scores}</td>
        <td>${item.id}</td>
        <td>${item.country_id}</td>
       </tr> 
        `
      }
    })
}