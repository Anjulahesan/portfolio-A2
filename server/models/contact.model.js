import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First name is required",
    },

    lastName: {
        type: String,
        trim: true,
        required: "Last name is required",
    },

    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"],
        lowercase: true,
        match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, "Please fill a valid email address"]
    }
});

export default mongoose.model("Contact", ContactSchema);