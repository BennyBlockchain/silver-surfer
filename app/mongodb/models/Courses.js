import mongoose from "mongoose";

const courses = mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },
  course_number: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  professor: {
    type: String,
  },
  syllabus: {
    type: String,
  },
  schedule: {
    type: Array,
  },
  homework: {
    type: Array,
  },
  labs: {
    type: Array,
  },
  resources: {
    type: Array,
  },
});
const Courses = mongoose.model("Courses", courses);
export default Courses;
