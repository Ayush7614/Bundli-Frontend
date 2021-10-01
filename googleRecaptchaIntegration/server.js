require("dotenv").config();
const express = require("express");
const fetch = require("isomorphic-fetch");

const app = express();
app.use(express.json());

// reCaptcha route
app.post("/api/verifyRecaptcha", (req, res) => {
  const { reCaptcha } = req.body;

  const secret_key = process.env.SECRET_KEY;
  const site_key = reCaptcha;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${site_key}`;

  fetch(url, {
    method: "post",
  })
    .then((response) => response.json())
    .then((google_response) => {
      if (google_response.success == true) {
        res.status(200).json({ status: "ok" });
      } else {
        return res
          .status(403)
          .json({ status: "error", error: "invalid_captcha" });
      }
    })
    .catch((error) => {
      return res.status(500).json({ status: "error", error });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `Server is running on port ${PORT}`);
