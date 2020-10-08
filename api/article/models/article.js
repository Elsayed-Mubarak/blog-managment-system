'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

// Triggered before user creation or update
module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            console.log("create data......", data);
            if (data.title) {
                data.slug = slugify(data.title, { lower: true });
            }
        },
        async beforeUpdate(params, data) {
            console.log("update data......", data);

            if (data.title) {
                data.slug = slugify(data.title, { lower: true });
            }
        },
    },
};

