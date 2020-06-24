const crypto = require('crypto');

let pgPool;

function register(username, password) {
	let shaPassword = crypto.createHash('sha256').update(password).digest('hex');
	const registerUserQuery = `INSERT INTO users (username, password) VALUES ('${username}', '${shaPassword}')`;
	const results = pgPool.query(registerUserQuery);
	return results;
}

function getUser(username, password) {
	let shaPassword = crypto.createHash('sha256').update(password).digest('hex');
	const getUserQuery = `SELECT * FROM users WHERE username = ${username} AND user_password = ${shaPassword}`;
	const results = pgPool.query(getUserQuery);
	return results.rows[0];
}

function existUser(username) {
	const existUserQuery = `SELECT * FROM users WHERE username = ${username}`;
	const results = pgPool.query(existUserQuery);
	return results.rowCount > 0;
}

module.exports = injectedPgPool => {
	pgPool = injectedPgPool;
	return {
		register,
		getUser,
		existUser
	};
}
