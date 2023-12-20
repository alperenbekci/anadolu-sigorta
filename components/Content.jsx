"use client";

import PromtCard from "./PromtCard";
import { connectWallet } from "./Wallet";

const PromtCardList = ({}) => {
  const promptData = [
    {
      title: "Anadolu Sigorta Sağlık Sigortası %1,9 İndirim",
      imageSrc: "/assets/images/gift.jpg",
      amount: "26",
    },
    {
      title: "Anadolu Sigorta Araç Sigortası %0.5 İndirim",
      imageSrc: "/assets/images/gift.jpg",
      amount: "11",
    },
    {
      title: "Hızlı Müşteri Hizmetleri (2 Hak)",
      imageSrc: "/assets/images/gift.jpg",
      amount: "5",
    },
    {
      title: "Araç Sigortası Süresi Uzatma (3 Ay)",
      imageSrc: "/assets/images/gift.jpg",
      amount: "40",
    },
    {
      title: "Trendyol 400 TL Hediye Kuponu",
      imageSrc: "/assets/images/gift.jpg",
      amount: "21",
    },
    {
      title: "  Spotify 3 Aylık Hediye Kuponu",
      imageSrc: "/assets/images/gift.jpg",
      amount: "20",
    },
  ];
  return (
    <div
      className="mt-16 prompt_layout justify-between"
      style={{ width: "1000px" }}
    >
      {promptData.map((item, index) => (
        <PromtCard
          key={index}
          title={item.title}
          imageSrc={item.imageSrc}
          amount={item.amount}
          connectWallet={connectWallet}
        />
      ))}
    </div>
  );
};

export default PromtCardList;
