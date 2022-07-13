type CircleProps = {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  backgroundColor?: string;
  width?: string,
  height?: string
};

const Circle: React.FC<CircleProps> = ({
  top,
  left,
  bottom,
  right,
  backgroundColor,
  width,
  height
}) => {
  return (
    <div
      style={{ top, left, bottom, right, backgroundColor, width, height }}
      className="circle"
    />
  );
};

export default Circle;
