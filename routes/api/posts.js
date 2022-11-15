const { checkQuery } = require("../../utils/validator");
const { remoteApiTag, remoteApiTags } = require("../../utils/fetch");

module.exports = async (req, res) => {
    const { tags, direction, sortBy } = checkQuery(req.query);
    try {
        if (tags == null || tags.length < 1) {
            return res.status(400).send({ error: "Tags parameter is required" });
        }

        if (direction == null) {
            return res.status(400).send({ error: "Direction parameter is invalid" });
        }

        if (sortBy == null) {
            return res.status(400).send({ error: "sortBy parameter is invalid" });
        }

        const retData = Array.isArray(tags) ? await remoteApiTags({tags, sortBy, direction}) : await remoteApiTag({tags, sortBy, direction});

        res.status(200).send(retData.data.posts);
    } catch (err) {
        console.log("/api/posts", err);
        res.status(500).send({ error: err.message });
    }
};