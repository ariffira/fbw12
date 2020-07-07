let employee = [{
        id: 12,
        name: 'Arif',
        age: 32,
        salary: 65000,
        profile_picture: 'https://lh3.googleusercontent.com/proxy/csvyVTwG7PkWUMtV-OaMNP2SDWr6Ukpr7xrfld2uQ4uRgfblBX-4JFsu66cLjw3h5prXLon7YquVzoq5JKdBBBMRgr7WyAX3gpLq5t0'
    },
    {
        id: 34,
        name: 'Cagri',
        age: 18,
        salary: 55000,
        profile_picture: 'https://lh3.googleusercontent.com/proxy/csvyVTwG7PkWUMtV-OaMNP2SDWr6Ukpr7xrfld2uQ4uRgfblBX-4JFsu66cLjw3h5prXLon7YquVzoq5JKdBBBMRgr7WyAX3gpLq5t0'
    },
    {
        id: 45,
        name: 'Paolo',
        age: 21,
        salary: 45000,
        profile_picture: 'https://lh3.googleusercontent.com/proxy/csvyVTwG7PkWUMtV-OaMNP2SDWr6Ukpr7xrfld2uQ4uRgfblBX-4JFsu66cLjw3h5prXLon7YquVzoq5JKdBBBMRgr7WyAX3gpLq5t0'
    },
    {
        id: 31,
        name: 'Mohammad',
        age: 29,
        salary: 45000,
        profile_picture: 'https://lh3.googleusercontent.com/proxy/csvyVTwG7PkWUMtV-OaMNP2SDWr6Ukpr7xrfld2uQ4uRgfblBX-4JFsu66cLjw3h5prXLon7YquVzoq5JKdBBBMRgr7WyAX3gpLq5t0'
    },
    {
        id: 56,
        name: 'Cogro',
        age: 65,
        salary: 65000,
        profile_picture: 'https://lh3.googleusercontent.com/proxy/csvyVTwG7PkWUMtV-OaMNP2SDWr6Ukpr7xrfld2uQ4uRgfblBX-4JFsu66cLjw3h5prXLon7YquVzoq5JKdBBBMRgr7WyAX3gpLq5t0'
    },
    {
        id: 50,
        name: 'Christina',
        age: 20,
        salary: 51000,
        profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKV5vf58GXgD8qd-zunUVBFvTqC_Hr0-acO5mELki1FDeMblEp&usqp=CAU'
    },
    {
        id: 43,
        name: 'sandy',
        age: 25,
        salary: 51000,
        profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKV5vf58GXgD8qd-zunUVBFvTqC_Hr0-acO5mELki1FDeMblEp&usqp=CAU'
    },
    {
        id: 39,
        name: 'Sebastian',
        age: 34,
        salary: 54000,
        profile_picture: 'https://lh3.googleusercontent.com/proxy/csvyVTwG7PkWUMtV-OaMNP2SDWr6Ukpr7xrfld2uQ4uRgfblBX-4JFsu66cLjw3h5prXLon7YquVzoq5JKdBBBMRgr7WyAX3gpLq5t0'
    },
    {
        id: 36,
        name: 'Rainer',
        age: 63,
        salary: 60000,
        profile_picture: 'https://lh3.googleusercontent.com/proxy/csvyVTwG7PkWUMtV-OaMNP2SDWr6Ukpr7xrfld2uQ4uRgfblBX-4JFsu66cLjw3h5prXLon7YquVzoq5JKdBBBMRgr7WyAX3gpLq5t0'
    },
    {
        id: 56,
        name: 'Paulina',
        age: 19,
        salary: 46000,
        profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKV5vf58GXgD8qd-zunUVBFvTqC_Hr0-acO5mELki1FDeMblEp&usqp=CAU'
    },

];

employee.map(employeeData);

function employeeData(item) {
    document.getElementById('employeesTable').innerHTML +=
        `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td><img src="${item.profile_picture}"></td>
    </tr>`
}

let less30 = employee.filter(less30filter);

function less30filter(item) {
    return item.age < 30;
}
console.log(less30)

function less30Y() {
    document.getElementById('employeesTable').innerHTML = '';
    less30.map(employeeData);

}

let more60 = employee.filter(more60filter);

function more60filter(item) {
    return item.age >= 60;
}


function more60Y() {
    document.getElementById('employeesTable').innerHTML = '';
    more60.map(employeeData);

}

let more60K = employee.filter(more60Kfilter);

function more60Kfilter(item) {
    return item.salary >= 60000;
}


function salaryMore60K() {
    document.getElementById('employeesTable').innerHTML = '';
    more60K.map(employeeData);

}


let totalcost = employee.reduce(myFunc, 0)

function myFunc(total, num) {
    return total + num.salary;
}

function totalCost() {
    document.getElementById('cost').innerHTML = totalcost;
}