"use client";
import { useState, useEffect, useCallback } from "react";
import ContactForm from "@/components/ContactForm";

export default function StudyModal() {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handler = () => openModal();
    window.addEventListener("open-study-modal", handler);
    return () => window.removeEventListener("open-study-modal", handler);
  }, [openModal]);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {/* Backdrop con blur */}
      <div
        onClick={closeModal}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 2, 2, 0.65)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          animation: "modalFadeIn 0.25s ease",
        }}
      />

      {/* Contenido del modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pide tu estudio energético gratis"
        style={{
          position: "relative",
          zIndex: 1,
          background: "white",
          borderRadius: "1.5rem",
          boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          width: "100%",
          maxWidth: "580px",
          maxHeight: "90vh",
          overflowY: "auto",
          animation: "modalSlideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Cabecera del modal */}
        <div
          style={{
            padding: "1.75rem 2rem 1.25rem",
            borderBottom: "1px solid #FECACA",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            background: "linear-gradient(135deg, #FFF5F5 0%, white 100%)",
            borderRadius: "1.5rem 1.5rem 0 0",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#8B1A1A" }}>
                Pide tu estudio gratis
              </span>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.875rem" }}>
              Sin compromiso · Te llamamos en menos de 24 h
            </p>
          </div>
          <button
            onClick={closeModal}
            aria-label="Cerrar"
            style={{
              background: "#FFF1F1",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              borderRadius: "0.625rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#FECACA")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#FFF1F1")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Formulario */}
        <div style={{ padding: "1.75rem 2rem 2rem" }}>
          <ContactForm variant="full" />
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
