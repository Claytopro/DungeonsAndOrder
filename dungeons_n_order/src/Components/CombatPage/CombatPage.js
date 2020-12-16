import React, { Component } from 'react'
import { connect } from "react-redux";
import styles from './Combat.module.css'
import header from './Images/create_header4.png'

//help components
import CombatToolbar from './HelpComponents/CombatToolBar/CombatToolBar'
import MonsterToken from './HelpComponents/MonsterToken/MonsterToken.js'
import CharacterToken from './HelpComponents/CharacterToken/CharacterToken'

class CombatPage extends Component {

  constructor(props){
    super(props)
    this.state = { 
      selectedChar: 0,
      selectedMob:0,
      characters : this.props.characters.allCharacters,
      monsters : this.props.monsters.allMonsters,
      charTokens : [],
      monsterTokens : [],
    };
  }

  selectCharToken = (id) => {
    console.log("add token id:" + id);
    this.setState({selectedChar:id})
  }

  selectMobToken = (id) => {
    console.log("add mob Token id:" + id);
    this.setState({selectedMob:id})
  }

  addMonsterToken = () => {
    const id = parseInt(this.state.selectedMob)
    //console.log(id);
    this.state.monsters.forEach(element => {
      if(element.id === id){
          this.setState({monsterTokens: [...this.state.monsterTokens,element]})
        }
    });
    
  }

  addCharacterToken = () => {
    const id = parseInt(this.state.selectedChar)
    console.log(id);
    this.state.characters.forEach(element => {
      if(element.id === id){
          this.setState({charTokens: [...this.state.charTokens,element]})
        }
    });
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
              />

              <div className= {styles.combatContainer}>
                <div className= {styles.combatContainer}>
                  {this.state.monsterTokens.map((e ,index) => {
                    return( <MonsterToken key = {index} monster = {e.content}/> )
                  })}
                  {this.state.charTokens.map((e ,index) => {
                    return( <CharacterToken key = {index} character = {e.content}/> )
                  })}

                </div>

                <div className= {styles.helperContainer}>

                </div>
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