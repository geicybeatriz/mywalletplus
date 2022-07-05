import connection from "./../database.js";

export async function selectUsers(email){
    return await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
}

export async function registerUser(name, email, hashedPassword){
    return await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}

