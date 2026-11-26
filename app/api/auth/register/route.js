import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import registerSchema from "@/lib/validations/registerSchema";
import bcrypt from "bcryptjs";

export async function POST(req) {

    let stage = "Starting registration";

    try {
        stage = "Connecting to MongoDB";
        await connectDB();

        stage = "Reading form data";
        const formData = await req.formData();

        const data = Object.fromEntries(formData.entries());

        stage = "Validating form data";
        const validation = registerSchema.safeParse(data);

        if (!validation.success) {
            return Response.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: validation.error.flatten().fieldErrors,
                },
                { status: 400 },
            );
        }

        const validateData = validation.data;

        stage = "Checking existing user";
        const existingUser = await User.findOne({
            email: validateData.email,
        });

        if (existingUser) {
            return Response.json(
                {
                    success: false,
                    message: "Email is already registered",
                },
                { status: 409 },
            );
        }

        stage = "Hashing password";

        const hashedPassword = await bcrypt.hash(
            validateData.password,
            10
        );

        stage = "Creating user";
        await User.create({
            ...validateData,
            password: hashedPassword,
            role: "member",
        });

        return Response.json(
            {
                success: true,
                message: "Account created successfully",
            },
            { status: 201 },
        );
        
    }  catch (error) {
        console.error(`Registration failed at: ${stage}`, error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong",
            },
            { status: 500 },
        );
    }
}