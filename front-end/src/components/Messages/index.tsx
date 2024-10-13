import React from 'react'

import {Message as MessageType} from "ai";
import { MessageContainer, MessageElement } from './style';

export default function Messages({message}: {message: MessageType}) {
    const {role, content} = message;
    if(role === 'assistant'){
        return(
            <MessageElement>
                <MessageContainer>
                    Assistant:
                </MessageContainer>
                {content}
            </MessageElement>
        )
    }
    return null;
}