import React, { useState } from 'react';
import styles from "./CreateCharacter.module.css";
import TextField from '@material-ui/core/TextField';
import WreathIcon from '../../../CustomIcons/WreathIcon'

function CreateCharacter(props) {
    const [isExpand, toggleExpand] = useState(false);

    return (
        <div className= {isExpand?  styles.selectItemExpand : styles.selectItem }  onClick={() => toggleExpand(true)}>
        <h4 className= {styles.selectItemHeader}>Create Character</h4>
        
        

      
        <div className = {styles.characterCreate}> 
         <div className = {styles.charCreatRow}>
            <div className = {styles.charAbility}>
                <div className = {styles.ability}>
                    <WreathIcon className={styles.wreathPos} />
                    <TextField id="standard-required" defaultValue="" />
                </div>
            </div>
            <div className = {styles.charAbility}>
                <div className = {styles.ability}>
                    <WreathIcon className={styles.wreathPos} />
                    <TextField id="standard-required" defaultValue="" />
                </div>
                <div className = {styles.skills}>

                </div>
            </div>
         </div>

        </div>

     </div>
    );
}

export default CreateCharacter;