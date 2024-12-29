import mongoose from "mongoose";
const { Schema, Decimal128 } = mongoose;

// Create a schema
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,    
     trim: true,
  },
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

// Create an instance of the model
const createDoc = async (name, age, fees, hobbies, comments) => {
  try {
    const student = new studentModel({
      name: name,
      age: age,
      fees: fees,
      hobbies: hobbies,
      comments: comments,
    });
    const result = await student.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Save the new model instance, passing a callback


export default createDoc;