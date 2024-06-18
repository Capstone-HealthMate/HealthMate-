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
    <main className="py-10">
      <section className="flex w-full gap-10 overflow-x-auto rounded-xl">
        {articles.slice(0, 4).map((article) => (
          <BannerCard key={article.id} {...article} />
        ))}
      </section>

      <TextHeader>Our Article</TextHeader>

      <section className="px-[25px] flex flex-col gap-6 lg:flex-row lg:px-[74px]">
        <div className="w-full lg:w-2/3">
          {articles
            .filter((article) => article.category === "diet")
            .slice(0, 1)
            .map((article, index) => (
              <div key={index} className="w-full h-auto">
                <div className="w-full h-[231px] lg:h-[331px] rounded-xl overflow-hidden">
                  <img
                    src={`${baseUrl}/uploads/${article.image}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-black font-medium text-[32px] mt-4">
                  {article.title}
                </h2>
                <p className="text-black">
                  {article.content.substring(0, 400)}...
                </p>
                <div className="flex flex-col items-start gap-3 mt-6 lg:items-center lg:flex-row">
                  <div className="flex items-center gap-2 w-fit">
                    <Avatar name={article.User.username} />
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-black">
                        {article.User.username}
                      </label>
                      <span className="text-xs text-black">
                        {formatDate(article.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={`/article/${article.id}`}>
                  <Button className="gap-2 px-4 py-3 font-normal lg:ml-auto w-fit bg-black text-white justify-end">
                    View <img src="/arrow-right.svg" alt="" />
                  </Button>
                </Link>
              </div>
            ))}
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {articles
            .filter((article) => article.category === "diet")
            .slice(1, 4)
            .map((article, index) => (
              <Link to={`/article/${article.id}`}>
              <div key={index} className="flex gap-4">
                <div className="w-1/3 h-[100px] rounded-xl overflow-hidden">
                  <img
                    src={`${baseUrl}/uploads/${article.image}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between">
                  <h3 className="text-black font-medium text-[18px]">
                    {article.title}
                  </h3>
                  <p className="text-black text-sm">
                    {article.content.substring(0, 100)}...
                  </p>
                  <div className="flex items-center gap-2 w-fit">
                    <Avatar name={article.User.username} size="small" />
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-black">
                        {article.User.username}
                      </label>
                      <span className="text-xs text-black">
                        {formatDate(article.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
