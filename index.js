const serviceEndpoints = require('./service-endpoints.json');
(async () => {
	serviceEndpoints.forEach(async (endpoint) => {
		const res = await fetch(endpoint);
		if (res.status == 200) {
			console.log(`${endpoint} OK`);
		} else {
			console.log(`${endpoint} DOWN`);
		}
	});
})();