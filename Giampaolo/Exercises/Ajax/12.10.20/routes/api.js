const express = require('express');
const axios = require('axios');
const router = express.Router();

// get user info by his email
router.get('/', (req, res)=> {
    // email from client form
    let email = req.query.email;

    // get data from REST API
    let apiLink = 'https://jsonplaceholder.typicode.com/users';
    //fetch(url)
    axios.get(apiLink)
    .then(function(apiResponse) {
        console.log(apiResponse.data);
        let users = apiResponse.data;
        for(user of users){
            if(email == user.email) {
                info = `
                <h1>We found you!</h1>
                <h2>Name: ${user.name}</h2>
                <h2>Id: ${user.id}</h2>
                <h2>Name: ${user.name} </h2>
                <h2>Email : ${user.email} </h2>
                `;
                break;
            }
            else {
                info = '<h1>No user Found sorry!</h1>'
            }
        }
        res.json(info);
    })
    .catch(function(error) {
        console.log(error);
    });
})

// Export Router
module.exports = router