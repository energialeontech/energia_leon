import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Cómo funciona | Asesoría Energética León",
  description:
    "Descubre el proceso paso a paso para optimizar tu factura de luz y gas. Sencillo, rápido y sin compromiso.",
};

export default function ComoFuncionaPage() {
  const pasos = [
    {
      num: "01",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      titulo: "Comparte tu factura",
      descripcion:
        "El primer paso es enviarnos tu factura de luz o gas. Puedes hacerlo por WhatsApp, por email o subiendo el archivo directamente en nuestro formulario. Solo necesitamos la última factura.",
      detalle: [
        "Válido: PDF, foto del papel, captura de pantalla",
        "En cualquier formato que tengas",
        "Puedes enviar también por WhatsApp si prefieres",
      ],
      tiempo: "5 minutos de tu tiempo",
    },
    {
      num: "02",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      titulo: "Análisis personalizado",
      descripcion:
        "Nuestro equipo revisa en detalle tu factura: potencia contratada, tarifa actual, consumo horario y cargos fijos. Comparamos con más de 20 comercializadoras para encontrar la mejor opción. Este estudio es 100% gratuito y no te compromete a nada.",
      detalle: [
        "🎯 100% Sin compromiso ni costes ocultos",
        "Análisis de todos los conceptos de tu factura",
        "Comparativa entre las principales comercializadoras",
        "Detectamos potencias sobrecontratadas",
        "Evaluación de tarifa horaria más favorable",
      ],
      tiempo: "Menos de 24h · GRATIS",
    },
    {
      num: "03",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.49 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
        </svg>
      ),
      titulo: "Te presentamos el ahorro",
      descripcion:
        "Te contactamos (de la forma que desees: Llamada, WhatsApp, Email...) para explicarte exactamente cuánto puedes ahorrar, qué cambios recomendamos y por qué. Si no hay ahorro real, te lo decimos sin rodeos. Sin presión de ventas.",
      detalle: [
        "Contacto personalizado por tu vía preferida",
        "Explicación clara de cada cambio propuesto",
        "Presupuesto detallado del ahorro esperado",
        "Respuesta a todas tus dudas",
      ],
      tiempo: "Llamada de 15-20 min",
    },
    {
      num: "04",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      titulo: "Gestión sin esfuerzo",
      descripcion:
        "Si decides avanzar, nos ocupamos de todo: el cambio de tarifa, el trámite con la compañía, la comunicación con la distribuidora. Tú no tienes que hacer nada.",
      detalle: [
        "Gestionamos el cambio de forma integral",
        "Sin cortes de suministro",
        "Confirmación cuando el cambio esté activo",
        "Asesor de referencia para cualquier duda posterior",
      ],
      tiempo: "1 a 3 semanas",
    },
  ];

  const valores = [
    { icon: "🎯", titulo: "Independencia", desc: "No somos empleados de ninguna compañía. Trabajamos para ti, no para ellas." },
    { icon: "🔒", titulo: "Transparencia", desc: "Te explicamos todo con claridad. Sin letra pequeña ni sorpresas en la factura." },
    { icon: "🤝", titulo: "Sin presión", desc: "Si no hay ahorro, te lo decimos. No ganamos nada vendiendo algo que no te conviene." },
    { icon: "📞", titulo: "Acompañamiento", desc: "Seguimos disponibles después del cambio. Somos tu asesoría energética de confianza." },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1A0505 0%, #3D0C0C 100%)", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: "1rem", background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
            Proceso simple
          </span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", marginBottom: "1rem" }}>
            Cómo te ayudamos a{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #FCD34D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ahorrar
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Un proceso claro, rápido y sin compromisos. En 4 pasos pasas de pagar de más a pagar lo justo.
          </p>
        </div>
      </section>

      {/* Pasos */}
      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {pasos.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "2rem",
                  alignItems: "flex-start",
                }}
              >
                {/* Number + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}>
                  <div style={{
                    width: "5rem", height: "5rem", borderRadius: "50%",
                    background: "linear-gradient(135deg, #C62828, #8B1A1A)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", boxShadow: "0 8px 25px rgba(198,40,40,0.3)", flexShrink: 0,
                  }}>
                    {p.icon}
                  </div>
                  {i < pasos.length - 1 && (
                    <div style={{ width: "2px", height: "3rem", background: "linear-gradient(180deg, #C62828, #FECACA)", marginTop: "0.5rem" }} />
                  )}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.625rem" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "0.8rem", color: "#C62828", letterSpacing: "0.1em" }}>
                      PASO {p.num}
                    </span>
                    <span style={{ background: "#FFF5F5", color: "#C62828", fontSize: "0.75rem", fontWeight: 600, padding: "0.15rem 0.6rem", borderRadius: "9999px", border: "1px solid #FECACA" }}>
                      ⏱ {p.tiempo}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.375rem", color: "#1C1917", marginBottom: "0.75rem" }}>
                    {p.titulo}
                  </h2>
                  <p style={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                    {p.descripcion}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {p.detalle.map((d) => (
                      <li key={d} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span style={{ color: "#374151", fontSize: "0.875rem" }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="nosotros" className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge" style={{ marginBottom: "0.875rem" }}>Nuestra filosofía</span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", color: "#1C1917" }}>
              Trabajamos <span className="text-gradient">para ti</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {valores.map((v) => (
              <div key={v.titulo} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.875rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#1C1917", marginBottom: "0.5rem" }}>
                  {v.titulo}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Listo para empezar?"
        subtitle="El primer paso es gratis y sin compromiso. Comparte tu factura y nosotros hacemos el resto."
        variant="rojo"
      />
    </>
  );
}
