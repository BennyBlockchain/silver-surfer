import connectDB from "../../../mongodb/index";
import Courses from "../../../mongodb/models/Courses";

const handler = (req, res) => {
  const { id, data } = req.body;
  const query = { _id: id };
  return new Promise((resolve, reject) => {
    Courses.findOneAndUpdate(query, data, function (err, doc) {
      if (err) {
        reject;
        return res.send(500, { error: err });
      } else {
        resolve;
        return res.send("Succesfully saved.", doc);
      }
    });
  });
};

export default connectDB(handler);
