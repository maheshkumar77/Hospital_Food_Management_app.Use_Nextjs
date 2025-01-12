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
