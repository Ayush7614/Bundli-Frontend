/**
 * Method to grab a URL Parameter by name. This has a wider browser compatibility
 * than URLSearchParams.
 * See: https://stackoverflow.com/a/901144/8246359
 * @param {String} name 
 * @param {String} url 
 */
function getParameterByName(paramName, url = window.location.href) {
	const strippedParam = paramName.replace(/[\[\]]/g, '\\$&');
	const regex = new RegExp('[?&]' + strippedParam + '(=([^&#]*)|&|#|$)');
	const results = regex.exec(url);

	if (!results || !results[2]) {
		return '';
	}
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}