// a reducer takes in 2 things

//1. the action
//2. copy of the current state

function posts(state = [], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
    console.log('incrementing likes!');
    const i = action.index;
    return [
      ...state.slice(0, i), //before hte noe we're updating
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1)
    ]
    //return updated state
    default:
      return state;
  }
}

export default posts;
