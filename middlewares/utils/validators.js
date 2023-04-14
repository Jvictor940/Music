const adminValidator = (req, res, next) => {
    // console.log(req.user)
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