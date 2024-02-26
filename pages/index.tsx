import React, { useEffect } from "react";
import styled from "styled-components";
import useTimerStore from "../components/Timer";

const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  gap: 20px;
`;

const HomePage: React.FC = () => {
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const { isActive, time, startTimer, pauseTimer, resetTimer } =
    useTimerStore();

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        // Hier wird die Zeit aktualisiert
        const newSeconds = time.seconds + 1;
        if (newSeconds === 60) {
          resetTimer();
        } else {
          startTimer();
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isActive, time.seconds, startTimer, resetTimer]);

  const formatTime = (time: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    const { hours, minutes, seconds } = time;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <TimerSection>
      <h2>Hallo Max Mustermann, heute ist der {formatDate(new Date())} !</h2>
      <button onClick={isActive ? pauseTimer : startTimer}>
        {isActive ? "Pause" : "Start"}
      </button>
      <h2>Counter: {formatTime(time)}</h2>
      <button onClick={resetTimer}>Reset</button>
    </TimerSection>
  );
};

export default HomePage;
