import { oAuth2Client } from "../../constants/oAuth2Client"

export default async function oAuth2Callback(req,res ){
  const {code} = req.param
  const { tokens } = await oAuth2Client.getToken(code)
  res.session.token = 
  oAuth2Client.re
  res.cookie('')
}