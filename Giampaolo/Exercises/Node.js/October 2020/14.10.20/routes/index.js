// Modules
const router = require('express').Router();

// GET
router.get('/', (req, res) => {
    res.render('index');
});

// Export
module.exports = router;