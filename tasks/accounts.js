task("accounts", "Prints accounts", async (_, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const a of accounts) console.log(a.address);
});
