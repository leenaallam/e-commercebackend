// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://leenaallam:<password>@cluster0.ark1twm.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("connected");
//   client.close();
// });
const mongoose = require("mongoose");

main()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://leenaallam:leenafarah@cluster0.ark1twm.mongodb.net/?retryWrites=true&w=majority"
  );

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
