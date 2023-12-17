"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ethers, formatEther } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import contractABI from "../getJson/MyContract.json";

const Nav = () => {
  const [user, setUser] = useState("");
  const [userBalance, setuserBalance] = useState(0);

  const findUser = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setUser(accounts[0]);
  };

  const findBalance = async () => {
    try {
      const provider = new Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        "0x95e450dcd79e853821c0d3c6b9293e20f0e0d4f9",
        contractABI,
        provider
      );
      const balance = await contract.balanceOf(user);
      setuserBalance(formatEther(balance));
    } catch (e) {}
  };
  const initialize = async () => {
    await findUser();
    await findBalance();
  };
  initialize();

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 items-center">
        <h1 className="text-2xl font-black">ANADOLU SİGORTA SADAKAT</h1>
      </Link>
      <section>
        <span style={{ fontSize: 20 }}>
          {" "}
          <span style={{ fontSize: 20, fontWeight: "bold" }}>
            Account:{" "}
          </span>{" "}
          {user.substring(0, 10) + "..."}
        </span>
        <br />
        <span style={{ fontSize: 20 }}>
          {" "}
          <span style={{ fontSize: 20, fontWeight: "bold" }}>
            Amount:{" "}
          </span>{" "}
          {userBalance + " ANDL"}
        </span>
      </section>
    </nav>
  );
};

export default Nav;
