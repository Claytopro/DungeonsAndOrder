import React, {useState} from 'react';
import styles from './DiceSim.module.css'
//icons
import D20Icon from '../../../CustomIcons/D20Icon'
import D6Icon from '../../../CustomIcons/D6Icon'
import D8Icon from '../../../CustomIcons/D8Icon'
import D10Icon from '../../../CustomIcons/D10Icon'
import D4Icon from '../../../CustomIcons/D4Icon'
import D12Icon from '../../../CustomIcons/D12Icon'

import Button from '@material-ui/core/Button'

function DiceSim(props){

    const [d20,set20] = useState(0)
    const [d12,set12] = useState(0)
    const [d10,set10] = useState(0)
    const [d8,set8] = useState(0)
    const [d6,set6] = useState(0)
    const [d4,set4] = useState(0)

    const getRandom = (max,min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return(
        <div className={styles.diceSim}>
            <div className={styles.diceRow}>
                <D20Icon style = {{fontSize:"60px"}}/>
                <Button variant="outlined" style = {{ color: "black",fontWeight:"bold",borderColor:"black",height: "40px"}}
                        onClick = {() => set20(getRandom(20,1))}
                > Roll D20 </Button>
                <div className = {styles.roll}>{d20}</div>
            </div>
            <div className={styles.diceRow}>
                <D12Icon style = {{fontSize:"60px"}}/>
                <Button variant="outlined" style = {{ color: "black",fontWeight:"bold",borderColor:"black",height: "40px"}}
                    onClick = {() => set12(getRandom(12,1))}
                > Roll D12 </Button>
                <div className = {styles.roll}>{d12}</div>
            </div>
            <div className={styles.diceRow}>
                <D10Icon style = {{fontSize:"60px"}}/>
                <Button variant="outlined" style = {{ color: "black",fontWeight:"bold",borderColor:"black",height: "40px"}}
                onClick = {() => set10(getRandom(10,1))}
                > Roll D10 </Button>
                <div className = {styles.roll}>{d10}</div>

            </div>
            <div className={styles.diceRow}>
                <D8Icon style = {{fontSize:"60px"}}/>
                <Button variant="outlined" style = {{ color: "black",fontWeight:"bold",borderColor:"black",height: "40px"}}
                onClick = {() => set8(getRandom(8,1))}
                > Roll D8 </Button>
                <div className = {styles.roll}>{d8}</div>

            </div>
            <div className={styles.diceRow}>
                <D6Icon style = {{fontSize:"60px"}}/>
                <Button variant="outlined" style = {{ color: "black",fontWeight:"bold",borderColor:"black",height: "40px"}}
                    onClick = {() => set6(getRandom(6,1))}
                > Roll D6 </Button>
                <div className = {styles.roll}>{d6}</div>

            </div>
            <div className={styles.diceRow}>
                <D4Icon style = {{fontSize:"60px"}}/>
                <Button variant="outlined" style = {{ color: "black",fontWeight:"bold",borderColor:"black",height: "40px"}}
                    onClick = {() => set4(getRandom(4,1))}
                > Roll D4 </Button>
                <div className = {styles.roll}>{d4}</div>

            </div>
              
                
                
               
        </div>
    )
}

export default DiceSim