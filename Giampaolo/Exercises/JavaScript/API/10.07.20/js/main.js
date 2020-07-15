let ageUnits = () => {
    fetch('../JSON/units.json')
        .then(datas => datas.json())
        .then(data => {
            console.log(data);
            let {
                units: [
                    {
                        id,
                        name,
                        description,
                        expansion,
                        age,
                        created_in: building,
                        cost: {
                            Wood: wood,
                            Gold: gold
                        },
                        build_time: timeBuilding,
                        reload_time: attackSpeed, 
                        attack_delay: attackDelay,
                        movement_rate: moveSpeed,
                        line_of_sight: sight,
                        hit_points: hp,
                        range,
                        attack,
                        armor,
                        accuracy
                    }] } = data;
            // console.log(id, name, expansion, age, building, wood);
            // data.map((item, index) => {
                // console.log(item)
                table.innerHTML += `
                <tr>
                    <th scope="row"># ${id}</th>
                    <td>${name}</td>
                    <td>${description}</td>
                    <td>${age}</td>
                    <td>${fetch(`'${building}'`).then(x => x.json()).then(item => item.name)}</td>
                    <td>${wood + ' ' + gold}</td>
                    <td>${expansion}</td>
                    <td>${expansion}</td>
                    <td>${expansion}</td>
                    <td>${expansion}</td>
                </tr>
            `
            /*})*/
        })
}

ageUnits()