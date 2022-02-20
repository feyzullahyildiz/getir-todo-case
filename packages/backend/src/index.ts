import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '..', '.env') });

import mongoose from 'mongoose';
import { app } from './app';

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
const start = async () => {
    // console.log(process.env.MONGO_CONNECTION_STRING);
    if (!process.env.MONGO_CONNECTION_STRING) {
        console.log('MONGO_CONNECTION_STRING not found on env');
        process.exit(1);
    }
    await mongoose.connect(
        process.env.MONGO_CONNECTION_STRING!,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any,
        () => {},
    );
};
start().catch((err) => {
    console.log(err);
    console.log('process.exit 2');
    process.exit(2);
});
