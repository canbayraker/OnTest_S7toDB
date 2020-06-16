const express = require("express");
const timeline = require("./timeline");
const router = express();

router.use("/timeline",timeline);
//router.use("/endDayReport",endDayReport);


module.exports = router;