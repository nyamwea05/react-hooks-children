import React from "react";

function Container(props) {
  const {
    direction = 'row',
    header = '',
    textPosition = 'left',
    contentPosition = 'center',
    children
  } = props;

  return (
    <div className={`container ${direction}`}>
      <h1 className={`header ${textPosition}`}>{header}</h1>
      <div className={`content ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}
export default Container;
