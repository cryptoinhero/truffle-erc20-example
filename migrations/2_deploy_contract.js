const SampleToken = artifacts.require("../build/contracts/SampleToken");
module.exports = function(deployer) {
    deployer.deploy(SampleToken);
};
