import React, { useEffect, useState } from 'react';

const Chat = () => {
    const[dataFromServer,setData]=useState();
     const ws = new WebSocket('wss://localhost:8080/ws')
const [say,setSay]=useState(false)
    useEffect(()=>{

        ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
        setSay(true)
        }

      ws.onmessage = evt => {
        // listen to data sent from the websocket server
        const message = JSON.parse(evt.data)
       setData({dataFromServer: message})
        console.log(message)
        }

       ws.onclose = () => {
      console.log('disconnected')
        // automatically try to reconnect on connection loss

        }

    })
const sendMessage=()=>{
    ws.send(dataFromServer)
   if(say===true)
    console.log('gönderildi')
}

    return (
        <div>
            <button onClick={sendMessage}></button>
        </div>
    );
};

export default Chat;