import connectDB from "../../../mongodb/index";
import Courses from "../../../mongodb/models/Courses";

const handler = (req, res) => {
  Courses.find({})
    .then((resp) => {
      console.log(resp);
      console.log(resp);
      res.status(202).json(resp);
    })
    .catch((err) => {
      res.send(505).json({ error: err });
    });
};

export default connectDB(handler);
