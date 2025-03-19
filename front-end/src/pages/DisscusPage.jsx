import DisscusList from "../components/layout/DisscusList";
import InputDisscus from "../components/atom/InputDisscus";
import Navbar from "../components/atom/Navbar";
import Footer from "../components/atom/Footer.jsx";
import baseUrl from "../utils/config.js";
import { useEffect, useMemo, useState } from "react";
import Modal from "../components/atom/modal.jsx";
import debounce from "lodash.debounce";
import categories from "../utils/category.js";
import { cn } from "../utils/cn.js";

export default function DisscusPage() {
  const [allDiscussions, setAllDiscussions] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState({
    query: "",
    tag: "",
  });

  const getAllDiscussions = async () => {
    const response = await fetch(`${baseUrl}/posts`, {
      method: "GET",
      credentials: "include",
    });

    const parsed = await response.json();
    setAllDiscussions(parsed);
  };

  const auth = async () => {
    const response = await fetch(`${baseUrl}/auth`, {
      method: "GET",
      credentials: "include",
    });
    const parsed = await response.json();
    setUser(parsed);
  };

  const searchHandle = async () => {
    let query = `search?content=${search.query}`;
    if (search.tag.length > 0) {
      query += `&tag=${search.tag}`;
    }

    const response = await fetch(`${baseUrl}/posts/${query}`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      getAllDiscussions();
    }

    const parsed = await response.json();
    setAllDiscussions(parsed);
  };

  const tagHandler = (tag) => {
    if (tag === search.tag) {
      setSearch({ ...search, tag: "" });
    } else {
      setSearch({ ...search, tag: tag });
    }
  };

  useEffect(() => {
    auth();
    getAllDiscussions();
  }, []);

  const debouncedResults = useMemo(() => {
    return debounce(searchHandle, 300);
  }, [search.query, search.tag]);

  useEffect(() => {
    debouncedResults();

    return () => {
      debouncedResults.cancel();
    };
  }, [search.query, search.tag]);

  return (
    <>
      <Modal refetch={getAllDiscussions} />
      <Navbar />
      <div className="flex flex-col lg:flex-row w-full">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 h-full p-4 border max-h-fit">
          {user && (
            <button
              disabled={!user.authenticated}
              className="w-full mb-4 btn btn-secondary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Add Discuss +
            </button>
          )}
          <div className="mt-4">
            <h3 className="mb-2 text-lg font-semibold">Filter Discuss</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={cn(
                    category === search.tag && "border-2 bg-gradient-to-br from-blue-400 to-blue-600 text-white",
                    "w-full capitalize btn border"
                  )}
                  onClick={() => tagHandler(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full lg:w-4/5 p-8 flex flex-col gap-y-6">
          {/* Discussion input */}
          <InputDisscus onChange={(e) => setSearch({ ...search, query: e })} />

          {/* Discussion list */}
          {allDiscussions && allDiscussions.length > 0 && (
            <DisscusList disscus={allDiscussions} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
