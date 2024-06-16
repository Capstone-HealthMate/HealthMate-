import CommentItem from "../atom/CommentItem";

export default function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          content={comment.content}
          createdAt={comment.createdAt}
          owner={comment.User.username}
        />
      ))}
    </div>
  );
}
