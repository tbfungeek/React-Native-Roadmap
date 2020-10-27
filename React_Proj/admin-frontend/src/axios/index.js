import JSONP from 'jsonp';

export default class Axios {
	static jsonp(options) {
		new Promise((resolve, reject) => {
			JSONP(
				options.url,
				{
					params: 'callback'
				},
				function(error, response) {
					if (error || response.statusCode === 200) {
						resolve(response);
					} else {
						reject(error);
					}
				}
			);
		});
	}
}
