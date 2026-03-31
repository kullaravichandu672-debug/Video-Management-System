import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,

  login: (userData) => set({ user: userData }),

  logout: () => set({ user: null }),

  // ✅ ADD THIS
  fetchUser: async () => {
    try {
      // dummy for now
      set({ user: null });
    } catch (error) {
      console.log(error);
    }
  },
}));