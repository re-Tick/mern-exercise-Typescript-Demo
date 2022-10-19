var assert = require('assert');
var {keploy} = require("typescript-sdk/dist/integrations/express/register")

// const { default: keploy } = require('typescript-sdk/dist/src/keploy');
// var Keploy =  require("typescript-sdk/dist/src/keploy")
const test2 = require("../server")


describe('routes', function () {
    var server, octokit;
    beforeEach(function () {
       
    });
    afterEach(function () {
        // server.close();
    });
    // Test to make sure URLs respond correctly.
    it("url /", async function () {
        process.env.KEPLOY_MODE = "test"
        // const keploy = new Keploy()
        test2()
        return keploy.assertTests()
    });
});