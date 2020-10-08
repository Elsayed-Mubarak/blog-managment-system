module.exports = async (ctx, next) => {
    console.log("try........");
    try {
        if (ctx.state.user.role.name === "isAuthenticated") {
            // Go to next policy or will reach the controller's action.
            return await next();
        }
        ctx.unauthorized(`You're not logged in!`);
    } catch (err) {
        console.error("catch err on isAuthenticated policie ...", err);
    }
};

