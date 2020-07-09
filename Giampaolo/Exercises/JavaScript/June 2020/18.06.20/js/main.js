// let dataFile = localStorage.getItem('taskFile');
// console.log(window.localStorage)

// console.log(dataFile);

// let pack = {};

// let addTaskF = (x) => {
//     if (x != "") {
//         pack.test = [];
//         pack.test.push(x);

//         let compress = JSON.stringify(pack);
//         localStorage.setItem('taskFile', compress);

//         pack.test.map((item) => {
//             displayList.innerHTML += `-${item}<br>`;
//         })
//     }

//     else{
//         alert('Please input a task.')
//     }
// };


// let checkList = () => {
//     if (dataFile){
//         let importArray = [];
//         importArray.push(dataFile);

//         importArray.map((item)=>{
//             displayList.innerHTML += `-${item}<br>`;
//         })
//     }

//     else{
//         displayList.innerHTML = 'No task at this moment.'
//     }
// }

// checkList();







let taskArray = [];

function addData(newTask) {
    let checkStorageJSON = localStorage.getItem('dailyTask');//get it
    checkStorage = JSON.parse(checkStorageJSON);

    taskArray.push(checkStorage, newTask);//add new task

    taskArrayJSON = JSON.stringify(taskArray);
    localStorage.setItem('dailyTask', taskArrayJSON);//save it

    taskArray.map((item) => displayList.innerHTML += item)
}

function display() {
    let checkStorage = localStorage.getItem('dailyTask');//get it
    checkStorage = JSON.parse(checkStorage);
    console.log(checkStorage);

    if (checkStorage) {
        checkStorage.map((item) => {
            displayList.innerHTML += `<li>${item}</li>`
        });
    } else { displayList.innerHTML = 'No Item to show' }
}

display()

// //* Sendind data:
// dataList = ["name", 2, [1, 2, 3], { key1: 1, key2: 2 }];
// let dataListJSON = JSON.stringify(dataList);
// localStorage.setItem('file1', dataListJSON);
// console.table(window.localStorage)

// //* Taking data:
// let myImportDataJSON = localStorage.getItem('file1');
// let myImportData = JSON.parse(myImportDataJSON);
// console.log(myImportData)







// let jsDataContainer = [];

// //when add button is clicked
// function addData(x) {
//     if (x) {

//         //get file
//         let checkStorage = localStorage.getItem('taskFile'); // "breakfast"
//         let oldDataJS = JSON.parse(checkStorage); // ["breakfast"] or "breakfast"??

//         if (oldDataJS != null) {

//             if (typeof (oldDataJS) == "object") {
//                 // oldDataJS.map((item) => { jsDataContainer.push(item) })

//                 //add new task  and the old data to JS array
//                 oldDataJS.push(x);

//                 //save new data in localStorage
//                 let newTaskJSON = JSON.stringify(oldDataJS);
//                 localStorage.setItem('taskFile', newTaskJSON);

//                 //print out all items from JS array: oldDataJS
//                 console.log(oldDataJS);//check consle JSN array
//                 oldDataJS.map((item) => {
//                     displayList.innerHTML += `<li>${item}</li>`;
//                 })
//             }  else {
//                 jsDataContainer.push(x, oldDataJS);

//                 let newTaskJSON = JSON.stringify(jsDataContainer);
//                 localStorage.setItem('taskFile', newTaskJSON);
//                 //print out all items from JS array: oldDataJS
//                 console.log(jsDataContainer);//check consle JSN array
//                 jsDataContainer.map((item) => {
//                     displayList.innerHTML += `<li>${item}</li>`;
//                 })
//             }
//         }

//         else {
//             let takeInput = x;

//             //save new data in localStorage
//             jsDataContainer.push(x)
//             let newTaskJSON = JSON.stringify(jsDataContainer);
//             localStorage.setItem('taskFile', newTaskJSON);

//             console.log(jsDataContainer);
//             //print out the first task
//             displayList.innerHTML = `<li>${takeInput}</li>`;
//         }
//     }

//     else {
//         alert('Please input a task.')
//     }
// }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //creat the first file in localStorage
let initialFile = localStorage.getItem('taskFile'); // "breakfast","dinner"
​
localStorage.removeItem('taskFile');
​
//export the data file and covert it to JS array.
let dataJS = JSON.parse(initialFile); // ["breafast","dinner"]
​
//initial page loading action
function checkList(){
    if (dataJS){
        if(typeof(dataJS)== "object"){
            dataJS.map((item)=>{
                displayList.innerHTML += `<li>${item}</li>`; // breakfast
            })    
        }
        else{
            displayList.innerHTML += `<li>${dataJS}</li>`;
        }
    }
​
    else{
        displayList.innerHTML = 'No task at this moment.'
    }
}
​
checkList();
​
let jsDataContainer = [];
​
//when add button is clicked
function addTaskF(x){
    if (x){
​
        //get file
        let checkStorage = localStorage.getItem('taskFile'); // "breakfast"
​
        //Covert JSON array: checkStorage to JS array
        let oldDataJS = JSON.parse(checkStorage); // ["breakfast"] or "breakfast"??
        
​
        if (oldDataJS){
​
            if (typeof(oldDataJS)=="object"){
                oldDataJS.push(x);
                console.log(oldDataJS,x);
​
                //save new data in localStorage
                let newTaskJSON = JSON.stringify(oldDataJS);
                localStorage.setItem('taskFile', newTaskJSON); 
                
                //print out all items from JS array: oldDataJS
                displayList.innerHTML = '';
                oldDataJS.map((item)=>{
                displayList.innerHTML += `<li>${item}</li>`;})
            }
​
            else{
                console.log(oldDataJS,x);
                jsDataContainer.push(oldDataJS,x);
                console.log(jsDataContainer);
                let newTaskJSON = JSON.stringify(jsDataContainer);
                localStorage.setItem('taskFile', newTaskJSON);
                displayList.innerHTML = '';
                jsDataContainer.map((item)=>{
                    displayList.innerHTML += `<li>${item}</li>`;})
            }
​
        }
​
        else{
        console.log(oldDataJS,x);
        //save new data in localStorage
        let newTaskJSON = JSON.stringify(x);
        localStorage.setItem('taskFile', newTaskJSON);
​
        //print out the first task
        displayList.innerHTML = `<li>${x}</li>`;
​
        }     
    }
​
    else{
        alert('Please input a task.')
    }
}