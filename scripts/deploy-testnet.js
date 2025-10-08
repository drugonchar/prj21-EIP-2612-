const hre = require("hardhat");
const main = require("../deploy/00_deploy_token");

async function run() {
  await hre.run("compile");
  await main();
}

run().catch((e) => { console.error(e); process.exit(1); });
