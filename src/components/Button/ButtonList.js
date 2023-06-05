import React from 'react';
import ButtonList from './ButtonList';

function MyComponent() {
  const buttons = [
    { id: 1, label: 'Button 1' },
    { id: 2, label: 'Button 2' },
    { id: 3, label: 'Button 3' },
  ];

  function handleClick(id) {
    console.log(`Button ${id} clicked`);
  }

  return (
    <div>
      <h2>Button List</h2>
      <ButtonList buttons={buttons} handleClick={handleClick} />
    </div>
  );
}

export default MyComponent;



