const express = require('express');
const fetch = require('node-fetch');
const routerUser = express.Router();
const hbs = require('hbs');
const toDo = require('../models/toDo');

// Register Helpers
hbs.registerHelper('big', (data)=> {
    return data.toUpperCase();
});

hbs.registerHelper('small', (data)=> {
    return data.toLowerCase();
});

hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

hbs.registerHelper('fullName', (name, surname)=> {
    return fullName = `${name} ${surname}`;
});

// Routes - GET
routerUser.get('/:id', (req, res) => {
    console.log(req.params.id)
    let myUserId = req.params.id
    fetch(`https://jsonplaceholder.typicode.com/users/${myUserId}`)
    .then(res => res.json())
    .then(data => {
        res.render('user', {user: data});
        console.log(data)
    })
})

routerUser.get('/:id/todo', (req, res) => {
    res.render('todo');
})

// Routes _ POST
routerUser.post('/:id/todoTask', (req, res) => {
    // Check form Data
    console.log(req.body);

    // Destructuring
    // [task, time] = req.body;

    // Sending Data to DB
    let newToDo = new toDo ({
        task: req.body.task,
        time: req.body.time,
        created: Date.now()
    })

    newToDo.save(() => {
        console.log('To Do list Saved');
        res.render('success');
    })
})

module.exports = routerUser;