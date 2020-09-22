require('dotenv').config();
const { cloudinary } = require('./cloudinary');
const generateBlogPostCover = (title) => {
    const url = cloudinary.url('learning_quick/blog_cover', {
        transformation: [
            {
                overlay: {
                    font_family: 'Poppins',
                    font_size: 100,
                    font_weight: 'bold',
                    text: title,
                },
                color: '#333',
                effect: 'colorize',
                y: '0',
                width: '1000',
            },
            {
                overlay: {
                    font_family: 'Poppins',
                    font_size: 42,
                    text: '@jamesqquick',
                },
                color: '#555',
                effect: 'colorize',
                y: '300',
                x: '400',
            },
        ],
    });
    return url;
};

module.exports = { generateBlogPostCover };
