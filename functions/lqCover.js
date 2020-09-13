const { generateLearningQuickCoverURL } = require('./utils/StreamUtils');
const simpleReturn = require('netlify-functions-simple-return');

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const { title, guest, guestTitle, guestImage, time } = body;
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    };

    if (event.httpMethod !== 'POST') {
        // To enable CORS
        return {
            statusCode: 200, // <-- Important!
            headers,
            body: 'This was not a POST request!',
        };
    }
    const url = generateLearningQuickCoverURL(
        title,
        guest,
        guestTitle,
        guestImage,
        time
    );
    return simpleReturn(200, { url });
};
