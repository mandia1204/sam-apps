const _ = require('lodash')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        const sucess = {
            message : 'profile created sucessfully',
            sample: _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 })
        }
        response = {
            'statusCode': 200,
            'body': JSON.stringify(sucess)
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
