const express = require('express')
const router = express.Router()


//@description    login/landing page
//@route   GET/
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})


//@description    dashboard
//@route          GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


//Allows me to send the router object out to any file
module.exports = router