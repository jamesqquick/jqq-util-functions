const { generateBlogPostCover } = require('./utils/BlogUtils');
const simpleReturn = require('netlify-functions-simple-return');
const fetch = require('node-fetch');
const { client: sanityClient } = require('./utils/sanity');
exports.handler = async (event) => {
    const headers = {
        'access-control-allow-origin': '*',
        'access-control-allow-headers': '*',
        'access-control-allow-methods': 'GET, POST, PUT, DELETE',
    };

    const { title, id } = JSON.parse(event.body);

    if (!title || !id) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ msg: 'Invalid parameters' }),
        };
    }

    try {
        const url = generateBlogPostCover(title);
        console.log(url);
        const res = await fetch(url);

        const imageAsset = await sanityClient.assets.upload('image', res.body, {
            filename: title,
        });

        const updatedRecord = await sanityClient
            .patch(id)
            .set({
                coverImage: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset._id,
                    },
                },
            })
            .commit();

        return { statusCode: 200, body: JSON.stringify({ url }), headers };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: 'Something went wrong' }),
        };
    }
};
