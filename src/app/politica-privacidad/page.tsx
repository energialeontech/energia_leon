import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad | Asesoría Energética León",
  description: "Información sobre el tratamiento de tus datos personales y términos legales de Asesoría Energética León.",
};

export default function PrivacidadPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh", background: "#fff" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#1a1a1a", marginBottom: "2rem", borderBottom: "4px solid #C62828", display: "inline-block" }}>
          Información Legal
        </h1>

        <section style={{ marginBottom: "3rem" }} id="privacidad">
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#C62828", marginBottom: "1rem" }}>
            Política de Privacidad
          </h2>
          <div style={{ color: "#4a4a4a", lineHeight: "1.8", fontSize: "1rem" }}>
            <p><strong>Responsable del Tratamiento:</strong> Antonio López León (Asesoría Energética León)</p>
            <p><strong>Finalidad:</strong> Gestionar las solicitudes de estudio energético y contacto realizadas a través de la web, así como el envío de la información solicitada.</p>
            <p><strong>Legitimación:</strong> Consentimiento del interesado al marcar la casilla de aceptación en nuestros formularios.</p>
            <p><strong>Destinatarios:</strong> Tus datos no serán cedidos a terceros, salvo obligación legal.</p>
            <p><strong>Derechos:</strong> Puedes acceder, rectificar y suprimir tus datos, así como ejercer otros derechos escribiéndonos a <a href="mailto:info@energialeon.com" style={{ color: "#C62828" }}>info@energialeon.com</a>.</p>
            <p style={{ marginTop: "1rem" }}>Nos comprometemos al cumplimiento de su obligación de secreto de los datos de carácter personal y de su deber de tratarlos con confidencialidad, y asumimos, a estos efectos, las medidas de índole técnica, organizativa y de seguridad necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado, de acuerdo con lo establecido en la normativa vigente.</p>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }} id="aviso-legal">
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#C62828", marginBottom: "1rem" }}>
            Aviso Legal
          </h2>
          <div style={{ color: "#4a4a4a", lineHeight: "1.8", fontSize: "1rem" }}>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen los datos identificativos:</p>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>Titular: Antonio López León</li>
              <li>Sede: Sevilla, España</li>
              <li>Email de contacto: info@energialeon.com</li>
              <li>Teléfono: +34 610 39 62 08</li>
            </ul>
            <p>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }} id="cookies">
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#C62828", marginBottom: "1rem" }}>
            Política de Cookies
          </h2>
          <div style={{ color: "#4a4a4a", lineHeight: "1.8", fontSize: "1rem" }}>
            <p>Esta web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y ofrecer contenidos de interés. Al continuar navegando entendemos que acepta nuestra política de cookies.</p>
            <p>Las cookies son pequeños archivos de texto que se almacenan en el navegador cuando se visitan páginas web. Su finalidad es técnica, de personalización o de análisis.</p>
          </div>
        </section>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#C62828", color: "#fff", textDecoration: "none", borderRadius: "9999px", fontWeight: 700, transition: "transform 0.2s ease" }}>
            <span>←</span> Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
