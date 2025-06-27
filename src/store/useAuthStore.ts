import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  user: IUser | null;
};

type Actions = {
  login: (user: ILoginResponse) => void;
  logout: () => void;
};

export const useAuth = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      login: (data: ILoginResponse) => {
        set({ user: data.user });
        localStorage.setItem("token", data.token);
      },
      logout: () => {
        set({ user: null });
        localStorage.removeItem("token");
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
