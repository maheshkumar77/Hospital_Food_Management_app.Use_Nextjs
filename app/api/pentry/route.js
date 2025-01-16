import PostDb2 from "../../../models/PostDb2";
import { NextResponse } from 'next/server';
// Named export for POST request
export async function POST(req) {
  try {
    // Parse the JSON body from the request
    const { foodtrack, stafname, stafconno } = await req.json();
    const postData = {
      foodtrack,
      stafname,
      stafconno,
    };

    // Insert the data into the database
    const newPost = await PostDb2.create(postData);

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


//putmethod

export async function PUT(req) {
    try {
      const { id, foodtrack } = await req.json();
  
      // Log ID for debugging
      console.log('Received ID:', id);
      
      // Check if the ID is valid
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
      }
  
      // Check if foodtrack is provided
      if (!foodtrack) {
          return NextResponse.json({ error: 'Foodtrack is required' }, { status: 400 });
      }
  
      // Try to find the post
      const existingPost = await PostDb2.findById(id);
      
      if (!existingPost) {
          return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
  
      // Proceed with the update if post is found
      const updatedPost = await PostDb2.findByIdAndUpdate(
        id,
        { foodtrack },
        { new: true }
      );
  
      // Respond with the updated post
      return NextResponse.json({
          message: 'Foodtrack updated successfully',
          post: updatedPost
      }, { status: 200 });
  
    } catch (error) {
      console.error('Error handling PUT request:', error);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  }