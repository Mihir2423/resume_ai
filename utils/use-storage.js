import { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        setValue(JSON.parse(storedValue));
      }
    }
  }, [key]);

  return value;
};
