import { create } from "zustand";

interface TimerState {
  isActive: boolean;
  startTime: Date | null;
  startTimer: () => void;
  pauseTimer: () => void;
}

const useTimerStore = create<TimerState>((set) => ({
  isActive: false,
  startTime: null,

  startTimer: () => {
    console.log("Timer started");
    set({ isActive: true, startTime: new Date() });
  },

  pauseTimer: () => {
    set({ isActive: false });
  },
}));

export default useTimerStore;
