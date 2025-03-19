import BannerCard from "../atom/banner-card";
import Button from "../atom/button";
import Heading from "../atom/heading";
import baseUrl from "../../utils/config";
import Avatar from "../atom/Avatar";
import { Link } from "react-router-dom";
import TextHeader from "../atom/TextHeader";

export default function Homebanner({ articles }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <main className="px-10 py-10">
      <div className="px-10 pb-10">
        <section className="flex w-full gap-10 overflow-x-auto rounded-xl">
          {articles.slice(0, 4).map((article) => (
            <BannerCard key={article.id} {...article} />
          ))}
        </section>
      </div>

      <div className="flex flex-col gap-y-6">
        <TextHeader>Nutritious Food Recipes</TextHeader>
        <section className="flex flex-col gap-8 lg:flex-row lg:px-[74px]">
          {/* Artikel Utama */}
          <div className="w-full lg:w-2/3">
            {articles
              .filter((article) => article.category === "diet")
              .slice(0, 1)
              .map((article, index) => (
                  <Link
                    to={`/article/${article.id}`}
                    className="mt-6 inline-block"
                  >
                <div key={index} className="w-full">
                  {/* Gambar Artikel */}
                  <div className="w-full h-[250px] lg:h-[350px] rounded-xl overflow-hidden shadow-md">
                    <img
                      src={`${baseUrl}/uploads/${article.image}`}
                      alt={article.title}
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Judul & Deskripsi */}
                  <h2 className="text-black font-semibold text-[28px] lg:text-[32px] mt-5">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-[16px] mt-2 leading-relaxed">
                    {article.content.substring(0, 250)}...
                  </p>

                  {/* Avatar & Tanggal */}
                  <div className="flex items-center gap-3 mt-5">
                    <Avatar name={article.User.username} />
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-black capitalize">
                        {article.User.username}
                      </label>
                      <span className="text-xs text-gray-500">
                        {formatDate(article.createdAt)}
                      </span>
                    </div>
                  </div>

                  {/* Tombol */}
                
                </div>

                  </Link>
              ))}
          </div>

          {/* Daftar Artikel Lainnya */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            {articles
              .filter((article) => article.category === "diet")
              .slice(1, 4)
              .map((article, index) => (
                <Link
                  to={`/article/${article.id}`}
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-gray-100"
                >
                  {/* Gambar Artikel */}
                  <div className="w-1/3 h-[90px] rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={`${baseUrl}/uploads/${article.image}`}
                      alt={article.title}
                      className="w-full h-full object-cover aspect-auto"
                    />
                  </div>

                  {/* Info Artikel */}
                  <div className="w-2/3 flex flex-col gap-2">
                    <h3 className="text-black font-semibold text-[20px] leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {article.content.substring(0, 40)}...
                    </p>

                    {/* Avatar & Tanggal */}
                    <div className="flex items-center gap-2">
                      <Avatar name={article.User.username} size="small" />
                      <div className="flex flex-col">
                        <label className="text-xs font-semibold text-black capitalize">
                          {article.User.username}
                        </label>
                        <span className="text-xs text-gray-500">
                          {formatDate(article.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
