let employee = [
    {
        id: 12,
        name: 'Arif',
        age: 32,
        salary: 65000,
        profile_picture: 'images/people.png'
    },
    {
        id: 34,
        name: 'Cagri',
        age: 68,
        salary: 55000,
        profile_picture: 'images/people.png'
    },
    {
        id: 45,
        name: 'Paolo',
        age: 21,
        salary: 45000,
        profile_picture: 'images/people.png'
    },
    {
        id: 95,
        name: 'Adel',
        age: 25,
        salary: 32000,
        profile_picture: 'images/people.png'
    },
    {
        id: 125,
        name: 'Daniel',
        age: 69,
        salary: 55000,
        profile_picture: 'images/people.png'
    },
    {
        id: 73,
        name: 'Asreen',
        age: 28,
        salary: 70000,
        profile_picture: 'images/woman.png'
    },
    {
        id: 49,
        name: 'Khaled',
        age: 75,
        salary: 65000,
        profile_picture: 'images/people.png'
    },
    {
        id: 19,
        name: 'Juan',
        age: 33,
        salary: 25000,
        profile_picture: 'images/people.png'
    },
    {
        id: 67,
        name: 'Peter',
        age: 59,
        salary: 80000,
        profile_picture: 'images/people.png'
    },
    {
        id: 76,
        name: 'Chuling',
        age: 33,
        salary: 75000,
        profile_picture: 'images/woman.png'
    }
];

let showEmployee = (item) => {
    main.innerHTML += `
    <tr>
        <td class="table-head"><b>#${item.id}</b></td>
        <td><img src="${item.profile_picture}" alt="${item.name}_profile_picture"></td>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>€ ${item.salary}</td>
    </tr>
    `
}

// console.log(employee.filter((item) => {return item.age >= 60}).map(item => item.name).join(", "));

let compare = (a, b) => {
    let idA = a.id;
    let idB = b.id;

    let comparison = 0;
    if (idA > idB) {
        comparison = 1;
    } else if (idA < idB) {
        comparison = -1;
    }
    return comparison;
}

let salaryCalc = (total, item) => {
    let result = total + item.salary;
    return totalSalary.innerHTML = eval(result);
}

let oldEmp = () => {
    olderEmployees.innerHTML = employee.sort(compare).filter((item) => { return item.age >= 60 }).map(item => `<b style="color: darkred;">#${item.id}</b> ${item.name}`).join(", ");
}

let youngEmp = () => {
    youngerEmployees.innerHTML = employee.sort(compare).filter((item) => { return item.age < 30 }).map(item => `<b style="color: darkred;">#${item.id}</b> ${item.name}`).join(", ");
}

let higEmp = () => {
    biggerSalary.innerHTML = employee.sort(compare).filter((item) => { return item.salary > 60000 }).map(item => `<b style="color: darkred;">#${item.id}</b> ${item.name}`).join(", ");
}

showOlder.addEventListener("click", oldEmp);
showYounger.addEventListener("click", youngEmp);
showHigSalary.addEventListener("click", higEmp);

employee.sort(compare).map(showEmployee);
employee.reduce(salaryCalc, 0);