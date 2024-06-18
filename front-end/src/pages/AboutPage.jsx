import React from "react";
import TextHeader from "../components/atom/TextHeader";
import Navbar from "../components/atom/Navbar";
import imageAbout from './../assets/images/about.png'
export default function AboutPage() {
  return (
    <>
    <Navbar></Navbar>
    <section id="about" className="flex flex-col w-full py-12 px-8">
      <TextHeader>Our Story</TextHeader>
      <div className="flex flex-col justify-center items-center mt-10">
       <img src={imageAbout} className="w-full max-w-4xl" alt="" />
        <p className="max-w-3xl mt-4 text-balck">
          HealthMate adalah platform kesehatan yang inovatif yang bertujuan untuk
          mengubah cara Anda menjalani hidup lebih sehat. Didirikan atas keyakinan
          bahwa kesehatan adalah aset berharga, HealthMate menyediakan berbagai
          alat dan sumber daya yang memungkinkan Anda untuk mengelola dan
          meningkatkan kesehatan secara holistik.
        </p>
        <p className="max-w-3xl mt-4">
          Dengan HealthMate, Anda tidak hanya mendapatkan akses ke kalkulator
          kesehatan yang canggih dan terbaru, tetapi juga ke berbagai artikel
          ilmiah dan praktis tentang topik kesehatan terkini. Kami menyediakan
          platform untuk berdiskusi dengan komunitas yang peduli tentang kesehatan,
          tempat Anda dapat berbagi pengalaman, tips, dan motivasi untuk mencapai
          tujuan kesehatan Anda.
        </p>
        <p className="max-w-3xl mt-4">
          Kami memahami bahwa setiap individu memiliki kebutuhan kesehatan yang
          unik. Oleh karena itu, HealthMate dirancang untuk menjadi teman setia
          Anda dalam perjalanan menuju gaya hidup yang lebih sehat. Dengan integrasi
          teknologi terkini dan prinsip-prinsip kesehatan yang terbukti, kami
          membantu Anda membuat keputusan yang lebih baik dan berkelanjutan untuk
          kesehatan Anda.
        </p>
        <p className="max-w-3xl mt-4">
          Sebagai bagian dari komitmen kami untuk mendidik dan memberdayakan,
          HealthMate juga menawarkan sumber daya edukasi yang dapat membantu Anda
          memahami lebih dalam tentang kondisi kesehatan dan bagaimana cara
          menjaga kesehatan secara preventif. Kami percaya bahwa dengan pengetahuan
          yang tepat dan dukungan yang sesuai, setiap individu memiliki potensi
          untuk hidup lebih lama dan lebih sehat.
        </p>
      </div>
    </section>
    </>
  );
}
