function on() {
    console.log('The mouse in On Me!');
    document.getElementById('image').src = 'images/OnLamp.png';
    document.getElementsByTagName('body')[0].style.backgroundColor = "#55555573";
}

function off() {
    console.log('The mouse in Off Me!');
    document.getElementById('image').src = 'images/OffLamp.png';
    document.getElementsByTagName('body')[0].style.backgroundColor = "black";
}