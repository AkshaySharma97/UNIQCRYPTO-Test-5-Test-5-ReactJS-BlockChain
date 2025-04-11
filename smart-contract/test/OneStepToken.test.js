const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OneStepToken Contract", function () {
  let OneStepToken, contract, owner, user1, user2;

  const toTokens = (val) => ethers.parseUnits(val.toString(), 18);

  beforeEach(async () => {
    [owner, user1, user2] = await ethers.getSigners();
    OneStepToken = await ethers.getContractFactory("OneStepToken");
    contract = await OneStepToken.deploy(owner.address);
  });

  describe("Minting", function () {
    it("should allow the owner to mint tokens to a valid address", async () => {
      await contract.mint(user1.address, 1000);
      const balance = await contract.balanceOf(user1.address);
      expect(balance).to.equal(toTokens(1000));
    });

    it("should fail if non-owner tries to mint", async () => {
      await expect(
        contract.connect(user1).mint(user1.address, 1000)
      ).to.be.reverted; // Custom errors don't support revertWith() messages
    });

    it("should fail if minting to zero address", async () => {
      await expect(
        contract.mint(ethers.ZeroAddress, 1000)
      ).to.be.reverted; // OpenZeppelin will revert internally
    });
  });

  describe("Transfers", function () {
    beforeEach(async () => {
      await contract.mint(user1.address, 500);
    });

    it("should transfer tokens between users", async () => {
      await contract.connect(user1).transfer(user2.address, toTokens(200));
      const balance1 = await contract.balanceOf(user1.address);
      const balance2 = await contract.balanceOf(user2.address);
      expect(balance1).to.equal(toTokens(300));
      expect(balance2).to.equal(toTokens(200));
    });

    it("should fail if user has insufficient balance", async () => {
      await expect(
        contract.connect(user1).transfer(user2.address, toTokens(1000))
      ).to.be.reverted;
    });

    it("should fail if transfer to zero address", async () => {
      await expect(
        contract.connect(user1).transfer(ethers.ZeroAddress, toTokens(100))
      ).to.be.reverted;
    });
  });

  describe("Access Control", function () {
    it("should confirm that deployer is owner", async () => {
      expect(await contract.owner()).to.equal(owner.address);
    });

    it("should restrict owner-only functions", async () => {
      await expect(
        contract.connect(user1).mint(user2.address, 100)
      ).to.be.reverted;
    });
  });
});
