import mongoose from "mongoose";
import Contact from "../models/contact.model.js";
import { sendContactEmail } from "../utils/email.js";

export const createContact = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const {name, email, phone, subject, message} = req.body;
        if(!name || !email || !phone || !subject || !message){
            const error = new Error("Missing details");
            error.statusCode = 400;
            throw error;
        }
        const newContact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        })

        await newContact.save({session});

        // Send email notification and confirmation
        await sendContactEmail(name, email, phone, subject, message);

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "Contact message sent successfully"
        })
        
    }catch(error){
        await session.abortTransaction();
        session.endSession();
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        })
    }
}

export const getContacts = async (req, res) => {
    try{
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            contacts
        })
    }catch(error){
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        })
    }
}
