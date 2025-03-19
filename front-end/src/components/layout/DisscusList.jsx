import DisscusItem from "../atom/DisscusItem";

export default function DisscusList({ disscus }) {
  return (
    <div className="flex flex-col gap-y-4">
      {disscus.map((item) => (
        <DisscusItem
          key={item.id}
          content={item.content}
          createdAt={item.createdAt}
          discussCount={item.commentCount}
          id={item.id}
          isLikedCurrentUser={item.isLikedByCurrentUser}
          likeCount={item.likeCount}
          owner={item.User.username}
        />
      ))}
    </div>
  );
}
