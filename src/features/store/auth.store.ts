
import { create } from "zustand";
import { AuthUser } from "../models/AuthUser";

type State = {
  user: AuthUser | null;
  accessToken: string | null,
  refreshtoken: string | null
}

type Actions = {
  login: (auth: AuthUser) => void;
  logout: () => void;
  isLoggedIn : () => boolean
}

const AUTH_KEY = '@AUTH';

export const useAuthStore = create<State & Actions>((set, get) => ({
  user: null,
  accessToken: null,
  refreshtoken: null,

  login: (user: AuthUser) => {
    set({ user })
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  },

  logout: () => {
    set({ user: null });
    localStorage.removeItem(AUTH_KEY);
  },

  isLoggedIn: () => {
    return true;
    return !!get().user;
  }
}));