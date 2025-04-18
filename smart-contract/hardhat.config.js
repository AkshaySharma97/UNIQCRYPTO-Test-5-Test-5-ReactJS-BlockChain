require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28", // ✅ update to match Lock.sol or your OneStepToken
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    sepolia: process.env.PRIVATE_KEY && process.env.INFURA_API_KEY
      ? {
          url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
          accounts: [`0x${process.env.PRIVATE_KEY}`],
        }
      : undefined,
  }
};