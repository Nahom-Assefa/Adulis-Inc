const { Device, User } = require("../models");

const deviceController = {
  getAllDevices(req, res) {
    Device.find({})
      .then((dbDeviceData) => {
        res.json(dbDeviceData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOneDevice({ params }, res) {
      console.log(params);
    Device.findById({ _id: params.deviceId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.json({ message: "No Device associated with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  addDevice({ params, body }, res) {
    console.log("body/params", body, params);
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
          res.status(404).json({ message: "No pizza found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  updateDevice({ params, body }, res) {
    console.log(params);
    Device.findOneAndUpdate({ _id: params.deviceId }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.json({ message: "No Device associated with this id!" });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { devices: params.deviceId } },
          { $push: { devices: body } },
          { new: true }
        );
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  deleteDevice({ params }, res) {
    Device.findOneAndDelete({ _id: params.deviceId })
      .then((dbDeviceData) => {
        if (!dbDeviceData) {
          res.json({ message: "No Device associated with this id!" });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { devices: params.deviceId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No pizza found with this id!" });
          return;
        }
        res.json(dbDeviceData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = deviceController;
