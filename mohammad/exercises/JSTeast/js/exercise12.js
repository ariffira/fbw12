// build in: the method/function is already created by js
// alert();
// console.log();
// document.write();
let tasks = [];
// Push method: Add something in Array
console.log(tasks)
    // nameArray.push('Cagri', 'Khaled');
    // console.log(nameArray)
let printResult = () => {
    console.log(tasks)
    result.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        result.innerHTML += `<li><span>${tasks[i]}</span><div> <button onclick="editTask(${i})">Edit </button></b> <button onclick="deleteTask(${i})">remove the Task </button></div></li>`;
    }
}

let newTask;
let addTask = () => {
    newTask = task.value;
    tasks.push(newTask);
    printResult()
}

let deleteTasks = () => {

    tasks.splice(0, tasks.length);
    printResult()

}
let deleteTask = (y) => {

    tasks.splice(y, 1);
    printResult()

}
let editTask = (y) => {
    let newTask = prompt("Please enter the task");

    tasks.splice(y, 1, newTask);
    printResult()

}