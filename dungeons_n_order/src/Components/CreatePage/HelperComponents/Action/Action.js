import React, { useState } from 'react';
import styles from "./Action.module.css";

function Action(props) {

    return(
        <div className = {styles.inputContainer}>
            <h3 className = {styles.actionHeader}>Action Name:</h3>
            <input className = {styles.actionInput}></input>
            <h3  className = {styles.actionHeader}>Description:</h3>
            <textarea type = "text" placeholder = "Attack does 2d6 +4 damage and has a chance to..." className={styles.equipInput} ></textarea>
        </div>
    )
}

export default Action;