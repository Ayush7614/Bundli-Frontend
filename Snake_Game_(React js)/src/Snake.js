import React from 'react';

const Snake = (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className="snake-dot" key={i} style={style}></div>
        )
      })}
    </div>
  )
};

export default Snake;