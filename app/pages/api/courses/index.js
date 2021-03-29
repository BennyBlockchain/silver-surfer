import connectDB from "../../../mongodb/index";
import mongoose from "mongoose";
import Courses from "../../../mongodb/models/Courses";
const handler = (req, res) => {
  Courses.find({}).then((resp) => {
    console.log(resp);
    res.send(resp);
  });
};

export default connectDB(handler);
