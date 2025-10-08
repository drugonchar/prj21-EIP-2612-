const { ethers } = require("hardhat");

async function signPermit({
  token,
  owner,
  spender,
  value,
  deadline
}) {
  const name = await token.name();
  const version = "1";
  const chainId = (await ethers.provider.getNetwork()).chainId;
  const verifyingContract = await token.getAddress();

  const domain = { name, version, chainId, verifyingContract };
  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" }
    ],
  };

  const nonce = await token.nonces(owner.address);
  const message = { owner: owner.address, spender, value, nonce, deadline };
  return owner.signTypedData(domain, types, message);
}

module.exports = { signPermit };
