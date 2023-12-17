// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ANDL is ERC20 {
   constructor() ERC20("ANDL Token", "ANDL") {
       _mint(msg.sender, 100000000 * (10 ** uint256(decimals())));
   }

   function mint(address to, uint256 amount) public {
       _mint(to, amount * (10 ** uint256(decimals()))); 
   }

   function transfer(address recipient, uint256 amount) public override returns (bool) {
       uint256 adjustedAmount = amount * (10 ** uint256(decimals()));
       _transfer(msg.sender, recipient, adjustedAmount);
       return true;
   }
}