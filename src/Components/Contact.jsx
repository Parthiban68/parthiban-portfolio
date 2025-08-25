import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../Utils/ThemeContext";

const ContactPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add real submit logic here
    setSubmitted(true);
  };
  
  const contactItems = [
    {
      Icon: FaEnvelope,
      label: "Email",
      value: "parthiban@example.com",
      href: "mailto:parthiban@example.com",
    },
    {
      Icon: FaPhone,
      label: "Phone",
      value: "+1 234 567 890",
      href: "tel:+1234567890",
    },
    {
      Icon: FaMapMarkerAlt,
      label: "Location",
      value: "Chennai, India",
    },
  ];

  return (
    <section
      className={`relative min-h-screen overflow-hidden px-6 py-20 transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Background shapes */}
      {/* <span className="absolute top-[-120px] left-[-80px] w-72 h-72 rounded-full bg-gradient-to-tr from-green-400 via-lime-400 to-teal-300 opacity-40 blur-3xl animate-animateSpinSlow"></span> */}
      {/* <span className="absolute bottom-[-100px] right-[-60px] w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-400 via-green-400 to-green-200 opacity-30 blur-3xl animate-animateScalePulse"></span> */}

      {/* Heading and diagonal accent */}
      <div className="max-w-7xl mx-auto relative mb-16 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1
            className={`text-6xl sm:text-7xl font-extrabold tracking-tight z-10 relative ${
              isDark
                ? "text-white"
                : "text-green-700"
            }`}
          >
            Contact
          </h1>
          {/* Diagonal accent block */}
          <div
            className={`absolute -bottom-6 left-0 w-48 h-12 rotate-12 rounded-xl opacity-40 ${
              isDark ? "bg-lime-600" : "bg-green-300"
            }`}
          />
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Contact Info Sidebar */}
        <aside
      className={`md:w-1/3 rounded-3xl p-10 shadow-lg backdrop-blur-md border ${
        isDark ? "bg-gray-900 border-green-700" : "bg-white border-green-300"
      } flex flex-col gap-12`}
    >
      <h2
        className={`text-4xl font-extrabold  ${
          isDark ? "text-green-400" : "text-green-700"
        }`}
      >
        Get in Touch
      </h2>
      <p
        className={`text-lg max-w-md ${
          isDark ? "text-gray-300" : "text-green-700"
        }`}
      >
        Feel free to contact me about any projects, questions, or collaboration
        opportunities.
      </p>

      <div className="flex flex-col gap-8 text-lg">
        {contactItems.map(({ Icon, label, value, href }) => (
          <div
            key={label}
            className="flex items-center gap-5 cursor-default group transform transition"
          >
            <Icon
              className={`text-green-400 w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                isDark ? "drop-shadow-[0_0_3px_rgba(34,197,94,0.8)]" : ""
              }`}
            />
            {href ? (
              <a
                href={href}
                className={`hover:text-green-500 transition-colors duration-300 font-semibold ${
                  isDark ? "text-green-300" : "text-green-700"
                }`}
              >
                {value}
              </a>
            ) : (
              <span
                className={`select-none font-semibold ${
                  isDark ? "text-gray-400" : "text-green-700"
                }`}
              >
                {value}
              </span>
            )}
          </div>
        ))}
      </div>
    </aside>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className={`md:w-2/3 rounded-3xl p-10 shadow-xl backdrop-blur-sm border flex flex-col gap-6 ${
            isDark ? "bg-gray-900 border-green-700" : "bg-white border-green-300"
          }`}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-400 font-bold text-2xl text-center py-20"
            >
              Thank you! I will get back to you soon.
            </motion.div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              {["name", "email", "message"].map((field) => (
                
                <div key={field} className="relative z-0 w-full group">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    id={field}
                    required
                    autoComplete="off"
                    placeholder=" "
                    value={formData[field]}
                    onChange={handleChange}
                    className={`block py-4 px-3 w-full text-lg bg-transparent border-2 rounded-xl appearance-none
                      peer focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent
                      ${
                        isDark
                          ? "border-green-700 text-white placeholder-transparent"
                          : "border-green-300 text-black placeholder-transparent"
                      }`}
                  />
                  <label
                    htmlFor={field}
                    className={`absolute text-xl text-green-400 duration-300 transform -translate-y-7 scale-75 top-3 left-4 origin-[0] peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 pointer-events-none select-none`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === "message" && (
                    <textarea
                      name="message"
                      rows={5}
                      placeholder=" "
                      className={`block mt-4 w-full rounded-xl border-2 bg-transparent px-3 py-3 text-lg resize-none
                        peer focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent
                        ${
                          isDark
                            ? "border-green-700 text-white placeholder-transparent"
                            : "border-green-300 text-black placeholder-transparent"
                        }`}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="mt-10 rounded-full bg-gradient-to-r from-green-400 via-lime-400 to-teal-400 px-12 py-4 text-black font-semibold hover:brightness-110 active:scale-95 transition-transform duration-300 self-start"
              >
                Send
              </button>
            </>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactPage;
