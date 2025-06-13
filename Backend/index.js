const app = require("./app");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db"); // Assuming this function returns a Promise

dotenv.config();

// port
const PORT = process.env.PORT || 5000; // Added a fallback port, good practice

// Function to start the server after DB connection
const startServer = async () => {
    try {
        // Attempt to connect to the database first
        await dbConnection(); // Wait for the database connection to complete

        // If connection is successful, then start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log('Database connected successfully!');
        });
    } catch (error) {
        // If database connection fails, log the error and exit the process
        console.error('Failed to connect to database:', error.message);
        console.log('Server NOT started due to database connection error.');
        process.exit(1); // Exit with a non-zero code to indicate an error
    }
};

// Call the function to start the server
startServer();