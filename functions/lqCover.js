const { generateLearningQuickCoverURL } = require('./utils/StreamUtils');
const simpleReturn = require('netlify-functions-simple-return');

exports.handler = async (event) => {
    const headers = {
        'access-control-allow-origin': '*',
        'access-control-allow-headers': '*',
        'access-control-allow-methods': 'GET, POST, PUT, DELETE',
    };

    if (event.httpMethod !== 'POST') {
        // To enable CORS
        return {
            statusCode: 200, // <-- Important!
            headers,
            body: 'This was not a POST request!',
        };
    }
    const body = JSON.parse(event.body);
    const { title, guest, guestTitle, guestImage, time } = body;

    const url = generateLearningQuickCoverURL(
        title,
        guest,
        guestTitle,
        guestImage,
        time
    );
    return simpleReturn(200, { url });
};
