const { generateLearningQuickCoverURL } = require('./utils/StreamUtils');
const simpleReturn = require('netlify-functions-simple-return');

exports.handler = async (event) => {
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
