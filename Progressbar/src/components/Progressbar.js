import { useEffect, useState } from "react";

export default ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <div className="progressbar__container">
      <div
        className="progressbar__container--bar "
        style={{
          //   width: `${progress ? progress : 0}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
        }}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {animatedProgress && animatedProgress + "%"}
      </div>
    </div>
  );
};
