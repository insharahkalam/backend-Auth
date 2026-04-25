import express from "express"
import { createUser } from "../controller/Authcontrloller.js"
const router = express.Router()

router.post('/user', createUser)
router.get('/allUsers', (req, res) => {
    console.log("Cookies", req.cookies);
    res.json(({
        message: "test Route",
        cookie: req.cookies
    }))
})

export default router