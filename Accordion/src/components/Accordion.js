import { useState } from "react";
import data from "../utils/data.json";
export default Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const handleAccordionChange = (idx) => {
    if (idx === activeAccordion) {
      console.log(idx === activeAccordion);
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(idx);
  };
  return (
    <div className="Accordion__list">
      {data.map((d, idx) => {
        return (
          <div
            key={idx}
            className={`Accordion__container ${
              idx === activeAccordion ? "active" : ""
            }`}
          >
            <div
              onClick={() => handleAccordionChange(idx)}
              className="Accordion__titleContainer"
            >
              <div className="Accordion__container--title">{d.title}</div>
              <div className="Accordion__container--arrow">
                {idx !== activeAccordion ? "🔽" : "🔼"}
              </div>
            </div>
            {idx === activeAccordion ? (
              <div className="Accordion__container--content">{d.content}</div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};
