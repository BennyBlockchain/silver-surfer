import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(
    "mongodb+srv://silverFox:EZrRWCL3YpSvDFK8@silver-surfer-db.puftt.mongodb.net/SilverMongo?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  );
  return handler(req, res);
};

export default connectDB;
