/*console.log('hook eccute once server start ...');
const { Octokit } = require("@octokit/rest");

module.exports = strapi => {
    return {
        async initialize() {
            const { token } = strapi.config.get('hook.settings.github');

            const octokit = new Octokit({
                userAgent: `${strapi.config.get('info.name')} v${strapi.config.get('info.version')}`,
                auth: `token ${token}`,
            });
            strapi.services.github = octokit;
        },
    };
};*/