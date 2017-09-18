module.exports = function useless(req, res, next) {
	console.log('useless middleware for fake auth middleware'); // eslint-disable-line no-console
	next();
};