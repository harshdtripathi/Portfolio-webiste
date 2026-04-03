import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { FiMail, FiUser, FiMessageSquare, FiTag } from "react-icons/fi";

const Contactus = () => {
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    // Append the user's Web3Forms Access Key
    formData.append("access_key", "d0b4c802-ae89-448c-8694-e4c014ad7cf6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset(); // Clear the form
        
        // Reset status after a few seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.15)] relative"
      >
        {/* Glow overlay */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Left Side: Contact Information */}
        <div className="p-10 md:p-14 flex flex-col justify-center relative z-10 border-b md:border-b-0 md:border-r border-white/10 bg-black/20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-wide">
              Let's build something <span className="text-cyan-400">extraordinary.</span>
            </h2>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed mt-4">
              Whether you have a question about our services, pricing, or are ready to start your next big project, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wider">EMAIL US</p>
                  <p className="text-sm">hello@ashdevelopers.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="p-10 md:p-14 relative z-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                  <FaCheckCircle className="text-4xl text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 text-sm">
                  Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                  <FaExclamationCircle className="text-4xl text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Transmission Failed</h3>
                <p className="text-gray-400 text-sm">
                  Something went wrong while sending your message. Please try again later.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col space-y-5"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">Send a Message</h3>

                {/* Name */}
                <div className="relative group">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  />
                </div>

                {/* Subject */}
                <div className="relative group">
                  <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <FiMessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Your Message..."
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 active:scale-[0.98] transition-all text-white font-semibold py-3.5 rounded-xl shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Contactus;
