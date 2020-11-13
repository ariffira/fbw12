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
                    <th scope=row># ${id}</th>
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


let units = [
    {
        id: 1,
        name: 'Archer',
        description: 'Quick and light. Weak at close range; excels at battle from distance',
        expansion: 'Age of Kings',
        cost: {
            Wood: 25,
            Gold: 45
        },
        build_time: 35,
        reload_time: 2.0,
        attack_delay: 0.35,
        movement_rate: 0.96,
        line_of_sight: 6,
        hit_points: 4,
        range: 30,
        attack: 4,
        accuracy: 80
    },
    {
        id: 2,
        name: 'Crossbowman',
        description: 'Upgraded archer',
        expansion: 'Age of Kings',
        age: 'Castle',
        created_in: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range',
        cost: {
            Wood: 25,
            Gold: 45
        },
        build_time: 27,
        reload_time: 2.0,
        attack_delay: 0.35,
        movement_rate: 0.96,
        line_of_sight: 7,
        hit_points: 35,
        range: 5,
        attack: 5,
        accuracy: 85
    },
    {
        id: 3,
        name: 'bowman',
        description: 'Upgraer',
        expansion: 'Agngs',
        age: 'Ctle',
        created_in: 'https:/kuapp.com/api/v1/structure/archery_range',
        cost: {
            Wood: 2533,
            Gold: 445
        },
        build_time: 237,
        reload_time: 2.0,
        attack_delay: 0.335,
        movement_rate: 0.96,
        line_of_sight: 73,
        hit_points: 35,
        range: 5,
        attack: 5,
        accuracy: 85
    }
]

units.map(data => console.log(data.id))

for (user of units) {
    console.log(user)
}