document.body.style.background='linear-gradient(45deg, red, blue)';
var elem = document.getElementById("animateID");
animateID.style.borderRadius = '50%';

function myMove() {  
    let pos = 0;
   for(let i=0;i<350;i++){
        console.log(pos);
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
    //elem.addEventListener('click',transformMe);
    elem.addEventListener('mouseover',transformMe2); 
    function transformMe(){   
        elem.style.transform = "translatex(200px)";
    }
    function transformMe2(){   
        elem.style.transform = "translatex(200px)";
        elem.style.transform = "rotate(189deg)";
        elem.style.backgroundColor="yellow";

    }
    elem.addEventListener('click',moveAgain);
    function moveAgain(){
        elem.style.animation='move 4s infinite ease reverse';
    }
    // function nextPage(pageName){
    //     href.location='http://127.0.0.1:5500/'+pageName;
    //     myPage.value=' ';
    // }