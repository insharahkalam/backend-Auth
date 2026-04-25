import authSchema from '../models/auth.models.js'
import jtw from 'jsonwebtoken'


const createUser = async (req, res) => {
    try {
        const { name, username, email, password } = req.body
        if (!name || !username || !email || !password) {

            res.status(400).json({
                message: "All field required!"
            })
            return
        }
        if (password.length < 6) {
            res.json({
                message: "your password must be greater than 6."
            })
        }
        if (name.length < 4) {
            res.json({
                message: "your name must be greater than 4 charachters."
            })
        }
        console.log('------>',req.body);
        
        const newUser = await authSchema.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        console.log(name, username , email , password);

        const token = jtw.sign({
            id: newUser._id,
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        res.status(201).json({
            message: "User created successfully!",
            user: newUser,
            cookie: token
        })
    } catch (error) {
        console.log("error in creating users", error);
        res.status(500).json({
            message: "error in creating user!"
        })
    }
}

// const getUser = async (req, res) => {
//     try {
//         const users = await authSchema.find()
//         res.status(200).json({
//             message: "user fetched!",
//             users
//         })
//     } catch (error) {
//         console.log(error, "error in getusers!");

//     }
// }



export { createUser } 