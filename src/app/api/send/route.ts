import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Configuración del servidor incompleta' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { nombre, telefono, email, tipo, mensaje, facturaBase64, facturaName, facturaType } = body;

    // Construir los adjuntos si hay factura
    const attachments = [];
    if (facturaBase64 && facturaName) {
      const content = facturaBase64.split(',')[1] || facturaBase64;
      attachments.push({
        filename: facturaName,
        content: content,
      });
    }

    // 1. Enviar email a la administración (info@energialeon.com)
    const adminEmail = await resend.emails.send({
      from: 'Energía León <web@energialeon.com>',
      to: [process.env.CONTACT_EMAIL || 'info@energialeon.com'],
      subject: `⚡ Nuevo Estudio: ${nombre} (${tipo})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <h2 style="color: #C62828; border-bottom: 2px solid #C62828; padding-bottom: 10px;">Nuevo Estudio Energético Solicitado</h2>
          <p>Has recibido una nueva solicitud desde el cuestionario de la web:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 150px;">Nombre:</td>
              <td style="padding: 10px; border: 1px solid #eee;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px; border: 1px solid #eee;">
                <a href="tel:${telefono}" style="color: #C62828; text-decoration: none;">${telefono}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Tipo:</td>
              <td style="padding: 10px; border: 1px solid #eee; text-transform: capitalize;">${tipo}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Mensaje:</td>
              <td style="padding: 10px; border: 1px solid #eee;">${mensaje || 'Sin mensaje adicional'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Factura:</td>
              <td style="padding: 10px; border: 1px solid #eee;">${facturaName ? `Adjunta (${facturaName})` : 'No adjuntada'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 15px; background: #f9f9f9; border-radius: 8px; font-size: 0.9rem; color: #666;">
            <p style="margin: 0;">Este es un mensaje automático enviado desde energialeon.com</p>
          </div>
        </div>
      `,
      attachments: attachments,
    });

    console.log("Respuesta Resend Admin:", adminEmail);

    // 2. Enviar email de confirmación al usuario
    // Solo si no hubo error crítico en el anterior y tenemos el email del usuario
    if (!adminEmail.error && email) {
      try {
        const userEmail = await resend.emails.send({
          from: 'Energía León <info@energialeon.com>',
          to: [email],
          subject: '¡Hemos recibido tu solicitud! - Energía León',
          html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <!-- Cabecera con Logo -->
              <div style="background-color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 1px solid #f0f0f0;">
                <img src="https://www.energialeon.com/logo.svg" alt="Energía León" style="width: 140px; height: auto;" />
              </div>

              <!-- Cuerpo del mensaje -->
              <div style="padding: 40px 30px; background-color: #ffffff;">
                <h1 style="color: #C62828; margin: 0 0 20px 0; font-size: 26px; font-weight: 700; text-align: center;">¡Gracias por contactar con nosotros, ${nombre}!</h1>
                
                <p style="font-size: 17px; margin-bottom: 25px; text-align: center; color: #4a4a4a;">
                  Hemos recibido correctamente tu solicitud para un <strong>estudio energético (${tipo === 'hogar' ? 'Hogar' : tipo === 'pyme' ? 'Pyme' : 'Empresa'})</strong>.
                </p>

                <div style="background: linear-gradient(135deg, #fff5f5 0%, #fff 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #C62828; margin-bottom: 30px;">
                  <p style="margin: 0; font-size: 16px; color: #333;">
                    Nuestro equipo de expertos ya está analizando tu caso. <strong>Nos pondremos en contacto contigo en menos de 24 horas laborables</strong> para ofrecerte la mejor solución de ahorro para tu factura.
                  </p>
                </div>

                <p style="font-size: 15px; color: #666; margin-bottom: 10px;">Si tienes cualquier duda mientras tanto, no dudes en escribirnos:</p>
                
                <div style="margin-bottom: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <p style="margin: 5px 0; font-size: 15px;">
                    📧 Email: <a href="mailto:info@energialeon.com" style="color: #C62828; text-decoration: none; font-weight: 600;">info@energialeon.com</a>
                  </p>
                  <p style="margin: 5px 0; font-size: 15px;">
                    📞 Teléfono: <a href="tel:+34610396208" style="color: #C62828; text-decoration: none; font-weight: 600;">+34 610 39 62 08</a>
                  </p>
                </div>

                <div style="text-align: center;">
                  <a href="https://wa.me/34610396208?text=Hola%2C%20acabo%20de%20enviar%20el%20formulario%20en%20la%20web" style="background-color: #25D366; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 50px; font-weight: 700; display: inline-block; font-size: 16px; box-shadow: 0 4px 10px rgba(37,211,102,0.3);">
                    Hablar por WhatsApp ahora
                  </a>
                </div>
              </div>

              <!-- Pie de página -->
              <div style="background-color: #f9f9f9; padding: 25px; text-align: center; font-size: 13px; color: #888; border-top: 1px solid #f0f0f0;">
                <p style="margin: 0; font-weight: 600; color: #555;">Energía León - Eficiencia y Ahorro Energético</p>
                <p style="margin: 8px 0 0;">León, España</p>
                <p style="margin: 15px 0 0; font-size: 11px;">Este es un mensaje automático. Por favor, no respondas directamente a este envío.</p>
              </div>
            </div>
          `,
        });
        console.log("Respuesta Resend Usuario:", userEmail);
      } catch (userEmailError) {
        // No bloqueamos la respuesta principal si falla el email de confirmación al usuario
        console.error("Error al enviar email de confirmación al usuario:", userEmailError);
      }
    }

    if (adminEmail.error) {
      console.error("Error detallado de Resend (Admin):", adminEmail.error);
      return NextResponse.json({ error: adminEmail.error }, { status: 400 });
    }

    return NextResponse.json(adminEmail);
  } catch (error) {
    console.error('Error fatal en la API:', error);
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
  }
}
