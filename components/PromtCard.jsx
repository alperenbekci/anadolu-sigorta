// PromtCard.js

import Image from "next/image";
import { connectWallet } from "./Wallet";

const PromtCard = ({ title, imageSrc, amount }) => {
  return (
    <div
      style={{
        padding: "8px",
        backgroundColor: "white",
        borderRadius: "20px",
        marginBottom: "30px",
        marginRight: "10px",
        width: "300px",
      }}
    >
      <div style={{ padding: "10px", paddingBottom: "6px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            textAlign: "left",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#4B5563",
              }}
            >
              {title}
            </h2>
            <Image
              src={imageSrc}
              alt="Gift Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div style={{ marginTop: "6px" }}>
            <p>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "#000000",
                }}
              >
                {amount} ANDL
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: "6px",
          paddingRight: "6px",
          paddingBottom: "8px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => connectWallet(amount)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "6px",
            paddingTop: "2.5px",
            paddingBottom: "2.5px",
            textAlign: "center",
            textDecoration: "none",
            color: "white",
            transitionDuration: "0.2s",
            backgroundColor: "black",
            border: "2px solid black",
            borderRadius: "9999px",
            lineHeight: "1",
            outline: "none",
            boxShadow: "none",
            fontSize: "25px",
            transitionProperty:
              "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
          }}
        >
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default PromtCard;
