import React from 'react';
import Photo from './photo.js';
import Comments from './Comments.js';

const Single = React.createClass({

  render(){
    const { postid } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postid);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postid] || [];
    console.log(post);

    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;
