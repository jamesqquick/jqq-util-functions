const fetch = require('node-fetch');
exports.handler = async (event) => {
    try {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_API_KEY}&channelId=${process.env.YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.items[0].id);
        const minifiedData = data.items.map((item) => ({
            ...item.snippet,
            videoId: item.id.videoId,
        }));
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(minifiedData),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: 'Something went wrong' }),
        };
    }
};
