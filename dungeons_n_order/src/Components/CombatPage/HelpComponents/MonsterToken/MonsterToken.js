import React, {useState} from 'react';
import styles from './MonsterToken.module.css'
import _ from "lodash"

import ActionStub from '../ActionStub/ActionStub'

//icons
import WreathIcon from '../../../CustomIcons/WreathIcon'
import ShieldIcon from '../../../CustomIcons/ShieldIcon'
import HeartIcon from '../../../CustomIcons/HeartIcon'
import SemiWreathIcon from '../../../CustomIcons/SemiwreathIcon'

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'


const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#272726',
        },
        secondary: {
          main: '#f44336',
        },
      },
  });

function MonsterToken(props) {
    const attributes = props.monster.attributes  
    const [abilityScores,setAbilities] = useState(_.cloneDeep(props.monster.abilityScores))
    const [initiative,setInit] = useState(attributes[1].value)
    const [showMore, togShow] = useState(false)
    //const abilityScores = props.monster.abilityScores

    const updateAbilityScore = (name,value) => {
        let newArr = [...abilityScores]
        newArr.forEach(index => {if(index.attribute === name) index.value = value})
        setAbilities(newArr)
        //console.log(abilityScores)
    }

    return(
        <div className = {styles.token} style = {{order:(initiative * -1)}}>
                <div className = {styles.tokenRow}>  
                        <div className = {styles.charInputRow}>
                            <ThemeProvider theme={theme}>
                                <TextField id="outlined-basic" label="Name"  variant="outlined" className = {styles.charTextIn} size = "small" style = {{margin: "10px",maxWidth:"150px"}} defaultValue={attributes[4].value} InputProps={{readOnly: true,}} focused ={true}/>
                                <TextField id="outlined-basic" label="Alignement" variant="outlined" className = {styles.charTextIn} size = "small" style = {{margin: "10px",maxWidth:"100px"}} defaultValue={attributes[5].value} InputProps={{readOnly: true,}} focused ={true}/>
                            </ThemeProvider>

                            <IconButton  variant="contained" component="span" size="small" onClick = {()=> {togShow(!showMore)}}>
                                 {showMore? <KeyboardArrowUp style = {{fontSize: "50px"}}/> : <KeyboardArrowDown style = {{fontSize: "50px"}}/>}
                            </IconButton >
                        </div>
                </div>

                <div className =  {styles.tokenAbilityRow} >
                    <div className = {styles.attribute}> 
                        <SemiWreathIcon className={styles.attributeIconPos} style = {{fontSize:"90px"}}/>
                        <input type = "text" defaultValue = {initiative} className={styles.attributeInput} onChange = {e => setInit(parseInt(e.target.value))}/>
                        <h5 className={styles.attributeHeader}>Initiative</h5>
                    </div>
                    
                    <div className = {styles.attribute}> 
                        <ShieldIcon className={styles.attributeIconPos} style = {{fontSize:"80px"}}/>
                        <input disable="true" type = "text" defaultValue = {attributes[0].value} className={styles.attributeInput} />
                        <h5 className={styles.attributeHeader} >Armor Class</h5>
                    </div>

                    <div className = {styles.attribute}> 
                        <HeartIcon className={styles.attributeIconPos} style = {{fontSize:"90px"}}/>
                        <input disable="true"  type = "text" defaultValue = {attributes[2].value} className={styles.attributeInput} />
                        <h5 className={styles.attributeHeader} >Hit Points</h5>
                    </div>

                    <div className = {styles.attribute}> 
                        <SemiWreathIcon className={styles.attributeIconPos} style = {{fontSize:"90px"}}/>
                        <input disable="true"  type = "text" defaultValue = {attributes[3].value} className={styles.attributeInput} />
                        <h5 className={styles.attributeHeader} >Speed</h5>
                    </div>
     
            </div>{/*end of row2*/}

            <div className = {showMore? styles.tokenAbilityRow : styles.hidden}>  
                <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Strength</div>                     
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"100px"}} className={styles.wreathPos} />
                        <input type = "text" defaultValue = {abilityScores[0].value} className={styles.abilityInput} onChange = {e => updateAbilityScore("strength",e.target.value)} />
                        <span className={styles.abilityModifier}>{abilityScores[0].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[0].value - 10)/2))}</span>
                    </div>
               </div> 

               <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Dexterity</div>                     
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"100px"}} className={styles.wreathPos} />
                        <input type = "text" defaultValue = {abilityScores[1].value} className={styles.abilityInput} onChange = {e => updateAbilityScore("dexterity",e.target.value)}/>
                        <span className={styles.abilityModifier}>{abilityScores[1].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[1].value - 10)/2))}</span>
                    </div>
               </div> 

               <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Constitution</div>                     
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"100px"}} className={styles.wreathPos} />
                        <input type = "text" defaultValue = {abilityScores[2].value} className={styles.abilityInput} onChange = {e => updateAbilityScore("constitution",e.target.value)}/>
                        <span className={styles.abilityModifier}>{abilityScores[2].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[2].value - 10)/2))}</span>
                    </div>
               </div> 

               <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Intelligence</div>                     
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"100px"}} className={styles.wreathPos} />
                        <input type = "text" defaultValue = {abilityScores[3].value} className={styles.abilityInput} onChange = {e => updateAbilityScore("intelligence",e.target.value)}/>
                        <span className={styles.abilityModifier}>{abilityScores[3].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[3].value - 10)/2))}</span>
                    </div>
               </div> 

               <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Wisdom</div>                     
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"100px"}} className={styles.wreathPos} />
                        <input type = "text" defaultValue = {abilityScores[4].value} className={styles.abilityInput} onChange = {e => updateAbilityScore("wisdom",e.target.value)}/>
                        <span className={styles.abilityModifier}>{abilityScores[4].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[4].value - 10)/2))}</span>
                    </div>
               </div> 

               <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Charisma</div>                     
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"100px"}} className={styles.wreathPos} />
                        <input type = "text" defaultValue = {abilityScores[5].value} className={styles.abilityInput} onChange = {e => updateAbilityScore("charisma",e.target.value)}/>
                        <span className={styles.abilityModifier}>{abilityScores[5].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[5].value - 10)/2))}</span>
                    </div>
               </div> 
            </div>{/*end of row3*/}

            <div className = {showMore? styles.tokenRow : styles.hidden}> 
                {props.monster.actions.map((element,index) => {
                    return <ActionStub key= {index} info = {element}/>
                })}
            </div>{/*end of row4*/}
        </div>
    )

}

export default MonsterToken