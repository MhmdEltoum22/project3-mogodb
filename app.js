const { MongoClient } = require("mongodb");

const connectionURL = "mongodb://localhost:27017"


const client = new MongoClient(connectionURL);

async function connectDB() {
    try {
        await client.connect()
        console.log("Connection successful");

        const db = client.db("myDatabase"); 
        const collection = db.collection("users") 
       

        const newUser1 ={
            name: "Mohammed",
            email: "mhmd@gmail.com",
            age: 32,
            city: "Cairo" ,
            
            }

        const client1 = await collection.insertOne(newUser1);
        console.log('Inserted document ID:', client1.insertedId);
      
        const newUser2 ={
            name: "Ahmed",
            email: "foundout@gmail.com",
            age: 22,
            city: "USA" ,
            
            }
            const client2 = await collection.insertOne(newUser2);
        console.log('Inserted document ID:', client2.insertedId);
//////////////////////////////////////////////////////////////////////////////////////////////////////
const teachersCollection = db.collection("teachers")
const teachers = [
    { name: "Mohammed", email: "google@gmail.com", age: 27, city: "Cairo" },
    { name: "Ahmed", email: "google@gmail.com", age: 27, city: "Sudan" },
    { name: "Ali", email: "google@gmail.com", age: 27, city: "USA" },
    { name: "Ale", email: "google@gmail.com", age: 22, city: "Egypt" },
    { name: "Mozaml", email: "google@gmail.com", age: 21, city: "Emarats" },
    { name: "Mhmod", email: "google@gmail.com", age: 30, city: "Bulgaria" },
    { name: "Mnal", email: "google@gmail.com", age: 27, city: "Qatar" },
    { name: "Gmal", email: "google@gmail.com", age: 27, city: "Nairobi" },
    { name: "Yasr", email: "google@gmail.com", age: 24, city: "Libya" },
    { name: "Mohammed", email: "google@gmail.com", age: 26, city: "Mexico" }
];
const clients = await teachersCollection.insertMany(teachers)
console.log('Inserted document ID:', clients.insertedIds);
////////////////////////////////////////////////////////////////////////

// //   Use find
const teachersWithAge27 = await teachersCollection.find({ age: 27 }).toArray();
console.log("Teachers with age 27:", teachersWithAge27)
/////////////////////////////////////////////////////////////////////

// Use limit
const teachersLimit = await teachersCollection.find({ age: 27 }).limit(3).toArray();
console.log("Teachers with age 27:", teachersLimit )
    } catch (error) {
        console.error("Cannot connect to the database:", error);
    }finally {
        await client.close(); 
        console.log(" MongoDB connection closed.");
    }
}

connectDB();
