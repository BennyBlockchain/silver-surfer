import connectDB from "../../../mongodb/index";
import Courses from "../../../mongodb/models/Courses";

const handler = (req, res) => {
  return new Promise((resolve, reject) => {
    Courses.find({})
      .then((resp) => {
        res.status(202).json(resp);
        resolve();
      })
      .catch((err) => {
        res.send(505).json({ error: err });
        reject();
      });
  });
};

export default connectDB(handler);
