import styled from 'styled-components';

export const ChatBallonContainer = styled.div`
    background-color: ${props => props.isSender ? '#0084ff' : '#f1f1f1'};
    border-radius: 15px;
    padding: 8px;
    margin: 8px;
    max-width: 65%;
    align-self: ${props => props.isSender ? 'flex-end' : 'flex-start'};
    border-top-left-radius: ${props => props.isSender ? '15px' : '0px'};
    border-top-right-radius: ${props => props.isSender ? '0px' : '15px'};
    border-bottom-left-radius: ${props => props.isSender ? '0px' : '15px'};
    border-bottom-right-radius: ${props => props.isSender ? '15px' : '0px'};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const Message = styled.p`
    color: ${props => props.isSender ? '#fff' : '#000'};
    font-size: 14px;
`;

export const Sender = styled.p`
    color: ${props => props.isSender ? '#fff' : '#000'};
    font-size: 10px;
    margin-top: 4px;
`;