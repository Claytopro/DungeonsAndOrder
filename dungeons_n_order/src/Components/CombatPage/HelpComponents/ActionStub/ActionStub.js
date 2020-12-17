import React from 'react';
import styles from './ActionStub.module.css'



function ActionStub(props) {
    console.log(props);
    return(
        <div className = {styles.actionStub}>
            <div className = {styles.actionName}>
                <span  style = {{marginRight:"10px"}}> Action: </span>
                <h4 style = {{margin:"0px"}}> {props.info.action}</h4>
            </div>
            <div className = {styles.actionDescription}>
                <p style = {{margin:"0px"}}>{props.info.description}</p>
            </div>
        </div>
    )
}


export default ActionStub