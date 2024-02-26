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

  const {
    isActive,
    time,
    startTimer,
    pauseTimer,
    resetTimer,
    updateTimer, // Stelle sicher, dass du diese Funktion jetzt importierst
  } = useTimerStore();

  useEffect(() => {
    // Versuche, gespeicherte Zeit und Status zu laden
    const savedTime = localStorage.getItem("timerTime");
    const savedIsActive = localStorage.getItem("timerIsActive");

    if (savedTime) {
      const time = JSON.parse(savedTime);
      updateTimer(time); // Setze die Zeit aus dem localStorage
    }

    if (savedIsActive === "true") {
      // Nur starten, wenn der Timer aktiv war
      startTimer();
    }
  }, [startTimer, updateTimer]);

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
