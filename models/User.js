const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: "Please enter a valid email!",
      match: /^([a-zA-Z0-9_.-]+)@([\da-zA-Z.-]+)\.([a-z.]{2,6})$/,
    },
    phoneNumber: {
      type: Number,
      required: true,
      maxlength: 15,
      minlength: 10,
    },
    city: {
      type: String,
      maxlength: 25,
      minlength: 2,
    },
    payPref: {
      type: String,
      enum: ["Square", "Cash", "Paypal", "Bitcoin"],
      default: "Cash",
    },
    additionalComment: {
      type: String,
      maxlength: 140
    },
    devices: [
      {
        type: Schema.Types.ObjectId,
        ref: "Device",
      },
    ],
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

userSchema.virtual("deviceCount", function () {
  return this.devices.length;
});

const User = model("User", userSchema);

module.exports = User;
