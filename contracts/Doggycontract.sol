// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "./IERC721.sol";

contract CryptoDoggys is IERC721 {
    string public constant doggyTokenName = "CryptoDoggys";
    string public constant doggyTokenSymbol = "CD";

    struct Doggy {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Doggy[] doggys;

    mapping(address => uint256) tokenOwnershipCount; //Token owners balance
    mapping(uint256 => address) public tokenIdOwnerMapping; //Maps TokenId to owners address


    function balanceOf(address owner) external view returns (uint256 balance){
         return tokenOwnershipCount[owner];
     }

      function totalSupply() public view returns (uint256 total){
          return doggys.length;
      }

      function name() external pure returns (string memory tokenName){
          return doggyTokenName;
      }

    function symbol() external pure returns (string memory tokenSymbol){
        return doggyTokenSymbol;
    }

     function ownerOf(uint256 tokenId) external view returns (address owner){
        return tokenIdOwnerMapping[tokenId];
     }

    function transfer(address to, uint256 _tokenId) external {
         require(_owns(msg.sender, _tokenId), "You are not the owner of this token!");
         require(to != address(0), "You cannot send tokens to this address!");
         require(to != address(this), "You cannot send tokens to this address!");

         _transfer(msg.sender, to, _tokenId);

         
     }

     function _transfer(address _from, address _to, uint256 _tokenId) internal {
            tokenOwnershipCount[_to]++;

            tokenIdOwnerMapping[_tokenId] = _to;

            if(_from != address(0)){
                tokenOwnershipCount[_from]--;
            }

            emit Transfer(_from, _to, _tokenId);
     }

     function _owns(address _claimant, uint256 _tokenId) internal view returns(bool) {
         return tokenIdOwnerMapping[_tokenId] == _claimant;
     }
     
}