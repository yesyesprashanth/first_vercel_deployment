import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../context/UserStore";
import { useRouter } from "next/router";
import authstyles from '../styles/auth.module.css'
import chatstyles from '../styles/chats.module.css'
import {ChatEngine} from 'react-chat-engine';

export default function Chats() {
  const UserCtx = useContext(UserContext);
  const [showChat, setShowChat] = useState(false);

  useEffect(()=>{
    if(typeof document !== null)
      setShowChat(true);
  })

  if(!showChat)
    return <div />

  return <div className={authstyles.background}>
    <ChatEngine 
      height = 'calc(100vh-200px)'
      projectID = '0ce965ca-2449-4610-bd45-8bbeec759c4f'
      userName = {UserCtx.username}
      userSecret = {UserCtx.secret}
    />
  </div>;
}
