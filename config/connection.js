const mysql = require('mysql');


if (process.env.JAWSDB_URL) {
	let connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	const connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: '',
		database: 'burgers_db'
	});
}

connection.connect(err => {
	if (err) {
		console.error(`Error Connecting: ${err.stack}`);
		return;
	};
	console.log(`Connected as id ${connection.threadId}`);
});
module.exports = connection;