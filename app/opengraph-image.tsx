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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f0eb",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
            padding: 80,
          }}
        >
          <img
            src={`${baseUrl}/favicon.svg`}
            width={200}
            height={200}
            alt=""
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 600,
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#4a4035",
                lineHeight: 1.2,
              }}
            >
              Pozzatto y Pezzutti Asociados
            </div>
            <div
              style={{
                fontSize: 32,
                color: "#87734d",
                fontWeight: 600,
              }}
            >
              Estudio Jurídico en Mendoza
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#6b5d4f",
                marginTop: 8,
              }}
            >
              Asesoramiento en derecho societario, laboral, MASC, ejecuciones, contratos e inmobiliario.
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
