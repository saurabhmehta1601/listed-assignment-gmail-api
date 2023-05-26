import { oAuth2Client } from "../../constants/oAuth2Client.js"

export default async function callbackRoute(req,res ){
  const {code} = req.query

  const { tokens } = await oAuth2Client.getToken(code)
  req.session.tokens = tokens
  return res.redirect('/see-tokens')
}