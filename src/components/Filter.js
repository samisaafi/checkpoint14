import React from 'react';
import './Filter.css';

function Filter(props) {
  const { onTitleChange, onRatingChange } = props;

  function handleTitleChange(event) {
    const value = event.target.value;
    onTitleChange(value);
  }

  function handleRatingChange(event) {
    const value = event.target.value;
    onRatingChange(value);
  }

  return (
    <div className="filter">
      <label htmlFor="title-filter">Title:</label>
      <input type="text" id="title-filter" onChange={handleTitleChange} />

      <label htmlFor="rating-filter">Rating:</label>
      <input type="number" id="rating-filter" min="0" max="10" step="0.1" onChange={handleRatingChange} />
    </div>
  );
}

export default Filter;
