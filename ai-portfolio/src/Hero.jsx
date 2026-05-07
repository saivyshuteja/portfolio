import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

import profile from "./assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      {/* Purple Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-600/30 blur-[140px] rounded-full animate-pulse"></div>

      {/* Cyan Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse"></div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-center">

        <div className="grid md:grid-cols-2 gap-20 items-center w-full">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg mb-8">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>

              <span className="text-sm tracking-widest text-cyan-300 uppercase">
                Open to AI Engineer Roles
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.1] mb-8">
              Building
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                Intelligent AI
              </span>
              Systems.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-2xl mb-10">
              Generative AI Engineer specializing in
              <span className="text-cyan-400">
                {" "}RAG pipelines
              </span>,
              semantic retrieval systems,
              LLM applications,
              vector databases,
              and scalable AI architectures.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-4 mb-12">

              {[
                "RAG",
                "LangChain",
                "FastAPI",
                "ChromaDB",
                "LLMs",
                "TensorFlow",
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">

              {/* Primary Button */}
              <button className="group px-8 py-5 rounded-2xl bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/20 flex items-center justify-center gap-3">

                Explore Projects

                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              {/* Secondary Button */}
              <button className="px-8 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition duration-300 text-lg">
                Download Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-12">

              <a
                href="https://github.com/"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg flex items-center justify-center text-2xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg flex items-center justify-center text-2xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center relative"
          >

            {/* Outer Glow */}
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-linear-to-r from-cyan-500 to-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

            {/* Rotating Border */}
            <div className="absolute w-[320px] h-[420px] md:w-[420px] md:h-[520px] rounded-[40px] border border-cyan-400/30 animate-spin-slow"></div>

            {/* Glass Card */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-4 overflow-hidden shadow-2xl">

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent"></div>

              <img
                src={profile}
                alt="Sai Teja"
                className="relative w-[300px] md:w-[400px] rounded-[30px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050816] to-transparent"></div>
    </section>
  );
}

export default Hero;