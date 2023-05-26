import {google} from "googleapis"
import { oAuth2Client } from "../../constants/oAuth2Client.js";

export default async function sendMails(req, res){
  const tokens = req.session.tokens
  if(!tokens) return res.redirect('/auth/get-url')

  oAuth2Client.setCredentials(req.session.tokens)

  try {
    const gmail = google.gmail({version: 'v1', auth: oAuth2Client})
    const query = 'size:1'
    const response = await gmail.users.threads.list({ userId: 'me', q: query,maxResults: "10"})
    const messages = response.data.messages
    console.log({messages});
    return res.status(200).send("OK")
  } catch (error) {
    return res.status(500).json({helpText: "cannot send email" ,error})
  }
}