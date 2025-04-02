import styled from 'styled-components';

export const ChatBallonContainer = styled.div`
    background-color: ${props => props.isSender ? '#0084ff' : '#f1f1f1'};
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
    max-width: 70%;
    align-self: ${props => props.isSender ? 'flex-end' : 'flex-start'};
    border-top-left-radius: ${props => props.isSender ? '20px' : '0px'};
    border-top-right-radius: ${props => props.isSender ? '0px' : '20px'};
    border-bottom-left-radius: ${props => props.isSender ? '0px' : '20px'};
    border-bottom-right-radius: ${props => props.isSender ? '20px' : '0px'};
    box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`;

export const Message = styled.p`
    color: ${props => props.isSender ? '#fff' : '#000'};
    font-size: 16px;
`;

export const Sender = styled.p`
    color: ${props => props.isSender ? '#fff' : '#000'};
    font-size: 12px;
    margin-top: 5px;
`;