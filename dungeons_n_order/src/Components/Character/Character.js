import React, { Component } from 'react'
import styles from './Character.module.css'
import header from './Images/create_header6.png'

import  {addCharacter,removeCharacter,editCharacter} from "../../redux/actions/characterActions";
import { connect } from "react-redux";
//helper components
import Toolbar from './HelperComponents/Toolbar/Toolbar'
import CharacterDisplay from './HelperComponents/CharacterDsiplay/CharacterDisplay'

//material ui
import Button from '@material-ui/core/Button'

class Character extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      input: "", 
      input2: "",
      selectedChar: 0,
      popUp: false,
   };
    
  }

  handleRemoveCharacter = () => {
    //this.props.removeCharacter(parseInt(this.state.input2));
    this.props.editCharacter(parseInt(this.state.input2),this.state.input);
    this.setState({ input2: "" });
  };

  selectCharacter = (index) => {
    this.setState({ selectedChar: index });
  }

  handleDelete = () => {
    this.togglePop(true)
  }

  handleEdit = () =>{
    console.log("edit");
  }

  togglePop = (bool) =>{
    this.setState({
      popUp : bool
    })
  }

  deleteSelected = () => {
    const id = this.props.characters.allCharacters[this.state.selectedChar].id
    //console.log("delete id :" + id);
    this.props.removeCharacter(id)
    this.togglePop(false)
  }

  render() {
    return (
      <div className= {styles.content}>

        <div className= {styles.header}>
          <img src = {header} alt ="header" className= {styles.headerImage}></img>
          <h1 className= {styles.headerText}>Characters</h1>
        </div>

        <div className= {styles.mainContainer}>
            <div className= {styles.main}>
              <div className= {styles.charSelector}>
              <Toolbar characters = {this.props.characters.allCharacters} handleSelect = {this.selectCharacter} handleEdit = {this.handleEdit} handleDelete = {this.handleDelete}/>
 
              <CharacterDisplay key ={this.props.characters.allCharacters[this.state.selectedChar].id} character = {this.props.characters.allCharacters[this.state.selectedChar]}/>


              {this.state.popUp &&   
                  <div className = {styles.popup}>
                      <div className = {styles.popupAnnouncement}>
                          <h4 style = {{margin: "0px"}}>Are You Sure you want to Delete: </h4>
                          <p style = {{margin: "10px"}}>{this.props.characters.allCharacters[this.state.selectedChar].content.attributes[4].value}</p>
                          <div className = {styles.popupButtons}> 
                            <Button variant="contained" size="large" style = {{width:"150px", backgroundColor: "#DF622C",fontWeight:"bold"}} onClick = {() => this.deleteSelected()}> Yes </Button>
                            <Button variant="contained" size="large" style = {{width:"150px", backgroundColor: "#DF622C",fontWeight:"bold"}} onClick = {() => this.togglePop(false)}> No </Button>
                          </div>
                      </div>
                  </div>
              }


              {/* {Object.keys(this.props.characters.allCharacters).map(key => <div> {JSON.stringify(this.props.characters.allCharacters[key])}</div>)} */}
              </div>
              {/* Main 
              <input
              onChange={e => this.updateInput(e.target.value)}
              value={this.state.input}
              />
       
      
              <input
              onChange={e => this.updateInput2(e.target.value)}
              value={this.state.input2}
              />
              <button  onClick={this.handleRemoveCharacter}>
              edit characer
              </button>

              Characters
              <br></br> */}

            </div>
        </div>
        
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    characters: state.characterReducer
  };
}
const mapDispatchToProps = {
   addCharacter,
   removeCharacter,
   editCharacter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);