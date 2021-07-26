import { createConnection } from "typeorm";
import { Todo, User } from "./models";

export default class Database {
    static initDatabase() {
        try {
            const connection = createConnection({
                type: "mysql",
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT||'3306'),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [Todo, User],
                synchronize: true
            })
            return connection;
        } catch (e) {
            console.log(e);
        }
    }

}
