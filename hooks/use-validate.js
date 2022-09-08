import { useState } from "react";
const useValidate = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const hasError = !enteredValueIsValid && inputIsTouched;

  const valueChangeHandeler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueTouchHandeler = () => {
    setInputIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setInputIsTouched(false);
  };
  return {
    value: enteredValue,
    error: hasError,
    inputIsValid: enteredValueIsValid,
    isTouched: inputIsTouched,
    valueChangeHandeler,
    valueTouchHandeler,
    reset,
  };
};
export default useValidate;
