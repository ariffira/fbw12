// user login form
exports.login = (req, res)=> {
    res.send('user login')
}

// user sign-UP form
exports.signup = (req, res)=> {
    res.send('signup form')
}

// save/create a user account
exports.createUser = (req, res) => {
    res.send('user created')
}

// update user data
exports.updateUser = (req, res)=> {
    res.send('updated user')
}