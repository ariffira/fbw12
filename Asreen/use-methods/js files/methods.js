//let myList=['study','go to meeting','shopping','have alunch','gym'];
let myList = [];
function add(x) {
    listInfo.innerHTML = ' ';
    myList.push(x.toString());
    seeList();
    console.log(myList);
    // for (let i=0;i<myList.length;i++) {
    //     listInfo.innerHTML += `${myList[i]}<br>`;
    // }
   // document.getElementById('listInfo').innerHTML='hi *******';

}
function seeList() {
    for (let i=0;i<myList.length;i++) {
        listInfo.innerHTML += `${myList[i]}<br>`;
    }
}
function del() {
    listInfo.innerHTML = " ";
    list.value = " ";
}

// 
//    for(let i=0;i<myList.length;i++){
//     listInfo.innerHTML+=`<ol><li>${myList[i]}<li></ol>`;
//    } 
//    console.log(myList);
//    return myList;
// }