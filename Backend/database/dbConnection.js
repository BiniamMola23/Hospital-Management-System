import mysql from "mysql2";

export const dbConnection = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    connection.connect((err) => {
        if (err) {
            console.error(`Error connecting to Database: ${err}`);
            return;
        }
        console.log("Connected to Database");
    });
}