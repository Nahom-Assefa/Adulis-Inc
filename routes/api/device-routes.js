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

router
.route("/:userId")
.post(addDevice)

router
.route("/:userId/:deviceId")
.delete(deleteDevice)
.put(updateDevice)


module.exports = router;