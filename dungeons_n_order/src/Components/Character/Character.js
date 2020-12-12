import React, { Component } from 'react'
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
      <div className="">
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