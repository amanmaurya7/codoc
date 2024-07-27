import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
const pool = new Pool({ connectionString: env.DB_URL });
const db = drizzle(pool);
