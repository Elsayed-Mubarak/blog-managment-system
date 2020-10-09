/*module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: env('DATABASE_HOST', 'localhost'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME', 'kwareict-libarary'),
                username: env('DATABASE_USERNAME', 'postgres'),
                password: env('DATABASE_PASSWORD', 'SW2020'),
                schema: 'public',
            },
            options: {},
        },
    },
});
*/
/*
module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: env('DATABASE_HOST', 'localhost'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME', 'strapi'),
                username: env('DATABASE_USERNAME', ''),
                password: env('DATABASE_PASSWORD', ''),
                schema: 'public',
            },
            options: {},
        },
    },
});

*/

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: env('DATABASE_HOST', '54.220.211.123'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME', 'kwareblog'),
                username: env('DATABASE_USERNAME', 'elsayed'),
                password: env('DATABASE_PASSWORD', 'Sayed2020'),
                schema: 'public',
            },
            options: {},
        },
    },
});