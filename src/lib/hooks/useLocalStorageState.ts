"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

/**
 * Custom hook that mimics useState but persists the state to localStorage.
 * Handles SSR gracefully by only accessing localStorage on the client-side.
 *
 * @param key The key to use in localStorage.
 * @param initialValue The initial value to use if nothing is found in localStorage or during SSR.
 * @returns A stateful value, and a function to update it.
 */
function useLocalStorageState<T>(
  key: string,
  initialValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const initial =
      typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;
    return initial;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = window.localStorage.getItem(key);
        if (storedValue !== null) {
          setState(JSON.parse(storedValue));
        }
      } catch (error) {
        console.error(`Error reading localStorage key “${key}”:`, error);
      }
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (state === undefined) {
          window.localStorage.removeItem(key);
        } else {
          window.localStorage.setItem(key, JSON.stringify(state));
        }
      } catch (error) {
        console.error(`Error writing localStorage key “${key}”:`, error);
      }
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
