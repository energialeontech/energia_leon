"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú al hacer resize a escritorio
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Bloquea el scroll completamente (compatible con iOS Safari)
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (top) window.scrollTo(0, -parseInt(top));
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Inicio", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
    { href: "/servicios", label: "Servicios", icon: "brand" },
    { href: "/como-funciona", label: "Cómo funciona", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
    { href: "/contacto", label: "Contacto", icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.04a16 16 0 0 0 6.05 6.05l.96-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.46 16.92z" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: menuOpen ? "rgba(255,255,255,1)" : scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,1)",
          backdropFilter: scrolled && !menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid #FECACA" : "1px solid transparent",
          transition: "all 0.3s ease",
          boxShadow: scrolled && !menuOpen ? "0 2px 20px rgba(198,40,40,0.08)" : "none",
          overflow: "visible",
        }}
      >
        {/* Barra superior */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.25rem",
            position: "relative",
            zIndex: 120, // Por encima de todo lo demás en el header
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }} onClick={() => setMenuOpen(false)}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/logoenergialeonlargo.svg"
                alt="Logo Asesoría Energética León"
                width={120}
                height={40}
                style={{
                  flexShrink: 0,
                }}
                priority
              />
              <div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.05rem", color: "#8B1A1A", display: "block", lineHeight: 1.1 }}>
                  Asesoría Energética
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#C62828", letterSpacing: "0.06em" }}>
                  LEÓN
                </span>
              </div>
            </div>
          </Link>

          {/* Nav escritorio */}
          <nav
            style={{
              display: "flex",
              gap: "2rem",
            }}
            className="header-desktop-nav"
            aria-label="Navegación principal"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#1C1917",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  position: "relative",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C62828")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#1C1917")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA escritorio */}
          <Link href="/contacto" className="btn-primary animate-pulse-glow" id="header-cta-desktop" style={{ fontSize: "0.85rem", padding: "0.6rem 1.2rem" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Pide tu estudio gratis
          </Link>

          {/* Botón hamburguesa — solo móvil */}
          <button
            className="header-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            style={{
              background: menuOpen ? "#FFF1F1" : "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s ease",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil — dropdown de ancho completo */}
        <div
          ref={menuRef}
          className="header-mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            width: "100%",
            background: "white",
            borderTop: "1px solid #FECACA",
            borderBottom: "1px solid #FECACA",
            borderRadius: "0 0 1rem 1rem",
            overflow: "hidden",
            maxHeight: menuOpen ? "600px" : "0",
            opacity: menuOpen ? 1 : 0,
            transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
            zIndex: 110, // Por debajo de la barra superior pero por encima del backdrop
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
          aria-hidden={!menuOpen}
        >
          <div style={{ padding: "0.75rem 1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#1C1917",
                  textDecoration: "none",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  transition: "background 0.15s ease, color 0.15s ease",
                  borderBottom: i < navLinks.length - 1 ? "1px solid #FEF2F2" : "none",
                }}
              >
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    background: "#FFEBEE",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {l.icon === "brand" ? (
                    <img src="/favicon.svg" alt="" style={{ width: "16px", height: "16px", filter: "brightness(0) saturate(100%) invert(14%) sepia(85%) saturate(3477%) hue-rotate(352deg) brightness(85%) contrast(97%)" }} />
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={l.icon} />
                    </svg>
                  )}
                </div>
                {l.label}
              </a>
            ))}

            {/* CTA móvil */}
            <Link href="/contacto" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ justifyContent: "center", width: "100%", marginTop: "1rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Pide tu estudio gratis
            </Link>
          </div>
        </div>
      </header>

      {/* Backdrop — movido fuera del header para que este quede "limpio" */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90, // Por debajo del header (100)
          background: "rgba(12, 10, 9, 0.5)",
          backdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* CSS exclusivo del header */}
      <style>{`
        .header-desktop-nav { display: flex; }
        .header-desktop-cta { display: inline-flex; }
        .header-hamburger { display: none !important; }
        .header-mobile-menu { display: none !important; }

        @media (max-width: 767px) {
          .header-desktop-nav { display: none !important; }
          .header-desktop-cta { display: none !important; }
          .header-hamburger { display: flex !important; }
          .header-mobile-menu { display: block !important; }
        }
      `}</style>
    </>
  );
}
