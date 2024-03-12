import pg from "pg";

const client = new pg.Client({
	connectionString: process.env.DATABASE_URI,
	ssl:
		process.env.NODE_ENV === "production"
			? {
					rejectUnauthorized: false,
			  }
			: false,
});
client
	.connect()
	.then(() => {
		console.log("Database connected");
	})
	.catch((error) => {
		console.error("Error connecting to database", error);
	});

export default client;
