import React from "react";

function Child({ showAlert }) {
  return <button onClick={showAlert}>Click Me</button>;
}

export default function Q7ParentChildAlert() {
  const showAlert = () => {
    alert("Hello from Parent!");
  };

  return (
    <div>
      <h2>Parent Child Example</h2>
      <Child showAlert={showAlert} />
    </div>
  );
}
