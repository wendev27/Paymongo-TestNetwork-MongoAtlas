"use client";

import { useEffect, useState } from "react";

type User = {
  userId: string;
  name: string;
  token: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("auth");
      }
    }
  }, []);

  const login = (data: User) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
  };

  return { user, login, logout };
}
