task("allowance", "Check allowance")
  .addParam("token")
  .addParam("owner")
  .addParam("spender")
  .setAction(async (args, hre) => {
    const token = await hre.ethers.getContractAt("MyToken", args.token);
    const a = await token.allowance(args.owner, args.spender);
    console.log("Allowance:", a.toString());
  });
