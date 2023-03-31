import React, { useEffect, useState } from "react";
import s from './profileInfo.module.css';

const ProfileStatus = (props) => {
    let [editMode, setEditeMode] = useState(false);
    let [status, setStatus] = useState(props.aboutMe);
    
    const activateEditMode = () =>{
        setEditeMode(true);
    }
    const deactivatedEditMode = () => {
        setEditeMode(false);
        props.updateStatus(status);
    }    
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
        
    }
    useEffect(() => {
        setStatus(props.aboutMe);
    }, [props.aboutMe]);
    // componentDidUpdate (prevProps) {
    //     console.log("я тут");
    //     if(prevProps.status != props.status) {
    //         setState({
    //             status: props.status
    //         })
    //     }
    //     console.log("");
    // }
        return (
        <div className={s.status}>
            {!editMode && 
            <div>
                <span onDoubleClick={activateEditMode}>{props.aboutMe || "-----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus= {true} onBlur={ deactivatedEditMode} value = {status || ""}/>
            </div>
            }
        </div>
    ) 
}

export default ProfileStatus;