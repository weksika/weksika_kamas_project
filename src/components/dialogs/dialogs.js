import React from "react";
import { Field } from "redux-form";
import {Navigate,  NavLink } from "react-router-dom";
import { reduxForm } from "redux-form";
import c from './dialogs.module.css'
import { Textarea } from "../common/preloader/formsControls/formsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";

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

    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
        </div>
        <AddMessageFormRedux onSubmit={AddNewMessage}/>
        </div>

    )
}
const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name = "newMessageBody" placeholder="Enter your message" component={Textarea} validate = {[requiredField, maxLength100]}/>
            </div>
                <div><button>Отправить</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;