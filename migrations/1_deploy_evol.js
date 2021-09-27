const EVOL = artifacts.require('./Evol.sol');

module.exports = async (deployer) => {
  await deployer.deploy(EVOL, "Evol", "EVOL", "4500000000000000000000");
};
