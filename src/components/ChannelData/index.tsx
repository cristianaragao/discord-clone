import React, { useState, useEffect, useRef } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    const [text, setText] = useState("");
    
    const [messages, setMessages] = useState([
        {
            author: "Ben 10 11",
            date: "Ontem às 17:53",
            content: "Queria ter visto o jogo do Brasil :(",
            isBot: false,
            hasMentions: false
        },  
        {
            author: "beyonce.jamaicana",
            date: "Ontem às 17:59",
            content: <><Mention>@Ben 10 11</Mention> pra ver o Neymar caindo como sempre?</>,
            isBot: false,
            hasMentions: false
        },  
        {
            author: "Justin Bieber Brasileiro",
            date: "Ontem às 18:02",
            content: <><Mention>@beyonce.jamaicana</Mention> deixa eu ser fã do ney em paz, cara &#x1F60D;</>,
            isBot: false,
            hasMentions: false
        },   
        {
            author: "beyonce.jamaicana",
            date: "Ontem às 18:02",
            content: "iludido haha",
            isBot: false,
            hasMentions: false
        }, 
        {
            author: "seinaorick",
            date: "Ontem às 18:04",
            content: <><Mention>@everyone</Mention> eii galera! onde é a boa hoje??</>,
            isBot: false,
            hasMentions: true
        }, 
        {
            author: "Ben 10 11",
            date: "Ontem às 18:05",
            content: "Que tal Ponta Negra??",
            isBot: false,
            hasMentions: false
        },  
        {
            author: "seinaorick",
            date: "Ontem às 18:09",
            content: "humm, pode ser, tá tarde não?",
            isBot: false,
            hasMentions: false
        },  
        {
            author: "Ben 10 11",
            date: "Ontem às 18:13",
            content: "Pra mim não e pra vocês?",
            isBot: false,
            hasMentions: false
        },  
        {
            author: "Dani Coelho",
            date: "Ontem às 18:15",
            content: <>Tooop!!<br/>Mas não vai dar pra eu ir<br/>Se tivessem me chamado antes &#x1F613;</>,
            isBot: false,
            hasMentions: false
        },  
        {
            author: "Ben 10 11",
            date: "Ontem às 18:17",
            content: <><Mention>@Dani Coelho</Mention> você sempre fala isso &#x1F621;</>,
            isBot: false,
            hasMentions: false
        },  
        {
            author: "Dani Coelho",
            date: "Ontem às 18:18",
            content: "Desculpaa",
            isBot: false,
            hasMentions: false
        },  
        {
            author: "Ben 10 11",
            date: "Ontem às 18:18",
            content: "desculpo não humm",
            isBot: false,
            hasMentions: false
        },  
        {
            author: "Justin Bieber Brasileiro",
            date: "Ontem às 22:21",
            content: "Flw!! vou é dormir, tá tarde sim",
            isBot: false,
            hasMentions: false
        },  
        {
            author: "Gustavo Lima",
            date: `Hoje às ${new Date().getHours() - 1}:${new Date().getMinutes() - 2}`,
            content: <>Ei, <Mention>@everyone</Mention>! bora jogar CS?? entrem aí!</>,
            isBot: true,
            hasMentions: true
        },
        {
            author: "Reginaldo Rossi Pereira",
            date: `Hoje às ${new Date().getHours()}:${new Date().getMinutes() - 1}`,
            content: <><Mention>@Cristian Aragão</Mention>, digita algo aí!</>,
            isBot: true,
            hasMentions: false
        },
    ]);

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef, messages]);

    const verifyStringVoid = (text: string) => {
        if(text === "") return false;

        let white_spaces = 0;

        // eslint-disable-next-line
        text.split("").map((t, i) => {            
            if(t === " ") white_spaces += 1;
        });

        if(white_spaces === text.length) return false;

        return true;
    };

    const getTime = () => {
        let time = new Date();
        let hourString = "";
        let minutesString = "";

        if(time.getHours() < 10) hourString = "0" + time.getHours();
        else hourString = time.getHours().toString();

        if(time.getMinutes() < 10) minutesString = "0" + time.getMinutes();
        else minutesString = time.getMinutes().toString();

        return `Hoje às ${hourString}:${minutesString}`
    };

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter" && verifyStringVoid(text)) {
            let messagesAux = [...messages];

            if(messagesAux[messagesAux.length - 1].author === "Cristian Aragão" && messagesAux[messagesAux.length - 1].date === getTime()){
                messagesAux[messagesAux.length - 1].content = <>{messagesAux[messagesAux.length - 1].content} <br/> {text}</>
            }
            else{
                messagesAux.push({ author: "Cristian Aragão", date: getTime(), content: text, isBot: false, hasMentions: false });
            }

            setMessages(messagesAux);
            setText("");
        }
    }

    return (
        <Container>
            <Messages ref={messagesRef}>
                {messages.map((message, index) => (
                    <ChannelMessage
                        key={index}
                        author={message.author}
                        date={message.date}
                        content={message.content}
                        isBot={message.isBot}
                        hasMentions={message.hasMentions}
                    />
                ))}
            </Messages>

            <InputWrapper>
                <Input placeholder="Conversar em #chat-livre" value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => handleKeyDown(event)}/>
                <InputIcon />
            </InputWrapper>

        </Container>
    );
    };

export default ChannelData;
