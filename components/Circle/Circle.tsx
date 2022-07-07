type CircleProps = {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  backgroundColor?: string;
};

const Circle: React.FC<CircleProps> = ({
  top,
  left,
  bottom,
  right,
  backgroundColor,
}) => {
  return (
    <div
      style={{ top, left, bottom, right, backgroundColor }}
      className="circle"
    />
  );
};

export default Circle;
