import express from 'express';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { config } from 'dotenv';
config();

export interface ContactPayload {
  product: string;
  name: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
}

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function createTransporter() {
  return nodemailer.createTransport({
    host: requiredEnv('BREVO_SMTP_HOST'),
    port: Number(process.env.BREVO_SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: requiredEnv('BREVO_SMTP_USER'),
      pass: requiredEnv('BREVO_SMTP_KEY'),
    },
  });
}

function buildEmailHtml(payload: ContactPayload): string {
  const e = escapeHtml;
  return `
    <h2>New Pricing Inquiry</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Product</td><td style="padding:8px 12px">${e(payload.product)}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Name</td><td style="padding:8px 12px">${e(payload.name)}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Email</td><td style="padding:8px 12px">${e(payload.email)}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Phone</td><td style="padding:8px 12px">${e(payload.phone)}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Quantity</td><td style="padding:8px 12px">${e(payload.quantity)}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Message</td><td style="padding:8px 12px">${e(payload.message)}</td></tr>
    </table>
  `;
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '16kb' }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Try again later.' },
});
app.use('/api/', apiLimiter);

app.post('/api/contact', async (req, res) => {
  try {
    const payload = req.body as ContactPayload;

    if (!payload.name || !payload.email || !payload.phone || !payload.quantity) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"${escapeHtml(payload.name)}" <${requiredEnv('BREVO_FROM_EMAIL')}>`,
      to: 'aquaglowenterprisesjaipur@gmail.com',
      subject: `Pricing Inquiry: ${escapeHtml(payload.product)}`,
      html: buildEmailHtml(payload),
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    res.status(500).json({ error: 'Failed to send inquiry' });
  }
});

const PORT = Number(process.env.API_PORT) || 3001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
