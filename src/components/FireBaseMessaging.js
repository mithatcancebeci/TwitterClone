import React, { useRef, useState } from 'react';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyA42Lr9K-advUqMsccJCixnu9bO3PBhvzE",
    authDomain: "my-project-1-3d727.firebaseapp.com",
    projectId: "my-project-1-3d727",
    storageBucket: "my-project-1-3d727.appspot.com",
    messagingSenderId: "916993138222",
    appId: "1:916993138222:web:5721179ca307932c76c9bf",
    measurementId: "G-1355G83J4S"
})


const firestore = firebase.firestore();
const analytics = firebase.analytics();


const FireBase=()=> {



  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
  
      </header>

      <section>
     <ChatRoom/> 
      </section>

    </div>
  );
}
 



function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),

    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = 'sent';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default FireBase;