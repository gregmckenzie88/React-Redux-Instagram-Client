function postComments(state = [], action){
  switch(action.type){
    case "ADD_COMMENT":
      //return existing state plus comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case "REMOVE_COMMENT":
      console.log('removing comment');
      return [
        ...state.slice(0, action.i),

        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action){
  if(typeof action.postid !== 'undefined'){
    return {
      ...state,
      //overwrite this post with a new one
      [action.postid]: postComments(state[action.postid], action)
    }
  }
  return state
}

export default comments;
