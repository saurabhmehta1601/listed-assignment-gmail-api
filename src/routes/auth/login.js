import {oAuth2Client} from "../../constants/oAuth2Client.js"

export default function login (req,res){

  const authURL = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['email', 'profile']
  })
  return res.status(200).json({authURL})
}