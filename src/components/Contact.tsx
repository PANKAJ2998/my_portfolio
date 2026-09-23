"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiCopy,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("itspankaj0108@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      form.subject.trim() ? form.subject : `Message from ${form.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(
      `mailto:itspankaj0108@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-20 sm:py-24 relative flex flex-col items-center justify-center">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="section-title text-white">Get In Touch</h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind, an opportunity, or simply want to connect? My inbox is always open.
          </p>
        </motion.div>

        {/* Main Unified Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ── LEFT: Direct Contact & Info ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
            variants={fadeUp}
            className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-[#0d1424] border border-slate-800/90 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for new opportunities</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                Let&apos;s build something great together.
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                I am open to full-time software engineering positions, technical internships, and innovative development projects. Feel free to reach out directly.
              </p>

              {/* Direct Info List */}
              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <FiMail size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400 font-medium mb-0.5">Email</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        href="mailto:itspankaj0108@gmail.com"
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        itspankaj0108@gmail.com
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 border border-slate-700 transition-colors"
                        title="Copy email"
                      >
                        {copied ? (
                          <>
                            <FiCheck className="text-emerald-400" size={12} />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <FiCopy size={12} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-0.5">Phone</div>
                    <a
                      href="tel:+917999577894"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      +91-7999577894
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-0.5">Location</div>
                    <div className="text-sm font-semibold text-white">
                      Delhi, India
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Open to on-site, hybrid &amp; remote roles
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Bar at Bottom of Card */}
            <div className="pt-8 mt-8 border-t border-slate-800/80 flex items-center gap-3">
              <span className="text-xs font-medium text-slate-400 mr-1">Profiles:</span>
              <a
                href="https://github.com/PANKAJ2998"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors"
              >
                <FiGithub size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pankaj-singh-6a7616323"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors"
              >
                <FiLinkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Modern Professional Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={2}
            variants={fadeUp}
            className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-[#0d1424] border border-slate-800/90 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090e1a] border border-slate-700/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090e1a] border border-slate-700/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Full-Time Opportunity / Project Inquiry"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090e1a] border border-slate-700/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090e1a] border border-slate-700/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none font-sans leading-relaxed"
                />
              </div>
            </div>

            {/* Refined, Human Submit Action */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                Direct response typically within 24 hours.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-cyan-400/20 w-full sm:w-auto cursor-pointer"
              >
                {sent ? (
                  <>
                    <FiCheck size={16} className="text-slate-950" />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={14} />
                  </>
                )}
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
