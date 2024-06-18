import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import baseUrl from "../../utils/config"; 
import { toast } from "sonner";

const ArticleInput = () => {
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    image: null,
    time: "",
    category: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [editArticleId, setEditArticleId] = useState(null);
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${baseUrl}/articles/user`, {
        withCredentials: true,
      });
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("content", articleData.content);
    formData.append("image", articleData.image);
    formData.append("time", articleData.time);
    formData.append("category", articleData.category);

    try {
      let response;
      if (!editMode) {
        response = await axios.post(`${baseUrl}/articles`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
      } else {
        response = await axios.put(
          `${baseUrl}/articles/${editArticleId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
      }

      toast.success(response.data.message);
      setArticleData({
        title: "",
        content: "",
        image: null,
        time: "",
        category: "",
      });
      setEditMode(false);
      setEditArticleId(null);
      fetchArticles();
    } catch (error) {
      console.error("Error submitting article:", error);
      toast.error(error.response.data.error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArticleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setArticleData((prevData) => ({
      ...prevData,
      image: event.target.files[0],
    }));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/articles/${id}`, {
        withCredentials: true,
      });
      setArticles(articles.filter((article) => article.id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const prepareEdit = (article) => {
    setArticleData({
      title: article.title,
      content: article.content,
      image: article.image,
      time: article.time,
      category: article.category,
    });
    setEditArticleId(article.id);
    setEditMode(true);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Add New Article</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={articleData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <textarea
              name="content"
              placeholder="Content"
              value={articleData.content}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {editMode && articleData.image && (
            <div>
              <img
                src={`${baseUrl}/${articleData.image}`}
                alt="Article"
                className="w-32 h-32 object-cover mb-4"
              />
            </div>
          )}
          <div>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              required={!editMode}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="time"
              placeholder="Time in minutes"
              value={articleData.time}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <select
              name="category"
              value={articleData.category}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Category</option>
              <option value="Western">Western</option>
              <option value="Asian">Asian</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="French">French</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Article List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">No.</th>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Content</th>
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Time</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr
                key={article.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{article.title}</td>
                <td className="px-4 py-2 border-b">{article.content}</td>
                <td className="px-4 py-2 border-b">
                  <img
                    src={`${baseUrl}/uploads/${article.image}`}
                    alt={article.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2 border-b">{article.time}</td>
                <td className="px-4 py-2 border-b">{article.category}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => prepareEdit(article)}
                    className="text-blue-500 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ArticleInput;
