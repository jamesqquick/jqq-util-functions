require('dotenv').config();
const { cloudinary } = require('./cloudinary');
const generateLearningQuickCoverURL = (
    title,
    guestName,
    guestTitle,
    guestImage,
    time
) => {
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
            {
                overlay: {
                    font_family: 'Poppins',
                    font_size: 70,
                    text: guestName,
                },
                color: '#ffffff',
                effect: 'colorize',
                y: '400',
                x: '1000',
                width: '600',
                gravity: 'south_west',
            },
            {
                overlay: {
                    font_family: 'Poppins',
                    font_size: 54,
                    text: guestTitle,
                },
                color: '#ffffff',
                effect: 'colorize',
                y: '300',
                x: '1000',
                gravity: 'south_west',
            },
            {
                overlay: {
                    font_family: 'Poppins',
                    font_size: 60,
                    text: time,
                },
                color: '#de5254',
                effect: 'colorize',
                y: '50',
                width: '600',
                gravity: 'south',
            },
            {
                overlay: 'learning_quick:me.png',
                height: '300',
                width: '300',
                y: '150',
                x: '-525',
                radius: 'max',
                border: '6px_solid_rgb:c7d0d9',
            },
            {
                overlay: `learning_quick:${guestImage}`,
                height: '360',
                width: '360',
                y: '150',
                x: '-260',
                radius: 'max',
                border: '10px_solid_rgb:de5254',
                crop: 'fill',
            },
        ],
    });
    return url;
};

module.exports = { generateLearningQuickCoverURL };
