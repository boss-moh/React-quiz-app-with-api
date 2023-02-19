import { useState, useEffect } from "react";

function useStorageState(key, init) {
  const [value, setValue] = useState(localStorage.getItem(key) || init);
  useEffect(() => {
    localStorage.setItem(key, value);
    return () => {
      console.log("remove");
      localStorage.removeItem(key);
    };
  }, [value, key]);
  return [value, setValue];
}

export default useStorageState;
