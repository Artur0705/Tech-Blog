const router = require("express").Router();

router.use("/", require("./home-routes"));
router.use("/dashboard", require("./dashboard-routes"));
router.use("/api", require("./api"));

module.exports = router;
