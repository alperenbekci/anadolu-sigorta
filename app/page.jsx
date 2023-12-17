"use client";
import Content from "@components/Content";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Anadolu Sigorta Sadakat Programı
        <br className="max-md:hidden" />
        <br></br>
        <span className="blue_gradient" style={{ fontSize: 45 }}>
          Ödül Merkezi
        </span>
      </h1>
      <Content />
    </section>
  );
};

export default Home;
