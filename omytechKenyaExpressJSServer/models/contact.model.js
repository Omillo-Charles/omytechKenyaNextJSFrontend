import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Contact name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    email: {
        type: String,
        required: [true, 'Contact email is required'],
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    phone: {
        type: String,
        trim: true,
        maxLength: 30,
    },
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true,
        minLength: 2,
        maxLength: 200,
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        minLength: 5,
        maxLength: 5000,
    },
    status: {
        type: String,
        enum: ['new', 'read', 'responded', 'archived'],
        default: 'new',
    }
}, {
    timestamps: true,
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
