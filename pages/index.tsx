import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import useTimerStore from "@/stores/useTimerStore";
import TimerSection from "@/components/TimerSection";
import axios from "axios";

const HomePage: React.FC = () => {
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const { isActive, startTimer, pauseTimer, startTime } = useTimerStore();
  const [elapsedTime, setElapsedTime] = useState("00:00:00");

  useEffect(() => {
    let interval: number | undefined;
    if (isActive && startTime) {
      interval = window.setInterval(() => {
        const now = new Date();
        const elapsed = now.getTime() - startTime.getTime();
        const hours = Math.floor(elapsed / 3600000);
        const minutes = Math.floor((elapsed % 3600000) / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        setElapsedTime(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }, 1000);
    } else {
      setElapsedTime("00:00:00");
    }
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  const handleStartButtonClick = async () => {
    console.log("Start button clicked")
    startTimer(); 
    await axios.post("/api/timer/start"); 
  };

  return (
    <TimerSection>
      <h2>Hallo Max Mustermann, heute ist der {formatDate(new Date())}!</h2>
      <button onClick={isActive ? pauseTimer : handleStartButtonClick}>
        {isActive ? "Pause" : "Start"}
      </button>
      <h2>Counter: {elapsedTime}</h2>
    </TimerSection>
  );
};

export default HomePage;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
