import React, { useState } from 'react'
import s from './mainPage.module.css'
import { useSendMessageMutation } from '../app/messageApi';

type Props = {}



export const MainPage = (props: Props) => {

   

    const [line0, setLine0] = useState('');
     const [sendMessage, data] = useSendMessageMutation()
     console.log(data.data);
     
    
  return (
    <div>
      
      <input autoFocus className={s.decor} type="text" value={line0.substring(0, 32)} 
      onChange={(e) => { setLine0(e.currentTarget.value)}}/>
      <button onClick={()=>{sendMessage(line0.substring(0, 32));
      }}>SEND</button>
    </div>
  )
}