"use client";
import Link from "next/link";
import StudyCTAButton from "@/components/StudyCTAButton";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #2D0A0A 0%, #1A0505 100%)",
        color: "white",
        paddingTop: "3.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Marca */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  background: "linear-gradient(135deg, #C62828, #F59E0B)",
                  borderRadius: "0.625rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img 
                  src="/favicon.svg" 
                  alt="Icono Energía León" 
                  style={{ 
                    width: "22px", 
                    height: "22px", 
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)" // Lo hace blanco para que resalte sobre el fondo rojo
                  }} 
                />
              </div>
              <div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.05rem", color: "white", display: "block", lineHeight: 1.1 }}>
                  Asesoría Energética
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.7rem", color: "#F59E0B", letterSpacing: "0.08em" }}>
                  LEÓN
                </span>
              </div>
            </div>
            <p style={{ color: "#D1D5DB", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "260px" }}>
              Te ayudamos a pagar menos en luz y gas, sin cambiar de compañía y con total transparencia.
            </p>

          </div>

          {/* Servicios */}
          <div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#F59E0B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Servicios
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Optimización de luz", href: "/servicios#luz" },
                { label: "Optimización de gas", href: "/servicios#gas" },
                { label: "Energía solar para pymes", href: "/servicios#solar" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FECACA")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#D1D5DB")}
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <StudyCTAButton
                  style={{ background: "none", padding: 0, color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s ease", textAlign: "left" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FECACA")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#D1D5DB")}
                >
                  → Estudio energético gratuito
                </StudyCTAButton>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#F59E0B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Empresa
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Cómo funciona", href: "/como-funciona" },
                { label: "Sobre Mí", href: "/sobre-mi" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FECACA")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#D1D5DB")}
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <StudyCTAButton
                  style={{ background: "none", padding: 0, color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s ease", textAlign: "left" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FECACA")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#D1D5DB")}
                >
                  → Contacto
                </StudyCTAButton>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#F59E0B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Contacto
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: "📞", text: "+34 610 39 62 08", label: "Teléfono" },
                { icon: "✉️", text: "info@energialeon.com", label: "Email" },
                { icon: "📍", text: "Sevilla, España", label: "Ubicación" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ fontSize: "1rem" }} aria-hidden="true">{c.icon}</span>
                  <span style={{ color: "#D1D5DB", fontSize: "0.875rem" }} aria-label={c.label}>
                    {c.text}
                  </span>
                </div>
              ))}
              <a
                href="https://wa.me/34610396208"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: "0.5rem", fontSize: "0.8rem", padding: "0.6rem 1.1rem" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(198,40,40,0.2)",
            paddingTop: "1.25rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#6B7280", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Asesoría Energética León. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {[
              { label: "Aviso legal", href: "/politica-privacidad#aviso-legal" },
              { label: "Privacidad", href: "/politica-privacidad#privacidad" },
              { label: "Cookies", href: "/politica-privacidad#cookies" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ color: "#6B7280", fontSize: "0.8rem", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FECACA")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B7280")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
