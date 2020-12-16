import React from 'react';
import styles from "./Toolbar.module.css";
//material ui
import Button from '@material-ui/core/Button';




function Toolbar(props) {

    return (
        <div className = {styles.toolbar}>
            <select name="character" id="selectChar"  className = {styles.dropdown} onChange = {e => props.handleSelect(e.target.value)}>
                {props.characters.map((e,key) => {
                    return <option key = {key} value={key}> {e.content.attributes[4].value}</option>
                })}
            </select>
            <div className = {styles.buttonHold}>
                <Button variant="outlined" size="large" style = {{width:"60px",  color: "black",fontWeight:"bold",borderColor:"black"}} onClick = {props.handleEdit}> Edit </Button>
                <Button variant="outlined" size="large" style = {{width:"80px", color: "black",fontWeight:"bold",borderColor:"black"}} onClick = {props.handleDelete}> Delete </Button>
            </div>
        </div>
    )
}

export default Toolbar

