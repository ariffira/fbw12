// let link1 = "https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?key=WH4Vac06LrItv5u8&secret=eZHLNkGFvImlLnVH50CgdDmY55rBbWJp&league=25&season=2";

// let link2 = 'https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/leagues/table.json?key=NUKRL185sS8uUv5g&secret=quXyQSoxlSfCbvuYqeQbgYgJRpdLUi2k&league=25&season=2';


fetch("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/list.json?key=eZXlj05lvWUzDvKT&secret=NbpYiH2Hz2HHxDHLCE7WFcia9cKMHvGv")
    .then(response => response.json())
    .then(result => {
        console.log(result)
        result.data.league.map((item)=>{
            document.getElementById('allSelectInfo').innerHTML += `
            <option value="${item.id}">${item.name}</option>
            `;
        } )
        

    });


function showScoure(x) {
    console.log(x)

    fetch(`https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?key=WH4Vac06LrItv5u8&secret=eZHLNkGFvImlLnVH50CgdDmY55rBbWJp&league=${x}&season=2`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            document.getElementById('allDataInfo').innerHTML = '';
            
            result.data.table.map((item)=>{
                document.getElementById('allDataInfo').innerHTML += `
                <td>${item.team_id}</td>
                <td>${item.name}</td>
                <td>${item.rank}</td>
                <td>${item.points}</td>
                <td>${item.matches}</td>
                <td>${item.goal_diff}</td>
                <td>${item.goals_scored}</td>
                <td>${item.goals_conceded}</td>
                <td>${item.lost}</td>
                <td>${item.drawn}</td>
                <td>${item.won}</td>
                `;
            } )
           

        });
}

