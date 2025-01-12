import mongoose from 'mongoose';

const connectToDatabase = (uri) => {
  if (mongoose.connections.some((conn) => conn.host === uri)) {
    return mongoose.connections.find((conn) => conn.host === uri);
  }
  return mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Create separate connections for each database
const client1 = connectToDatabase(process.env.MONGODB_URI1);
const client2 = connectToDatabase(process.env.MONGODB_URI2);
const client3 = connectToDatabase(process.env.MONGODB_URI3);

export { client1, client2, client3 };
