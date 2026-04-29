"use client";
import StudyCTAButton from "@/components/StudyCTAButton";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  variant?: "rojo" | "ambar" | "dark";
}

export default function CTABanner({
  title = "¿Cuánto podrías ahorrar?",
  subtitle = "Hacemos un estudio personalizado de tu factura — sin permanencia, sin coste y sin complicaciones.",
  variant = "rojo",
}: CTABannerProps) {
  const backgrounds: Record<string, string> = {
    rojo: "linear-gradient(135deg, #C62828 0%, #8B1A1A 100%)",
    ambar: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    dark: "linear-gradient(135deg, #1A0505 0%, #2D0A0A 100%)",
  };

  return (
    <section
      style={{
        background: backgrounds[variant],
        padding: "4.5rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decoración de fondo */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <span
          className="badge"
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "white",
            marginBottom: "1.25rem",
          }}
        >
          Sin permanencia · Sin coste · Sin complicaciones
        </span>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "white",
            marginBottom: "1rem",
            maxWidth: "640px",
            margin: "0 auto 1rem",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.05rem",
            maxWidth: "500px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.875rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StudyCTAButton
            id="cta-banner-estudio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "white",
              color: "#C62828",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              padding: "0.9rem 2rem",
              borderRadius: "9999px",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <img 
              src="/favicon.svg" 
              alt="" 
              style={{ width: "18px", height: "18px", objectFit: "contain", filter: "brightness(0) invert(1)" }} 
            />
            Pide tu estudio gratis
          </StudyCTAButton>
          <a
            href="https://wa.me/34610396208?text=Hola%2C%20quiero%20que%20me%20contact%C3%A9is"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-banner-llamada"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: "white",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              padding: "0.9rem 2rem",
              borderRadius: "9999px",
              border: "2px solid rgba(255,255,255,0.6)",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.49 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
            </svg>
            Te contactaremos
          </a>
        </div>
      </div>
    </section>
  );
}
