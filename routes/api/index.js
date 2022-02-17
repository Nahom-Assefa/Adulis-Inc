const router = require("express").Router();
const deviceRoutes = require("./device-routes");
const userRoutes = require("./user-routes");


router.use("/users", userRoutes);
router.use("/device", deviceRoutes);


module.exports = router;