import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import  {addCharacter} from "../../../../redux/actions/characterActions";

import styles from "./CreateCharacter.module.css";
//material ui elements
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogPop from '../Dialog/DialogPop'

//defined character parameters
import skillList from './skillList'
import attributeList from './attributeList'
import abilityList from './abilityList'

//icons
import WreathIcon from '../../../CustomIcons/WreathIcon'
import ShieldIcon from '../../../CustomIcons/ShieldIcon'
import HeartIcon from '../../../CustomIcons/HeartIcon'
import SemiWreathIcon from '../../../CustomIcons/SemiwreathIcon'
import PersonIcon from '@material-ui/icons/Person'

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


function CreateCharacter(props) {
    //Redux
    const dispatch = useDispatch();
    //state
    const [isExpand, toggleExpand] = useState(false);
    const [abilityScores,setAbilityScore] = useState(abilityList);
    const [skills, setSkills] = useState(skillList);
    const [attributes, setAttributes] = useState(attributeList);

    const updateSkills = (name) => {
        let newArr = [...skills]
        newArr.forEach(index => {if(index.skill === name) index.trained = !index.trained})
        setSkills(newArr)
        //console.log(skills);
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
       // console.log(abilityScores)
    }

    //need so that button does not also set it to true when clicked on div
    const togExpand = (flag) => {
        if(flag && !isExpand ){
            toggleExpand(!isExpand)
        }else if(flag === 0 ){
            toggleExpand(false)
        }
    }

    const saveCharacter = () => {
        let content = {abilityScores: abilityScores, skills: skills,attributes:attributes }
        dispatch(addCharacter(content))
        //reset
        setAbilityScore(abilityList)
        setSkills(skillList)
        setAttributes(attributeList)
        toggleExpand(false)
        alert("Character Created!")
    }

   

    return (
        <div className= {isExpand?  styles.selectItemExpand : styles.selectItem }  onClick={() => togExpand(1)}>
        <div className= {styles.selectHeaderRow}>
            <h4 className= {isExpand? styles.selectItemHeaderGrow : styles.selectItemHeader}>Create Character</h4>
            {isExpand && <Button onClick={() => togExpand(0)}>Close</Button>}
        </div>

        {!isExpand && <PersonIcon style={{ fontSize: 60}}/> }
        
      {isExpand &&
      <form>
        <div className = {styles.characterCreate}>
            <div className = {styles.charCreatRow}>
                    
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


            </div>{/*end of row1*/}
            <div className = {styles.charCreatRow}>
              <ThemeProvider theme={theme}>
                  <div className = {styles.charInputRow}>
                    <TextField id="outlined-basic" label="Player Name"  variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}} onChange = {e => updateAtrribute("player name",e.target.value)}/>
                    <TextField id="outlined-basic" label="Class & Level" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}} onChange = {e => updateAtrribute("class level",e.target.value)}/>
                  </div>
                  <div className = {styles.charInputRow}> 
                    <TextField id="outlined-basic" label="Race" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}} onChange = {e => updateAtrribute("race",e.target.value)}/>
                    <TextField id="outlined-basic" label="Alignment" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px",color:"black"}} onChange = {e => updateAtrribute("alignment",e.target.value)}/>
                  </div>
              </ThemeProvider>

            </div>{/*end of row2*/} 
            <div className = {styles.charCreatRow}>
                {/*start of Stength*/}
                <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Stength</div>
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                        <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("strength",e.target.value)}/>
                        <span className={styles.abilityModifier}>{abilityScores[0].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[0].value - 10)/2))}</span>
                    </div>
                    <div className = {styles.skills}>
                        <h4 style = {{margin:"0px"}} >Skills</h4>
                        <FormControlLabel
                        control={<Checkbox style = {{color:"black"}} />}
                        label="Athletics"
                        labelPlacement="end"
                        onChange = {() => updateSkills("athletics")}
                        />  
                    </div>
                </div>
                {/*start of Dexterity*/}
                <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Dexterity</div>
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                        <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("dexterity",e.target.value)}/>
                        <span className={styles.abilityModifier}>{abilityScores[1].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[1].value - 10)/2))}</span>

                    </div>
                    <div className = {styles.skills}>
                        <h4 style = {{margin:"0px"}} >Skills</h4>
                        <FormControlLabel
                        control={<Checkbox style = {{color:"black"}} />}
                        label="Acrobatics"
                        labelPlacement="end"
                        onChange = {() => updateSkills("acrobatics")}
                        />  

                        <FormControlLabel
                        control={<Checkbox style = {{color:"black"}} />}
                        label="Aleight of Hand"
                        labelPlacement="end"
                        onChange = {() => updateSkills("sleight of hand")}
                        /> 

                        <FormControlLabel
                        control={<Checkbox style = {{color:"black"}} />}
                        label="Stealth"
                        labelPlacement="end"
                        onChange = {() => updateSkills("stealth")}
                        /> 
                    </div>
                </div>
                {/*start of constitution*/}
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Constitution</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("constitution",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[2].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[2].value - 10)/2))}</span>

                        </div>
                        <div className = {styles.skills}>
                        </div>
                </div>
                {/*start of Intelligence*/}
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Intelligence</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("intelligence",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[5].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[3].value - 10)/2))}</span>
                        </div>
                        <div className = {styles.skills}>
                            <h4 style = {{margin:"0px"}} >Skills</h4>
                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Arcana"
                            labelPlacement="end"
                            onChange = {() => updateSkills("arcana")}
                            />  

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="History"
                            labelPlacement="end"
                            onChange = {() => updateSkills("history")}
                            />  

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Investigation"
                            labelPlacement="end"
                            onChange = {() => updateSkills("investigation")}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Nature"
                            labelPlacement="end"
                            onChange = {() => updateSkills("nature")}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Religion"
                            labelPlacement="end"
                            onChange = {() => updateSkills("religion")}
                            /> 
                        </div>
                </div>
                {/*start of Wisdom*/}
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Wisdom</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("wisdom",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[4].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[4].value - 10)/2))}</span>

                        </div>
                        <div className = {styles.skills}>
                            <h4 style = {{margin:"0px"}} >Skills</h4>
                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Animal Handling"
                            labelPlacement="end"
                            onChange = {() => updateSkills("animal handling")}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Insight"
                            labelPlacement="end"
                            onChange = {() => updateSkills("insight")}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Medicine"
                            labelPlacement="end"
                            onChange = {() => updateSkills("medicine")}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Perception"
                            labelPlacement="end"
                            onChange = {() => updateSkills("perception")}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Survival"
                            labelPlacement="end"
                            onChange = {() => updateSkills("survival")}
                            /> 
                        </div>
                </div>
                {/*start of Charisma*/}
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Charisma</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" placeholder = "10" className={styles.abilityInput} onChange = {e => updateAbilityScore("charisma",e.target.value)}/>
                            <span className={styles.abilityModifier}>{abilityScores[5].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[5].value - 10)/2))}</span>
                        </div>
                        <div className = {styles.skills}>
                        <h4 style = {{margin:"0px"}} >Skills</h4>
                        <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Deception"
                            labelPlacement="end"
                            onChange = {() => updateSkills("deception")}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Intimidation"
                            labelPlacement="end"
                            onChange = {() => updateSkills("intimidation")}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Performance"
                            labelPlacement="end"
                            onChange = {() => updateSkills("performance")}
                            />

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Persuasion"
                            labelPlacement="end"
                            onChange = {() => updateSkills("persuasion")}
                            />
                        </div>
                </div>
        </div> {/*end of row3*/}
        
        <div className = {styles.charCreatCol}>
            <h2 className = {styles.rowHeader}>Equipment</h2>
            <div className = {styles.inputContainer}>
                <textarea type = "text" placeholder = "Sword Shield and Magic!" className={styles.equipInput} onChange = {e => updateAtrribute("equipement",e.target.value)}></textarea>
            </div>
        </div>{/*end of row4*/}

        <div className = {styles.charCreatCol}>
            <h2 className = {styles.rowHeader}>Personal Traits</h2>
            <div className = {styles.inputContainer}>
                <textarea type = "text" placeholder = "Dark Past and Secrative..." className={styles.equipInput} onChange = {e => updateAtrribute("personal traits",e.target.value)}></textarea>
            </div>
        </div>{/*end of row5*/}
        <div className = {styles.charCreatRow}>
            <Button variant="contained" size="large" style = {{width:"300px"}} onClick = {() => saveCharacter()}> Create Character </Button>
        </div>{/*end of row5*/}
    </div>
    </form>
        } {/*end of expanded character creater  */}


</div>
   
    );
}

export default CreateCharacter;