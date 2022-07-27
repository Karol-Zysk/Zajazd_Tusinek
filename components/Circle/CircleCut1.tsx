import Image from "next/image";

type CircleProps = {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
};

const CircleCut1: React.FC<CircleProps> = ({
  top,
  left,
  bottom,
  right,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <div
      style={{ top, left, bottom, right, backgroundColor, width, height }}
      className="circle_cut_1"
    >
      <Image
        
        alt="wycinanka"
        src={`/images/svg/wycinanka2.svg`}
        layout="fill"
      />
    </div>
  );
};

export default CircleCut1;