module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 3000),
});


/** 
 * to start on production mode
 * 
 * NODE_ENV=production yarn start
 */