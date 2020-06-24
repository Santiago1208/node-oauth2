let pgPool;

function saveAccessToken(accessToken, userID) {
	const saveAccessTokenQuery = `INSERT INTO access_tokens (access_token, user_id) VALUES ('${accessToken}', '${userID}')`;
	const results = pgPool.query(saveAccessTokenQuery);
	return results;
}

function getUserIDFromBearerToken(bearerToken) {
	const getUserIDQuery = `SELECT user_id FROM access_tokens WHERE access_token = '${bearerToken}'`;
	const results = pgPool.query(getUserIDQuery);
	return results.rows[0];
}

module.exports = injectedPool => {
	pgPool = injectedPool;
	return  {
		saveAccessToken,
		getUserIDFromBearerToken
	}
}
