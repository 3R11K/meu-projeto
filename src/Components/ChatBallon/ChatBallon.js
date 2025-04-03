import React, { useState, useEffect } from 'react';
import { ChatBallonContainer, Message, Sender } from './style';

const ChatBallon = React.memo(({ message = '', sender, isSender, chave, decodeMessage }) => {
    const [decodedMessage, setDecodedMessage] = useState(message || '');
    const [isDecoded, setIsDecoded] = useState(false); // Estado para controlar se a mensagem foi decodificada

    useEffect(() => {
        setDecodedMessage(message || '');
    }, [message]); // Atualiza quando `message` muda

    const handleDecode = () => {
        console.log('Decodificando mensagem:', message); 
        console.log('Chave utilizada:', chave); 
    
        if (!decodeMessage || !message || !chave) {
            alert('Erro: Mensagem ou chave inválida.');
            return;
        }
    
        try {
            const newMessage = decodeMessage(message, chave);
            console.log('Mensagem descriptografada:', newMessage); 
    
            if (newMessage) {
                setDecodedMessage(newMessage);
                setIsDecoded(true); // Atualiza o estado para indicar que a mensagem foi decodificada
            } else {
                alert('Erro: Falha ao descriptografar a mensagem.');
            }
        } catch (error) {
            console.error('Erro ao decodificar mensagem:', error);
            alert('Erro: Não foi possível descriptografar a mensagem.');
        }
    };    

    if (!message) return null; // Evita renderização de mensagens vazias

    return (
        <ChatBallonContainer isSender={isSender}>
            <Message isSender={isSender}>{decodedMessage}</Message>
            {sender && <Sender isSender={isSender}>{sender}</Sender>}
            {!isDecoded && (
                <button 
                onClick={handleDecode} 
                style={{
                    backgroundColor: isSender ? '#4CAF50' : '#008CBA',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '14px',
                    margin: '10px 0',
                    cursor: 'pointer',
                    borderRadius: '5px'
                }}
            >
                Decode
            </button>
            )}
        </ChatBallonContainer>
    );
});

export default ChatBallon;
