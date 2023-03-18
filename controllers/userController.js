const getUsers = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully got your user"})
}

const createUser = (req, res, next) => {
    res 
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully posted a user"})
}
const deleteUsers = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully deleted user"})
}

const getUser = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Searching for user with the userId of ${req.params.userId}`})
}

const updateUser = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated user with the uaerId of ${req.params.userId}`})
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({mesage: `Deleted user with the userId of ${req.params.userId}`})
}

module.exports = {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
}