import React, { Component } from 'react'
import  {addCharacter,removeCharacter} from "../../redux/actions";
import { connect } from "react-redux";

class Character extends Component {

  constructor(props) {
    super(props);
    this.state = { input: "" };
    
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddCharacter = () => {
    this.props.addCharacter(this.state.input);
    this.setState({ input: "" });
    console.log(this.props.characters.allCharacters);
  };

  render() {
    return (
      <div className="">
          <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
      <button  onClick={this.handleAddCharacter}>
          Add carac
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
   removeCharacter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);