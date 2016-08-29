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
	host: 'http://52.78.72.166:3000',
	facebook: {
		appID: '1137559296307339',
		appSecret: '45c2930725a4dd7f592e3e3f47c60c15',
	},
	crypto: {
		workFactor: 5000,
		keylen: 32,
		randomSize: 256
	}
};

module.exports = config;
