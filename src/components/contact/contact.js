import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n8xwfyq",
        "template_8e1lj73",
        form.current,
        "40VufaW-ullnqJ3Ek"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className="contactContainer">
      <h1>Contact Me</h1>
      <div className="contactMeWrapper">
        <div className="contacts">
          <h4>&#128237; - l.avetisyan7777@gmail.com</h4>
          <h4>&#128222; - 374 98550027</h4>
          <div>
            <h4>
            <FaLinkedin style = {{color: "#0077B5"}}/>
            <a  href="https://www.linkedin.com/in/luiza-avetisyan-7038aa17b/"
                target="_blank">
               - Linkedin page
            </a>
            </h4>
          </div>
          <div>
            <h4>
                <FaGithub style={{color: "black"}}/>
                <a href="https://github.com/LuizaAv" target="_blank">
                - Github page
                </a>
            </h4>
          </div>
        </div>
        <div className="messageContainer">
          <h3>You can also send me a message</h3>
          <form ref={form} onSubmit={sendEmail} className="messageContainer">
            <input
              onChange={nameChange}
              value = {name}
              type="text"
              name="user_name"
              className="input"
              placeholder="  ...enter your name please"
            />
            <input
              onChange={emailChange}
              value = {email}
              type="email"
              name="user_email"
              className="input"
              placeholder="   ...enter your email please"
            />
            <textarea
              onChange={textChange}
              value = {text}
              name="message"
              className="textarea"
              placeholder="   ...enter your message please"
            />
            <input type="submit" className="submitBtn" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
