const fetch = require('node-fetch');
exports.handler = async (event) => {
    try {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;
        const res = await fetch(url);
        const data = await res.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: 'Something went wrong' }),
        };
    }
};
