const {REPORT} = require('../global/_var');

/******** Dependency /*********/

const express = require('express');
const router = express.Router();

/********* Controller **********/

const getInfoController = require('../controller/getInfo.Controller');

/********* Routes **********/

router.get(REPORT,getInfoController.getDataReport)


module.exports = router;
