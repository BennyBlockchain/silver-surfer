import connectDB from "../../../mongodb/index";
import Courses from "../../../mongodb/models/Courses";

const handler = (req, res) => {
  const { prof } = req.query;

  return new Promise((resolve, reject) => {
    Courses.find({ professor: prof })
      .then((resp) => {
        console.log(resp[0]);
        res.send(resp);
      })
      .catch((err) => {
        res.send(505).json({ error: err });
        reject();
      });
  });
};

export default connectDB(handler);
