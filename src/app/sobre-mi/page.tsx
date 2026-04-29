import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Mí | Asesoría Energética León",
  description: "Conoce a Antonio, asesor energético con más de 5 años de experiencia especializado en optimización de tarifas y energía solar.",
};

export default function SobreMiPage() {
  return (
    <>
      {/* Hero */}
      <section 
        style={{ 
          background: "linear-gradient(135deg, #1A0505 0%, #3D0C0C 100%)", 
          padding: "5rem 1.5rem",
          textAlign: "center"
        }}
      >
        <div className="container">
          <span className="badge" style={{ marginBottom: "1rem", background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
            Asesoría con nombre propio
          </span>
          <h1 
            style={{ 
              fontFamily: "'Plus Jakarta Sans', sans-serif", 
              fontWeight: 900, 
              fontSize: "clamp(2.5rem, 6vw, 4rem)", 
              color: "white",
              marginBottom: "1rem"
            }}
          >
            Sobre <span style={{ background: "linear-gradient(135deg, #F59E0B, #FCD34D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mí</span>
          </h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section">
        <div className="container">
          <div className="bio-grid">
            {/* Foto */}
            <div className="bio-photo-col">
              <div className="photo-wrapper">
                <Image
                  src="/fotoantonio.jpeg"
                  alt="Antonio - Asesor Energético León"
                  width={600}
                  height={800}
                  className="main-photo"
                  priority
                />
                <div className="experience-badge">
                  <span className="years">+5</span>
                  <span className="text">años de<br/>experiencia</span>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="bio-content-col">
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6" />
                </svg>
              </div>
              
              <div className="bio-text">
                <p className="lead">
                  Soy <strong>Antonio</strong>, y llevo más de 5 años trabajando en el sector energético, especialmente en el ámbito de las instalaciones fotovoltaicas.
                </p>
                <p>
                  Durante este tiempo he ido creciendo profesionalmente, adquiriendo un conocimiento profundo del funcionamiento del mercado eléctrico y, sobre todo, de las facturas de luz.
                </p>
                <p>
                  Con el paso de los años me he especializado en la <strong>optimización de tarifas</strong>, analizando cada caso de forma personalizada para conseguir el máximo ahorro posible. Porque no se trata solo de pagar menos, sino de pagar lo justo.
                </p>
                
                <div className="highlight-box">
                  <p>
                    Trabajo cada estudio como si fuera para mi propia casa, con total implicación, buscando siempre la mejor opción para cada cliente.
                  </p>
                </div>

                <p>
                  La <strong>honradez</strong> y la <strong>transparencia</strong> son la base de mi forma de trabajar: explico cada detalle de manera clara y solo recomiendo lo que realmente aporta beneficio.
                </p>
                <p>
                  Además, apuesto por un trato cercano y directo, porque creo que la confianza es fundamental. Mi objetivo no es solo ayudarte a ahorrar hoy, sino acompañarte en el tiempo para que siempre estés en la mejor opción posible.
                </p>

                <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "3rem", height: "1px", background: "#C62828" }} />
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, color: "#1C1917", fontSize: "1.25rem" }}>
                    Antonio López León
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        title="¿Quieres que analice tu caso personalmente?"
        subtitle="Estaré encantado de ayudarte a entender tu factura y encontrar el ahorro que te corresponde."
        variant="rojo"
      />

      <style>{`
        .bio-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 5rem;
          align-items: flex-start;
        }

        .photo-wrapper {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
        }

        .main-photo {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .experience-badge {
          position: absolute;
          bottom: 1.5rem;
          right: -1rem;
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 15px 30px rgba(198,40,40,0.2);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid #FFF5F5;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .experience-badge .years {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 900;
          font-size: 2rem;
          color: #C62828;
          line-height: 1;
        }

        .experience-badge .text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: #1C1917;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.3;
        }

        .bio-content-col {
          padding-top: 1rem;
        }

        .quote-icon {
          margin-bottom: 2rem;
          opacity: 0.2;
        }

        .bio-text p {
          color: #4B5563;
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .bio-text .lead {
          font-size: 1.35rem;
          color: #1C1917;
          font-weight: 500;
        }

        .highlight-box {
          background: #FFF5F5;
          border-left: 4px solid #C62828;
          padding: 1.5rem 2rem;
          margin: 2.5rem 0;
          border-radius: 0 1rem 1rem 0;
        }

        .highlight-box p {
          margin-bottom: 0;
          font-style: italic;
          color: #8B1A1A;
          font-weight: 600;
        }

        @media (max-width: 991px) {
          .bio-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .bio-photo-col {
            max-width: 500px;
            margin: 0 auto;
          }
          .experience-badge {
            right: 0rem;
            bottom: 1rem;
            padding: 0.75rem 1.25rem;
          }
          .experience-badge .years {
            font-size: 1.75rem;
          }
          .experience-badge .text {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 767px) {
          .bio-text p {
            font-size: 1.05rem;
          }
          .bio-text .lead {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
