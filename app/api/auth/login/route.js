import loginSchema from "@/lib/validations/loginSchema";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createSessionToken } from "@/lib/auth";

export async function POST(req) {
    try {
        // 1. request body
        const body = await req.json();

        // 2. request data validate
        const validation = loginSchema.safeParse(body);

        // 3. validation fail
        if (!validation.success) {
            return Response.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: validation.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        // 4. validated data
        const { email, password } = validation.data;
        const normalizedEmail = email.toLowerCase();

        // 5. connect to mongodb
        await connectDB();

        // 6. find user by email
        const user = await User.findOne({
            email: normalizedEmail,
        });

        // 7. check user exists
        if (!user) {
            return Response.json(
                {
                    success: false,
                    message: "Invalid email or password",
                },
                { status: 401 }
            );
        }

        // 8. verify password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        // 9. check password
        if (!isPasswordValid) {
            return Response.json(
                {
                    success: false,
                    message: "Invalid email or password",
                },
                { status: 401 }
            );
        }

        // 10. check account status
        if (user.status !== "active") {
            return Response.json(
                {
                    success: false,
                    message: "Your account is disabled",
                },
                { status: 403 }
            );
        }

        // 11. check user role
        if (!["admin", "member"].includes(user.role)) {
            return Response.json(
                {
                    success: false,
                    message: "Invalid use role",
                },
                { status: 403 }
            );
        }

        // 1. create JWT token
        const token = await createSessionToken(user);

        // 2. create Response
        const response = NextResponse.json({
            success: true,
            message: "Login successful",
            user: {
                role: user.role,
            },
        });

        // 3. store JWT in HttpOnly Cookie
        response.cookies.set("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return response;

    } catch (error) {
        console.error("Login API Error:", error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong",
            },
            { status: 500 }
        );
    }
    
}