import {ADD_ITEM , REMOVE_ITEM,EDIT_ITEM} from '../actionTypes'


let nextItemId = 0;

export const addCharacter = content => ({
    type: ADD_ITEM,
    payload: {
      id: ++nextItemId,
      content
    }
});

export const editCharacter = (id,content) => ({
  type: EDIT_ITEM,
  payload: {
    id:id,
    content:content
  }
});
  
export const removeCharacter = id => ({
  type: REMOVE_ITEM,
  payload: { id }
});