const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://khantarikulshort:Fl2g81r3IIWBOyuH@cluster0.6dmex.mongodb.net/HealthStore?retryWrites=true&w=majority&appName=Cluster0"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config



    // the original database author with this project
    //mongodb+srv://Blessing:qzzJjISAcwfPklIo@cluster0.txlxgvp.mongodb.net/Skeleton?retryWrites=true&w=majority
   
     //string for database skeleton
    //mongodb+srv://khantarikulshort:Fl2g81r3IIWBOyuH@cluster0.6dmex.mongodb.net/skeleton?retryWrites=true&w=majority&appName=Cluster0