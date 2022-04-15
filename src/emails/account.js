const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "insecure999@protonmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to my Task App ${name}`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "insecure999@protonmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye ${name}. I hope to see you back sometime soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
