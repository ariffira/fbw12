let picture = ['living-room', 'bathroom', 'kitchen', 'balkon'];

for (let i in picture) {
    document.getElementById("pic").innerHTML += `<div><h3>${picture[i]}</h3><img src="image/${picture[i]}.jpg"  id="${picture[i]}"></div>`;

}
for (let i in picture) {
    document.getElementById("option").innerHTML += `<a href="#${picture[i]}"> ${picture[i]}</a> |`;

}

let discreption = ['living space is 35', 'therd floor', 'one bathroom', 'one Balkon'];


for (let i of discreption) {
    document.getElementById("discreption").innerHTML += `<li>${i}</li>`;

}