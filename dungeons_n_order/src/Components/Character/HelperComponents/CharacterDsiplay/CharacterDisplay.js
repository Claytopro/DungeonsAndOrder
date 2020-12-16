import React from 'react';
import styles from "./CharacterDisplay.module.css";

//icons
import WreathIcon from '../../../CustomIcons/WreathIcon'
import ShieldIcon from '../../../CustomIcons/ShieldIcon'
import HeartIcon from '../../../CustomIcons/HeartIcon'
import SemiWreathIcon from '../../../CustomIcons/SemiwreathIcon'


import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

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



function CharacterDisplay(props) {
    // const [abilityScores,setAbil] = useState(props.character.content.abilityScores)
    // const [skills,setSkills] = useState(props.character.content.skills)
    // const [attributes,setAtrs] = useState(props.character.content.attributes)
    const abilityScores = props.character.content.abilityScores
    const skills = props.character.content.skills
    const attributes = props.character.content.attributes
    

    return (
        <div className = {styles.characterDisplay}>
            <div className = {styles.charCreatRow}>
                <div className = {styles.headerGroup}>
                    <div className = {styles.attribute}> 
                        <SemiWreathIcon className={styles.attributeIconPos} style = {{fontSize:"90px"}}/>
                        <input type = "text" defaultValue = {attributes[1].value} className={styles.attributeInput} />
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


            </div>{/*end of row1*/}
                <div className = {styles.headerGroup}>

                    <ThemeProvider theme={theme}>
                        <div className = {styles.charInputRow}>
                            <TextField id="outlined-basic" label="Player Name"  variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}} defaultValue={attributes[4].value} InputProps={{readOnly: true,}}/>
                            <TextField id="outlined-basic" label="Class & Level" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}} defaultValue={attributes[5].value} InputProps={{readOnly: true,}}/>
                        </div>
                        <div className = {styles.charInputRow}> 
                            <TextField id="outlined-basic" label="Race" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}} defaultValue={attributes[6].value} InputProps={{readOnly: true,}}/>
                            <TextField id="outlined-basic" label="Alignment" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px",color:"black"}} defaultValue={attributes[7].value} InputProps={{readOnly: true,}}/>
                        </div>
                    </ThemeProvider>
                        <div className = {styles.charInputRow}>
                            <h2 className = {styles.rowHeader}>Equipment</h2>
                             <textarea disabled type = "text"  className={styles.equipInput} style = {{resize: "none", overflowY:"scroll"}} defaultValue = {attributes[8].value} ></textarea>
                        </div>
                </div>{/*end of row2*/} 
            </div>

            <div className = {styles.charCreatRow}>
                {/*start of Stength*/}
                <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Stength</div>
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                        <input type = "text" defaultValue= {abilityScores[0].value} className={styles.abilityInput} />
                        <span className={styles.abilityModifier}>{abilityScores[0].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[0].value - 10)/2))}</span>
                    </div>
                    <div className = {styles.skills}>
                        <h4 style = {{margin:"0px"}} >Skills</h4>
                        <FormControlLabel
                        control={<Checkbox style = {{color:"black"}} />}
                        label="Athletics"
                        labelPlacement="end"
                        
                        checked = {skills[3].trained}
                        />  
                    </div>
                </div>
                {/*start of Dexterity*/}
                <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Dexterity</div>
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                        <input type = "text" defaultValue = {abilityScores[1].value} className={styles.abilityInput} />
                        <span className={styles.abilityModifier}>{abilityScores[1].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[1].value - 10)/2))}</span>

                    </div>
                    <div className = {styles.skills}>
                        <h4 style = {{margin:"0px"}} >Skills</h4>
                        <FormControlLabel
                        control={<Checkbox style = {{color:"black"}} />}
                        label="Acrobatics"
                        labelPlacement="end"
                        
                        checked = {skills[0].trained}
                        />  

                        <FormControlLabel
                        control={<Checkbox style = {{color:"black"}} />}
                        label="Sleight of Hand"
                        labelPlacement="end"
                        
                        checked = {skills[15].trained}
                        /> 

                        <FormControlLabel
                        control={<Checkbox style = {{color:"black"}} />}
                        label="Stealth"
                        labelPlacement="end"
                        
                        checked = {skills[16].trained}
                        /> 
                    </div>
                </div>
                {/*start of constitution*/}
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Constitution</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" defaultValue = {abilityScores[2].value}  className={styles.abilityInput} />
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
                            <input type = "text" defaultValue = {abilityScores[3].value} className={styles.abilityInput} />
                            <span className={styles.abilityModifier}>{abilityScores[3].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[3].value - 10)/2))}</span>
                        </div>
                        <div className = {styles.skills}>
                            <h4 style = {{margin:"0px"}} >Skills</h4>
                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Arcana"
                            labelPlacement="end"
                            defaultChecked
                            checked = {skills[2].trained}
                            />  

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="History"
                            labelPlacement="end"
                            defaultChecked
                            checked = {skills[5].trained}
                            />  

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Investigation"
                            labelPlacement="end"
                            checked = {skills[8].trained}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Nature"
                            labelPlacement="end"
                            checked = {skills[10].trained}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Religion"
                            labelPlacement="end"
                            checked = {skills[14].trained}
                            /> 
                        </div>
                </div>
                {/*start of Wisdom*/}
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Wisdom</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" defaultValue = {abilityScores[4].value} className={styles.abilityInput} />
                            <span className={styles.abilityModifier}>{abilityScores[4].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[4].value - 10)/2))}</span>

                        </div>
                        <div className = {styles.skills}>
                            <h4 style = {{margin:"0px"}} >Skills</h4>
                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Animal Handling"
                            labelPlacement="end"
                            checked = {skills[1].trained}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Insight"
                            labelPlacement="end"
                            checked = {skills[6].trained}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Medicine"
                            labelPlacement="end"
                            checked = {skills[9].trained}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Perception"
                            labelPlacement="end"
                            checked = {skills[11].trained}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Survival"
                            labelPlacement="end"
                            checked = {skills[17].trained}
                            /> 
                        </div>
                </div>
                {/*start of Charisma*/}
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Charisma</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"130px"}} className={styles.wreathPos} />
                            <input type = "text" defaultValue = {abilityScores[5].value} className={styles.abilityInput} />
                            <span className={styles.abilityModifier}>{abilityScores[5].value >= 10 ? "+" : " -"} {Math.abs(Math.floor(parseInt(abilityScores[5].value - 10)/2))}</span>
                        </div>
                        <div className = {styles.skills}>
                        <h4 style = {{margin:"0px"}} >Skills</h4>
                        <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Deception"
                            labelPlacement="end"
                            checked = {skills[4].trained}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Intimidation"
                            labelPlacement="end"
                            checked = {skills[7].trained}
                            /> 

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Performance"
                            labelPlacement="end"
                            checked = {skills[12].trained}
                            />

                            <FormControlLabel
                            control={<Checkbox style = {{color:"black"}} />}
                            label="Persuasion"
                            labelPlacement="end"
                            checked = {skills[13].trained}
                            />
                        </div>
                </div>
        </div> {/*end of row3*/}
        

        <div className = {styles.charCreatCol}>
            <h2 className = {styles.rowHeader}>Personal Traits</h2>
            <div className = {styles.inputContainer}>
                <textarea disabled type = "text" className={styles.equipInput} style = {{resize: "none", overflowY:"scroll"}} defaultValue={attributes[9].value} ></textarea>
            </div>
        </div>{/*end of row5*/}
        </div>
    )
}

export default CharacterDisplay

