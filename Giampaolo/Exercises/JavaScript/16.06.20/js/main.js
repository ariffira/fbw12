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
    if (olderEmployees.innerHTML != '') {
        olderEmployees.innerHTML = ''
    } else
        olderEmployees.innerHTML = employee.sort(compare).filter((item) => { return item.age >= 60 }).map(item => `<b style="color: darkred;">#${item.id}</b> ${item.name}`).join(", ");
}

let youngEmp = () => {
    if (youngerEmployees.innerHTML != '') {
        youngerEmployees.innerHTML = ''
    } else
        youngerEmployees.innerHTML = employee.sort(compare).filter((item) => { return item.age < 30 }).map(item => `<b style="color: darkred;">#${item.id}</b> ${item.name}`).join(", ");
}

let higEmp = () => {
    if (biggerSalary.innerHTML != '') {
        biggerSalary.innerHTML = ''
    } else
        biggerSalary.innerHTML = employee.sort(compare).filter((item) => { return item.salary > 60000 }).map(item => `<b style="color: darkred;">#${item.id}</b> ${item.name}`).join(", ");
}

showOlder.addEventListener("click", oldEmp);
showYounger.addEventListener("click", youngEmp);
showHigSalary.addEventListener("click", higEmp);

employee.sort(compare).map(showEmployee);
employee.reduce(salaryCalc, 0);

// Calculator callBack functions

let add = (a, b) => {
    a = Number(a);
    b = Number(b);
    return Number(a + b);
}

let sub = (a, b) => {
    return Number(a - b);
}

let div = (a, b) => {
    return Number(a / b);
}

let mult = (a, b) => {
    return Number(a * b);
}

let per = (a, b) => {
    return Number((a / 100) * b);
}

let calculator = (a, b, callBack) => {
    if (callBack == "add") {
        return output.value = add(a, b);
    } else if (callBack == "sub") {
        return output.value = sub(a, b);
    } else if (callBack == "div") {
        return output.value = div(a, b);
    } else if (callBack == "mult") {
        return output.value = mult(a, b);
    } else if (callBack == "per") {
        return output.value = per(a, b);
    } else {
        return "Wrong Operation";
    };
}

let remove = (value) => {
    inputX.value = (value.substring(0, value.length - 1));
};

// console.log(calculator(10, 25, "sub"));

//* Clock

let today = new Date()
let mins = today.getMinutes();
let secs = today.getSeconds();
let hours = today.getUTCHours();

setInterval(() => {
    secs++;

    if (secs > 59) {
        secs = 0;
        mins++;
    };

    if (mins > 59) {
        mins = 0;
        hours++;
    };

    if (hours > 23) {
        hours = 0;
    };

    clockID.innerHTML = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getYear() + " " + eval(hours + 2) + ':' + mins + ':' + secs;
}, 1000);