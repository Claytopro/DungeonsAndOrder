import {ADD_MONSTER , REMOVE_MONSTER,EDIT_MONSTER} from '../actionTypes'


const initialState = {
    allMonsters: [],  
  };
  
  const monsterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MONSTER: {
          const { id, content } = action.payload;
          return {...state, allMonsters: [...state.allMonsters, {id,content}]}
          }

        case REMOVE_MONSTER:{
          const { id } = action.payload;
          return {...state, allMonsters: state.allMonsters.filter(mob => mob.id !== id) }
        } 

        case EDIT_MONSTER: {
          const { id, content } = action.payload;
          return {...state, allMonsters:  state.allMonsters.map((mob) => {
            if(mob.id === id){
                mob.content = content
            }
            return mob
          })}
          }

        default: {
            return state
        }
        }
            
  };


  export default monsterReducer;