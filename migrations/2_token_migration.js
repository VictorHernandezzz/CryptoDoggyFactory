const Token = artifacts.require("CryptoDoggys");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
