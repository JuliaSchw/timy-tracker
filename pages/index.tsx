import React from "react";
import styled from "styled-components";

const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  gap: 20px;
`;

const HomePage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <TimerSection>
      <h2>Hallo Max Mustermann, heute ist der {currentDate} !</h2>
      <button>Start</button>
      <button>Pause</button>
      <h2>Counter:</h2>
      <button>finish day</button>
    </TimerSection>
  );
};

export default HomePage;
