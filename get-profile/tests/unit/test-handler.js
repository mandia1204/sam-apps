'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler(event, context)

        expect(result.statusCode).to.equal(200);

        let body = JSON.parse(result.body);

        const expected = {
            userName : 'testUser',
            age: 26,
            logo: 'image1.jpg',
            preferences: []
        };
        expect(body).to.be.an('object');
        expect(body).to.deep.equal(expected);
    });
});
