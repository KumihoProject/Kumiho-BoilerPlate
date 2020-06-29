pragma solidity >=0.5.0 <0.6.0;

contract GetSet {
    uint256 myValue;

    constructor() public {
        myValue = 0;
    }

    function setValue(uint256 _myValue) public {
        myValue = _myValue;
    }

    function getValue() public view returns (uint256) {
        return myValue;
    }

    function() external payable {}
}
