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

    const data = await resend.emails.send({
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

    console.log("Respuesta de Resend:", data);

    if (data.error) {
      console.error("Error detallado de Resend:", data.error);
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fatal en la API:', error);
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
  }
}
