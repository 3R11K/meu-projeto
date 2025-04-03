import React, { useState } from 'react';
import SendInput from "../../Components/Sender/Sender";
import Chat from "../../Components/Chat/Chat";

export default function ChatPage() {
    const [chave, setChave] = useState('');
    return (
        <div style={styles.container}>
            <input
                            type="text"
                            placeholder="Digite sua chave"
                            value={chave}
                            onChange={(e) => setChave(e.target.value)}
                            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}/>
            <Chat 
                chave = {chave}
            />
            <SendInput />
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#fff',
        height: '100vh',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
    },
};

