const get = (req, res) => {
    return res.json({
        ip: req.ip,
        language: req.get('Accept-Language'),
        software: req.get('User-Agent')
    });
}

module.exports = { get }