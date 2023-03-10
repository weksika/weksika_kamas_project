import React from "react";
import {Navigate,  NavLink } from "react-router-dom";
import c from './dialogs.module.css'

const DialogItem = (props) => {

    return <div className={c.dialog}>
        <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={c.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key = {dialog.id} id = {dialog.id}/>);
    let messageElements = state.messagesData.map(message => <Message message={message.message} key = {message.id} id = {message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }
    if(!props.isAuth) return <Navigate  to = {'/login'}/>;
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {dialogElements}
        </div>
        <div className={c.messages}>
            <div className={c.headerMessage}>Имя Фамилия</div>
            <div className={c.messageElements}>{messageElements}</div>
            <div>
                <div><textarea value = {newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea></div>
                <div><button onClick={onSendMessageClick} >Отправить</button></div>
            </div>
                        
        </div>
        </div>

    )
}
export default Dialogs;