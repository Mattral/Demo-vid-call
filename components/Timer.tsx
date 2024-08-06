// Timer.tsx
import React, { useEffect, useState } from 'react';

const Timer = ({ onAlert }: { onAlert: () => void }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    const alertIntervalId = setInterval(() => {
      onAlert();
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(alertIntervalId);
    };
  }, [onAlert]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="absolute top-4 left-4 text-xl font-bold">
      {formatTime(elapsedTime)}
    </div>
  );
};

export default Timer;
