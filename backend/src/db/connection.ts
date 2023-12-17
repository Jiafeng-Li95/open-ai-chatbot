import { connect, disconnect } from "mongoose";
export default async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Can not connect to MONGODB");

    }
}

async function disconnectioFromDatabae() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from MongoDB");
    }
}