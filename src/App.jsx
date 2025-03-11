import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [position, setPosition] = useState(400);
  const [maxScore, setMaxScore] = useState(0);
  const score = Math.max(0, Math.min(2000, Math.round(2000 - position * 5)));
  const fallSpeed = 1 + score / 470;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => Math.min(400, prev + fallSpeed));
    }, 50);
    return () => clearInterval(interval);
  }, [fallSpeed]);

  useEffect(() => {
    if (score > maxScore) {
      setMaxScore(score);
    }
  }, [score]);

  const calculateRiseAmount = (currentPosition) => {
    const minRise = 5;
    const maxRise = 25;
    const maxPosition = 400;
    return minRise + (maxRise - minRise) * (currentPosition / maxPosition);
  };

  const handleClick = () => {
    setPosition(prev => Math.max(0, prev - calculateRiseAmount(prev)));
  };

  return (
    <div className="game-container" onClick={handleClick}>
      <p><b>Maximum Score:</b> {maxScore}</p>
      <motion.div
        initial={{ zIndex: 1 }}
        animate={{ y: position }}
        transition={{ type: "spring", stiffness: 100 }}
        className="excavator"
      >
        <h1>{score}</h1>
      </motion.div>
    </div>
  );
}

export default App;
