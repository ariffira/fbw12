// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// console.log('api',process.env.SENDGRID_API_KEY)
let sendEmail=(to,from,subject,text)=>{
  console.log('to',to ,'from',from)
const msg = {
  to, // Change to your recipient
  from,
  subject,
  text,
  html:text
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email was sent')
  })
  .catch((error) => {
    console.error('error test',error.message)
  })
}
  module.exports=sendEmail;