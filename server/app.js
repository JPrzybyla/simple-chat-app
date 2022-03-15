const express = require('express');
const app = express();

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 6969 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {

        const data = JSON.parse(message)

        //z racji ze websockety lecą po tcp nie ma możliwosci brodcastu wiec kazdemu z osobna wysylaly ta sama wiadomosc
        wss.clients.forEach((client)=>{
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(data));
            }
        })
    });
});



app.listen(8080, ()=> console.log("im running"));

