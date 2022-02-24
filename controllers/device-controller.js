const { Device, User } = require("../models");

const deviceController = {
  // get all devices
  getAllDevices(req, res) {
    Device.find({})
      .then((dbDeviceData) => {
        res.json(dbDeviceData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // get one device
  getOneDevice({ params }, res) {
    Device.findById({ _id: params.deviceId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.json({ message: "No Device associated with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add device
  addDevice({ params, body }, res) {
    Device.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { devices: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // update device
  updateDevice({ params, body }, res) {
    Device.findOneAndUpdate({ _id: params.deviceId }, body, { new: true })
      .then((dbDeviceData) => {
        if (!dbDeviceData) {
          res.json({ message: "No User associated with this id!" });
        }
        res.json(dbDeviceData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // delete a device
  deleteDevice({ params }, res) {
    Device.findOneAndDelete({ _id: params.deviceId })
      .then((dbDeviceData) => {
        if (!dbDeviceData) {
          return res.json({ message: "No Device associated with this id!" });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { devices: params.deviceId } },
          { new: true }
        ).then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: "No User found with this id!" });
            return;
          }
          res.json(dbDeviceData);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = deviceController;
