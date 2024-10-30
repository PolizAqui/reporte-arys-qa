require('dotenv').config();

/********* PORT *******/

const PORT = process.env.PORT

/********* DATABASE *********/
const PG_HOST = process.env._HOST
const PG_USER = process.env._USER
const PG_PASS = process.env._PASS
const PG_NAME = process.env._NAME


/*********** ROUTER *********/

const REPORT = process.env.REPORT

module.exports = {
    PORT,
    PG_HOST,
    PG_USER,
    PG_PASS,
    PG_NAME,
    REPORT
}