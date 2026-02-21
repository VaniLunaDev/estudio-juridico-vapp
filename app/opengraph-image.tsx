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
            backgroundColor: "#1A1A17",
            borderRadius: "32px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Lado izquierdo: Toque de color */}
          <div style={{ width: "20px", height: "100%", backgroundColor: "#B49A78" }} />

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
                fontSize: "72px",
                fontWeight: "bold",
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "30px",
              }}
            >
              Pozzatto & Pezzutti <br />
              <span style={{ color: "#B49A78" }}>Asociados</span>
            </div>

            <div style={{ width: "80px", height: "4px", backgroundColor: "#B49A78", marginBottom: "30px" }} />

            <div
              style={{
                fontSize: "28px",
                color: "#D1D1D1",
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
              opacity: 0.8
            }}
          >
            <img
              src={`${baseUrl}/favicon.svg`}
              width="30"
              height="30"
              style={{ filter: "brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(763%) hue-rotate(3deg) brightness(91%) contrast(85%)" }}
            />
            <div style={{ width: "1px", height: "30px", backgroundColor: "#B49A78" }} />
            <div style={{ color: "#FFFFFF", fontSize: "16px", letterSpacing: "1px" }}>SOLUCIONES INTEGRALES</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}