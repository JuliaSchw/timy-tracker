import { create } from "zustand";

interface TimerState {
  isActive: boolean;
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  intervalId: NodeJS.Timeout | null; // Hinzugefügtes intervalId-Attribut
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  updateTimer: (newTime: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => void;
}

const useTimerStore = create<TimerState>(
  (
    setState: (
      partial: TimerState | ((state: TimerState) => TimerState)
    ) => void,
    getState: () => TimerState
  ) => ({
    isActive: false,
    time: { hours: 0, minutes: 0, seconds: 0 },
    intervalId: null, // Initialisiert intervalId mit null

    startTimer: () => {
      const intervalId = setInterval(() => {
        // Funktion zum Aktualisieren der Timerzeit aufrufen
        const { hours, minutes, seconds } = getState().time;
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
        let newHours = hours;
        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes++;
        }
        if (newMinutes === 60) {
          newMinutes = 0;
          newHours++;
        }
        setState((prevState) => ({
          ...prevState,
          time: {
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          },
        }));
      }, 1000);

      setState((prevState) => ({
        ...prevState,
        isActive: true,
        intervalId: intervalId, // Setzen des intervalId-Attributs
      }));
    },

    pauseTimer: () => {
      const intervalId = getState().intervalId;
      if (intervalId) clearInterval(intervalId);
      setState((prevState) => ({
        ...prevState,
        isActive: false,
        intervalId: null, // Zurücksetzen von intervalId auf null
      }));
    },

    resetTimer: () => {
      const intervalId = getState().intervalId;
      if (intervalId) clearInterval(intervalId);
      setState((prevState) => ({
        ...prevState,
        isActive: false,
        time: { hours: 0, minutes: 0, seconds: 0 },
        intervalId: null, // Zurücksetzen von intervalId auf null
      }));
    },

    updateTimer: (newTime) =>
      setState((prevState) => ({
        ...prevState,
        time: newTime,
      })),
  })
);

export default useTimerStore;
