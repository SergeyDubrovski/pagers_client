import React, { useState } from 'react'
import s from './mainPage.module.css'
import { useSendMessageMutation } from '../app/messageApi';
import '../fonts/3270Condensed-Regular.otf';

type Props = {}



export const MainPage = (props: Props) => {

   

    const [line0, setLine0] = useState('');
     const [sendMessage, data] = useSendMessageMutation()
     console.log(data.data);
     
    
  return (
    <div className={s.conteiner}>
      
      <textarea autoFocus className={s.decor}  value={line0.substring(0, 32)} 
      onChange={(e) => { setLine0(e.currentTarget.value)}}/>
      <button className={s.buttonSend} onClick={()=>{sendMessage(line0.substring(0, 32)); setLine0('');
      }}>SEND</button>
    </div>
  )
}