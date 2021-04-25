import connectDB from "../../../mongodb/index";
import Courses from "../../../mongodb/models/Courses";

const handler = (req, res) => {
  const { id, title } = req.query;

  return new Promise((resolve, reject) => {
    Courses.updateOne(
      { course_number: id },
      { $pull: { homework: { title: title } } },
      function (err, result) {
        if (err) {
          console.log("Error", err);
          reject;
        } else {
          console.log("Result :", result);
          console.log(result);
          res.status(200).send(id + title + " course removed.");
          resolve;
        }
      }
    );
  });
};

export default connectDB(handler);
