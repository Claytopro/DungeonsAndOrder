import React, { useState } from 'react';
import styles from "./Action.module.css";
//material ui
import Button from '@material-ui/core/Button';

function Action(props) {
    const [info ,setInfo] = useState({action:"",description: ""})

    const updateInfo = (name,content) => {
        let newAction = info
        newAction[name] = content
        setInfo(newAction)
        props.updateAction(props.index,newAction)
    }

    return(
        <div className = {styles.inputContainer}>
            <h3 className = {styles.actionHeader}>Action Name:</h3>
            <div>
                <input className = {styles.actionInput} onChange = {e => updateInfo("action",e.target.value)}></input>
                <Button variant = "outlined" size="large" style = {{fontWeight:"bold"}} onClick = {() => props.removeAction()}>Remove</Button>
            </div>
            <h3  className = {styles.actionHeader}>Description:</h3>
            <textarea type = "text" placeholder = "Attack does 2d6 +4 damage and has a chance to..." className={styles.equipInput} onChange = {e => updateInfo("description",e.target.value)}></textarea>
        </div>
    )
}

export default Action;