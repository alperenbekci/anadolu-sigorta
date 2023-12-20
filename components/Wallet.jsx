import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import contractABI from "../getJson/MyContract.json";

export const connectWallet = async (amount) => {
  let cuzdan = amount;

  if (typeof window.ethereum !== "undefined") {
    const provider = new Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x95e450dcd79e853821c0d3c6b9293e20f0e0d4f9",
      contractABI,
      signer
    );

    try {
      await contract.transfer(
        "0x97E7f2B08a14e4C0A8Dca87fbEB1F68b397c91df",
        cuzdan
      );
    } catch (err) {
      console.log("Error: ", err);
    }
  } else {
    console.log("Connecting to...");
  }
};
