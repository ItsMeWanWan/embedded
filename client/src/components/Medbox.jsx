import { useState } from "react";
import "./Medbox.css";

function Medbox() {
  const [selectedSections, setSelectedSections] = useState(new Set());

  const handleSectionClick = (index) => {
    setSelectedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const sections = Array.from({ length: 27 }, (_, i) => i);

  return (
    <div className="medbox-container">
      <h2 className="medbox-title">Medbox</h2>
      <div className="medbox-grid">
        {sections.map((index) => (
          <div
            key={index}
            className={`medbox-section ${
              selectedSections.has(index) ? "selected" : ""
            }`}
            onClick={() => handleSectionClick(index)}
          >
            <span className="section-number">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medbox;

