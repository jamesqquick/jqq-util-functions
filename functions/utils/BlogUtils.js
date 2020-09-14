require('dotenv').config();
const { cloudinary } = require('./cloudinary');
const generateBlogPostCover = (title) => {
    const url = cloudinary.url('learning_quick/lq-bg', {
        transformation: [
            {
                overlay: {
                    font_family: 'Poppins',
                    font_size: 100,
                    font_weight: 'bold',
                    text: title,
                },
                color: '#ffffff',
                effect: 'colorize',
                y: '-150',
            },
        ],
    });
    return url;
};

module.exports = { generateBlogPostCover };
