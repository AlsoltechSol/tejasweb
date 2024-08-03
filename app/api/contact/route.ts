import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

type sheetValues = {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  profession: string;
  message: string;
}

export async function POST(req: Request, res: Response) {
  try {
    const cellValues = await req.json() as sheetValues;
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_CONTACT_ID,
      range: 'A1:F1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [cellValues.fullName, cellValues.companyName, cellValues.email, cellValues.phoneNumber, cellValues.profession, cellValues.message],
        ],
      },
    });
    return Response.json({ message: "Thank you for contacting! We'll get back to you soon." });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Something went wrong!" });
  }
}