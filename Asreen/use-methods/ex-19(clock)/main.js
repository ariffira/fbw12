// Step 01:
// Add 7 more different employee data in below array:
// Step 02:
// First show all employee data in a html table
// Step 03:
// Make some html button which can show you employee based on below conditions on click:
// - employee who is less than 30 years old
// - employee who is more than 60 or equal years old
// - show employee whose salary is more than 60000
// Step 04:
// Show the total cost of company for the employee
// Step 05:
// Use one more Array method to show anything from that array. A new method we did not discuss in class would be great

let employee = [
    {
        id: 12,
        name: 'Jan',
        age: 32,
        salary: 65000,
        profile_picture: '<img src="photos/avatar1.jpg" alt="photo" id="pic">'
    },
    {
        id: 34,
        name: 'John',
        age: 66,
        salary: 55000,
        profile_picture: '<img src="photos/avatar1.jpg" alt="photo" id="pic">'
    },
    {
        id: 45,
        name: 'Antoni',
        age: 68,
        salary: 45000,
        profile_picture: '<img src="photos/avatar1.jpg" alt="photo" id="pic">'
    },
    {
        id: 55,
        name: 'Amira',
        age: 32,
        salary: 70000,
        profile_picture: '<img src="photos/avatar2.png" alt="photo" id="pic">'
    },
    {
        id: 66,
        name: 'Ahmed',
        age: 18,
        salary: 57000,
        profile_picture: '<img src="photos/avatar1.jpg" alt="photo" id="pic">'
    },
    {
        id: 77,
        name: 'Max',
        age: 35,
        salary: 45000,
        profile_picture: '<img src="photos/avatar1.jpg" alt="photo" id="pic">'
    },
    {
        id: 88,
        name: 'Sonia',
        age: 33,
        salary: 65000,
        profile_picture: '<img src="photos/avatar2.png" alt="photo" id="pic">'
    },
    {
        id: 99,
        name: 'Sandra',
        age: 18,
        salary: 55000,
        profile_picture: '<img src="photos/avatar2.png" alt="photo" id="pic">'
    },
    {
        id: 100,
        name: 'Jaimy',
        age: 21,
        salary: 45000,
        profile_picture: '<img src="photos/avatar2.png" alt="photo" id="pic">'
    },
    {
        id: 110,
        name: 'Samer',
        age: 38,
        salary: 81000,
        profile_picture: '<img src="photos/avatar1.jpg" alt="photo" id="pic">'
    },
    {
        id: 120,
        name: 'Cameron',
        age: 18,
        salary: 66000,
        profile_picture: '<img src="photos/avatar1.jpg" alt="photo" id="pic">'
    },
    {
        id: 130,
        name: 'Daivd',
        age: 21,
        salary: 45000,
        profile_picture: '<img src="photos/avatar1.jpg" alt="photo" id="pic">'
    }

];
employee.map(displayInfos);
function displayInfos(item) {
    myTable.innerHTML += ` 
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.salary}</td>
    <td>${item.profile_picture}</td> 
  </tr>
 `
}

function ageLessThan30() {
    showInfo.innerHTML = ' ';
    let info = employee.filter((item) => {
        return parseInt(item.age) < 30;
    });
    info.map((item) => { showInfo.innerHTML += '<br>' + item.name + '  ' + item.age + ' years old' });

}
function lessOrEqual60() {
    showInfo2.innerHTML = ' ';
    let info = employee.filter((item) => {
        return parseInt(item.age) >= 60;
    });
    info.map((item) => { showInfo2.innerHTML += '<br>' + item.name + ' is  ' + item.age + ' years old' });
}
function salaryMore60000() {
    showInfo3.innerHTML = ' ';
    let info = employee.filter((item) => {
        return parseInt(item.salary) > 60000;
    });
    info.map((item) => { showInfo3.innerHTML += '<br>' + item.name + '   Has the salary:' + item.salary });
}
let initialCost = 0;
function totalCost() {
    showInfo4.innerHTML = ' ';
    let cost = employee.reduce(findTheCost, initialCost);//sending
    function findTheCost(totalSalary, item) {//receive
        totalSalary = totalSalary + item.salary;
        return totalSalary;
    }
    showInfo4.innerHTML += 'The total cost of company for the employee: ' + cost;
    console.log('Total Cost of Company: ' + cost + ' Euros');
}
function largestNumber() {
    let large = employee.reduce(function (largestNum, num) {

    })
}
//let nameText=document.getElementById('selectItem').value;
function findEmployee(itemName) {
    console.log(itemName);
    let searchResult = employee.find(searchFunction);
    function searchFunction(item) {
        console.log(item);
        if (item.name == itemName) {
            console.log(item.id, item.name, item.age, item.salary)
            return item.id, item.name, item.age, item.salary;
        }
        else showInfo5.innerHTML = 'No data about this person';
    }
    console.log(searchResult);
    showInfo5.innerHTML = `<h4> ID:${searchResult.id}</h4><br><h4> Name:${searchResult.name}</h4><br><h4> Age:${searchResult.age}</h4><br><h4> Salary:${searchResult.salary}</h4><br><h4>${searchResult.profile_picture}</h4><br>`;
}





