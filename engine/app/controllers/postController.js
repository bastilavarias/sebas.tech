const service = require("../services/postService");

const index = async (request, response) => {
    try {
        const result = await service.list({
            parameters: request.params,
            query: request.query,
        });
        response.formatter.ok({ data: result });
    } catch (error) {
        response.formatter.badRequest(error.message);
    }
};

const show = async (request, response) => {
    try {
        const result = await service.getOne({
            parameters: request.params,
            query: request.query,
        });
        response.formatter.ok({ data: result });
    } catch (error) {
        response.formatter.badRequest(error.message);
    }
};


module.exports = { index, show };