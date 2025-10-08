const { ethers } = require("hardhat");

module.exports = async function () {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const name = process.env.TOKEN_NAME || "MyToken";
  const symbol = process.env.TOKEN_SYMBOL || "MYT";
  const supply = ethers.parseUnits(process.env.INIT_SUPPLY || "1000000", 18);

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(name, symbol, supply);
  await token.waitForDeployment();

  const addr = await token.getAddress();
  console.log(`MyToken deployed at: ${addr}`);
  return { addr };
};
