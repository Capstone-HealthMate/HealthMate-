// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from '../components/atom/Navbar';
import Hero from '../components/atom/Hero';
import Footer from '../components/atom/Footer';
import CardLayout from '../components/layout/CardLayout';
import Homebanner from '../components/layout/homebanner';
import baseUrl from "../utils/config"; // Pastikan ini adalah URL dasar API Anda

function HomePage() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const response = await fetch(`${baseUrl}/articles`, {
      method: "GET",
      credentials: "include",
    });

    const parsed = await response.json();
    setArticles(parsed);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <section className="HomePage">
      <Navbar/>
      <Hero/>
      <CardLayout/>
      <Homebanner articles={articles}/>
      <Footer/>
    </section>
  );
}

export default HomePage;
