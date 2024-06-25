const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgEvent: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    isOnlineEvent: {
      type: Boolean,
      required: true,
    },
    platform: {
      type: String,
    },
    cep: {
      type: String,
    },
    street: {
      type: String,
    },
    neighborhood: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    number: {
      type: String,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    organizerName: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: false,
    },
    telephone: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = {
  Event,
  eventSchema,
};
