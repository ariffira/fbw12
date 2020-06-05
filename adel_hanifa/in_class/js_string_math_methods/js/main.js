///////////////////////  EX 14

let txt = "His name is Tuergut. He is a Turkish legend. Everyone say Tuergut is a great fighter. Tuergut is also smart, brave and cleaver. Tuergut follows his brother in all wars for decades. When Tuergut dies, people were upset for him";

document.getElementById("id01").innerHTML += 
`<h3>The text is :</h3><p>${txt}</p><br>`;

// part 1
txt = txt.replace(/Tuergut/gi, "Adel");  // g  change all times // i check the leter 

document.getElementById("id01").innerHTML += 
`<h3>The text after replace the name is :</h3><p>${txt}</p><br>`;

// part 2
let txtarry =[];// part 2
txtarry = txt.split(".");

document.getElementById("id01").innerHTML += 
`<h3>The text with Array is :</h3><ul id="txtArrayID"></ul><br>`;

for (let i= 0; i< txtarry.length; i++){
    document.getElementById("txtArrayID").innerHTML += '<li>'+txtarry[i]+'</li>';
}

// part 3
let txt2 = "Yesterday is a History, tomorrow is mystery but today is a Gift";// part 3

txtarry.push(txt2);

document.getElementById("id01").innerHTML += 
`<h3>The text with Array after add text is :</h3><ul id="txtArrayID2"></ul><br>`;

for (let i= 0; i< txtarry.length; i++){
    document.getElementById("txtArrayID2").innerHTML += '<li>'+txtarry[i]+'</li>';
}

///////////////////////  EX 15
// part 1
function firstButton(){
    let a = Math.random();
    if (a < 0.5){
        document.getElementById("firstID").innerHTML = 
        `The number is <b>${a}</b> und it is <b>SMALLER</b> than 0.5`;
    }
    else{
        document.getElementById("firstID").innerHTML = 
        `The number is <b>${a}</b> und it is <b>BIGGER</b> than 0.5`;
    }
}
function secoundButton(){
    let a = Math.random()*100;
    document.getElementById("secoundID").innerHTML = 
    `The number is <b>${a}</b> is between 0 and 100`;
}

// part 2

let r = radiusTD.value;
let pi = Math.PI;
areaCalc()

function newRadius(newR){
    r = newR;
    console.log(r);
    areaCalc();
}

function areaCalc(){
    let area = pi*r*r;
    area = area.toFixed(2);
    circleArea.innerHTML = `The circle area is: π * r<sup>2</sup> = 3.14 * (${r})<sup>2</sup> = ${area} cm<sup>2</sup>`;
    circleID.innerHTML = 
    `<button class="circle" style="width: ${r*2}cm; height: ${r*2}cm; font-size: ${r*10}px;">Area =<br> ${area} cm<sup>2</sup></button>`;
    
   
}

