import React, {useContext} from "react";
import { UserContext } from '../context/UserStore'
import styles from '../styles/auth.module.css';
import {useRouter} from 'next/router';
import axios from 'axios';


export default function Auth() {
  const UserCtx = useContext(UserContext)
  const Router = useRouter();

  function submitHandler(e){
    e.preventDefault();
    if(UserCtx.username.length==0 || UserCtx.secret.length==0) return <div />

    axios.put(
      'https://api.chatengine.io/users/', 
      {"username":UserCtx.username, 
      "secret": UserCtx.secret},
      {headers:{"private-key": "963629ed-f693-48e1-918f-2563fe85d554"}}
    ).then(
      r=>Router.push('/chats')
    )
  }
    
  return <div className={styles.background}>
    <div className = {styles.authcontainer}>
      <form className = {styles.authform} onSubmit={(e)=>submitHandler(e)}>
        <div className = {styles.authtitle}>Next JS Chat App</div>
        <div className = {styles.inputcontainer}>
          <input 
            type="text"
            placeholder="Email"
            className={styles.textinput}
            onChange={(e)=>UserCtx.setUsername(e.target.value)}
          />
          <input 
            type="password"
            placeholder="password"
            className={styles.textinput}
            onChange={(e)=>UserCtx.setSecret(e.target.value)}
          />          
        </div>
        <button type="submit" className = {styles.submitbutton}>Sign up</button>
      </form>

    </div>

  </div>;
}
