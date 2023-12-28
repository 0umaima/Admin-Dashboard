import { useState } from 'react';

export const useListOptions = () => {
  const [listClick, setListClick] = useState(false);
  const [listChoice, setListChoice] = useState('This Week');

  const handleListClick = () => {
    setListClick(!listClick);
  };

  const handleListChoice = (choice) => {
    setListChoice(choice);
    setListClick(false);
  };

  const renderChoice = (choice) => {
    return (
      <button className='hover:text-light-gray-1' onClick={() => handleListChoice(choice)}>{choice}</button>
    );
  };

  return {
    listClick,
    listChoice,
    handleListClick,
    renderChoice,
  };
};