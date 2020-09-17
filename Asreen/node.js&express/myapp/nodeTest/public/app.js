let x = document.querySelectorAll('.nav-item');
x.forEach(el => {
    el.onmouseover = function () {
        this.style.backgroundColor = "#fafc12";
        this.style.borderRaduis = '10%'
    }
    el.onmouseleave = function () {
        this.style.backgroundColor = "inherit";
    }
})
setTimeout(moveTextUp, 2000);
function moveTextUp() {
    // $('.text2').slideUp();
    // $('h3').hide('slow');
    $('.teyt1').fadeOut(1000);
    $('.text1').fadeIn('slow');
}
setTimeout(moveTextDown, 2000);
function moveTextDown() {
    $('.text1').fadeIn('slow');
    $('text1').show('slow');
}
$('document').ready(function () {
    $('.text1').fadeOut('slow');
});
$(document).ready(function () {
    // Display alert message after slide toggling paragraphs
    $(".text2").slideToggle(1000, function () {
        // Code to be executed
        $(".text2").slideDown('slow')
    });
    $('.myImage').mouseover(function () {
        $(this).animate({ width: "toggle" }).show(2000)
    });
    $('myImage').mouseleave(function () {
        $(this).show(2000);
    });

});
//  hover and mouseleave picture
$('.myCard').hover(function () {
    var src1 = $(this).attr('src');
    //console.log(src1)
    $('.myCard').prop({ "src": "https://www.myskillsmywork.org/wp-content/themes/myskills-2014/images/myskills-logo-01.png" })
    $(".myCard").mouseleave(function () {
        $(this).prop('src', src1);
    });

})
document.querySelector('.sendBtn').addEventListener('mouseover', function (e) {
    e.preventDefault();
    //console.log(e);
    $(this).css({ 'width': '300px', 'backgroundColor': 'orange' })
})
document.querySelector('.sendBtn').addEventListener('mouseleave', function (e) {
    e.preventDefault();
    //console.log(e);
    $(this).css({ 'width': '300px', 'backgroundColor': 'lightblue', 'textAlign': 'center', 'color': 'blue' })
})