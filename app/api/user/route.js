import PostDb1 from "../../../models/PostDb1";

export async function POST(request) {
    try {
        // Parse the JSON data from the request body
        const { name, diseases, allergies, roomno, bedno, florno, age, gender, contactinfo, emergencycontact, other,food } = await request.json();

        // Check if all required fields are provided
        if (!name || !diseases || !allergies || !roomno || !bedno || !florno || !age || !gender || !contactinfo || !emergencycontact || !other || !food) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        // Prepare the data for the database
        const postData = {
            name,
            diseases,
            allergies,
            roomno,
            bedno,
            florno,
            age,
            gender,
            contactinfo,
            emergencycontact,
            other,
            food
        };

        // Insert the data into the database
        const newPost = await PostDb1.create(postData);
        if (!newPost) {
            console.log("Error connecting to MongoDB");
            return new Response(
                JSON.stringify({ error: 'Failed to save data' }),
                { status: 500 }
            );
        } else {
            return new Response(
                JSON.stringify({ message: 'Data successfully saved', post: newPost }),
                { status: 201 }
            );
        }

    } catch (error) {
        console.error('Error handling POST request:', error);
        return new Response(
            JSON.stringify({ error: 'Something went wrong' }),
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        // Fetch all records from the database using PostDb1 model
        const posts = await PostDb1.find(); // Modify this if you want to apply filters or sorting

        if (!posts || posts.length === 0) {
            return new Response(
                JSON.stringify({ message: 'No data found' }),
                { status: 404 }
            );
        }

        // Return the fetched data
        return new Response(
            JSON.stringify({ posts }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('Error handling GET request:', error);
        return new Response(
            JSON.stringify({ error: 'Something went wrong' }),
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        // Log the incoming request to inspect its body
        const requestBody = await request.json();
        console.log("Received request body:", requestBody);

        const { trackfood, _id } = requestBody;  // Use _id instead of id

        // Validating that both 'trackfood' and '_id' are provided
        if (!trackfood || !_id) {
            return new Response(
                JSON.stringify({ error: "trackfood and _id are required" }),
                { status: 400 }
            );
        }

        // Check if the food track item exists
        const foodtrack = await PostDb1.findById(_id);  // Use _id here
        if (!foodtrack) {
            return new Response(
                JSON.stringify({ error: "Resource not found" }),
                { status: 404 }
            );
        }

        // Perform the update
        const updatedData = await PostDb1.findByIdAndUpdate(
            _id,  // Use _id here
            { trackfood },
            { new: true } // This ensures the updated document is returned
        );

        // If no data was found to update
        if (!updatedData) {
            return new Response(
                JSON.stringify({ error: "Failed to update resource" }),
                { status: 500 }
            );
        }

        // Returning the updated data in response
        return new Response(
            JSON.stringify({ success: true, data: updatedData }),
            { status: 200 }
        );
    }catch (error) {
        // Log the full error to help diagnose the issue
        console.error("Error during PUT request:", error);
    
        return new Response(
            JSON.stringify({ error: "Internal server error", message: error.message }),
            { status: 500 }
        );
    }
}

