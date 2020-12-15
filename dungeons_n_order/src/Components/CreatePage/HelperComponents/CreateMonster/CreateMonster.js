import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import _ from 'lodash';
import  {addMonster} from "../../../../redux/actions/monsterActions";
import styles from "./CreateMonster.module.css";
//monster attributes and information scaffolding
import abilityList from '../CreateCharacter/abilityList'
import monsterAttributes from './monsterAttributes'
import monsterActions from './monsterAction'
//icons
import HydraIcon from '../../../CustomIcons/HydraIcon'
import WreathIcon from '../../../CustomIcons/WreathIcon'
import ShieldIcon from '../../../CustomIcons/ShieldIcon'
import HeartIcon from '../../../CustomIcons/HeartIcon'
import SemiWreathIcon from '../../../CustomIcons/SemiwreathIcon'
//material ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

//helper components
import Action from '../Action/Action'

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

function CreateMonster(props) {
    const dispatch = useDispatch();
    //state
    const [isExpand, toggleExpand] = useState(false);
    const [popUp,togglePop] = useState(false)
    const [abilityScores,setAbilityScore] = useState(_.cloneDeep(abilityList));
    const [attributes, setAttributes] = useState(_.cloneDeep(monsterAttributes))
    const [actions ,setActions] = useState([])

    const saveMonster = () => {
        let monster = _.cloneDeep({attributes: attributes , actions:actions, abilityScores:abilityScores})
        dispatch(addMonster(monster))
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

    const addAction = () => {
        let newArr = [...actions]
        newArr.push(monsterActions)
        setActions(newArr)
        //console.log(newArr);
    }

    const removeAction = (index) => {
        let newArr = [...actions]
        newArr.splice(index, 1);
        setActions(newArr)
    }

    const updateAction = (index,content) =>{
        let newArr = [...actions]
        newArr[index] = content
        setActions(newArr)
        //console.log(newArr);
    }

    const updateAtrribute = (name,value) => {
        let newArr = [...attributes]
        newArr.forEach(index => {if(index.attribute === name) index.value = value})
        setAttributes(newArr)
        //console.log(attributes)
    }

    const updateAbilityScore = (name,value) => {
        let newArr = [...abilityScores]
        newArr.forEach(index => {if(index.attribute === name) index.value = value})
        setAbilityScore(newArr)
        //console.log(abilityScores)
    }


    return (
        <div className= {isExpand?  styles.selectItemExpand : styles.selectItem }  onClick={() => togExpand(1)}>
        <div className= {styles.selectHeaderRow}>
            <h4 className= {isExpand? styles.selectItemHeaderGrow : styles.selectItemHeader}>Create Monster</h4>
            {isExpand && <Button onClick={() => togExpand(0)}>Close</Button>}
        </div>

        {!isExpand && <HydraIcon style={{ fontSize: 60, marginTop:"5px"}}/>}

        {popUp &&   
            <div className = {styles.popup}>
                <div className = {styles.popupAnnouncement}>
                    <h4>Monster succesfully Created!</h4>
                    <Button variant="contained" size="large" style = {{width:"200px", backgroundColor: "#DF622C",fontWeight:"bold"}} onClick = {() => togglePop(false)}> Okay </Button>
                </div>
            </div>
        }

        {isExpand &&
        <div className = {styles.createMain}>
        <div className = {styles.mobNameRow}>
            <ThemeProvider theme={theme}>
                <TextField id="outlined-basic" label="Monster Name"  variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}} onChange = {e => updateAtrribute("name",e.target.value)}/>
                <TextField id="outlined-basic" label="Alignement"  variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}} onChange = {e => updateAtrribute("alignement",e.target.value)}/>
            </ThemeProvider>
        </div>{/*end of row1*/}
        <div className = {styles.mobCreatRow}>
                <div className = {styles.attribute}> 
                    <SemiWreathIcon className={styles.attributeIconPos} style = {{fontSize:"90px"}}/>
                    <input type = "text" className={styles.attributeInput} onChange = {e => updateAtrribute("initiative",e.target.value)}/>
                    <h5 className={styles.attributeHeader}>Initiative</h5>
                </div>
                
                <div className = {styles.attribute}> 
                    <ShieldIcon className={styles.attributeIconPos} style = {{fontSize:"80px"}}/>
                    <input type = "text" className={styles.attributeInput} onChange = {e => updateAtrribute("armor class",e.target.value)}/>
                    <h5 className={styles.attributeHeader} >Armor Class</h5>
                </div>

                <div className = {styles.attribute}> 
                    <HeartIcon className={styles.attributeIconPos} style = {{fontSize:"90px"}}/>
                    <input type = "text" className={styles.attributeInput} onChange = {e => updateAtrribute("hit points",e.target.value)}/>
                    <h5 className={styles.attributeHeader} >Hit Points</h5>
                </div>

                <div className = {styles.attribute}> 
                    <SemiWreathIcon className={styles.attributeIconPos} style = {{fontSize:"90px"}}/>
                    <input type = "text" className={styles.attributeInput} onChange = {e => updateAtrribute("speed",e.target.value)}/>
                    <h5 className={styles.attributeHeader} >Speed</h5>
                </div>
            </div>{/*end of row2*/}
            
            <div className = {styles.mobCreatRow}>
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Dexterity</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("strength",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[0].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[0].value - 10)/2))}</span>
                        </div>
                </div>
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Strength</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("dexterity",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[1].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[1].value - 10)/2))}</span>
                        </div>
                </div>
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Constitution</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("constitution",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[2].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[2].value - 10)/2))}</span>
                        </div>
                </div>
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Intelligence</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("intelligence",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[3].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[3].value - 10)/2))}</span>
                        </div>
                </div>
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Wisdom</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("wisdom",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[4].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[4].value - 10)/2))}</span>
                        </div>
                </div>
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Charisma</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("charisma",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[5].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[5].value - 10)/2))}</span>
                        </div>
                </div>
            </div>{/*end of row3*/}

            <div className = {styles.charCreatCol}>
                
                <div className= {styles.selectHeaderRow}>
                    <h4 className= {styles.selectItemHeaderGrow}>Create Action</h4>
                    <Button variant = "outlined" size="large" style = {{fontWeight:"bold"}} onClick = {() => addAction()}>Add</Button>
                </div>
                {actions.map((action, index )=> {
                    return <Action key = {index} removeAction = {() => removeAction(index)} updateAction  = {updateAction} index = {index}/>   
                })}
            </div>

             <div className = {styles.buttonContainer}>
                <Button variant="contained" size="large" style = {{width:"300px"}} onClick = {() => saveMonster()}> Create Monster </Button>
            </div> 
        </div> }{/*end of hidden */}

        </div>
    );
}


export default CreateMonster;
