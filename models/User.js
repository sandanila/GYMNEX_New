import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        phoneNumber: {
            type: String,
            required: true,
        },

        dateOfBirth: {
            type: Date,
            required: true,
        },

        gender: {
            type: String,
            enum: ["male", "female", "other"],
            required: true,
        },

        documentType: {
            type: String,
            enum: ["nic", "passport"],
        },

        documentNumber: {
            type: String,
            trim: true,
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ["admin", "member"],
            default: "member",
        },

        status: {
            type: String,
            enum: ["active", "disabled"],
            default: "active",
        },
    },
    {
        timestamps: true,
    },
);

const User = 
    mongoose.model.User || mongoose.model("User", UserSchema);

export default User;