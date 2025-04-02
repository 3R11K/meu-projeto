import React from "react";
import SendInput from "../../Components/Sender/Sender";
import Chat from "../../Components/Chat/Chat";

export default function ChatPage() {
    return (
        <div style={styles.container}>
            <Chat />
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
    },
};

