import { Questions } from "./AccData";
import { useState } from "react";

export function Accordion() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>

      <div className="faq-title-container">
          <h1 className="faq-title" id="faq">FAQs</h1>
      </div>
        {Questions.map((question, index) => (

          <div>
              <div className="acc-container">
                  <div
                      className="a-container"
                      key={question.id}
                      onClick={() => setIsActive(isActive === index ? false : index)}
                      >
                  <div className="q-container">
                      <h2 className="q-title">{question.title}</h2>
                  </div>
                  {isActive === index && (
                      <p className="a-content">{question.description}</p>
                  )}
                  </div>
              </div>
          </div>

      ))}
    </>
  );
}

export default Accordion;