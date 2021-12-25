require("dotenv").config();

const router = require("express").Router();
const nodemailer = require("nodemailer");

// 3 Steps to create the mailing function
// 1. Create Transporter object
// 2. Set mailing options object
// 3. Deliver mail with sendmail method
router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }
  // console.log(process.env.EMAIL_PW);
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL_ACCT,
      pass: process.env.EMAIL_PW,
    },
  });

  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL_ACCT,
    subject: `message from ${data.name}`,
    html: `
                <h3>Informations<h3/>
                <ul>
                <li>Name: ${data.name}<li/>
                <li>Email: ${data.email}<li/>
                </ul>
                <h3>Message</h3>
                <p>${data.message}<p/>
                `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting Shawn Yap." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
