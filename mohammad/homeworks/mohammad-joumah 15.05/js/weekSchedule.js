let chooseDay = prompt('Which day you want to see the task for', 'mon');
console.log(chooseDay);

if (chooseDay == 'monday' || chooseDay == 'mon') {
    document.getElementById('task').innerHTML += ('<h3>cleaning the hous</h3><img src="https://c8.alamy.com/comp/2B112PC/the-man-husband-cleaning-the-house-helping-wife-2B112PC.jpg" >');
} else if (chooseDay == 'tuesday' || chooseDay == 'tue') {
    document.getElementById('task').innerHTML += ('<h3>doing the laundry</h3><img src="https://thumbs-prod.si-cdn.com/thVhAzB4i5AJS0JaYJZLPrH0K2k=/fit-in/1600x0/https://public-media.si-cdn.com/filer/33/34/3334e65c-cd1c-47b9-8012-56d8b5cbfcea/istock_65795399_medium.jpg" >');
} else if (chooseDay == 'wednesday' || chooseDay == 'wed') {
    document.getElementById('task').innerHTML += ('<h3>cooking</h3><img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/news/markets/survey-cooking-at-home-will-become-the-new-normal-post-pandemic/10914660-1-eng-GB/Survey-Cooking-at-home-will-become-the-new-normal-post-pandemic_wrbm_large.jpg" >');
} else if (chooseDay == 'thursday' || chooseDay == 'thu') {
    document.getElementById('task').innerHTML += ('<h3>work in project</h3><img src="https://shit.management/content/images/2019/07/team_work.jpg" >');
} else if (chooseDay == 'friday' || chooseDay == 'fri') {
    document.getElementById('task').innerHTML += ('<h3>playing football</h3><img src="https://i.pinimg.com/736x/4c/96/1e/4c961eadec56ed661df924e8c84aa9f2.jpg" >');
} else if (chooseDay == 'saturday' || chooseDay == 'sat') {
    document.getElementById('task').innerHTML += ('<h3>restday</h3><img src="https://healthnutjulie.files.wordpress.com/2014/04/restday.png?w=584" >');
} else if (chooseDay == 'sunday' || chooseDay == 'sun') {
    document.getElementById('task').innerHTML += ('<h3>restudy my weekly homeworks</h3><img src="https://www.webanywhere.co.uk/blog/wp-content/uploads/homework.jpg" >');
} else {
    alert('This is not a day.please give between Mon-sun');
    document.getElementById('task').innerHTML += ('<h3>This is not a day.please give between Mon-sun</h3> <img src="https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Teaser/error-t.jpg" >')
}