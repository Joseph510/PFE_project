import React from 'react';

function ButtonList(props) {
  const { buttons, handleClick } = props;

  return (
    <div>
      {buttons.map(button => (
        <button key={button.id} onClick={() => handleClick(button.id)}>
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
