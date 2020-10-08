'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {

    async create(ctx) {
        let entity;
        console.log("create article contoller...req.body............", ctx.request.body)

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            data.author = ctx.state.user.id;
            entity = await strapi.services.article.create(data, { files });
        } else {
            console.log("ctx.request.body..........", ctx.request.body);
            console.log("ctx.state.body............", ctx.state.user);

            ctx.request.body.author = ctx.state.user.id;
            entity = await strapi.services.article.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.article });
    },
/*/
    async update(ctx) {
        const { id } = ctx.params;

        let entity;

        const [article] = await strapi.services.article.find({
            id: ctx.params.id,
            'author.id': ctx.state.user.id,
        });

        if (!article) {
            return ctx.unauthorized(`You can't update this entry`);
        }

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.article.update({ id }, data, {
                files,
            });
        } else {
            entity = await strapi.services.article.update({ id }, ctx.request.body);
        }

        return sanitizeEntity(entity, { model: strapi.models.article });

        postgres://iknvecruygqrdw:ab929376aace801cffaf91b864d9021299a1978a428b0f422fafd2d5d7a04ef5@ec2-34-234-185-150.compute-1.amazonaws.com:5432/dd6o6714c160ql
        
    },*/
};








 /*
const { sanitizeEntity } = require('strapi-utils');

module.exports = {

    findByTitle: async (ctx) => {
        console.log("..........req.body............", ctx.request.body)
        let entities;
        try {
            if (ctx.request._q) {
                entities = await strapi.services.book.search(ctx.request.body.title);
            } else {
                entities = await strapi.services.book.find({ title: ctx.request.body.title });
                console.log("..............entities..............", entities)
            }
            const result = await strapi.query('book')
                .model
                .query(qb => {
                    qb.where('title', 'harry poter');
                })
                .fetch();

            console.log(".............custom query findByTitle.............", result.toJSON());

            return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.book }));
        }
        catch (err) {
            console.log("..........err on find bookByTitle...........", err)
        }
    }


};


*/