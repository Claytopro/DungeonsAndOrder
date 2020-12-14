import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import  {addItem} from "../../../../redux/actions/itemActions";
import styles from "./CreateItem.module.css";
import itemScaffold from './itemScaffold.js'
//icons
import PotionIcon from '../../../CustomIcons/PotionIcon'
//material ui
import Button from '@material-ui/core/Button';

function CreateItem(props) {
    const dispatch = useDispatch();
    //state
    const [isExpand, toggleExpand] = useState(false)
    const [item, setItem] = useState(itemScaffold)
    const [popUp,togglePop] = useState(false)

    const updateAtrribute = (name,value) => {
        let newObj = item
        newObj[name] = value
        setItem(newObj)
        console.log(item);
    }


    const saveItem = () => {
        dispatch(addItem(item))
        togExpand(0)
        togglePop(true)
    }

    const togExpand = (flag) => {
        if(flag && !isExpand && !popUp){
            toggleExpand(!isExpand)
        }else if(flag === 0 ){
            toggleExpand(false)
        }
    }

    return (
        <div className= {isExpand?  styles.selectItemExpand : styles.selectItem }  onClick={() => togExpand(1)}>
            <div className= {styles.selectHeaderRow}>
                <h4 className= {isExpand? styles.selectItemHeaderGrow : styles.selectItemHeader}>Create Item</h4>
                {isExpand && <Button onClick={() => togExpand(0)}>Close</Button>}
            </div>

         {popUp &&   <div className = {styles.popup}>
                <div className = {styles.popupAnnouncement}>
                    <h4>Item succesfully Created!</h4>
                    <Button variant="contained" size="large" style = {{width:"200px", backgroundColor: "#DF622C",fontWeight:"bold"}} onClick = {() => togglePop(false)}> Okay </Button>
                </div>
            </div>}

            {!isExpand && <PotionIcon style={{ fontSize: 60, marginTop:"5px"}}/> }

            {isExpand && 
            <div className = {styles.createMain}>
                <h4 className = {styles.itemHeader} >Name</h4>
                <input className = {styles.itemInput} onChange = {e => updateAtrribute("name",e.target.value)}></input>

                <h4 className = {styles.itemHeader}>Rarity</h4>
                <input className = {styles.itemInput} onChange = {e => updateAtrribute("rareity",e.target.value)}></input>

                <h4 className = {styles.itemHeader}>Description</h4>
                <textarea className = {styles.itemInput} onChange = {e => updateAtrribute("description",e.target.value)}></textarea>

                <div className = {styles.buttonContainer}>
                    <Button variant="contained" size="large" style = {{width:"300px"}} onClick = {() => saveItem()}> Create Item </Button>
                </div>

            </div>}
        </div>
    );
}


export default CreateItem;
