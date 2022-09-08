import { useContext, Fragment } from "react";
import useValidate from "../../hooks/use-validate";
import emailjs from "@emailjs/browser";
import NotificationContext from "../../context/notification-context";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";
const ContactForm = () => {
  const notificationCtx = useContext(NotificationContext);

  const validateText = (value) => value.trim() !== "",
    validateEmail = (value) => value.trim() !== "" && value.includes("@");
  //name input validation
  const {
    value: nameValue,
    error: nameInputInvalid,
    inputIsValid: enteredNameIsValid,

    valueChangeHandeler: nameInputChangeHandeler,
    valueTouchHandeler: nameInputTouchHandeler,
    reset: resetNameInput,
  } = useValidate(validateText);

  //email input validation
  const {
    value: emailValue,
    error: emailInputInvalid,
    inputIsValid: enteredEmailIsValid,

    valueChangeHandeler: emailInputChangeHandeler,
    valueTouchHandeler: emailInputTouchHandeler,
    reset: resetEmailInput,
  } = useValidate(validateEmail);

  //message input validation

  const {
    value: messageValue,
    error: messageInputInvalid,
    inputIsValid: enteredMessageIsValid,

    valueChangeHandeler: messageInputChangeHandeler,
    valueTouchHandeler: messageInputTouchHandeler,
    reset: resetMessageInput,
  } = useValidate(validateText);

  //inputs is valid

  let form = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    form = true;
  }
  const submitHandeler = (e) => {
    e.preventDefault();
    notificationCtx.showNotification({
      message: "Sending Message",
      status: "pending",
    });

    if (!form) {
      notificationCtx.showNotification({
        message: "Failed to send your message",
        status: "error",
      });
      return;
    }
    emailjs
      .sendForm(
        "service_2nthapo",
        "template_so2ue8d",
        e.target,
        "amwzrqJgjrEPhX1k2"
      )
      .then(
        (result) => {
          notificationCtx.showNotification({
            message: "Message Sent Successfully",
            status: "success",
          });
          resetNameInput();
          resetEmailInput();
          resetMessageInput();
        },
        (error) => {
          notificationCtx.showNotification({
            message: error.text || "failed to send",
            status: "error",
          });
        }
      );
  };

  const nameInputClass = nameInputInvalid ? classes.invalid : "",
    emailInputClass = emailInputInvalid ? classes.invalid : "",
    messageInputClass = messageInputInvalid ? classes.invalid : "";

  return (
    <Fragment>
      {notificationCtx.notification && (
        <Notification
          message={notificationCtx.notification.message}
          status={notificationCtx.notification.status}
        />
      )}
      <section className={classes.contact}>
        <h1>How Can I help you ?</h1>
        <form className={classes.form} onSubmit={submitHandeler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                value={nameValue}
                name="from_name"
                onBlur={nameInputTouchHandeler}
                onChange={nameInputChangeHandeler}
                className={nameInputClass}
              />
              {nameInputInvalid && (
                <p className="feedback">Please Enter Your name</p>
              )}
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                className={emailInputClass}
                onBlur={emailInputTouchHandeler}
                onChange={emailInputChangeHandeler}
                value={emailValue}
                name="email_id"
              />
              {emailInputInvalid && (
                <p className="feedback">Please Enter Your E-mail</p>
              )}
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows={5}
              className={messageInputClass}
              onBlur={messageInputTouchHandeler}
              onChange={messageInputChangeHandeler}
              value={messageValue}
              name="message"
            ></textarea>
            {messageInputInvalid && (
              <p className="feedback">Please Enter Your message</p>
            )}
          </div>
          <div className={classes.controls}>
            <button type="submit" disabled={!form}>
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};
export default ContactForm;
