import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

const students = mongoose.model("Student", studentSchema);

export default students;
