import React, { useState, useEffect } from 'react';

const ChangingTextComponent = () => {
    const [displayText, setDisplayText] = useState('Happy Birthday');
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Update the text here
        setDisplayText(generateRandomText()); // Example: You can replace generateRandomText() with your logic
      }, 1000); // Interval set to 1000ms (1 second)
  
      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs only once after initial render
  
    // Example function to generate new text (can be any logic you want)
    const generateRandomText = () => {
      const texts = ['Happy Birthday', 'జన్మదినా శుభాకాంక్షలు', 'ಜನ್ಮದಿನ ಶುಭಾಶಯಗಳು', 'जन्मदिनको शुभकामना','Feliz cumpleaños','Joyeux anniversaire','Buon compleanno','Feliz aniversário','生日快乐','عيد ميلاد سعيد','С днем рождения']; // Example array of texts
      const randomIndex = Math.floor(Math.random() * texts.length);
      return texts[randomIndex];
    };
  
    return (
      <div>
        <p>{displayText}</p>
      </div>
    );
  };
  
  export default ChangingTextComponent;