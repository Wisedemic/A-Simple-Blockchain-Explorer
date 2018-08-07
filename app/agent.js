// Grab Superagent for handling outbound requests.
import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';
// Promisifiy superagent
const superagent = superagentPromise(_superagent, global.Promise);

// Define constants
const API_ROOT = `localhost:${process.env.PORT || 3000}/api`;

/**
* Checks if a network request came back fine, and throws an error if not
*
* @param  {object} response   A response from a network request
* @return {object|undefined} Returns either the response, or throws an error
*/
function checkStatus(response) {

	console.log('RESPONSE', response);
	if (response.status >= 200 && response.status < 300) {
		return response.body;
	} else if (response.body.error !== undefined) {
		const error = new Error(response.body.message);
		error.response = response;
		throw error;
	}
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
	return JSON.parse(response);
}


// Define a general request handler to add the user's token if it exists.
const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).then(checkStatus),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(checkStatus),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).then(checkStatus),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(checkStatus)
};

// Authentication requests
const Blockchain = {
  getBlocks: () =>
    requests.get('/blockchain'),
  addBlock: (block) =>
    requests.post('/blockchain/add', {block}),
};


// Exports
export default {
  Blockchain
};
