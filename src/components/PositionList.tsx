import { useCallback, useEffect } from "react";
import usePositionList from "../hooks/usePositionList";

export function PositionItem({ id, title, description }: any) {
  return <option value={id}>{title}</option>;
}

export default function PositionList({refValue} : any) {
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
    window.refreshSelect();
  }, [positions]);

  return (
    <>
      <label>job position</label>
      <select className="react-select" ref={refValue} onChange={() => alert("select")}>{displayPosition()}</select>
    </>
  );
}
