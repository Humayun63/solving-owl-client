import React, { useState } from 'react';

const LongText = ({  maxWords }) => {
  const [showFullText, setShowFullText] = useState(false);
  const text = "Welcome to Solving Owl, your go-to destination for mastering JavaScript problem solving. Whether you're a novice coder or a seasoned developer, our website is designed to challenge and enhance your JavaScript skills. With a wide range of coding challenges, puzzles, and exercises, Solving Owl provides an interactive and engaging platform for you to hone your problem-solving abilities. Our carefully curated content covers various topics, from basic algorithms to complex data structures, enabling you to strengthen your coding prowess at your own pace. Join the Solving Owl community today, and embark on a journey of continuous learning and growth in the world of JavaScript problem solving. Get ready to spread your coding wings and soar high as a proficient problem-solving owl!"

  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };

  // Split the text into words and take only the first 'maxWords' words
  const words = text.split(' ').slice(0, maxWords);

  return (
    <div>
      {words.join(' ')}
      {words.length < text.split(' ').length && (
        <button className="ms-4 text-[#A2F740]" onClick={toggleText}>
          {showFullText ? '' : 'See More'}
        </button>
      )}
      {showFullText && <span>{text.split(' ').slice(maxWords).join(' ')}</span>}
    </div>
  );
};

export default LongText;
