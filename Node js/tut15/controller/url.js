const shortId = require('shortid')
const URL = require('../models/url');
const { isURL } = require('validator');

async function handleGenerateNewShortURL(req, res) {

    const shortID = shortId.generate();
    const body = req.body;
    if(!body.url) return res.status(400).json({error :"url is required"})
    if (!isURL(body.url)) {
        return res.status(400).json({ error: "Invalid URL format" });
    }
    
    await URL.create({

        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [{timeStamp: Date.now()}]
    });
    return res.render("home",{id: shortID})
}
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    if (!result) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory})
}

module.exports = { handleGenerateNewShortURL, handleGetAnalytics };
