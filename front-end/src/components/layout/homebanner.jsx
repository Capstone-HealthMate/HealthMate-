import BannerCard from "../atom/banner-card";
import Button from "../atom/button";
import Heading from "../atom/heading";
import baseUrl from "../../utils/config";
import Avatar from "../atom/Avatar";
import { Link } from "react-router-dom";

export default function Homebanner({ articles }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <main className="py-10">
      <section className="flex w-full gap-10 overflow-x-auto rounded-xl">
        {articles.map((article) => (
          <BannerCard key={article.id} {...article} />
        ))}
      </section>
      <Heading className="text-center py-[38px] text-black">
        Tertarik untuk memulai diet sehat? Jelajahi berbagai caranya disini!
      </Heading>
      <section className="px-[25px] flex flex-col gap-6 lg:flex-row lg:px-[74px]">
        {/* Artikel ke-1 */}
        {articles[0]?.category === "Diet" && (
          <div className="w-full h-auto lg:w-1/2">
            <div className="w-full h-[231px] lg:h-[331px] rounded-xl overflow-hidden">
              <img
                src={`${baseUrl}/uploads/${articles[0].image}`}
                alt=""
                className="w-full h-full"
              />
            </div>
            <h2 className="text-black font-medium text-[32px] mt-4">
              {articles[0].title}
            </h2>
            <p className="text-black">{articles[0].content}</p>
            <div className="flex flex-col items-start gap-3 mt-6 lg:items-center lg:flex-row">
              <div className="flex items-center gap-2 w-fit">
                <Avatar name={articles[0].User.username} />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-black">
                    {articles[0].User.username}
                  </label>
                  <span className="text-xs text-black">
                    {formatDate(articles[0].createdAt)}
                  </span>
                </div>
              </div>
            </div>
            <Link to={`/article/${articles[0].id}`}>
              <Button className="gap-2 px-4 py-3 font-normal lg:ml-auto w-fit bg-black text-white justify-end">
                View <img src="/arrow-right.svg" alt="" />
              </Button>
            </Link>
          </div>
        )}

        {/* Artikel ke-2 */}
        {articles[1]?.category === "Diet" && (
          <div className="w-full h-auto flex flex-col gap-6 lg:w-1/2">
            <div className="flex flex-col gap-6 items-center w-full h-auto lg:flex lg:flex-row lg:gap-6">
              <div className="w-full h-[231px] lg:w-[256px] lg:flex-shrink-0 lg:h-[251px] rounded-xl overflow-hidden">
                <img
                  src={`${baseUrl}/uploads/${articles[1].image}`}
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="lg:w-auto">
                <h2 className="text-2xl text-black lg:mt-0">
                  {articles[1].title}
                </h2>
                <p className="text-black">{articles[1].content}</p>
                <div className="flex items-center gap-2 mt-6 w-fit">
                  <Avatar name={articles[1].User.username} />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-black">
                      {articles[1].User.username}
                    </label>
                    <span className="text-xs text-black">
                      {formatDate(articles[1].createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Artikel ke-3 */}
        {articles[2]?.category === "Diet" && (
          <div className="w-full h-auto flex flex-col gap-6 items-center w-full h-auto lg:flex lg:flex-row lg:gap-6">
            <div className="w-full h-[231px] lg:w-[256px] lg:flex-shrink-0 lg:h-[251px] rounded-xl overflow-hidden">
              <img
                src={`${baseUrl}/uploads/${articles[2].image}`}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="lg:w-auto">
              <h2 className="text-2xl text-black lg:mt-0">
                {articles[2].title}
              </h2>
              <p className="text-black">{articles[2].content}</p>
              <div className="flex items-center gap-2 mt-6 w-fit">
                <Avatar name={articles[2].User.username} />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-black">
                    {articles[2].User.username}
                  </label>
                  <span className="text-xs text-black">
                    {formatDate(articles[2].createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
