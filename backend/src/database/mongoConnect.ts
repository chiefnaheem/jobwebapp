/* eslint-disable no-console */
// import mongoose from 'mongoose';
// import winston, { format } from 'winston';

// const logger = winston.createLogger({
//   format: format.combine(format.simple()),
//   transports: [
//     new winston.transports.Console(),
//   ],
// });

// const connectDB = () => {
//   const url: string = process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL as string : 'mongodb://127.0.0.1:27017/job-finder-api';
//   mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//     .then(() => {
//       logger.log('info', 'Successfully connected to MongoDB Atlas!');
//     }).catch((error) => {
//       logger.log('error', error.message);
//     });
// };
// export default connectDB;


import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";

require('dotenv').config();

export const connectDB = () => {
  try {
    mongoose.connect(process.env.DATABASE_URL as string, { useNewUrlParser: true }).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log(error);
  }
};
export const connectTestDB = () => {
  try{
    MongoMemoryServer.create().then((mongo) => {
      const uri:any = mongo.getUri();
      mongoose.connect(uri).then(() => {
        console.log("connected to testDB");
      });
    });
  }
  catch (error:any) {
    console.log(error);
  }
};