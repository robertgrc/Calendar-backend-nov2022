const { Schema, model } = require("mongoose");
const eventSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    require: true,
  },
  end: {
    type: Date,
    require: true,
  },
  user: {
    Type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

module.exports = model("Evento", eventSchema);
