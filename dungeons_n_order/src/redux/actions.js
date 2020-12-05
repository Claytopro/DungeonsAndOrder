import {ADD_CHARACTER,REMOVE_CHARACTER} from './actionTypes'

let nextCharacterId = 0;

export const addCharacter = content => ({
    type: ADD_CHARACTER,
    payload: {
      id: ++nextCharacterId,
      content
    }
});

  
  export const removeCharacter = id => ({
    type: REMOVE_CHARACTER,
    payload: { id }
  });