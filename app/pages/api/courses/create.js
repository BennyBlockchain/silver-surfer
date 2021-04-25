import connectDB from "../../../mongodb/index";
import Courses from "../../../mongodb/models/Courses";

const handler = (req, res) => {
  const { newCourse } = req.body;

  return new Promise((resolve, reject) => {
    Courses.create(newCourse, function (err, doc) {
      if (err) {
        reject;
        console.log(err);
        return res.status(500).json({ error: err });
      } else {
        resolve;

        return res.json({ saved: doc });
      }
    });
  });
};

export default connectDB(handler);
