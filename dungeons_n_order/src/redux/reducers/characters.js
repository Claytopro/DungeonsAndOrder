import {ADD_CHARACTER , REMOVE_CHARACTER} from '../actionTypes'

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

          default: {
              return state
          }
        }
            
  };


  export default characterReducer;