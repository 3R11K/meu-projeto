import React, { useState } from 'react';
import { getContract } from '../../Services/GetContract';
import { encodeMessage } from '../../Services/encoding';

export default function SendInput() {
    const [message, setMessage] = useState('');
    const [chave, setChave] = useState('');

    const sendMessage = async () => {
        try {
            const contract = await getContract();
            if (!contract) return alert("Erro: Contrato não encontrado.");

            const tx = await contract.sendMessage(encodeMessage(message, chave));
            await tx.wait(); // Aguarda a transação ser confirmada

            alert("Sucesso: Mensagem enviada!");
            setMessage(""); // Limpa o input após envio
            setChave(""); // Limpa a chave também
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            alert("Erro: Falha ao enviar mensagem.");
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <input
                type="text"
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
                type="text"
                placeholder="Digite sua chave"
                value={chave}
                onChange={(e) => setChave(e.target.value)}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <button
                onClick={sendMessage}
                style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Enviar
            </button>
        </div>
    );
}