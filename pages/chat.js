import verifyUser from "../scripts/verifyUser";

import styles from "../styles/Chat.module.scss";
import {useMemo, useRef, useState} from "react";
import socket from "../scripts/webSocket";
import Message from "../components/message";

const Chat = () => {

    const text = useRef()
    const [messages, setMessages] = useState([])

    const dupa = useMemo(()=> new socket(setMessages),[])


    const sendMessage = () => {
        if(text.current.value === ''){
            alert("Message can't be empty")
        }
        else{
            dupa.send(text.current.value, sessionStorage.getItem('name'))
            const message = {
                message: text.current.value,
                nick: sessionStorage.getItem('name')
            }
            text.current.value = ''
            setMessages(oldArray => [...oldArray, message])
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.insideContainer}>
                <div className={styles.text}>
                    {messages.map(message =>
                        <Message
                            message={message.message}
                            name={message.nick}/>
                    )}
                </div>
                <div className={styles.message}>
                    <p><textarea className={styles.textarea} ref={text} onKeyPress={ e => {e.key === 'Enter' ? sendMessage() : null}}></textarea></p>
                    <button
                        className={styles.button}
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}
export default verifyUser(Chat)