
const GetSet = artifacts.require("GetSet");
const { getBlock } = web3.eth;
const truffleAssert = require('truffle-assertions');

contract('GetSet', (accounts) => {
    it('', async () => {
        const instance = await GetSet.deployed();

        await instance.setValue(1);
        assert.equal(await instance.getValue(), 1);
    })
});
