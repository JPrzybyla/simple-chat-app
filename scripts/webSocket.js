//tylko po to zamknalem to w klase bo nigdy sie z nimi nie bawilem
class socket {
    constructor(messages) {
        this.Wsocket = new WebSocket('ws://localhost:6969')
        this.messages = messages
        this.Wsocket.addEventListener('message', (message)=>{
            this.messages(oldArray => [...oldArray, JSON.parse(message.data)])
        })
        this.Wsocket.addEventListener('open',()=>{
            console.log('imopen')
        })

    }
    send(message, nick){
        const data = {
            nick: nick,
            message: message
        }
        this.Wsocket.send(JSON.stringify(data))
    }

}
export default socket