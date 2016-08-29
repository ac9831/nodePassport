var config = {
	port: 3000,
	secret: 'secret',
	routes: {
		login: '/account/login',
		logout: '/account/logout',
		register: '/account/register',
		chat: '/chat',
		facebookAuth: '/auth/facebook',
		facebookAuthCallback: '/auth/facebook/callback'
	},
	host: 'http://localhost:3000',
	facebook: {
		appID: '664948890341128',
		appSecret: '7723f51fee907c706d2834662dd81812',
	},
	crypto: {
		workFactor: 5000,
		keylen: 32,
		randomSize: 256
	}
};

module.exports = config;
