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
        className="flex flex-col justify-center gap-y-3"
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          name="user_name"
          className="border-2 border-indigo-400 p-2 rounded-lg"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="border-2 border-indigo-400 p-2 rounded-lg"
          placeholder="Your email"
        />
        <label>Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Your message"
          className="border-2 border-red-200 rounded-lg p-2"
        ></textarea>
        <button
          type="submit"
          className="mt-2 w-full h-10 bg-purple-200  shadow-link-shadow rounded-full gap-x-2 px-4 py-2 flex flex-row items-center justify-center font-semibold"
        >
          Send Message
        </button>
      </form>
    </>
  );
};
