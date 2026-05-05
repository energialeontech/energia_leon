"use client";
import CTABanner from "@/components/CTABanner";
import StudyCTAButton from "@/components/StudyCTAButton";

const servicios = [
  {
    id: "luz",
    emoji: "⚡",
    color: "#C62828",
    titulo: "Optimización de luz",
    subtitulo: "Para hogares y pymes",
    beneficios: [
      "Ajuste de potencia contratada",
      "Selección de tarifa horaria (PVPC o precio fijo)",
      "Análisis de discriminación horaria",
      "Comparativa entre comercializadoras",
      "Gestión completa del cambio",
    ],
    descripcion:
      "La factura de la luz tiene muchas variables: potencia, peajes, término de energía, impuestos... Nosotros las analizamos todas y encontramos dónde estás pagando de más.",
    image: "/optimizacionluz.jpg",
    porcentaje: "40%",
  },
  {
    id: "gas",
    emoji: "🔥",
    color: "#D97706",
    titulo: "Optimización de gas",
    subtitulo: "Tarifa TUR o mercado libre",
    beneficios: [
      "Análisis de consumo anual",
      "Comparativa TUR vs mercado libre",
      "Búsqueda de la mejor tarifa",
      "Gestión del cambio de comercializadora",
      "Seguimiento post-cambio",
    ],
    descripcion:
      "El mercado del gas también tiene opciones. Te ayudamos a entender si la tarifa regulada (TUR) o una del mercado libre es mejor para tu perfil de consumo.",
    image: "/optimizaciongas.jpg",
    porcentaje: "35%",
  },
  {
    id: "solar",
    emoji: "☀️",
    color: "#8B1A1A",
    titulo: "Energía solar para pymes y hogares",
    subtitulo: "Autoconsumo y ahorro a largo plazo",
    beneficios: [
      "Instalación de placas solares",
      "Estudio de viabilidad solar gratuito",
      "Cargadores para coches eléctricos",
      "Alquiler de techos industriales",
      "Análisis de retorno de inversión",
      "Gestión de subvenciones disponibles",
    ],
    descripcion:
      "Si tienes un negocio con consumo elevado, la energía solar puede reducir tu factura hasta un 70%. Te explicamos si es viable y cuándo recuperarías la inversión.",
    image: "/energiasolar.jpg",
    porcentaje: "70%",
  },
];

export default function ServiciosClient() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A0505 0%, #3D0C0C 100%)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span className="badge" style={{ marginBottom: "1rem", background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
            Nuestros servicios
          </span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Todo lo que necesitas para{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #FCD34D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              pagar menos
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Analizamos tu situación y encontramos la mejor solución para ti.
          </p>
          <StudyCTAButton className="btn-amber" id="servicios-hero-cta">
            Pide tu estudio gratis →
          </StudyCTAButton>
        </div>
      </section>

      {/* Servicios */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {servicios.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`servicios-grid ${i % 2 !== 0 ? 'reverse' : ''}`}
              >
                {/* Info */}
                <div className="info-col">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>{s.emoji}</span>
                    <div>
                      <h2
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 900,
                          fontSize: "1.625rem",
                          color: "#1C1917",
                        }}
                      >
                        {s.titulo}
                      </h2>
                      <span className="badge" style={{ marginTop: "0.25rem" }}>
                        {s.subtitulo}
                      </span>
                    </div>
                  </div>
                  <p style={{ color: "#6B7280", fontSize: "0.975rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                    {s.descripcion}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
                    {s.beneficios.map((b) => (
                      <li key={b} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <div style={{ width: "1.25rem", height: "1.25rem", minWidth: "1.25rem", background: "#FFF5F5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span style={{ color: "#374151", fontSize: "0.9rem" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <StudyCTAButton className="btn-primary" id={`btn-servicio-${s.id}`}>
                    Consultar este servicio
                  </StudyCTAButton>
                </div>

                {/* Visual */}
                <div
                  className="visual-col"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: s.image 
                      ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${s.image}) center/cover no-repeat`
                      : `linear-gradient(135deg, ${s.color}22, ${s.color}11)`,
                    border: `1px solid ${s.image ? 'transparent' : `${s.color}33`}`,
                    borderRadius: "1.5rem",
                    padding: "3rem 2rem",
                    textAlign: "center",
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.5rem",
                    boxShadow: s.image ? "inset 0 0 100px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.1)" : "none"
                  }}
                >
                  <span style={{ 
                    fontSize: "5rem", 
                    filter: s.image ? "drop-shadow(0 4px 10px rgba(0,0,0,0.5))" : "none",
                    zIndex: 2 
                  }}>
                    {s.emoji}
                  </span>
                  
                  <div
                    style={{
                      background: "white",
                      borderRadius: "0.875rem",
                      padding: "1rem 1.5rem",
                      boxShadow: `0 10px 30px rgba(0,0,0,0.15)`,
                      border: `1px solid ${s.color}22`,
                      position: "relative",
                      zIndex: 2
                    }}
                  >
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "2rem", color: s.color }}>
                      Hasta {s.porcentaje || "40%"}
                    </div>
                    <div style={{ color: "#6B7280", fontSize: "0.8rem", fontWeight: 600 }}>de ahorro posible</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿No sabes qué servicio necesitas?"
        subtitle="No te preocupes. Cuéntanos tu situación y nosotros te diremos qué te conviene."
        variant="dark"
      />

      <style>{`
        .servicios-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
        }
        .servicios-grid.reverse .info-col { order: 2; }
        .servicios-grid.reverse .visual-col { order: 1; }
        .servicios-grid .info-col { order: 1; }
        .servicios-grid .visual-col { order: 2; }

        @media (max-width: 991px) {
          .servicios-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            margin-bottom: 4rem;
            text-align: center;
          }
          .servicios-grid .info-col, .servicios-grid.reverse .info-col {
            order: 1;
          }
          .servicios-grid .visual-col, .servicios-grid.reverse .visual-col {
            order: 2;
          }
          .servicios-grid .info-col li {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
