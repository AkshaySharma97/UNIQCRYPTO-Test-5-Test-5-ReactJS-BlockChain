pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OneStepToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("OneStepToken", "OSAA") Ownable(initialOwner) {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount * 10 ** decimals());
    }
}
