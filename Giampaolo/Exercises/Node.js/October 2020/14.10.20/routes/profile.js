// Modules
const router = require('express').Router();

// GET
router.get('/', (req, res) => {
    let user = {
        name: 'Arthos',
        email: 'arthos@mail.com'
    }
    res.render('profile', {
        user,
        msg: req.flash('info')
    });
});

// Export
module.exports = router;