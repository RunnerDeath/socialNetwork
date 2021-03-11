import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from "./DialogElement/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.messageData.map(message => <Message name={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>

                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}

            </div>
        </div>
    )
}
export default Dialogs