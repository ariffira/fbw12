if (localStorage.getItem("employeesList")) {
    console.log("online")
} else {
    console.log("offline")
}

let importFile = localStorage.getItem("employeesList");
let useImport = JSON.parse(importFile);
console.log(useImport)

for (let i in useImport) {
    document.write(`Name: ${useImport[i].name}<br>`)
    document.write(`Age: ${useImport[i].age}<br>`)
    document.write(`ID: ${useImport[i].id}<br>`)
    document.write('<br>')
};

console.log(window.localStorage)