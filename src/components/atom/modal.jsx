import { useState } from "react";
import baseUrl from "../../utils/config";
import { toast } from "sonner";
import categories from "../../utils/category";

export default function Modal({ refetch }) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("healthy");

  const postHandler = async () => {
    const response = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      body: JSON.stringify({
        content: input,
        tag: category,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const resp = await response.json();
      toast.error(resp.error);
      return;
    }

    const res = await response.json();
    toast.success(res.message);
    setInput("");
    setCategory("healthy");
    refetch();
    document.getElementById("my_modal_3").close();
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Create new discussion</h3>
        <form method="dialog" className="flex flex-col w-full gap-3">
          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </button>
          <span className="font-semibold">Category</span>
          <select
            className="w-full max-w-xs capitalize select select-bordered"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category} className="capitalize">
                {category}
              </option>
            ))}
          </select>
          <span className="font-semibold">Content</span>
          <textarea
            className="flex-1 textarea textarea-bordered"
            placeholder="Bio"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </form>
        <button
          className="w-full mt-3 btn btn-secondary"
          disabled={input.length === 0}
          onClick={postHandler}
        >
          Post
        </button>
      </div>
    </dialog>
  );
}
