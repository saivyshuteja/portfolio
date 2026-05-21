import { FaArrowRight } from "react-icons/fa";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Conversational RAG Platform",

    desc:
      "Context-aware AI assistant with PDF upload, memory persistence, semantic retrieval, and hallucination reduction using LangChain and ChromaDB.",

    tags: [
      "LangChain",
      "ChromaDB",
      "Groq API",
      "Streamlit",
    ],

    github:
      "https://github.com/saivyshuteja/Conversational-RAG-with-PDF-Chat-History",
  },

  {
    title: "PDF Question Answering System",

    desc:
      "RAG-based document intelligence system using vector embeddings and contextual retrieval workflows.",

    tags: [
      "RAG",
      "ChromaDB",
      "Groq API",
      "Streamlit",
    ],

    github:
      "https://github.com/saivyshuteja/PDF-Q-A-System-Streamlit-LangChain-Groq-",
  },

  {
    title: "LLM Chatbot",

    desc:
      "Dynamic chatbot system with configurable parameters, prompt engineering, and Ollama integration.",

    tags: [
      "LLMs",
      "Ollama",
      "LangChain",
      "Prompting",
    ],

    github:
      "https://github.com/saivyshuteja/Generative-AI-Chatbot",
  },

  {
    title: "Dog vs Cat Classification",

    desc:
      "Deep learning image classification model built using TensorFlow and CNN architecture.",

    tags: [
      "TensorFlow",
      "CNN",
      "Keras",
      "Deep Learning",
    ],

    github:
      "https://github.com/saivyshuteja/Dog_vs_Cat__Classification_using_CNN",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-[#050816]"
    >

      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-24">

          <p className="text-purple-400 uppercase tracking-[0.3em] mb-5">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Featured AI
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
              Systems
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-4 hover:border-cyan-400 transition duration-500"
            >

              {/* Top Gradient */}
              <div className="h-64 bg-linear-to-br from-purple-600 via-cyan-500 to-blue-700"></div>

              <div className="p-10">

                <h3 className="text-3xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-8">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-10">

                  {project.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-xl bg-black/30 border border-white/10 text-sm text-cyan-300"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-cyan-400 font-semibold text-lg hover:text-purple-400 transition"
                >
                  <FaGithub />
                  View on GitHub
                  <FaArrowRight className="group-hover:translate-x-2 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;