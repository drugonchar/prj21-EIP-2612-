const hre = require("hardhat");

async function verify(address, args = []) {
  await hre.run("verify:verify", { address, constructorArguments: args });
}

(async () => {
  const addr = process.env.CONTRACT_ADDRESS;
  const name = process.env.TOKEN_NAME || "MyToken";
  const symbol = process.env.TOKEN_SYMBOL || "MYT";
  const supply = hre.ethers.parseUnits(process.env.INIT_SUPPLY || "1000000", 18);

  if (!addr) throw new Error("CONTRACT_ADDRESS is required");
  await verify(addr, [name, symbol, supply]);
})().catch((e) => { console.error(e); process.exit(1); });
