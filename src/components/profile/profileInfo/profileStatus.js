import React from "react";
import s from './profileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode(){
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode(){
        this.setState({
            editMode: false
        })
    }
    render(){
        return (
        <div className={s.status}>
            {!this.state.editMode && 
            <div>
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.aboutMe}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus= {true} onBlur={ this.deactivatedEditMode.bind(this)} value = {this.props.aboutMe}/>
            </div>
            }
        </div>
        
    )
    }
    
}

export default ProfileStatus;