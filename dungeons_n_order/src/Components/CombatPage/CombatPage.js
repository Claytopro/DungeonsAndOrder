import React, { Component } from 'react'
import { connect } from "react-redux";
import styles from './Combat.module.css'
import header from './Images/create_header4.png'
import _ from 'lodash'
//used to create dummies
import abilityList from '../CreatePage/HelperComponents/CreateCharacter/abilityList'
import monsterAttributes from '../CreatePage/HelperComponents/CreateMonster/monsterAttributes'
import charAttributes from '../CreatePage/HelperComponents/CreateCharacter/attributeList'

//help components
import CombatToolbar from './HelpComponents/CombatToolBar/CombatToolBar'
import MonsterToken from './HelpComponents/MonsterToken/MonsterToken.js'
import CharacterToken from './HelpComponents/CharacterToken/CharacterToken'
import DiceSim from './HelpComponents/DiceSim/DiceSim'


class CombatPage extends Component {

  constructor(props){
    super(props)
    this.state = { 
      selectedChar: "default",
      selectedMob:"default",
      characters : this.props.characters.allCharacters,
      monsters : this.props.monsters.allMonsters,
      charTokens : [],
      monsterTokens : [],
    };
  }

  selectCharToken = (id) => {
    //console.log("char select token id:" + id);
    this.setState({selectedChar:id})
  }

  selectMobToken = (id) => {
    console.log("add mob Token id:" + id);
    this.setState({selectedMob:id})
  }

  addMonsterToken = () => {
    if(this.state.selectedMob === "default"  ){
      let content = { attributes: _.cloneDeep(charAttributes) , 
                      actions: [] , 
                      abilityScores: _.cloneDeep(abilityList) }
      let monster = {content: content}
      this.setState({monsterTokens: [...this.state.monsterTokens,monster]})
    }else{
      const id = parseInt(this.state.selectedMob)
      //console.log(id);
      this.state.monsters.forEach(element => {
        if(element.id === id){
            this.setState({monsterTokens: [...this.state.monsterTokens,element]})
          }
      });
    }
  }

  addCharacterToken = () => {
    if(this.state.selectedChar === "default"  ){
        let content = { attributes: _.cloneDeep(monsterAttributes) , 
                        actions: [] , 
                        abilityScores: _.cloneDeep(abilityList) }
        let character = {content: content}
        this.setState({charTokens: [...this.state.charTokens,character]})
      }else{
        const id = parseInt(this.state.selectedChar)
        //console.log(id);
        this.state.characters.forEach(element => {
          if(element.id === id){
              this.setState({charTokens: [...this.state.charTokens,element]})
            }
        });
      }
  }

  reset = () => {
    this.setState({
      charTokens: [],
      monsterTokens: []
    })
  }



  render() {
    return (
      <div className= {styles.content}>
        <div className= {styles.header}>
        <img src = {header} alt ="header" className= {styles.headerImage}></img>
        <h1 className= {styles.headerText}>Combat</h1>
        </div>

        <div className= {styles.mainContainer}>
            <div className= {styles.main}>
              <CombatToolbar 
                characters = {this.state.characters} 
                monsters = {this.state.monsters}
                selectChar = {this.selectCharToken}
                selectMob = {this.selectMobToken}
                addMob = {this.addMonsterToken}
                addChar = {this.addCharacterToken}
                reset = {this.reset}
              />

              <div className= {styles.combatContainer}>
                <div className= {styles.tokenContainer}>
                  {this.state.monsterTokens.map((e ,index) => {
                    return( <MonsterToken key = {index} monster = {e.content}/> )
                  })}
                  {this.state.charTokens.map((e ,index) => {
                    return( <CharacterToken key = {index} character = {e.content}/> )
                  })}

                </div>
              </div> 

              <div className= {styles.helperContainer}>
                  <DiceSim/>
              </div>

            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    characters: state.characterReducer,
    monsters:state.monsterReducer,
  };
}

export default connect(
  mapStateToProps,
)(CombatPage);