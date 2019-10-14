import mysql from "promise-mysql";

import keys from "./key";

const pool = mysql.createPool(keys.database);

pool.then((r: any) => r.getConnection().then(async (connection: any) => {
    (await pool).releaseConnection(connection);
    console.log("DB is connected");
}));

export default pool;