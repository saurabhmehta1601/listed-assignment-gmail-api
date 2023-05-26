import {google} from 'googleapis'

const client_id = "224783090784-oafnnkanr5mmh0ptqh56h1uabrufrncc.apps.googleusercontent.com"
const client_secret = "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"
const redirect_uri = "http://localhost:8080/auth/callback"

export const oAuth2Client = new google.auth.OAuth2( client_id, client_secret, redirect_uri)