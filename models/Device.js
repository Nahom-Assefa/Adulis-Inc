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
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);



const Device = model("Device", DeviceSchema);