import { useState } from "react";

export const useInput = (initValue, validateFunc) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validateFunc === "function") {
      willUpdate = validateFunc(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};
