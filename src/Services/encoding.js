import CryptoJS from 'crypto-js';

export function encodeMessage(message, key) {
    try {
        if (key.length !== 32) {
            throw new Error('A chave deve ter exatamente 32 caracteres (256 bits).');
        }

        const iv = CryptoJS.lib.WordArray.random(16); // Gera IV de 16 bytes
        const encrypted = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(key), {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return iv.toString(CryptoJS.enc.Hex) + ':' + encrypted.ciphertext.toString(CryptoJS.enc.Hex);
    } catch (error) {
        alert("Erro ao cifrar a mensagem, verifique a chave.");
        console.error(error.message);
        throw error; // Re-throw the error after logging it
    }
}

export function decodeMessage(encryptedMessage, key) {
    try {
        if (key.length !== 32) {
            throw new Error('A chave deve ter exatamente 32 caracteres (256 bits).');
        }

        const parts = encryptedMessage.split(':');
        if (parts.length !== 2) {
            throw new Error('Formato da mensagem inválido.');
        }

        const iv = CryptoJS.enc.Hex.parse(parts[0]);
        const ciphertext = CryptoJS.enc.Hex.parse(parts[1]);

        const decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, CryptoJS.enc.Utf8.parse(key), {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        alert("Erro ao decifrar a mensagem, verifique a chave e o formato da mensagem.");
        console.error(error.message);
        throw error; // Re-throw the error after logging it
    }
}
