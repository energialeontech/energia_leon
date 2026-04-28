"use client";

interface Canal {
  icon: React.ReactNode;
  titulo: string;
  valor: string;
  desc: string;
  href: string;
  id: string;
}

export default function CanalesContacto({ canales }: { canales: Canal[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
      {canales.map((c) => (
        <a
          key={c.id}
          href={c.href}
          id={c.id}
          target={c.href.startsWith("http") ? "_blank" : undefined}
          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="canal-card"
          style={{
            display: "flex", alignItems: "center", gap: "1rem",
            background: "white", borderRadius: "0.875rem", padding: "1.25rem",
            border: "1px solid #FECACA", textDecoration: "none",
            transition: "all 0.2s ease", color: "inherit",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#C62828";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 15px rgba(198,40,40,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#FECACA";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <div style={{ width: "3rem", height: "3rem", minWidth: "3rem", background: "#FFF5F5", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#C62828" }}>
            {c.icon}
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1C1917" }}>
              {c.titulo}
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.875rem", color: "#C62828" }}>
              {c.valor}
            </div>
            <div style={{ color: "#9CA3AF", fontSize: "0.75rem" }}>{c.desc}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
