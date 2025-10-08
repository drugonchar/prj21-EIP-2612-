task("mint", "Mint to address")
  .addParam("token")
  .addParam("to")
  .addParam("amount", "In tokens, not wei")
  .setAction(async (args, hre) => {
    const [owner] = await hre.ethers.getSigners();
    const token = await hre.ethers.getContractAt("MyToken", args.token);
    const amt = hre.ethers.parseUnits(args.amount, 18);
    const tx = await token.connect(owner).mint?.(args.to, amt);
    if (!tx) throw new Error("Mint not exposed; use initial supply or modify contract.");
    await tx.wait();
    console.log("Minted", args.amount, "to", args.to);
  });
