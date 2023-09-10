import mongoose from 'mongoose';

const dbConnect = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  const conn = await mongoose.connect('mongodb+srv://anubhavgu2002:anubhav14@mernauth.egcwxzx.mongodb.net/mernauth?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mernauth',
  });
  console.log(`Mongo Connected: ${conn.connection.host}`);

  return handler(req, res);
};

export default dbConnect;