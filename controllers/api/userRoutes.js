const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    res.send('Im homepage')
})

module.exports = router;