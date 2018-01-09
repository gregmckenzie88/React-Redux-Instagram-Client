//increment
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comments
export function addComment(postid, author, comment){
  return {
    type: 'ADD_COMMENT',
    postid,
    author,
    comment
  }
}

//remove comment

export function removeComment(postid, index){
  return {
    type: 'REMOVE_COMMENT',
    index,
    postid
  }
}
