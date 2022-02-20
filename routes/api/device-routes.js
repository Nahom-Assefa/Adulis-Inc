const router = require("express").Router();

const {
    getAllDevices,
    getOneDevice,
    addDevice,
    updateDevice,
    deleteDevice

} = require("../../controllers/device-controller")

router
.route("/")
.get(getAllDevices)

router
.route("/:deviceId")
.get(getOneDevice)
.put(updateDevice)

router
.route("/:userId")
.post(addDevice)

router
.route("/:userId/super/:deviceId")
.delete(deleteDevice)



module.exports = router;