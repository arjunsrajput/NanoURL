require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 9001;
const URL = require("./models/urlSchema");
const urlRoute = require("./routes/urlRoutes");
const connectToDB = require("./database/dbConnect");

connectToDB();
app.use(express.static("public"));
app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortid", async (req, res) => {
  const shortId = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );
  if (!entry) {
    return res.status(404).json({
      message: "Short URL not found",
    });
  }
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
});
