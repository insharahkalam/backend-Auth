import express from "express"
import { createUser } from "../controller/Authcontrloller"
const router = express.Router()

router.post('/user', createUser)