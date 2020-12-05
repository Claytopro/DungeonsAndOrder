import {ADD_CHARACTER,REMOVE_CHARACTER,EDIT_CHARACTER} from '../actionTypes'

let nextCharacterId = 0;

export const addCharacter = content => ({
    type: ADD_CHARACTER,
    payload: {
      id: ++nextCharacterId,
      content
    }
});

export const editCharacter = (id,content) => ({
  type: EDIT_CHARACTER,
  payload: {
    id:id,
    content:content
  }
});
  
export const removeCharacter = id => ({
  type: REMOVE_CHARACTER,
  payload: { id }
});