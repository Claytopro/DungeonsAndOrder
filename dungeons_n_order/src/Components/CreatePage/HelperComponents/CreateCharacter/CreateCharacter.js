import React, { useState } from 'react';
import styles from "./CreateCharacter.module.css";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import skillList from './skillList'
//icons
import WreathIcon from '../../../CustomIcons/WreathIcon'
import ShieldIcon from '../../../CustomIcons/ShieldIcon'


const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#03157e',
        },
        secondary: {
          main: '#f44336',
        },
      },
  });


function CreateCharacter(props) {

    const [isExpand, toggleExpand] = useState(false);
  //  const [abilityScores,setAbility] = useState();
    const [skills, setSkills] = useState(skillList);

    const updateSkills = (name) => {
        let newArr = [...skills]
        newArr.forEach(index => {if(index.skill === name) index.trained = !index.trained})
        setSkills(newArr)
        console.log(skills);
    } 


    return (
        <div className= {isExpand?  styles.selectItemExpand : styles.selectItem }  onClick={() => toggleExpand(true)}>
        <h4 className= {isExpand? styles.selectItemHeaderGrow : styles.selectItemHeader}>Create Character</h4>
        
        

      {isExpand &&
        <div className = {styles.characterCreate}>
            <div className = {styles.charCreatRow}>
                    <div className = {styles.armorclass}> 
                        <ShieldIcon className={styles.shieldPos} style = {{fontSize:"80px"}}/>
                        <input type = "text" className={styles.armorInput} ></input>
                        <h5 className={styles.armorHeader} >Armor Class</h5>
                    </div>
                    
                    <div>

                    </div>

            </div>{/*end of row3*/}
            <div className = {styles.charCreatRow}>
              <ThemeProvider theme={theme}>
                  <div className = {styles.charInputRow}>
                    <TextField id="outlined-basic" label="Player Name"  variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}}/>
                    <TextField id="outlined-basic" label="Class & Level" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}}/>
                  </div>
                  <div className = {styles.charInputRow}> 
                    <TextField id="outlined-basic" label="Race" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px"}}/>
                    <TextField id="outlined-basic" label="Alignment" variant="outlined" className = {styles.charTextIn} style = {{margin: "10px",color:"black"}}/>
                  </div>
              </ThemeProvider>

            </div>{/*end of row1*/} 
            <div className = {styles.charCreatRow}>
                {/*start of Stength*/}
                <div className = {styles.charAbility}>
                    <div className = {styles.abilityHeader}>Stength</div>
                    <div className = {styles.ability}>
                        <WreathIcon style = {{fontSize:"120px"}} className={styles.wreathPos} />
                        <input type = "text" className={styles.abilityInput} ></input>
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
                        <WreathIcon style = {{fontSize:"120px"}} className={styles.wreathPos} />
                        <input type = "text" className={styles.abilityInput} ></input>
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
                            <WreathIcon style = {{fontSize:"120px"}} className={styles.wreathPos} />
                            <input type = "text" className={styles.abilityInput} ></input>
                        </div>
                        <div className = {styles.skills}>
                        </div>
                </div>
                {/*start of Intelligence*/}
                <div className = {styles.charAbility}>
                        <div className = {styles.abilityHeader}>Intelligence</div>
                        <div className = {styles.ability}>
                            <WreathIcon style = {{fontSize:"120px"}} className={styles.wreathPos} />
                            <input type = "text" className={styles.abilityInput} ></input>
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
                            <WreathIcon style = {{fontSize:"120px"}} className={styles.wreathPos} />
                            <input type = "text" className={styles.abilityInput} ></input>
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
                            <WreathIcon style = {{fontSize:"120px"}} className={styles.wreathPos} />
                            <input type = "text" className={styles.abilityInput} ></input>
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
        </div> {/*end of row2*/}


    </div>
        } {/*end of  */}
</div>

   
    );
}

export default CreateCharacter;