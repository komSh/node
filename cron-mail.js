const cron = require('node-cron');
const nodemailer = require('nodemailer');

// ...

// Create mail transporter.
let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '26b4660574a7f1',
      pass: 'd30fcc95648734'
    }
  });

  // ...

// Sending emails every minute.
cron.schedule('* * * * *', function() {
    console.log('---------------------');
    console.log('Running Cron Job');
  
    let messageOptions = {
      from: 'komal.shahid@invozone.com',
      to: 'shahidkomal3@gmail.com',
      subject: 'Scheduled Email',
      text: 'Hi there. This email was automatically sent by us.'
    };
  
    transporter.sendMail(messageOptions, function(error, info) {
      if (error) {
        throw error;
      } else {
        console.log('Email successfully sent!');
      }
    });
  });