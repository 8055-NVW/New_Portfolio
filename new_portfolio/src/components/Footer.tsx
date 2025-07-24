"use client";

import { useState, RefObject, FormEvent } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FooterProps = {
  contactRef: RefObject<HTMLElement | null>;
};

const myEmail = process.env.NEXT_PUBLIC_EMAIL;
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export default function Footer({ contactRef }: FooterProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Vivian",
        message,
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Email sent successfully!", { position: "top-center", autoClose: 3000 });
    } catch (error) {
      toast.error("Failed to send the email. Please try again.", { position: "top-center", autoClose: 3000 });
    }
  };

  return (
<footer
  ref={contactRef}
  className="bg-[#00000036]/35 backdrop-blur-md text-primary-content"
>
  {/* Main Grid Layout */}
  <div className="max-w-7xl mx-auto px-5 md:px-14 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
    
    {/* Left Section */}
    <div className="flex flex-col items-center text-slate-100 text-center md:items-center md:text-center w-full md:w-1/2 lg:w-[40%]">
      <p className="text-4xl font-bold text-slate-50 pb-5">Let's Connect</p>
      <div className="flex gap-6">
        <a href={`mailto:${myEmail}`} target="_blank" rel="noopener noreferrer">
          <img src="/assets/email-white.svg" alt="email" className="h-[40px]" />
        </a>
        <a href="https://www.linkedin.com/in/vivian-lopes-44094798/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin-white.svg" alt="linkedin" className="h-[40px]" />
        </a>
        <a href="https://github.com/8055-NVW" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github-white.svg" alt="github" className="h-[40px]" />
        </a>
      </div>
    </div>

    {/* Divider */}
    <div className="hidden lg:block border-l h-[260px] border-slate-300/30" />

    {/* Right Section (Form) */}
    <div className="bg-[#000000ab] backdrop-blur-xl rounded-2xl p-6 w-full lg:w-1/2">
      <p className="text-lg font-semibold text-slate-50 text-center pb-3">
        Get in Touch
      </p>
      <form onSubmit={handleSubmit} className="text-slate-100 space-y-3">
        <input
          className="bg-black rounded w-full p-3"
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="bg-black rounded w-full p-3"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-black rounded w-full p-3"
          placeholder="Message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
              bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl">
              Send Email
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="w-full flex items-center justify-center bg-white p-3">
    <p className="text-black">Made by Vivian L.</p>
  </div>

  <ToastContainer />
</footer>

  );
}
