import authSchema from '../models/auth.models.js'
import usersSchema from '../models/auth.models.js'

const createUser = async (req,res) => {
    try {
        const { name, username, email, password } = req.body
        if (!name || !username || !email || !password) {
            res.status(400).json({
                message: "All field required!"
            })
            return
        }
        const newUser = await authSchema.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.status(201).json({
            message: "User created successfully!",
            user: newUser
        })

    } catch (error) {
        console.log("error in creating users", error);
        res.status(500).json({
            message: "error in creating user!"
        })
    }
}
export { createUser } 