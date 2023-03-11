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

module.exports = {
    getUsers,
    createUser,
    deleteUsers
}