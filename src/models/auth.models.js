import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
        maxLength: 20
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please use valid email"]
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
},
    {
        timestamps: true
    }
)

const authSchema = mongoose.model("users", usersSchema)
export default authSchema