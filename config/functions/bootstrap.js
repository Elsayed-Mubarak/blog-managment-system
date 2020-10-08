'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */



/*
module.exports = async () => {
    const data = await strapi.services.github.users.getAuthenticated();
    console.log(data);
};
*/

module.exports = async () => {
    const categoryEntity = await strapi.query('category').find({});
    try {
        if (categoryEntity) {

            const insert = await strapi.query('category').create({ name: 'Library Research Guides' });
            await strapi.query('category').create({ name: 'Translation And Localization' });
            await strapi.query('category').create({ name: 'Artificial Intelligence' });
            await strapi.query('category').create({ name: 'Digital Repositories And Archives' });
            await strapi.query('category').create({ name: 'ElectronicLibraries' });
            await strapi.query('category').create({ name: 'Search Engines And Discovery Platforms' });
            await strapi.query('category').create({ name: 'Publishing Periodicals And Books' });
            await strapi.query('category').create({ name: 'Knowledge_And_Research_Centers' });

            console.log("categoriesName entity ...", categoryEntityCreated);
        }
    } catch (error) {
        console.log("error ...", error)

    } console.log("category table is fill", await strapi.query('category').find({}));

}