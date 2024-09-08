import { useEffect, useRef } from "react";

function ValueDisplay({ value }) {
  const previousValueRef = useRef();
  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);
  return (
    <div>
      <h2>Текущее значение:</h2>
      <p>{value}</p>
      <h2>Предыдущее значение:</h2>
      <p>{previousValueRef.current || "Нет предыдущего значения"}</p>
    </div>
  );
}

export default ValueDisplay;
