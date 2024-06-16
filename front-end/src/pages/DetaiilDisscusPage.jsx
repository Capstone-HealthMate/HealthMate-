import { useParams } from "react-router";
import DisscusDetail from "../components/layout/DisscusDetail";
import CommentList from "../components/layout/CommentList";
import { useEffect, useState } from "react";
import baseUrl from "../utils/config";
import Navbar from "../components/atom/Navbar";
import Footer from "../components/atom/Footer";

export default function DetaiilDisscusPage() {
  const { id } = useParams();
  const [currentDiscussion, setCurrentDiscussion] = useState();
  const [commentList, setCommentList] = useState();
  const [input, setInput] = useState("");

  const getCurrentDiscussion = async () => {
    const response = await fetch(`${baseUrl}/posts/${id}`, {
      method: "GET",
      credentials: "include",
    });

    const parsed = await response.json();
    setCurrentDiscussion(parsed);
  };

  const getCurrentComments = async () => {
    const response = await fetch(`${baseUrl}/comments/${id}`, {
      method: "GET",
    });

    const parsed = await response.json();
    setCommentList(parsed);
  };

  const createComments = async () => {
    const response = await fetch(`${baseUrl}/comments/${id}`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        content: input,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const parsed = await response.json();

    setCommentList([...commentList, parsed.comment]);
    setInput("");
    await getCurrentDiscussion();
  };

  useEffect(() => {
    getCurrentDiscussion();
    getCurrentComments();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="px-10 pb-40">
        {currentDiscussion ? (
          <DisscusDetail detailDisscus={currentDiscussion} />
        ) : (
          <h1>Discussion not found</h1>
        )}

        <h2 className="text-xl font-semibold">Comments</h2>
        {commentList && (
          <div className="flex-col px-6">
            <CommentList comments={commentList}></CommentList>
          </div>
        )}
        <div className="fixed flex items-center gap-4 left-10 bottom-10">
          <input
            type="text"
            placeholder="Type here"
            className="w-full max-w-xs input input-bordered"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={createComments}>
            Send
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
