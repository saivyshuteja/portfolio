import React from "react";
import "./Achievements.css";

const achievements = [
  "Built production-ready RAG pipelines",
  "Reduced hallucinations",
  "Designed scalable FastAPI systems",
];

const Achievements = () => {
  return (
    <div className="achievements">
      {achievements.map((a, i) => (
        <div key={i} className="achievement-card">
          {a}
        </div>
      ))}
    </div>
  );
};

export default Achievements;