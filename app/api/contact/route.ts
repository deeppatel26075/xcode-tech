import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, country, email, phone, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: "Required fields are missing. Name, email, service, budget, and message are required." },
        { status: 400 }
      );
    }

    // SMTP Configuration from environment variables
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER || "contact@xcodetech.in";
    const pass = process.env.SMTP_PASSWORD;

    // Fallback mode if password is not set
    if (!pass) {
      console.warn("SMTP_PASSWORD is not set in environment variables. Falling back to Log Mode.");
      console.log("=================== PROJECT BRIEF SUBMISSION ===================");
      console.log("Name:", name);
      console.log("Company:", company || "N/A");
      console.log("Country:", country || "N/A");
      console.log("Email:", email);
      console.log("Phone:", phone || "N/A");
      console.log("Service Requested:", service);
      console.log("Investment Level:", budget);
      console.log("Message:", message);
      console.log("================================================================");
      return NextResponse.json({ success: true, mode: "log-fallback" });
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for port 465, false for 587 or others
      auth: {
        user,
        pass
      }
    });

    // Translate option values to readable names
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

    const serviceName = serviceLabels[service] || service;
    const budgetName = budgetLabels[budget] || budget;

    // Setup email mail options
    const mailOptions = {
      from: `"${name} via Xcode Tech" <${user}>`,
      to: "contact@xcodetech.in",
      replyTo: email,
      subject: `New Project Brief: ${name} (${company || "Individual"})`,
      text: `
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
      html: `
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
    console.error("Error sending project brief email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process project brief submission." },
      { status: 500 }
    );
  }
}
