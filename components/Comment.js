
const Comment = ({comment}) => (
    <div className="comment">
        <div className="comment-user">{comment.user}</div>
        <div className="comment-content" dangerouslySetInnerHTML={{__html: comment.content}}></div>
        {comment.comments && (
            <div className="nested-comments">
                {comment.comments.map( nestedComment => (
                    <Comment key={nestedComment.id} comment={nestedComment} />
                ))
                }
            </div>
        )}
    </div>
)

export default Comment;


