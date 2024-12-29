import mongoose from "mongoose";
const { Schema, Decimal128 } = mongoose;

// Student Schema
const studentSchema = new Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: { type: Decimal128, required: true, validate: { validator: v => v >= 5500.5 } },
  hobbies: { type: Array },
  isActive: { type: Boolean, default: true },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

const studentModel = mongoose.model("Student", studentSchema);

// Teacher Schema
const teacherSchema = new Schema({
  name: { type: String, required: true, trim: true },
  subject: { type: String, required: true },
  salary: { type: Decimal128, required: true, validate: { validator: v => v >= 30000.0 } },
  isActive: { type: Boolean, default: true },
  hireDate: { type: Date, default: Date.now },
});

const teacherModel = mongoose.model("Teacher", teacherSchema);

const createDynamicDoc = async (model, data) => {
  try {
    // Create an instance of the model with the provided data
    const doc = new model(data);

    // Save the instance to the database
    const result = await doc.save();

    console.log(`Document saved:`, result);
  } catch (error) {
    console.log(error);
  }
};

export { studentModel, teacherModel, createDynamicDoc };