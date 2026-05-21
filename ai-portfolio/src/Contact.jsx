import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-[#07101f]"
    >

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-5">
              Contact
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Let's Build
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                AI Together.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-9 mb-10">
              Open to AI Engineer roles, internships,
              collaborations, and innovative AI projects.
            </p>

            {/* Socials */}
            <div className="flex gap-5">
              <a
                href="https://github.com/saivyshuteja"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/adepusai"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:steja9535@gmail.com"
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-10">

            <form className="space-y-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-5 rounded-2xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-5 rounded-2xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full p-5 rounded-2xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
              ></textarea>

              <button className="w-full py-5 rounded-2xl bg-linear-to-r from-cyan-400 to-purple-500 text-black font-bold text-lg hover:scale-[1.02] transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;