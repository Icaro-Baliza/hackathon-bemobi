import {StreamingTextResponse, streamText} from "ai";
import {openai} from "@ai-sdk/openai"

export async function POST(req: Request){
    const {messages} = await req.json();

    const result = await streamText({
        model: openai('gpt-3.5-turbo-0125'),
        messages, 
    });

    return new StreamingTextResponse(result.toAIStream());
}