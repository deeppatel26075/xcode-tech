import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper function to send Telegram alerts securely
async function sendTelegramNotification(isQuickLead: boolean, data: any) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.log("Telegram notification skipped: Credentials not set in environment variables.");
    return;
  }

  try {
    const text = isQuickLead
      ? `📞 *Quick Callback Request*
👤 *Name*: ${data.name}
📱 *Phone*: ${data.phone}
📧 *Email*: ${data.email || 'N/A'}`
      : `🚀 *New Project Inquiry*
👤 *Name*: ${data.name}
🏢 *Company*: ${data.company || 'N/A'}
🌍 *Country*: ${data.country || 'N/A'}
📧 *Email*: ${data.email}
📱 *Phone*: ${data.phone || 'N/A'}
🛠️ *Service*: ${data.serviceName}
💰 *Budget*: ${data.budgetName}
📝 *Message*:
${data.message}`;

    const tgUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(tgUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Telegram API error response:", errText);
    } else {
      console.log("Telegram notification sent successfully.");
    }
  } catch (tgError) {
    console.error("Failed to send Telegram notification:", tgError);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, country, email, phone, service, budget, message, isQuickLead } = body;

    // 1. Validate required fields depending on lead type
    if (isQuickLead) {
      if (!name || !phone) {
        return NextResponse.json(
          { error: "Required fields are missing. Name and mobile number are required." },
          { status: 400 }
        );
      }
    } else {
      if (!name || !email || !service || !budget || !message) {
        return NextResponse.json(
          { error: "Required fields are missing. Name, email, service, budget, and message are required." },
          { status: 400 }
        );
      }
    }

    // 2. Define service & budget readable labels for standard briefs
    const serviceLabels: Record<string, string> = {
      launch_product: "Launch a new product",
      modernize_business: "Modernize my business",
      automate_operations: "Automate operations",
      scale_software: "Scale existing software",
      discuss_partnership: "Discuss partnership"
    };

    const budgetLabels: Record<string, string> = {
      starter: "Starter Solution",
      growth: "Growth Solution",
      professional: "Professional Build",
      enterprise: "Enterprise Partnership"
    };

    const serviceName = isQuickLead ? "N/A" : (serviceLabels[service] || service);
    const budgetName = isQuickLead ? "N/A" : (budgetLabels[budget] || budget);

    // 3. Trigger Telegram Bot Alert in parallel
    const dataForTelegram = {
      name,
      company,
      country,
      email,
      phone,
      serviceName,
      budgetName,
      message
    };
    await sendTelegramNotification(!!isQuickLead, dataForTelegram);

    // 4. SMTP configuration
    const host = process.env.SMTP_HOST || "smtp.zoho.in";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER || "contact@xcodetech.in";
    const pass = process.env.SMTP_PASSWORD;

    // Fallback Mode if password is not set
    if (!pass) {
      console.warn("SMTP_PASSWORD is not set in environment variables. Falling back to Log Mode.");
      console.log(isQuickLead ? "=================== QUICK LEAD CALLBACK REQUEST ===================" : "=================== PROJECT BRIEF SUBMISSION ===================");
      console.log("Name:", name);
      if (!isQuickLead) console.log("Company:", company || "N/A");
      if (country) console.log("Country:", country);
      if (email) console.log("Email:", email);
      console.log("Phone:", phone || "N/A");
      if (!isQuickLead) {
        console.log("Service Requested:", serviceName);
        console.log("Investment Level:", budgetName);
        console.log("Message:", message);
      }
      console.log("================================================================");
      return NextResponse.json({ success: true, mode: "log-fallback" });
    }

    // 5. Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass
      }
    });

    // 6. Setup email mail options
    const mailOptions = {
      from: `"${name} via Xcode Tech" <${user}>`,
      to: process.env.SMTP_TO || "admin@xcodetech.in",
      replyTo: email || undefined,
      subject: isQuickLead ? `Quick Callback Request: ${name}` : `New Project Brief: ${name} (${company || "Individual"})`,
      text: isQuickLead 
        ? `
Quick Callback Request from xcodetech.in

Name: ${name}
Phone Number: ${phone}
Email Address: ${email || "N/A"}
        `
        : `
New Project Brief Inquiry from xcodetech.in

Name: ${name}
Company: ${company || "N/A"}
Country: ${country || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Service Requested: ${serviceName}
Investment Level: ${budgetName}

Message:
${message}
        `,
      html: isQuickLead
        ? `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #38bdf8 100%); padding: 24px; text-align: center; color: white;">
            <h2 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: -0.025em;">Xcode Tech</h2>
            <p style="margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.85;">Quick Callback Request</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <p style="margin-top: 0; font-size: 14px; color: #64748b;">A visitor requested a quick callback. Below are their contact details:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 150px;">Full Name:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${phone}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Xcode Tech. Automated notification.</p>
          </div>
        </div>
        `
        : `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #2563eb 0%, #38bdf8 100%); padding: 24px; text-align: center; color: white;">
            <h2 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: -0.025em;">Xcode Tech</h2>
            <p style="margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.85;">Project Brief Form Inquiry</p>
          </div>

          <!-- Content Body -->
          <div style="padding: 24px; background-color: #ffffff;">
            <p style="margin-top: 0; font-size: 14px; color: #64748b;">A new project brief submission was completed on your website. Below are the client's parameters:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px;">
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 150px;">Full Name:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569;">Company Name:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${company || "N/A"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569;">Country:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${country || "N/A"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
                  <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${phone || "N/A"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569;">Service Type:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${serviceName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #475569;">Investment Level:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${budgetName}</td>
                </tr>
              </tbody>
            </table>

            <!-- Client Message -->
            <div style="margin-top: 24px;">
              <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Client Message</h4>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 13px; color: #334155; white-space: pre-wrap; font-family: monospace;">${message}</div>
            </div>
          </div>

          <!-- Footer Credit -->
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Xcode Tech. Automated notification.</p>
          </div>
        </div>
        `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error processing project brief submission:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process project brief submission." },
      { status: 500 }
    );
  }
}
