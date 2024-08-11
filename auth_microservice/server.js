const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const authRoutes = require("./routes/auth_routes").authRoutes;
const userRoutes = require('./routes/user_routes').userRoutes;

const { mongooseConnect } = require("./config/mongoConnection");
//* middleswares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//*routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);


//** mongo connct to DB */
mongooseConnect().then(() => console.log("Mongodb connected"));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Its working" });
});

app.listen(PORT, () => {
  console.info(`Server is running on ${PORT}`);
});
