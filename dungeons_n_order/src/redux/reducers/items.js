import {ADD_ITEM , REMOVE_ITEM,EDIT_ITEM} from '../actionTypes'


const initialState = {
    allItems: [],  
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
          const { id, content } = action.payload;
          return {...state, allItems: [...state.allItems, {id,content}]}
          }

        case REMOVE_ITEM:{
          const { id } = action.payload;
          return {...state, allItems: state.allItems.filter(item => item.id !== id) }
        } 

        case EDIT_ITEM: {
          const { id, content } = action.payload;
          return {...state, allItems:  state.allItems.map((item) => {
            if(item.id === id){
              item.content = content
            }
            return item
          })}
          }

        default: {
            return state
        }
        }
            
  };


  export default itemReducer;