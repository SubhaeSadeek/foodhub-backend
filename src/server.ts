import app from "./app";
import config from "./config";

async function main() {
	try {
		app.listen(config.port, () => {
			console.log(`Food hub server is listening to port ${config.port} `);
		});
	} catch (err) {
		console.log(err);
	}
}

main();
