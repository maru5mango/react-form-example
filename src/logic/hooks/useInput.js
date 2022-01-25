import { useState, useRef } from "react";

const useInput = ({ init, validation, _default }) => {
  const [value, setValue] = useState(init);
  const [state, setState] = useState(false);
  const ref = useRef(null);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
    setState(validation(value));
  };

  const reset = () => {
    setValue("");
    setState(false);
  };

  return {
    attr: {
      value,
      onChange,
      ..._default,
      ref,
    },
    state,
    reset,
  };
};

export default useInput;
