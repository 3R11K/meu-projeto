import React, { useState, useEffect, useRef } from 'react';
import ChatBallon from '../ChatBallon/ChatBallon';
import { getContract } from '../../Services/GetContract';
import { ChatContainer } from './style';
import { decodeMessage } from '../../Services/encoding';

export default function Chat({chave}) {
    const [messages, setMessages] = useState([]);
    const chatRef = useRef(null);

    useEffect(() => {
        loadMessages(); // Carregar mensagens inicialmente

        const interval = setInterval(() => {
            loadMessages();
        }, 5000); // Atualiza a cada 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    const loadMessages = async () => {
        try {
            const contract = await getContract();
            if (!contract) return;

            const count = await contract.getMessageCount();
            const msgs = await contract.getMessages(Math.min(10, Number(count)));

            console.log("Mensagens carregadas:", msgs);

            // Formata os dados para exibição no chat
            const formattedMessages = msgs.map((msg, index) => ({
                id: index,
                sender: msg.sender,
                text: msg.text,
                timestamp: new Date(Number(msg.timestamp) * 1000).toLocaleTimeString(),
                isSender: msg.sender.toLowerCase() === window.ethereum.selectedAddress.toLowerCase()
            }));

            setMessages(formattedMessages.reverse()); // Exibe do mais recente para o mais antigo
        } catch (error) {
            console.error("Erro ao carregar mensagens:", error);
        }
    };

    return (
        <ChatContainer ref={chatRef}>
            {messages.map((message, index) => (
                <ChatBallon 
                    key={index} 
                    message={message.text} 
                    sender={message.sender} 
                    isSender={message.isSender} 
                    chave={chave}
                    decodeMessage={decodeMessage} // Adicionando a função
                />
            ))}
        </ChatContainer>
    );
}
