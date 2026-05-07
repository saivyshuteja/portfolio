import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaServer,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaBrain />,
    title: "Generative AI",
    tech: [
      "RAG",
      "LangChain",
      "Prompt Engineering",
      "LLMs",
      "Semantic Search",
    ],
  },

  {
    icon: <FaServer />,
    title: "Backend Systems",
    tech: [
      "FastAPI",
      "Python",
      "REST APIs",
      "Vector DB",
    ],
  },

  {
    icon: <FaDatabase />,
    title: "ML Engineering",
    tech: [
      "TensorFlow",
      "Scikit-learn",
      "Embeddings",
      "ChromaDB",
    ],
  },

  {
    icon: <FaCode />,
    title: "Frontend & Tools",
    tech: [
      "React",
      "Streamlit",
      "GitHub",
      "VS Code",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-[#07101f]"
    >

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-24">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-5">
            Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            AI Engineering
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Capabilities
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-10 hover:border-cyan-400 hover:-translate-y-3 transition duration-500"
            >

              <div className="text-5xl text-cyan-400 mb-8">
                {skill.icon}
              </div>

              <h3 className="text-3xl font-bold mb-8">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-4">

                {skill.tech.map((item, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 rounded-2xl bg-black/30 border border-white/10 text-gray-300 group-hover:border-cyan-400 transition duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;