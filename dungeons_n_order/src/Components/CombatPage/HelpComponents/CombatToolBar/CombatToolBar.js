import React from 'react';
import styles from './CombatToolBar.module.css'
//material ui
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'

function CombatToolBar(props) {

    return(
        <div className = {styles.toolbar}>

        <div className = {styles.buttonHold}>
            <select id="addChar"  className = {styles.dropdown} onChange = {e => props.selectChar(e.target.value)}>
                <option  value={"default"}>Blank Character</option>
                {props.characters.map((e,key) => {
                    return <option key = {key} value={e.id}> {e.content.attributes[4].value}</option>
                })}
            </select>
            <Button variant="outlined" size="large" style = {{width:"60px",  color: "black",fontWeight:"bold",borderColor:"black"}} onClick = {props.addChar}> <AddIcon/> </Button>
        </div>

        <div className = {styles.buttonHold}>
            <select id="addMob"  className = {styles.dropdown} onChange = {e => props.selectMob(e.target.value)}>
                <option  value={"default"}>Blank Monster</option>
                {props.monsters.map((e,key) => {
                    return <option key = {key} value={e.id}> {e.content.attributes[4].value}</option>
                })}
            </select>
            <Button variant="outlined" size="large" style = {{width:"60px",  color: "black",fontWeight:"bold",borderColor:"black"}} onClick = {props.addMob}> <AddIcon/> </Button>
        </div>

        <div className = {styles.buttonHold}>
            <Button variant="outlined" size="large" style = {{width:"60px",  color: "black",fontWeight:"bold",borderColor:"black"}} onClick = {props.reset}> <RotateLeftIcon/> </Button>
        </div>
    </div>
    
    )

}

export default CombatToolBar