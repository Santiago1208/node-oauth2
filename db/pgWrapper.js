const Pool = require('pg').Pool;
const DatabaseError = require('../errors/databaseError');

function query(queryString) {
	const pool = new Pool({
		user: 'postgres',
		host: 'localhost',
		database: 'postgres',
		password: 'password',
		port: 5432
	});
	pool.query(queryString, (error, results) => {
		if (error !== undefined) {
			console.log(error);
			throw new DatabaseError('There was an error querying into the database');
		} else {
			return results;
		}
	});
}

module.exports = {
	query
}
