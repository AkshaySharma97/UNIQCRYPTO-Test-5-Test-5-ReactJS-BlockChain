const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);

  const TokenFactory = await hre.ethers.getContractFactory("OneStepToken");
  const token = await TokenFactory.deploy(deployer.address);

  await token.waitForDeployment();

  console.log("OneStepToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});