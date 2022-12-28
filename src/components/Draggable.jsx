import { useState } from "react";

const Draggable = ({ resizableRef }) => {
  const [initialPos, setInitialPos] = useState(null);
  const [initialSize, setInitialSize] = useState(null);

  const handleDragStart = (e) => {
    if (resizableRef?.current) {
      setInitialPos(e.clientX);
      setInitialSize(resizableRef.current.offsetWidth);
    }
  };

  const handleDrag = (e) => {
    if (resizableRef?.current) {
      resizableRef.current.style.width = `${
        parseInt(initialSize) + parseInt(e.clientX - initialPos)
      }px`;
      resizableRef.current.style.minWidth = `${
        parseInt(initialSize) + parseInt(e.clientX - initialPos)
      }px`;
      resizableRef.current.style.maxWidth = `${
        parseInt(initialSize) + parseInt(e.clientX - initialPos)
      }px`;
    }
  };
  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDrag}
    />
  );
};

export default Draggable;
