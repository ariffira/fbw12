//connection test
//alert('is connected')

// add header title
document.getElementById("h3title").innerHTML += 'Welcome to JavaScript learning';

// add nav list
document.getElementById("nav").innerHTML += '<a href="#"><i class="material-icons">home</i>&nbsp Home</a>';
document.getElementById("nav").innerHTML += '<a href="#"><i class="material-icons">account_box</i>&nbsp Profile</a>';
document.getElementById("nav").innerHTML += '<a href="#"><i class="material-icons">class</i>&nbsp My Works</a>';
document.getElementById("nav").innerHTML += '<a href="#"><i class="material-icons">payment</i>&nbsp Account</a>';
document.getElementById("nav").innerHTML += '<a href="#"><i class="material-icons">contact_phone</i>&nbsp Contact Me</a>';


// add side menu 
document.getElementById("side").innerHTML +=
    '<a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>' +
    '<a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>' +
    '<a href="https://www.whatsapp.com/" target="_blank"><i class="fab fa-whatsapp"></i></a>' +
    '<a href="https://www.skype.com/" target="_blank"><i class="fab fa-skype"></i></a>' +
    '<a href="https://telegram.org/" target="_blank"><i class="fab fa-telegram"></i></a>' +
    '<a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>' +
    '<a href="https://outlook.live.com/" target="_blank"><i class="fas fa-mail-bulk"></i></a>' +
    '<a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>' +
    '<a href="https://www.xing.com/" target="_blank"><i class="fab fa-xing-square"></i></a>' +
    '<a href="https://github.com/" target="_blank"><i class="fab fa-github-square"></i></a>';


// add main part 
document.getElementById("main").innerHTML += '<h1>Here is my Profile</h1>';
document.getElementById("main").innerHTML +=
    '<div id="info">' +
    '<img src="img/adel.png" alt="my photo" height="250">' +
    '<p>' +
    'My first Name is :' +
    '<i id="fName">' +
    '</i>' +
    '<br>' +
    'My Family Name is :' +
    '<i id="sName">' +
    '</i>' +
    '<br>' +
    'I am' +
    '<i id="age">' +
    '</i>' +
    'years old.' +
    '<br>' +
    'I am from' +
    '<i id="country">' +
    '</i>' +
    '<br>' +
    'I live in' +
    '<i id="city">' +
    '</i>' +
    '<br>' +
    'My Phone Number is :' +
    '<i id="phone">' +
    '</i>' +
    '<br>' +
    '<h4>A some of my life :</h4>' +
    '</p>' +
    '</div>';


// add header title
document.getElementById("footer").innerHTML += '<p>Copyright @Adel , 2020</p>';
document.getElementById("footer").innerHTML += '<p>Welcome to My Website. This is a test JS site</p>';



var array = ['Adel', 'Hanifa', 28, 'Syria', 'Mönchengladbach', '01590', 5844010]

document.getElementById("fName").innerHTML = ' ' + array[0];
document.getElementById("sName").innerHTML = ' ' + array[1];
document.getElementById("age").innerHTML = ' ' + array[2] + ' ';
document.getElementById("country").innerHTML = ' ' + array[3];
document.getElementById("city").innerHTML = ' ' + array[4];
document.getElementById("phone").innerHTML = ' ' + array[5] + '/' + array[6];

var info;
info = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,ipsum. Ad a quod id commodi, ex, amet laboriosam repudiandae ipsam ducimus cupiditate vitae exercitationem enim fugit? Ipsa, pariatur veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolores culpa alias id numquam perferendis esse, quam voluptates laborum sunt est doloremque in repellendus quos, dolorum incidunt eligendi sequi consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis adipisci, deleniti voluptatem aspernatur qui reprehenderit, at hic, libero natus quam ullam eveniet magni ist iusto culpa pariatur delectus aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam blanditiis rem numquam distinctio, accusantium adipisci omnis iure harum voluptatum ratione eos, ex nam ea ad. Facere veritatis eum ipsum quidem? Lorem, ipsum dolor sit amet  consectetur adipisicing elit. A nostrum vitae delectus ducimus laudantium exercitationem nihil,  aspernatur esse consectetur, rerum cupiditate veniam quisquam? Ab necessitatibus eaque suscipit in eos animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum odit non harum  enim, qui ipsa corrupti, minus vero deleniti sequi consectetur ut? Dicta voluptas fugiat  repellendus at veritatis voluptate?';


document.getElementById("info").innerHTML += info;