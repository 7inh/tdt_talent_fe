import { useCallback, useEffect } from "react";
import usePositionList from "../hooks/usePositionList";

declare global {
  interface Window {
    refreshSelect(): void;
  }
}

export function PositionItem({ id, title, description }: any) {
  return <option>{title}</option>;
}

export default function PositionList() {
  const positions = usePositionList();

  const displayPosition = useCallback(() => {
    return (
      <>
        {positions.map((position: any, i: number) => {
          return (
            <PositionItem
              key={i}
              id={position.id}
              title={position.title}
              description={position.description}
            />
          );
        })}
      </>
    );
  }, [positions]);

  useEffect(() => {
    console.log("should render", positions);
    window.refreshSelect();
  }, [positions]);

  return (
    <>
      <label>job position</label>
      <select>{displayPosition()}</select>
    </>
  );
}
