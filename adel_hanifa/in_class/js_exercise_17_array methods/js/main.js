//step   01
let employee = [
    {
        id: 12,
        name: 'Arif',
        age: 32,
        salary: 65000,
        profile_picture: '<img src="img/img1.png" class="rounded">'
    },
    {
        id: 34,
        name: 'Jesica',
        age: 18,
        salary: 55000,
        profile_picture: '<img src="img/img2.png" class="rounded">'
    },
    {
        id: 45,
        name: 'Paolo',
        age: 21,
        salary: 45800,
        profile_picture: '<img src="img/img1.png" class="rounded">'
    },
    {
        id: 21,
        name: 'Adel',
        age: 28,
        salary: 60000,
        profile_picture: '<img src="img/img1.png" class="rounded">'
    },
    {
        id: 43,
        name: 'Asreen',
        age: 20,
        salary: 34800,
        profile_picture: '<img src="img/img2.png" class="rounded">'
    },
    {
        id: 54,
        name: 'Khaled',
        age: 29,
        salary: 47750,
        profile_picture: '<img src="img/img1.png" class="rounded">'
    },
    {
        id: 13,
        name: 'Carlos',
        age: 23,
        salary: 78000,
        profile_picture: '<img src="img/img1.png" class="rounded">'
    },
    {
        id: 35,
        name: 'Sujatha',
        age: 22,
        salary: 43500,
        profile_picture: '<img src="img/img2.png" class="rounded">'
    },
    {
        id: 46,
        name: 'Peter',
        age: 31,
        salary: 63750,
        profile_picture: '<img src="img/img1.png" class="rounded">'
    }
];
let employeeArray = [];

showArray(employee)
//step   02
function showArray(arr) {
    showAll.innerHTML = '';
    totalSalaryID.innerHTML = '';
    maxSalaryID.innerHTML ='';
    minSalaryID.innerHTML ='';
    employeeArray = [];
    arr.map(copyAll);

    function copyAll(item) {
        employeeArray.push(item);
    }

    employeeArray.map(displayAll);

    function displayAll(item, index) {
        showAll.innerHTML += `
        <tr scope="row">
            <td class="align-middle">${index + 1}</td>
            <td class="align-middle">${item.id}</td>
            <td class="align-middle">${item.name}</td>
            <td class="align-middle">${item.age}</td>
            <td class="align-middle">${item.salary} €</td>
            <td class="align-middle">${item.profile_picture}</td>
        </tr>`;
    }
}

//step   03
function selectEmpAge() {
    if (empAgeTD.value == 'all') {
        showArray(employee);
    }
    else if(empAgeTD.value == '<18'){
        const selcetEmp = employee.filter(employee => employee.age <= 18);
        return showArray(selcetEmp);
    }
    else {
        var x = Number(empAgeTD.value)
        const selcetEmp = employee.filter(employee => employee.age > x);
        return showArray(selcetEmp);
    }
}

function selectEmpSalary() {
    if (empSalaryTD.value == 'all') {
        showArray(employee);
    }
    else if(empSalaryTD.value == '<40'){
        const selcetEmp = employee.filter(employee => employee.salary < 40000);
        return showArray(selcetEmp);
    }
    else {
        var x = Number(empSalaryTD.value)
        const selcetEmp = employee.filter(employee => employee.salary >= x);
        return showArray(selcetEmp);
    }
}

let orderdEmployee = employeeArray.sort(function (a, b) { return a.id - b.id }); // make order array with ID
orderdEmployee.map(addEmpIdOptions)

function addEmpIdOptions(item) {
    empIdTD.innerHTML += `<option value="${item.id}">${item.id}</option>`;
}

function selectEmpId() {
    if (empIdTD.value == 'all') {
        showArray(employee);
    }
    else {
        var x = Number(empIdTD.value)
        const selcetEmp = employee.filter(employee => employee.id == x);
        return showArray(selcetEmp);
    }
}

// step 04
function totalSalary() {
    totalSalaryID.innerHTML = `
    The total cost is :
    ${employeeArray.reduce(getSum, 0)}
     €`;

    function getSum(total, item) {
        return total + item.salary;
    }
}

function maxSalary(){
   var max = employeeArray.sort(function (a, b) { return b.salary - a.salary });
   maxSalaryID.innerHTML = max[0].name+' has the max salary : '+max[0].salary+' €';
}

function minSalary(){
    var min = employeeArray.sort(function (a, b) { return a.salary - b.salary });
    minSalaryID.innerHTML = min[0].name+' has the min salary : '+min[0].salary+' €';
}
 
// step 05
function sortByEmp() {
    switch (sortByTD.value) {

        case "d":
            showArray(employeeArray);
            break;

        case "i0":
            employeeArray.sort(function (a, b) { return a.id - b.id });
            showArray(employeeArray);
            break;
        case "i9":
            employeeArray.sort(function (a, b) { return b.id - a.id });
            showArray(employeeArray);
            break;

        case "n0":
            sortName09();
            break;
        case "n9":
            sortName90()
            break;

        case "a0":
            employeeArray.sort(function (a, b) { return a.age - b.age });
            showArray(employeeArray);
            break;
        case "a9":
            employeeArray.sort(function (a, b) { return b.age - a.age });
            showArray(employeeArray);
            break;

        case "s0":
            employeeArray.sort(function (a, b) { return a.salary - b.salary });
            showArray(employeeArray);
            break;
        case "s9":
            employeeArray.sort(function (a, b) { return b.salary - a.salary });
            showArray(employeeArray);
            break;
    }
}

function sortName09() {
    employeeArray.sort(function(a, b){
      var x = a.name;
      var y = b.name;
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    showArray(employeeArray);
  }

  function sortName90() {
    employeeArray.sort(function(a, b){
      var x = a.name;
      var y = b.name;
      if (x > y) {return -1;}
      if (x < y) {return 1;}
      return 0;
    });
    showArray(employeeArray);
  }