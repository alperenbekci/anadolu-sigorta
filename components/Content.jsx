"use client";
import Image from "next/image";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import contractABI from "../getJson/MyContract.json";

const PromtCardList = ({}) => {
  let cuzdan = 0;
  const connectWallet = async (amount) => {
    cuzdan = amount;
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
      console.log("Connecting to");
      K;
    }
  };

  return (
    <div
      className="mt-16 prompt_layout justify-between"
      style={{ width: "1000px" }}
    >
      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
          width: "300px",
          marginBottom: "30px",
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
                Anadolu Sigorta Sağlık Sigortası %1,9 İndirim
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  26 ANDL
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
            onClick={() => connectWallet("26")}
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

      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
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
                Anadolu Sigorta Araç Sigortası %0.5 İndirim
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  11 ANDL
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
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => connectWallet("11")}
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

      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
          width: "300px",
          marginRight: "10px",
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
                Hızlı Müşteri Hizmetleri (2 Hak)
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  5 ANDL
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
            onClick={() => connectWallet("5")}
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

      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
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
                Araç Sigortası Süresi Uzatma (3 Ay)
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  13 ANDL
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
            onClick={() => connectWallet("13")}
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

      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
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
                Trendyol 400 TL Hediye Kuponu
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  14 ANDL
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
            onClick={() => connectWallet("14")}
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
      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
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
                Spotify 3 Aylık Hediye Kuponu
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  17 ANDL
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
            onClick={() => connectWallet("17")}
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

      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
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
                Netflix Hediye Kartı
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  19 ANDL
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
            onClick={() => connectWallet("19")}
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
      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
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
                BeIn Sports Hediye Kartı
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  26 ANDL
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
            onClick={() => connectWallet("26")}
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

      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
          marginRight: "10px",
          width: "300px",
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
                BluTV Hediye Kartı
              </h2>
              <Image
                src="/assets/images/gift.jpg"
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
                  47 ANDL
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
            onClick={() => connectWallet("47")}
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
    </div>
  );
};

const Feed = () => {
  return (
    <section className="feed product_feed">
      <PromtCardList />
    </section>
  );
};

export default Feed;
