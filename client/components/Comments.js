import React from 'react';

class Comments extends React.Component{
    renderComment(comment, i){
        return (
        <div className='comment' key={i}>
            <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className='remove-comment'>&times;</button>
            </p>
        </div>
        )
    }
    render(){

        return(
            <div className='comments'>
                {this.props.postComments.map(this.renderComment)}
            </div>
        )
    }
}

export default Comments