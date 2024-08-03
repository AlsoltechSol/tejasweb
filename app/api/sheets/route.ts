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
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobRole: string;
  resume: string;
  hiringReason: string;
}

export async function POST(req: Request, res: Response) {
  try {
    const cellValues = await req.json() as sheetValues;
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:G1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [cellValues.firstName, cellValues.lastName, cellValues.email, cellValues.phoneNumber, cellValues.jobRole, cellValues.resume, cellValues.hiringReason],
        ],
      },
    });
    return Response.json({ message: "🎉 Confirmed! Resume submitted" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Something went wrong!" });
  }
}