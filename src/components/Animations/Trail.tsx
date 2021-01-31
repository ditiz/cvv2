import React from "react";
import { animated, useTrail } from "react-spring";
import "./Trail.css";

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail = ({ open, children, ...props }: TrailProps) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? "auto" : 0,
    from: { opacity: 0, x: 200, height: 0 },
  });

  return (
    <div className="" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className=""
            style={{
              ...rest,
              transform: (x as any).interpolate(
                (x: unknown) => `translate3d(0,${x}px,0)`
              ),
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Trail;
