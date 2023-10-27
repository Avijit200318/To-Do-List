// moduse . exports to exprot the function or some thing in the node

// module.exports("hello world");
exports.getDate = function()
{
    var date = new Date();
    
    option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    return date.toLocaleDateString("en-US", option);
}

module.exports.getDay = function()
{
    const date = new Date();
    option = {
        weekday: "long",
    }
    return date.toLocaleDateString("en-US", option);
}
