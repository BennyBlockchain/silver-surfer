import connectDB from "../../../mongodb/index";
import Courses from "../../../mongodb/models/Courses";

const handler = (req, res) => {
  const { data } = req.body;
  console.log(data);
  return new Promise((resolve, reject) => {
    Courses.create(data, function (err, doc) {
      if (err) {
        reject;
        console.log(err);
        return res.status(500).json({ error: err });
      } else {
        resolve;
        console.log(doc);
        return res.json({ saved: doc });
      }
    });
  });
};

export default connectDB(handler);
