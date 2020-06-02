let myList = [];

let addInput = (userInput) => {
    x = myList.push(userInput);
    let result = `<h3>My Tasks List</h3>`;
    for (let i in myList) {
        result += `<li class="list-group-item bg-dark">- ${myList[i]}</li>`;
    };
    console.log(myList);
    return showList.innerHTML = result
};