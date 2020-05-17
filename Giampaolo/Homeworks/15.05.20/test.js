let max = 12, min = 1;
let chooseMonth = prompt(`Which month of the Year you want to see? 
Write only numbers (1 - 12)`, Math.floor(Math.random() * (max - min + 1)) + min);
console.log(chooseMonth);

if (chooseMonth == 1) {
    document.getElementById("userChoice").innerHTML = 'This is January';
    document.getElementById("imageMonth").src = 'https://www.lovethispic.com/uploaded_images/227161-Hello-January.jpg';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#fffafa98";
}

else if (chooseMonth == 2) {
    document.getElementById("userChoice").innerHTML = 'This is February';
    document.getElementById("imageMonth").src = 'https://1.bp.blogspot.com/-z0XwB8fGQ8A/WnLBt5OPxmI/AAAAAAAAj4g/09k_J5zpMjMq1_nRz_ta2S-rq8w1IbZtgCLcBGAs/s1600/Herzlich%2BWillkommen%2BFebruar.jpg';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#0099ff98";
}

else if (chooseMonth == 3) {
    document.getElementById("userChoice").innerHTML = 'This is March';
    document.getElementById("imageMonth").src = 'https://c.tadst.com/gfx/1200x630/the-month-march.jpg?1';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#00ff4c98";
}

else if (chooseMonth == 4) {
    document.getElementById("userChoice").innerHTML = 'This is April';
    document.getElementById("imageMonth").src = 'https://c.tadst.com/gfx/1200x630/the-month-april.jpg?1';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#fffb0098";
}

else if (chooseMonth == 5) {
    document.getElementById("userChoice").innerHTML = 'This is May';
    document.getElementById("imageMonth").src = 'https://leahoshaughnessy00.files.wordpress.com/2018/05/month-of-may-demo-photo.jpg?w=620';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#ae00ff98";
}

else if (chooseMonth == 6) {
    document.getElementById("userChoice").innerHTML = 'This is June';
    document.getElementById("imageMonth").src = 'https://c.tadst.com/gfx/1200x630/the-month-june.jpg?1';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#fffafa98";
}

else if (chooseMonth == 7) {
    document.getElementById("userChoice").innerHTML = 'This is July';
    document.getElementById("imageMonth").src = 'https://4.bp.blogspot.com/-OeHGSrFYTO4/V3WEzK3oWvI/AAAAAAAAJwE/NhxLM376FAAlwewqDh4IpI3kFC1zSUGwwCK4B/w1200-h630-p-k-no-nu/Mein%2BMonat%2BJuli.jpg';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#ffae0098";
}

else if (chooseMonth == 8) {
    document.getElementById("userChoice").innerHTML = 'This is August';
    document.getElementById("imageMonth").src = 'https://media.istockphoto.com/photos/august-handwritten-in-the-sandy-shoreline-picture-id171221587?k=6&m=171221587&s=612x612&w=0&h=YeV4ItqAv1y9G4v7S8ORTcibBUSATYX-grMlCFoH3K0=';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#ff7b0098";
}

else if (chooseMonth == 9) {
    document.getElementById("userChoice").innerHTML = 'This is September';
    document.getElementById("imageMonth").src = 'http://4.bp.blogspot.com/-M2sKuq_LLjM/UjdDdXyy1RI/AAAAAAAADWM/cNozRTsrWGc/s1600/Beautiful-Autumn-Wallpapers-2.jpg';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#ff00ea98";
}

else if (chooseMonth == 10) {
    document.getElementById("userChoice").innerHTML = 'This is October';
    document.getElementById("imageMonth").src = 'https://th.bing.com/th/id/OIP.nrszEVQzUHS-S_ZfNpFvvAHaDW?pid=Api&rs=1';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#00000098";
}

else if (chooseMonth == 11) {
    document.getElementById("userChoice").innerHTML = 'This is November';
    document.getElementById("imageMonth").src = 'https://i.ytimg.com/vi/JvCM9-4qSZk/maxresdefault.jpg';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#1b18b698";
}

else if (chooseMonth == 12) {
    document.getElementById("userChoice").innerHTML = 'This is December';
    document.getElementById("imageMonth").src = 'https://th.bing.com/th/id/OIP.ShEtomX1-HA7k8SBdyvmPgHaEg?pid=Api&rs=1';
    document.getElementsByClassName("container")[0].style.backgroundColor = "#ff000098";
}

else {
    alert('This is not a Month.please give between 1-12');
};

let maxDay = 7, minDay = 1;
let chooseDay = prompt(`Select a day of the week and see your tasks.
Write only numbers (1 - 7)`, Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay);
console.log(chooseDay);

if (chooseDay == 1) {
    document.getElementById("tasks").innerHTML = `
<td>18/05/20</td>
<td>Monday</td>
<td>DCI Course - JavaScript Conditions</td>
<td>Homeworks to do</td>`;
}

else if (chooseDay == 2) {
    document.getElementById("tasks").innerHTML = `
<td>19/05/20</td>
<td>Tuesday</td>
<td>DCI Course - JavaScript Functions</td>
<td>Create a Project</td>`;
}

else if (chooseDay == 3) {
    document.getElementById("tasks").innerHTML = `
<td>20/05/20</td>
<td>Wednesday</td>
<td>DCI Course - JavaScript Loops</td>
<td>Update files on GitHub</td>`;
}

else if (chooseDay == 4) {
    document.getElementById("tasks").innerHTML = `
<td>21/05/20</td>
<td>Thursday</td>
<td>DCI Course - JavaScript Review</td>
<td>Check all notes</td>`;
}

else if (chooseDay == 5) {
    document.getElementById("tasks").innerHTML = `
<td>22/05/20</td>
<td>Friday</td>
<td>DCI Course - Mentoring</td>
<td>Watch more training video</td>`;
}

else if (chooseDay == 6) {
    document.getElementById("tasks").innerHTML = `
<td>23/05/20</td>
<td>Saturday</td>
<td>Work 12:30 - 18:00</td>
<td>Have a pizza</td>`;
}

else if (chooseDay == 7) {
    document.getElementById("tasks").innerHTML = `
<td>24/05/20</td>
<td>Sunday</td>
<td>Hiking in Bonn</td>
<td>Training on C#</td>`;
}

else {
    alert('Choose a valid day');
};