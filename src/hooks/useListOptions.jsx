import { useState, useEffect  } from 'react';

export const useListOptions = (initialChoices) => {
  const [choices, setChoices] = useState(initialChoices);
  const [listChoice, setListChoice] = useState(choices[0]);
  useEffect(() => {
    setChoices(initialChoices);
    setListChoice(initialChoices[0]);
  }, [initialChoices]);


  const handleListChoice = (choice) => {
    setListChoice(choice);
  };

  const renderChoice = (choice) => {
    return (
      <button 
      key={choice}
      className='hover:text-light-gray-1 font-inter' onClick={() => handleListChoice(choice)}>{choice}</button>
    );
  };

  return {
    listChoice,
    renderChoice,
  };
};