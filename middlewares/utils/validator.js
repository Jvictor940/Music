const adminValidator = (req, res, next) => {
    if (req.user.admin) {
        next();
    } else {
        res
        .status(403)
        .setHeader('Content-Type', 'application/json')
        .json({ message: 'Unauthorized to access this resource!' })
    }
}

module.exports = adminValidator;