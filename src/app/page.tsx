"use client";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import StudyCTAButton from "@/components/StudyCTAButton";

// === HERO ===
function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #1A0505 0%, #3D0C0C 40%, #7B1515 100%)",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "5rem 1.5rem",
      }}
    >
      {/* Decoraciones de fondo */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "10%", right: "5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(198,40,40,0.3) 0%, transparent 70%)"
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-5%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)"
        }} />
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container hero-grid" style={{ position: "relative", zIndex: 1, display: "grid", gap: "3rem", alignItems: "center" }}>
        {/* Texto */}
        <div className="hero-content">
          <span className="badge" style={{ marginBottom: "1.5rem", background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
            Sin permanencia · Sin coste · Sin complicaciones
          </span>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            color: "white",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}>
            Paga menos en{" "}
            <span style={{
              background: "linear-gradient(135deg, #F59E0B, #FCD34D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              luz y gas
            </span>{" "}
            sin complicaciones
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "1.15rem",
            lineHeight: 1.75,
            marginBottom: "2.25rem",
            maxWidth: "480px",
          }}>
            Analizamos tu factura actual y encontramos la tarifa que mejor se adapta a tu consumo.{" "}
            <strong style={{ color: "white" }}>Nuestros clientes ahorran de media 250 € al año.</strong>
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}>
            <StudyCTAButton className="btn-amber" id="hero-cta-estudio">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Pide tu estudio gratis
            </StudyCTAButton>
            <a
              href="https://wa.me/34610396208?text=Hola%2C%20quiero%20mi%20estudio%20energ%C3%A9tico%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-whatsapp"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(255,255,255,0.1)", color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                padding: "0.875rem 1.5rem", borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none",
                fontSize: "1rem", transition: "all 0.3s ease", backdropFilter: "blur(8px)"
              }}
            >
              <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
                <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {[
              { num: "+500", label: "clientes satisfechos" },
              { num: "250€", label: "ahorro medio/año" },
              { num: "24h", label: "respuesta garantizada" },
            ].map((s) => (
              <div key={s.num} style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.75rem", color: "#F59E0B" }}>
                  {s.num}
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: "1.5rem",
            padding: "2rem",
            boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
          className="hidden md:block"
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.375rem", color: "#8B1A1A", marginBottom: "0.35rem" }}>
              ¿Quieres saber cuánto ahorras?
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>
              Déjanos tus datos y te contactaremos sin ningún compromiso.
            </p>
          </div>
          <ContactForm variant="compact" />
        </div>
      </div>
    </section>
  );
}

// === LOGOS CONFIANZA ===
function TrustBand() {
  const logos = ["Endesa", "Iberdrola", "Naturgy", "EDP", "Repsol", "Holaluz"];
  // Duplicamos los logos para el efecto de scroll infinito
  const allLogos = [...logos, ...logos];

  return (
    <section style={{
      background: "#FFF5F5",
      borderTop: "1px solid #FECACA",
      borderBottom: "1px solid #FECACA",
      padding: "2rem 0"
    }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "0.75rem",
            color: "#9CA3AF",
            letterSpacing: "0.08em",
            textTransform: "uppercase"
          }}>
            Comparamos por ti:
          </span>
        </div>

        <div className="scroll-container">
          <div className="scroll-track">
            {allLogos.map((logo, index) => (
              <div key={`${logo}-${index}`} style={{
                background: "white",
                padding: "0.65rem 1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #FECACA",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#6B7280",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}>
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#9CA3AF",
            fontStyle: "italic"
          }}>
            ... y muchas más, siempre estamos cerrando nuevos acuerdos.
          </p>
        </div>
      </div>
    </section>
  );
}

// === BENEFICIOS ===
function Beneficios() {
  const items = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
      title: "Entendemos tu factura",
      desc: "Te explicamos punto por punto qué estás pagando y por qué. Sin tecnicismos innecesarios.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Optimizamos tu tarifa",
      desc: "Buscamos la tarifa que más se adapta a tu consumo horario real. No vendemos; asesoramos.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Gestión sin esfuerzo",
      desc: "Nos encargamos de todo el papeleo y el cambio. Tú solo verás la factura reducida.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Ahorro real garantizado",
      desc: "Solo te recomendamos el cambio si hay un ahorro real. Sino, te lo decimos directamente.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Asesor personal",
      desc: "Tendrás un asesor de contacto directo durante todo el proceso. No eres un número.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      title: "Completamente gratuito",
      desc: "Estudio 100% gratuito, sin permanencia y sin complicaciones. Te ayudamos a ahorrar de verdad.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge" style={{ marginBottom: "0.875rem" }}>
            ¿Por qué elegirnos?
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#1C1917", marginBottom: "1rem" }}>
            Tu factura, <span className="text-gradient">bajo control</span>
          </h2>
          <p style={{ color: "#6B7280", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            En Asesoría Energética León llevamos años ayudando a familias y negocios a pagar lo justo por su energía.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {items.map((item, i) => (
            <div key={i} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{
                width: "3rem", height: "3rem", minWidth: "3rem",
                background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)",
                borderRadius: "0.75rem", display: "flex", alignItems: "center",
                justifyContent: "center", color: "#C62828",
              }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#1C1917", marginBottom: "0.4rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === CÓMO FUNCIONA ===
function ComoFunciona() {
  const pasos = [
    { num: "01", title: "Comparte tu factura" },
    { num: "02", title: "Análisis 100% gratuito" },
    { num: "03", title: "Te presentamos el ahorro" },
    { num: "04", title: "Gestión y seguimiento" },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge" style={{ marginBottom: "0.875rem" }}>
            Proceso sencillo
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#1C1917", marginBottom: "1rem" }}>
            Así de fácil es <span className="text-gradient">ahorrar con nosotros</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {pasos.map((paso, i) => (
            <div key={i} style={{ position: "relative", textAlign: "center" }}>
              {/* Connector line */}
              {i < pasos.length - 1 && (
                <div style={{
                  position: "absolute", top: "2.25rem", left: "calc(50% + 2.5rem)",
                  width: "calc(100% - 5rem)", height: "2px",
                  background: "linear-gradient(90deg, #C62828, #FECACA)",
                  display: "none"
                }} className="md:block" />
              )}
              <div style={{
                width: "4.5rem", height: "4.5rem", borderRadius: "50%",
                background: "linear-gradient(135deg, #C62828, #8B1A1A)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.25rem",
                boxShadow: "0 8px 25px rgba(198,40,40,0.3)",
              }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "white" }}>
                  {paso.num}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#1C1917", marginBottom: "0.625rem" }}>
                {paso.title}
              </h3>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/como-funciona" className="btn-outline">
            Ver el proceso completo →
          </Link>
        </div>
      </div>
    </section>
  );
}

// === CALCULADORA VISUAL ===
function AhorroVisual() {
  return (
    <section className="section" style={{ background: "linear-gradient(160deg, #1A0505 0%, #3D0C0C 100%)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "2.5rem",
          alignItems: "center"
        }}>
          <div>
            <span className="badge" style={{ marginBottom: "1rem", background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
              Resultados reales
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "white", marginBottom: "1.25rem" }}>
              ¿Cuánto estás pagando de más?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              La mayoría de hogares y pymes en España tienen una tarifa inadecuada para su consumo real. Eso se traduce en cientos de euros al año perdidos sin saberlo.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Hogar medio", antes: "1.200 €/año", despues: "940 €/año", ahorro: "260 €" },
                { label: "Pyme pequeña", antes: "4.800 €/año", despues: "3.900 €/año", ahorro: "900 €" },
              ].map((row) => (
                <div key={row.label} style={{
                  background: "rgba(255,255,255,0.06)", borderRadius: "0.875rem",
                  padding: "1.25rem 1.5rem", border: "1px solid rgba(198,40,40,0.3)",
                  display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem"
                }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem" }}>
                    {row.label}
                  </span>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", textDecoration: "line-through", fontSize: "0.85rem" }}>
                      {row.antes}
                    </span>
                    <span style={{ color: "#F59E0B", fontWeight: 700, fontSize: "0.95rem" }}>
                      {row.despues}
                    </span>
                    <span style={{
                      background: "rgba(198,40,40,0.3)", color: "#FECACA",
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                      padding: "0.2rem 0.65rem", borderRadius: "9999px", fontSize: "0.8rem"
                    }}>
                      -{row.ahorro}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <StudyCTAButton className="btn-amber" id="ahorro-cta">
              Calcular mi ahorro →
            </StudyCTAButton>
          </div>

          {/* Ilustración visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "rgba(255,255,255,0.05)", borderRadius: "1.25rem",
              padding: "clamp(1rem, 5vw, 2rem)", border: "1px solid rgba(198,40,40,0.2)"
            }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                    Lo que pagas
                  </span>
                  <span style={{ color: "#FECACA", fontSize: "0.8rem", fontWeight: 700 }}>1.200 €</span>
                </div>
                <div style={{ height: "12px", background: "rgba(198,40,40,0.3)", borderRadius: "9999px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "100%", background: "linear-gradient(90deg, #C62828, #EF4444)", borderRadius: "9999px" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                    Lo que deberías pagar
                  </span>
                  <span style={{ color: "#F59E0B", fontSize: "0.8rem", fontWeight: 700 }}>940 €</span>
                </div>
                <div style={{ height: "12px", background: "rgba(245,158,11,0.2)", borderRadius: "9999px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "78%", background: "linear-gradient(90deg, #F59E0B, #FCD34D)", borderRadius: "9999px" }} />
                </div>
              </div>

              <div style={{
                marginTop: "1.75rem", textAlign: "center",
                background: "linear-gradient(135deg, rgba(198,40,40,0.2), rgba(245,158,11,0.15))",
                borderRadius: "0.75rem", padding: "1.25rem",
                border: "1px solid rgba(245,158,11,0.2)"
              }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "#F59E0B" }}>
                  260 €
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
                  de ahorro anual estimado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// === TESTIMONIOS ===
function Testimonios() {
  const testimonios = [
    {
      nombre: "Marta R.",
      tipo: "Hogar familiar",
      texto: "Llevaba años pagando de más y ni lo sabía. En menos de una semana me habían ajustado la tarifa y ya llevo ahorrando 30€ al mes. El proceso fue muy sencillo.",
      ahorro: "360 €/año",
      rating: 5,
    },
    {
      nombre: "Carlos M.",
      tipo: "Dueño de bar, León",
      texto: "Mi factura de negocio era una locura. El equipo me explicó todo con paciencia y cambiaron tanto la potencia como la tarifa. Resultados inmediatos.",
      ahorro: "1.200 €/año",
      rating: 5,
    },
    {
      nombre: "Ana G.",
      tipo: "Piso en alquiler",
      texto: "Desconfiaba al principio porque pensaba que habría algo de trampa. Para nada. Gratuito de verdad y muy profesionales. Lo recomiendo sin dudar.",
      ahorro: "180 €/año",
      rating: 5,
    },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge" style={{ marginBottom: "0.875rem" }}>Testimonios</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#1C1917" }}>
            Lo que dicen nuestros <span className="text-gradient">clientes</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {testimonios.map((t, i) => (
            <div key={i} className="card" style={{ position: "relative" }}>
              {/* Comillas */}
              <div style={{
                position: "absolute", top: "-0.75rem", left: "1.5rem",
                fontFamily: "serif", fontSize: "4rem", color: "#FECACA", lineHeight: 1,
              }}>
                "
              </div>
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem", marginTop: "0.5rem" }}>
                {Array(t.rating).fill(null).map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                {t.texto}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "#1C1917" }}>
                    {t.nombre}
                  </div>
                  <div style={{ color: "#9CA3AF", fontSize: "0.8rem" }}>{t.tipo}</div>
                </div>
                <div style={{
                  background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)",
                  padding: "0.35rem 0.75rem", borderRadius: "9999px",
                  border: "1px solid #FECACA",
                }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: "#C62828" }}>
                    -{t.ahorro}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === FAQ ===
function FAQ() {
  const items = [
    {
      q: "¿El estudio energético es realmente gratuito?",
      a: "Sí, completamente gratuito y sin ningún tipo de compromiso. No te pediremos que contrates nada ni te cobraremos por el análisis.",
    },
    {
      q: "¿Tengo que cambiar de compañía?",
      a: "No necesariamente. A veces el ahorro viene de optimizar la tarifa dentro de tu compañía actual. Siempre te presentamos todas las opciones.",
    },
    {
      q: "¿Cuánto tarda el proceso?",
      a: "El análisis lo realizamos en menos de 24 horas. Si decides cambiar, el proceso de gestión puede llevar entre 2 y 7 días.",
    },
    {
      q: "¿Funciona para pymes y autónomos?",
      a: "Sí. Trabajamos con hogares, autónomos y pymes de todos los tamaños. Cuantos más suministros, más potencial de ahorro.",
    },
    {
      q: "¿Qué necesito para pedir el estudio?",
      a: "Solo necesitas tu última factura de luz o gas (en PDF, foto o papel). Con eso tenemos suficiente para empezar.",
    },
  ];

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "760px" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge" style={{ marginBottom: "0.875rem" }}>FAQ</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", color: "#1C1917" }}>
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.map((item, i) => (
            <details
              key={i}
              style={{
                background: "white", border: "1px solid #FECACA", borderRadius: "0.875rem",
                padding: "1.25rem 1.5rem", cursor: "pointer",
              }}
            >
              <summary style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                fontSize: "0.975rem", color: "#1C1917", listStyle: "none",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                {item.q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: "20px" }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p style={{ marginTop: "0.875rem", color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// === PAGE ===
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Beneficios />
      <ComoFunciona />
      <AhorroVisual />
      <Testimonios />
      <FAQ />
      <CTABanner
        title="Empieza a ahorrar hoy mismo"
        subtitle="Miles de familias y negocios ya pagan menos en su factura. ¿A qué esperas?"
        variant="rojo"
      />
    </>
  );
}
