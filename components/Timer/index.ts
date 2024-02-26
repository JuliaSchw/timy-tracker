import { create } from "zustand";

interface TimerState {
  isActive: boolean;
  time: { hours: number; minutes: number; seconds: number };
  intervalId: NodeJS.Timeout | null;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  updateTimer: (newTime: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => void;
}

const useTimerStore = create<TimerState>((set, get) => ({
  isActive: false,
  time: { hours: 0, minutes: 0, seconds: 0 },
  intervalId: null,

  startTimer: () => {
    if (get().intervalId) return; // Verhindere das Erstellen mehrerer Intervalle

    const intervalId = setInterval(() => {
      const { hours, minutes, seconds } = get().time;
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
      const newTime = {
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      };
      set({ time: newTime });
      localStorage.setItem("timerTime", JSON.stringify(newTime));
    }, 1000);

    set({ isActive: true, intervalId });
    localStorage.setItem("timerIsActive", "true");
  },

  pauseTimer: () => {
    const intervalId = get().intervalId;
    if (intervalId) clearInterval(intervalId);
    set({ isActive: false, intervalId: null });
    localStorage.setItem("timerIsActive", "false");
  },

  resetTimer: () => {
    const intervalId = get().intervalId;
    if (intervalId) clearInterval(intervalId);
    const resetTime = { hours: 0, minutes: 0, seconds: 0 };
    set({ isActive: false, time: resetTime, intervalId: null });
    localStorage.setItem("timerTime", JSON.stringify(resetTime));
    localStorage.setItem("timerIsActive", "false");
  },

  updateTimer: (newTime) => {
    set({ time: newTime });
    localStorage.setItem("timerTime", JSON.stringify(newTime));
  },
}));

export default useTimerStore;
