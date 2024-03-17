import Link from "next/link";

const CommentList = ({ comment }) => {
  return (
    <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="comment-card rounded-md border border-color-dark-300 hover:scale-105 transition-all h-fit">
      <div className="bg-color-primary p-2 rounded-t-md transition-all">
        <h3 className="text-lg font-bold">{comment.anime_title}</h3>
      </div>
      <p className="text-lg h-full text-color-light-200 rounded-b-md bg-color-dark-200 py-2 px-2 transition-all">{comment.comment}</p>
    </Link>
  );
};

export default CommentList;
