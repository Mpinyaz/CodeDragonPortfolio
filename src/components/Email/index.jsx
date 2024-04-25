import "./Email.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "sonner";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          toast.success(`${result.text} - Email sent successfully`);
          form.current.reset();
        },
        (error) => {
          toast.error(`${error.text} Email could not be sent`);
        },
      );
  };
  return (
    <>
      <form
        ref={form}
        className="contact-form flex flex-col justify-center gap-y-3"
        onSubmit={sendEmail}
      >
        <div className="form__item">
          <input
            type="text"
            name="user_name"
            className="form__input-text"
            required
          />

          <label htmlFor="nameCompany" className="form__label">
            <span className="form__label-name">Name *</span>
            <div className="form__label-line">
              <div className="form__label-bg"></div>
            </div>
            <div className="form__label-sq"></div>
          </label>
        </div>
        <div className="form__item">
          <input
            type="email"
            name="user_email"
            className="form__input-text"
            required
          />

          <label htmlFor="nameCompany" className="form__label">
            <span className="form__label-name">Email *</span>
            <div className="form__label-line">
              <div className="form__label-bg"></div>
            </div>
            <div className="form__label-sq"></div>
          </label>
        </div>
        <div className="form__item">
          <textarea
            name="message"
            id="message"
            className="form__input-text overflow-hidden mt-2"
            required
          ></textarea>
          <label htmlFor="nameCompany" className="form__label">
            <span className="form__label-name">Message *</span>
            <div className="form__label-line">
              <div className="form__label-bg"></div>
            </div>
            <div className="form__label-sq"></div>
          </label>
        </div>
        <button type="submit" className="form__btn bg-purple-200 rounded-lg">
          <span className="form__btn-txt font-extrabold">Send Email</span>
          <div className="form__btn-bg"></div>
        </button>
      </form>
    </>
  );
};
