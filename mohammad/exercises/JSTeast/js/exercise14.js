let text = "His name is Tuergut. He is a Turkish legend. Everyone say Tuergut is a great fighter. Tuergut is also smart, brave and cleaver. Tuergut follows his brother in all wars for decades. When Tuergut dies, people were upset for him";

mainText.innerHTML = `<h2>Main text</h2><p>${text}</p>`;


let splitText = [];
splitText = text.split(".");
// console.log(splitText[0])
for (let i of splitText)
    splText.innerHTML += `<li>${i}</li>`;

let changWord = text.replace(/Tuergut/g, "Agah");

update.innerHTML = `<h2>Updated text</h2><p>${changWord}</p>`;

let newSentence = "Yesterday is a History, tomorrow is mystery but today is a Gift"
splitText.push(newSentence);

l_text.innerHTML = `<h2>last text</h2><p>${splitText}</p>`;


// exercise15

let rondom = () => {
    let number = Math.random();
    if (number < 0.5) result.innerHTML = `the number ${number} is smaller than 0.5`;
    else result.innerHTML = `the number ${number} is bigger than 0.5`;
}

let rondom100 = () => {
    let number = Math.random() * 101;
    result1.innerHTML = `the number ${number} `;

}
let r = 0;
let cArea = () => {
    r = radius.value;
    let circleArea = Math.sqrt(r) * Math.PI;
    return area.innerHTML = `circle area = ${circleArea}`;
}
let drow = () => {
    cArea();
    let diameter = 2 * radius.value;
    console.log(diameter)
    circle.style.width = `${diameter}cm`;
    circle.style.height = `${diameter}cm`;
}