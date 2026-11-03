import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: "Project title is required",
    },
    
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
    },

    completion: {
        type: Date,
        default: null   // allows it to be null if the project is not completed yet
    },

    description: {
        type: String,
        trim: true,
        required: "Project description is required",
    }
});

export default mongoose.model("Project", ProjectSchema);