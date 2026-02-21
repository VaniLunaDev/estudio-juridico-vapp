import { ImageResponse } from "next/og"

export const alt = "Pozzatto y Pezzutti Asociados - Estudio Jurídico en Mendoza"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.estudiojuridicointegralvapp.com.ar")

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#F2EBE3",
          padding: "50px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "#e0cabd",
            borderRadius: "32px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", width: "20px", height: "100%", backgroundColor: "#B49A78" }} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 80px",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                color: "#B49A78",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "4px",
                marginBottom: "20px",
              }}
            >
              Estudio Jurídico • Mendoza
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "72px",
                fontWeight: "bold",
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "30px",
              }}
            >
              <span style={{ color: "#252015" }}>Pozzatto & Pezzutti</span>
              <span style={{ color: "#B49A78" }}>Asociados</span>
            </div>

            <div style={{ display: "flex", width: "80px", height: "4px", backgroundColor: "#B49A78", marginBottom: "30px" }} />

            <div
              style={{
                display: "flex",
                fontSize: "28px",
                color: "#252015",
                maxWidth: "700px",
                lineHeight: 1.4,
                fontStyle: "italic"
              }}
            >
              &quot;Excelencia legal con un toque personal&quot;
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: "60px",
              bottom: "60px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div style={{
              display: "flex",
              color: "#B49A78",
              fontSize: "24px",
              fontWeight: "bold",
              border: "1px solid #B49A78",
              padding: "2px 8px",
              borderRadius: "4px"
            }}>
              VA
            </div>
            <div style={{ display: "flex", width: "1px", height: "30px", backgroundColor: "#B49A78", opacity: 0.5 }} />
            <div style={{ display: "flex", color: "#FFFFFF", fontSize: "14px", letterSpacing: "2px", opacity: 0.8 }}>
              SOLUCIONES INTEGRALES
            </div>
          </div>

          <div style={{ display: "none" }}>{baseUrl}</div>
        </div>
      </div>
    ),
    { ...size }
  )
}