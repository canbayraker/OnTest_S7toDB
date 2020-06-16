const express = require("express");
const { readPlcDataWriteToDB } = require("../controllers/sendMachineStatus");
const router = express();


router.get("/getDataFromPlc",readPlcDataWriteToDB);





module.exports = router;