import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { product, name, email, phone, quantity, message } = req.body;

    if (!name || !email || !phone || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
      port: Number(process.env.BREVO_SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.BREVO_SMTP_USER, pass: process.env.BREVO_SMTP_KEY },
    });

    const e = escapeHtml;
    await transporter.sendMail({
      from: `"${e(name)}" <${process.env.BREVO_FROM_EMAIL || 'noreply@aquaglow.co.in'}>`,
      to: 'aquaglowenterprisesjaipur@gmail.com',
      subject: `Pricing Inquiry: ${e(product)}`,
      html: `
        <h2>New Pricing Inquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
          <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Product</td><td style="padding:8px 12px">${e(product)}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Name</td><td style="padding:8px 12px">${e(name)}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Email</td><td style="padding:8px 12px">${e(email)}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Phone</td><td style="padding:8px 12px">${e(phone)}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Quantity</td><td style="padding:8px 12px">${e(quantity)}</td></tr>
          <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Message</td><td style="padding:8px 12px">${e(message || '')}</td></tr>
        </table>`,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send inquiry' });
  }
}
