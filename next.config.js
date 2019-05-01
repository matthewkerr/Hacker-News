// next.config.js
const withPlugins = require("next-compose-plugins");
const withSass = require('@zeit/next-sass')


const nextConfiguration = {
    
};


module.exports = withPlugins([withSass()], nextConfiguration);