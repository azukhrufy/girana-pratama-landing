import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PT Girana Pratama Mandiri — Jasa Outsourcing Profesional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0B0B5E 0%, #10108A 50%, #1a1aaa 100%)",
          fontFamily: "Inter, sans-serif",
          padding: "60px",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(to right, #F05117, #10108A, #F05117)",
          }}
        />

        {/* Brand Name */}
        <div
          style={{
            display: "flex",
            fontSize: "72px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#F05117" }}>Girana</span>
          <span style={{ color: "#ffffff", marginLeft: "16px" }}>Pratama</span>
        </div>

        {/* Company Full Name */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "32px",
            letterSpacing: "2px",
          }}
        >
          PT GIRANA PRATAMA MANDIRI
        </div>

        {/* Divider */}
        <div
          style={{
            width: "120px",
            height: "4px",
            background: "#F05117",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: "1.4",
            fontWeight: "600",
          }}
        >
          Solusi Tenaga Kerja Profesional & Terpercaya untuk Bisnis Anda
        </div>

        {/* Services */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {["Marketing", "Administrasi", "Customer Service", "Operasional", "Keamanan"].map(
            (service) => (
              <div
                key={service}
                style={{
                  padding: "8px 20px",
                  borderRadius: "20px",
                  border: "1.5px solid rgba(240,81,23,0.6)",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "16px",
                }}
              >
                {service}
              </div>
            )
          )}
        </div>

        {/* Website URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          giranapratama.co.id
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
