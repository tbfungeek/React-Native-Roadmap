import { useState } from "react";
export function UseStateComponent(props) {
  const [buttonText, setButtonText] = useState("Please Click me !");
  function handleClick() {
    setButtonText("Button Clicked");
  }
  return <button onClick={handleClick}>{buttonText}</button>;
}
