import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07090f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px 90px",
          justifyContent: "space-between",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Top: brand label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{ width: "36px", height: "1px", background: "#b58f60" }}
          />
          <span
            style={{
              color: "#b58f60",
              fontSize: "11px",
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            Initial AI
          </span>
        </div>

        {/* Middle: headline */}
        <div>
          <div
            style={{
              color: "#ede8df",
              fontSize: "66px",
              fontWeight: "500",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              marginBottom: "28px",
            }}
          >
            The quality of the question
            <br />
            determines the quality
            <br />
            of the business.
          </div>
          <div
            style={{
              color: "#8a8278",
              fontSize: "18px",
              letterSpacing: "3px",
              marginTop: "8px",
            }}
          >
            Structural design for decisive leaders.
          </div>
        </div>

        {/* Bottom: corner accents */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              color: "#46423d",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Initial AI
          </span>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#b58f60",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#2a2720",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#2a2720",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
