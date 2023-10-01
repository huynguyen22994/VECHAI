'use strict'
const { google } = require('googleapis')
const nodemailer = require('nodemailer')
require('dotenv').config()

const CLIENT_ID = process.env['CLIENT_ID']
const CLIENT_SECRET = process.env['CLIENT_SECRET']
const REDIRECT_URI = process.env['REDIRECT_URI']
const REFRESH_TOKEN = process.env['REFRESH_TOKEN']

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

class MailHelper {

    static getTransport = async () => {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "marketing.chintacoffeevn@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
          },
        });
        return transport
    }

    static sendMail = async ({ 
        from = 'marketing.chintacoffeevn@gmail.com', 
        to, subject = "Hello ✔", text, html }) => {
        const transporter = await MailHelper.getTransport()
        const info = transporter.sendMail({
            from: from , // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html, // html body
        });
        return info
    }

}

module.exports = MailHelper