import React, { Component } from 'react'
import styles from './Character.module.css'
import header from './Images/create_header6.png'

import  {addCharacter,removeCharacter,editCharacter} from "../../redux/actions/characterActions";
import { connect } from "react-redux";

class Character extends Component {

  constructor(props) {
    super(props);
    this.state = { input: "", input2: "" };
    
  }

  updateInput = input => {
    this.setState({ input });
  };

  updateInput2 = input2 => {
    this.setState({ input2 });
  };

  handleAddCharacter = () => {
    this.props.addCharacter(this.state.input);
    this.setState({ input: "" });
    console.log(this.props.characters.allCharacters);
  };

  handleRemoveCharacter = () => {
    //this.props.removeCharacter(parseInt(this.state.input2));
    this.props.editCharacter(parseInt(this.state.input2),this.state.input);
    this.setState({ input2: "" });
  
  };


  render() {
    return (
      <div className= {styles.content}>

        <div className= {styles.header}>
          <img src = {header} alt ="header" className= {styles.headerImage}></img>
          <h1 className= {styles.headerText}>Characters</h1>
        </div>


          <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
      <button  onClick={this.handleAddCharacter}>
          Add charac
        </button>
        <input
          onChange={e => this.updateInput2(e.target.value)}
          value={this.state.input2}
        />
        <button  onClick={this.handleRemoveCharacter}>
          edit characer
        </button>

           Characters
           <br></br>
          {Object.keys(this.props.characters.allCharacters).map(key => <div> {JSON.stringify(this.props.characters.allCharacters[key])}</div>)}
        
      
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