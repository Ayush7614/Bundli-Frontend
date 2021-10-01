import React, { useState } from "react";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    reCaptcha: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const onChange = (value) => {
    setFormData({ ...formData, reCaptcha: value });
  };

  let captcha;

  const setCaptchaRef = (ref) => {
    if (ref) {
      return (captcha = ref);
    }
  };

  const resetCaptcha = () => {
    captcha.reset();
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const { name, reCaptcha } = formData;

    try {
      const response = await axios.post("/api/verifyRecaptcha", {
        name,
        reCaptcha,
      });

      if (response.data.status === "ok") {
        alert("Captcha verified");
      }
    } catch (error) {
      if (error.response.data.error === "invalid_captcha") {
        alert("Please, Check reCaptcha");
      } else {
        alert("Somethng went wrong");
      }
    }

    resetCaptcha();
  };

  return (
    <>
      <div className="container">
        <h1>Google reCAPTCHA</h1>

        <form onSubmit={submitForm}>
          <input
            type="text"
            name="name"
            onChange={inputEvent}
            value={formData.name}
            placeholder="Enter Name"
            required
          />
          <br />

          <ReCAPTCHA
            ref={(r) => setCaptchaRef(r)}
            className="g-recaptcha"
            sitekey="<client_secret_key>"
            onChange={onChange}
            theme="light"
          />
          <br />

          <button type="submit" name="submit_btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
