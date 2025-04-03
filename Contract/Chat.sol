// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract GlobalChat {
    struct Message {
        address sender;
        string text;
        uint256 timestamp;
    }

    mapping(uint256 => Message) public messages;
    uint256 public messageCount;
    
    event NewMessage(address indexed sender, string text, uint256 timestamp);

    function sendMessage(string memory _text) public {
        require(bytes(_text).length > 0, "Mensagem vazia nao permitida");
        messages[messageCount] = Message(msg.sender, _text, block.timestamp);
        emit NewMessage(msg.sender, _text, block.timestamp);
        messageCount++;
    }

    function getMessages(uint256 _count) public view returns (Message[] memory) {
        if (_count > messageCount) {
            _count = messageCount;
        }
        Message[] memory recentMessages = new Message[](_count);
        for (uint256 i = 0; i < _count; i++) {
            recentMessages[i] = messages[messageCount - _count + i];
        }
        return recentMessages;
    }

    function getMessageCount() public view returns (uint256) {
        return messageCount;
    }
}
