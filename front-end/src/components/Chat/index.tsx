import React from 'react'
import { ChatButtonSubmit, ChatContainer, ChatForm, ChatInput, ChatMessages } from './style'
import {useChat} from "ai/react"
import Messages from '../Messages';

export default function Chat() {

    const{messages, input, handleInputChange, handleSubmit} = useChat();


    return(
        <ChatContainer>
            <ChatMessages>
                {messages.map((message, index)=> (
                    <Messages key={message.id} message={message}/>
                ))}
            </ChatMessages>
            <ChatForm onSubmit={handleSubmit}>
            <ChatInput value={input}/>

            <ChatButtonSubmit type="submit" disabled={!input}>
                Enviar
            </ChatButtonSubmit>
                    
            </ChatForm>
        </ChatContainer>
)}