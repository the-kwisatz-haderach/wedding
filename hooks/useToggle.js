import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = useCallback(() => {
    setValue((curr) => !curr);
  }, []);
  return [value, toggleValue];
};

export default useToggle;
