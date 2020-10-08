module.exports = {
    load: {
        before: ['timer', 'responseTime', 'logger', 'boom', 'cors', 'responses', 'gzip'],
        order: [
            "Define the middlewares' load order by putting their name in this array is the right order",
        ],
        after: ['parser', 'router'],
    },
    settings: {
        boom: { enabled: true, },
        cors: { enabled: true },
        logger: { enabled: true },
        timer: { enabled: true }

    },
}