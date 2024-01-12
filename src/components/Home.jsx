import React, { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the speed of the typewriter effect by changing the interval time

    return () => clearInterval(intervalId);
  }, [text, currentIndex]);

  return <p className="Hero-para">{displayText}</p>;
};

// Your main component
const YourComponent = () => {
  const [cards, setCards] = useState([
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    // Add more cards as needed
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextClick, 3000); // Adjust the interval time (milliseconds) for automatic sliding

    return () => clearInterval(intervalId);
  }, [cards.length]);
  return (
    <>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-12 pt-5">
            <h1 className="Hero-head">TEDX</h1>
            <Typewriter text="Learn | Unlearn | Relearn | Master | Share" />
            <button className="Hero-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourComponent;
