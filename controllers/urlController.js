const { nanoid } = require("nanoid");
const URL = require("../models/urlSchema");

const handleGenerateNewShortURL = async (req, res) => {
  const url = req.body.url;
  if (!url)
    return res.status(400).json({ success: false, message: "URL is required" });
  const shortID = nanoid(8);

  try {
    const shortID = nanoid(8);
    const newURL = await URL.create({
      shortId: shortID,
      redirectURL: url,
      visitHistory: [],
    });

    return res.status(201).json({ id: shortID });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
const handleAnalytics = async (req, res) => {
  const shortId = req.params.shortid;
  const result = await URL.findOne({ shortId });
  if (!result) {
    return res.status(404).json({ message: "Short URL not found" });
  }
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

module.exports = { handleGenerateNewShortURL, handleAnalytics };
