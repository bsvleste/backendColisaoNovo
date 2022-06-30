import "reflect-metadata"
import { DataSource } from "typeorm"

export const connectionMongoDb = new DataSource({
    type: "mongodb",
    url:process.env.MONGO_URL,   
    authSource: "admin",
    database: "colisao",
    useUnifiedTopology: true,
    useNewUrlParser: true,
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/**/**/entity/*.ts"],
})