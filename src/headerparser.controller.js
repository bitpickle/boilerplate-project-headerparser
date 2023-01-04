const get = (req, res) => {
    return res.json({
        ipaddress: req.ip,
        language: req.get('Accept-Language'),
        software: req.get('User-Agent')
    });
}

module.exports = { get }