// show landing page
exports.landingPage = (req, res)=> {
    res.render('index');
}

//contact us form
exports.contactus = (req, res)=> {
    res.render('contactus');
}

// about company info
exports.aboutus = (req, res)=> {
    res.render('aboutus');
}