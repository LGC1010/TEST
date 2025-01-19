import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (token) => {
    localStorage.setItem('accessToken', token);
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('accessToken');
    set({ isAuthenticated: false });
  }
}));
