import {ADD_MONSTER , REMOVE_MONSTER,EDIT_MONSTER} from '../actionTypes'


let nextItemId = 0;

export const addMonster = content => ({
    type: ADD_MONSTER,
    payload: {
      id: ++nextItemId,
      content
    }
});

export const editMonster = (id,content) => ({
  type: EDIT_MONSTER,
  payload: {
    id:id,
    content:content
  }
});
  
export const removeMonster = id => ({
  type: REMOVE_MONSTER,
  payload: { id }
});