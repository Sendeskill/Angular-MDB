const functions = require("firebase-functions");

const sgMail = require("@sendgrid/mail");

const cors = require("cors")({
  origin: true
});

exports.emailMessage = functions.https.onRequest((req, res) => {
  const { name, email, nameCompany, obs } = req.body;
  return cors(req, res, () => {
    var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
        nameCompany - ${nameCompany || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${obs || ""}</p>
    </div>`;
    const msg = {
      to: email,
      from: "lucas_sendeski@hotmail.com",
      subject: `${name} sent you a new message`,
      text: text,
      html: text
    };
    sgMail.setApiKey(
      "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"
    );
    sgMail.send(msg);
    res.status(200).send("success");
  }).catch(() => {
    res.status(500).send("error");
  });
});