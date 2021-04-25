import connectDB from "../../../mongodb/index";
import Courses from "../../../mongodb/models/Courses";

const handler = (req, res) => {
  const { id } = req.query;

  return new Promise((resolve, reject) => {
    Courses.remove({ course_number: id }, function (err, result) {
      if (err) {
        console.log("Error", err);
        reject;
      } else {
        console.log("Result :", result);
        res.status(200).send(id + " course removed.");
        resolve;
      }
    });
  });
};

export default connectDB(handler);
