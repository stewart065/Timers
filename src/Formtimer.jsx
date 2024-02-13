import React, { useState } from 'react';

const Formtimer = ({ onSubmit }) => {
  const [Countdown, setCountdown] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Countdown.trim() !== '') {
      onSubmit(parseInt(Countdown));
      setCountdown('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Items</label>
        <input
          type="number"
          value={Countdown}
          onChange={(e) => setCountdown(e.target.value)}
          id="item"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default Formtimer;
