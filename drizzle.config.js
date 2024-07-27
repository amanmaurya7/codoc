const config = {
  schema: "./src/lib/db/schema.js",
  out: "./src/lib/db/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL,
  },
};

export default config;
