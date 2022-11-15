module.exports = async (req, res) => {
    try {
        const data = {
            success: true,
            // uptime: process.uptime(),
            // date: new Date()
        }

        res.status(200).send(data)
    } catch (err) {
        console.log("/api/ping", err);
        res.status(500).send({ error: err.message });
    }
};