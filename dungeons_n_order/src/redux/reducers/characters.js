import {ADD_CHARACTER , REMOVE_CHARACTER,EDIT_CHARACTER} from '../actionTypes'

const initialState = {
    allCharacters: [],  
  };
  
  const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER: {
          const { id, content } = action.payload;
          return {...state, allCharacters: [...state.allCharacters, {id,content}]}
          }

        case REMOVE_CHARACTER:{
          const { id } = action.payload;
          return {...state, allCharacters: state.allCharacters.filter(character => character.id !== id) }
        } 

        case EDIT_CHARACTER: {
          const { id, content } = action.payload;
          return {...state, allCharacters:  state.allCharacters.map((character) => {
            if(character.id === id){
              character.content = content
            }
            return character
          })}
          }

        default: {
            return state
        }
        }
            
  };


  export default characterReducer;