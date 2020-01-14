const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => {
    // console.log(request.body);
    const { github_username, techs, latitude, longitude } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    // Exemplo 1:  console.log(apiResponse.data);
    const { name = login, avatar_url, bio } = apiResponse.data;

    // Exemplo 2: console.log(name, avatar_url, bio, github_username);

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    });

    return response.json(dev);
});

module.exports = routes;