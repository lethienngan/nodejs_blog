
const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/login', siteController.login);
router.get('/home',siteController.index);
router.get('/',siteController.index);




module.exports = router;