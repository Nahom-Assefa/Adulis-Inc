const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const DeviceSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
      enum: ["Apple", "Samsung", "LG", "Google", "OnePlus", "Other"],
      default: "Other",
    },
    modelName: {
      type: String,
      required: true,
      trim: true,
    },
    imei: {
      type: String,
      required: true,
      maxlength: 20,
      minlength: 10,
    },
    carrier: {
      type: String,
      required: true,
      enum: ["Verizon", "T-Mobile", "ATT", "Dish", "Unlocked", "Other"],
      default: "Other",
      trim: true,
    },
    storage: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
      enum: ["New", "Used", "Cracked", "No Power", "Bad LCD"],
      default: "Used",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Device = model("Device", DeviceSchema);

module.exports = Device;
