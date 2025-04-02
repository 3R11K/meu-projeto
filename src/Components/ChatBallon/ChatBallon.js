import React from 'react';
import { ChatBallonContainer, Message, Sender } from './style';

const ChatBallon = React.memo(({ message, sender, isSender }) => {
    if (!message) return null; // Garante que mensagens vazias não sejam renderizadas

    return (
        <ChatBallonContainer isSender={isSender}>
            <Message isSender={isSender}>{message}</Message>
            {sender && <Sender isSender={isSender}>{sender}</Sender>}
        </ChatBallonContainer>
    );
});

export default ChatBallon;
