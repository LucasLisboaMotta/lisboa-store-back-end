import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017/LisboaStore';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_DB_URL
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
