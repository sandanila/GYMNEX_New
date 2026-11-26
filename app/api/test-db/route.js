import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
    try {
        await connectDB();

        await User.findOne().select("_id").lean();

        return Response.json({
            success: true,
            message: "User collection query Successfully!",
        });
    } catch (error) {
        console.error("Database Ping Error:", error);

        return Response.json(
            {
                success: false,
                message: "Database Ping Failed",
            },
            { status: 500 },
        );
    }
}