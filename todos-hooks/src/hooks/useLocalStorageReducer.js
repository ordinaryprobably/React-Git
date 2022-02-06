import { useEffect, useReducer } from "react";

// useReducer 는 useState 의 대체 Hook 이다.

export function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;

    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    }
    catch(error) {
      value = defaultVal;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}