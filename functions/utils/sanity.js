const sanityClient = require('@sanity/client');
require('dotenv').config();

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET_NAME,
    token: process.env.SANITY_TOKEN,
});

module.exports = { client };
