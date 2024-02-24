import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setState] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setState((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) {
      setState((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setisOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textcolor="#fff"
              onClick={handlePrevious}
              text="Previous"
            >
              <span>👈</span>Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textcolor="#fff"
              onClick={handleNext}
              text="Next"
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

function Button({ bgColor, textColor, onClick, text, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h1>Step {step}</h1>
      {children}
    </div>
  );
}
