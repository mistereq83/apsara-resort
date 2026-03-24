"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="font-body text-[15px] text-brand-blue/75 py-10 text-center">Thanks for submitting!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-body text-[13px] text-brand-blue/60 mb-1 block">First Name</label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="w-full border border-brand-blue/20 px-3 py-2 font-body text-[14px] text-brand-blue outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>
        <div>
          <label className="font-body text-[13px] text-brand-blue/60 mb-1 block">Last Name</label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="w-full border border-brand-blue/20 px-3 py-2 font-body text-[14px] text-brand-blue outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="font-body text-[13px] text-brand-blue/60 mb-1 block">Email *</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-brand-blue/20 px-3 py-2 font-body text-[14px] text-brand-blue outline-none focus:border-brand-blue/50 transition-colors"
        />
      </div>
      <div>
        <label className="font-body text-[13px] text-brand-blue/60 mb-1 block">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="w-full border border-brand-blue/20 px-3 py-2 font-body text-[14px] text-brand-blue outline-none focus:border-brand-blue/50 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#7B2D8E] text-white py-3 text-[13px] tracking-widest font-body hover:opacity-80 transition-opacity"
      >
        Send
      </button>
    </form>
  );
}
