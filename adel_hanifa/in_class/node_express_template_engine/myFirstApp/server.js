 // using express js
 const express = require('express');
 const app = express();
 const port = 3000;
 const path= require('path');
 const myArray = ['Adel','Hanifa', 28, 'Syria', 'Mönchengladbach'];
const myObject = {
  fName: 'Adel',
  lName: 'Hanifa',
  age: 28,
  from: 'Syria',
  liveIn: 'Mönchengladbach'
}
 app.use(express.static(path.join(__dirname, 'public')));

 app.set('view engine', 'hbs')

// Route

app.get('/',(reg,res)=>{
  res.render('index', {
    pageTitle: 'Welcome to my portfolio',
    homeLiClass: 'active'
  })
}) 

app.get('/aboutme',(reg,res)=>{
  res.render('about', {
    pageTitle: 'About me',
    aboutmeLiClass: 'active'
  })
}) 

app.get('/contactme',(reg,res)=>{
  res.render('contact', {
    pageTitle: 'Contact me',
    contactmeLiClass: 'active'
  })
}) 

app.get('/myportfolio',(reg,res)=>{
  res.render('portfolio', {
    pageTitle: 'My Portfolio',
    myportfolioLiClass: 'active'
  })
}) 

app.get('/test',(reg,res)=>{
  res.render('test', {
    pageTitle: 'My test page',
    fNameA: myArray[0],
    lNameA: myArray[1],
    ageA: myArray[2],
    countryA: myArray[3],
    cityA: myArray[4],
    allDataA: myArray,
    fNameO: myObject.fName,
    lNameO: myObject.lName,
    ageO: myObject.age,
    countryO: myObject.from,
    cityO: myObject.liveIn,
    allDataO: myObject
  })
}) 

//listen
 app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`)
})