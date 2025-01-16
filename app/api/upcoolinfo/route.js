import PostDb1 from "../../../models/PostDb1";

// For updating cooking assignment
export async function PUT(request) {
    try {
        const requestBody = await request.json();
        const { _id, asigncname, cookinfo } = requestBody;

        if (!_id || !asigncname || !cookinfo) {
            return new Response(
                JSON.stringify({ error: "asigncname, cookinfo, and _id are required" }),
                { status: 400 }
            );
        }

        const cookdel = await PostDb1.findById(_id); 
        if (!cookdel) {
            return new Response(
                JSON.stringify({ error: "Resource not found" }),
                { status: 404 }
            );
        }

        const updatedData = await PostDb1.findByIdAndUpdate(
            _id,
            { asigncname, cookinfo },
            { new: true }
        );

        if (!updatedData) {
            return new Response(
                JSON.stringify({ error: "Failed to update resource" }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({ success: true, data: updatedData }),
            { status: 200 }
        );

    } catch (error) {
        console.error("Error during PUT request:", error);
        return new Response(
            JSON.stringify({ error: "Internal server error", message: error.message }),
            { status: 500 }
        );
    }
}
